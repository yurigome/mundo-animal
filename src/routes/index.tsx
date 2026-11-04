import { createFileRoute, Link } from "@tanstack/react-router";
import { Bone, MessageCircle, PawPrint, Phone, ShieldCheck, Truck, Store } from "lucide-react";
import heroPets from "@/assets/hero-pets.png";
import { CATEGORIES, SITE } from "@/lib/site";
import { CategoryCircle } from "@/components/CategoryIcon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mundo Animal — Pet shop em Itaipu, Niterói" },
      { name: "description", content: "Rações, produtos para cães, gatos, pássaros e coelhos, gaiolas e medicamentos veterinários. Entrega em domicílio em Itaipu, Niterói." },
      { property: "og:title", content: "Mundo Animal — Pet shop em Itaipu, Niterói" },
      { property: "og:description", content: "Rações, acessórios e medicamentos veterinários com entrega em domicílio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-split">
        <PawPrint className="float-slow absolute left-[48%] top-10 h-10 w-10 text-primary-foreground/40" />
        <Bone className="float-slow absolute left-[8%] bottom-10 h-10 w-10 text-primary-foreground/30" />
        <PawPrint className="float-slow absolute right-8 top-14 h-12 w-12 text-primary/30" />
        <Bone className="float-slow absolute right-[30%] bottom-8 h-9 w-9 text-primary/30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-4 pt-12 md:grid-cols-2 md:pt-0">
          <div className="animate-in fade-in slide-in-from-left-6 duration-700 text-primary-foreground md:py-20">
            <span className="inline-flex items-center gap-2 rounded-full bg-highlight px-4 py-1 text-sm font-bold text-highlight-foreground">
              <Truck className="h-4 w-4" /> Entrega em domicílio
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] md:text-6xl">
              Tudo para quem <br /> faz parte da família
            </h1>
            <p className="mt-4 max-w-md text-lg opacity-90">
              Rações, acessórios, gaiolas e medicamentos veterinários para cães, gatos, pássaros e coelhos — aqui em Itaipu.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 font-bold text-primary shadow-lg transition hover:-translate-y-0.5">
                <MessageCircle className="h-5 w-5" /> Pedir pelo WhatsApp
              </a>
              <a href={`tel:+552126090766`} className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/70 px-6 py-3 font-bold transition hover:bg-primary-foreground/10">
                <Phone className="h-5 w-5" /> {SITE.phone}
              </a>
            </div>
          </div>
          <img src={heroPets} alt="Cachorro e gato juntos" width={1024} height={1024} className="animate-in fade-in zoom-in-95 duration-700 mx-auto w-full max-w-lg self-end drop-shadow-2xl" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-extrabold text-primary-deep md:text-4xl">Compre por tipo de pet</h2>
          <Link to="/contato" className="text-sm font-bold text-primary underline underline-offset-4">Fale conosco</Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} to="/categoria/$slug" params={{ slug: c.slug }} className="group flex flex-col items-center gap-4">
              <CategoryCircle c={c} />
              <span className="font-display text-lg font-bold">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-3">
        {[
          { icon: Truck, t: "Entrega em domicílio", d: "Peça pelo WhatsApp e receba em casa." },
          { icon: ShieldCheck, t: "Medicamentos veterinários", d: "Antipulgas, vermífugos e vitaminas." },
          { icon: Store, t: "Loja física em Itaipu", d: "Av. Central Ewerton Xavier, Niterói." },
        ].map(({ icon: Icon, t, d }) => (
          <div key={t} className="flex items-start gap-4 rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-highlight text-highlight-foreground"><Icon className="h-6 w-6" /></span>
            <div>
              <h3 className="text-lg font-bold text-primary-deep">{t}</h3>
              <p className="text-sm text-muted-foreground">{d}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-primary px-8 py-10 text-primary-foreground md:flex-row">
          <div>
            <h2 className="text-3xl font-extrabold">Precisa de ração hoje?</h2>
            <p className="opacity-90">Chame no WhatsApp e a gente leva até você.</p>
          </div>
          <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-highlight px-7 py-3 font-bold text-highlight-foreground transition hover:scale-105">
            <MessageCircle className="h-5 w-5" /> {SITE.mobile}
          </a>
        </div>
      </section>
    </>
  );
}
