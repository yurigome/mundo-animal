import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { CATEGORIES, getCategory, SITE } from "@/lib/site";
import { CategoryCircle } from "@/components/CategoryIcon";

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    const c = getCategory(params.slug);
    if (!c) throw notFound();
    return { slug: c.slug };
  },
  head: ({ loaderData }) => {
    const c = loaderData ? getCategory(loaderData.slug) : undefined;
    const title = c ? `${c.name} — Mundo Animal` : "Categoria não encontrada — Mundo Animal";
    const desc = c ? `${c.tagline} Pet shop Mundo Animal em Itaipu, Niterói.` : "Categoria não encontrada.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { slug } = Route.useLoaderData();
  const c = getCategory(slug)!;
  return (
    <>
      <section className="bg-hero-split">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-primary-foreground md:flex-row">
          <CategoryCircle c={c} />
          <div>
            <h1 className="text-4xl font-extrabold md:text-5xl">{c.name}</h1>
            <p className="mt-2 max-w-xl text-lg opacity-90">{c.tagline}</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-extrabold text-primary-deep">O que você encontra</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.items.map((i) => (
            <div key={i} className="flex items-center gap-3 rounded-2xl border bg-card p-5 shadow-[var(--shadow-soft)]">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-highlight text-highlight-foreground"><Check className="h-5 w-5" /></span>
              <span className="font-semibold">{i}</span>
            </div>
          ))}
        </div>
        <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground transition hover:-translate-y-0.5">
          <MessageCircle className="h-5 w-5" /> Consultar disponibilidade
        </a>
        <div className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-primary-deep">Outras categorias</h2>
          <div className="flex flex-wrap gap-6">
            {CATEGORIES.filter((o) => o.slug !== c.slug).map((o) => (
              <Link key={o.slug} to="/categoria/$slug" params={{ slug: o.slug }} className="group flex flex-col items-center gap-2">
                <CategoryCircle c={o} size="sm" />
                <span className="text-sm font-bold">{o.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
