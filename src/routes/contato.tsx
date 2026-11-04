import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone, Truck } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Mundo Animal Itaipu" },
      { name: "description", content: "Endereço, telefones e WhatsApp da Mundo Animal em Itaipu, Niterói. Entrega em domicílio." },
      { property: "og:title", content: "Contato — Mundo Animal Itaipu" },
      { property: "og:description", content: "Fale com a Mundo Animal pelo WhatsApp ou telefone." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const cards = [
    { icon: MessageCircle, t: "WhatsApp", d: SITE.mobile, href: SITE.whatsappUrl },
    { icon: Phone, t: "Telefone fixo", d: SITE.phone, href: "tel:+552126090766" },
    { icon: MapPin, t: "Endereço", d: SITE.address, href: SITE.mapsUrl },
    { icon: Truck, t: "Entrega em domicílio", d: "Faça seu pedido pelo WhatsApp", href: SITE.whatsappUrl },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <h1 className="text-4xl font-extrabold text-primary-deep md:text-5xl">Fale com a gente</h1>
      <p className="mt-2 text-muted-foreground">Estamos em Itaipu, Niterói — passe na loja ou chame no WhatsApp.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {cards.map(({ icon: Icon, t, d, href }) => (
          <a key={t} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground"><Icon className="h-7 w-7" /></span>
            <div>
              <h2 className="text-lg font-bold text-primary-deep">{t}</h2>
              <p className="text-muted-foreground">{d}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-10 overflow-hidden rounded-3xl border shadow-[var(--shadow-soft)]">
        <iframe
          title="Mapa Mundo Animal"
          src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
          className="h-96 w-full"
          loading="lazy"
        />
      </div>
    </section>
  );
}
