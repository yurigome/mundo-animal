import { Link, useNavigate } from "@tanstack/react-router";
import { MapPin, MessageCircle, PawPrint, Search, Truck } from "lucide-react";
import { useState } from "react";
import { CATEGORIES, SITE } from "@/lib/site";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 text-primary-foreground">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-highlight text-highlight-foreground">
        <PawPrint className="h-6 w-6" />
      </span>
      <span className="font-display text-2xl font-extrabold leading-none tracking-tight">
        Mundo <span className="text-highlight">Animal</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const term = q.trim().toLowerCase();
    if (!term) return;
    const match = CATEGORIES.find(
      (c) =>
        c.name.toLowerCase().includes(term) ||
        c.items.some((i) => i.toLowerCase().includes(term)),
    );
    if (match) navigate({ to: "/categoria/$slug", params: { slug: match.slug } });
    else if (/(contato|telefone|endere|whats)/.test(term)) navigate({ to: "/contato" });
    else navigate({ to: "/categoria/$slug", params: { slug: "acessorios" } });
  };

  return (
    <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-4 md:flex-nowrap md:gap-8">
        <Logo />
        <form onSubmit={onSearch} className="order-3 w-full md:order-none md:flex-1">
          <label className="relative block">
            <span className="sr-only">Pesquisar</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar ração, gaiola, antipulgas..."
              className="w-full rounded-full bg-card py-3 pl-5 pr-12 text-sm text-foreground outline-none ring-highlight transition focus:ring-4"
            />
            <button type="submit" aria-label="Buscar" className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-highlight text-highlight-foreground">
              <Search className="h-4 w-4" />
            </button>
          </label>
        </form>
        <div className="ml-auto flex items-center gap-5 md:ml-0">
          <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-highlight">
            <MessageCircle className="h-6 w-6" />
            <span className="hidden text-sm leading-tight lg:block">
              <span className="block opacity-80">WhatsApp</span>
              <strong>{SITE.mobile}</strong>
            </span>
          </a>
          <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" aria-label="Localização" className="flex flex-col items-center text-xs transition hover:text-highlight">
            <MapPin className="h-6 w-6" />
            <span className="hidden sm:block">Itaipu</span>
          </a>
        </div>
      </div>
      <nav className="border-t border-primary-foreground/15 bg-primary-deep">
        <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 text-sm font-bold">
          <li>
            <Link to="/" activeOptions={{ exact: true }} className="block whitespace-nowrap px-3 py-3 transition hover:text-highlight" activeProps={{ className: "text-highlight" }}>Início</Link>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <Link to="/categoria/$slug" params={{ slug: c.slug }} className="block whitespace-nowrap px-3 py-3 transition hover:text-highlight" activeProps={{ className: "text-highlight" }}>{c.name}</Link>
            </li>
          ))}
          <li>
            <Link to="/contato" className="block whitespace-nowrap px-3 py-3 transition hover:text-highlight" activeProps={{ className: "text-highlight" }}>Contato</Link>
          </li>
        </ul>
      </nav>
      <div className="bg-highlight text-highlight-foreground">
        <p className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-sm font-semibold">
          <Truck className="h-4 w-4" /> Entrega em domicílio em Itaipu e região
          <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className="ml-2 rounded-full bg-primary px-3 py-0.5 text-xs text-primary-foreground">Pedir agora</a>
        </p>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <Logo />
          <p className="text-sm opacity-80">Rações, acessórios e medicamentos veterinários em Itaipu, Niterói.</p>
        </div>
        <div className="text-sm">
          <h3 className="mb-2 text-lg font-bold text-highlight">Endereço</h3>
          <p className="opacity-90">{SITE.address}</p>
        </div>
        <div className="text-sm">
          <h3 className="mb-2 text-lg font-bold text-highlight">Telefones</h3>
          <p>WhatsApp: {SITE.mobile}</p>
          <p>Fixo: {SITE.phone}</p>
        </div>
      </div>
      <p className="border-t border-primary-foreground/15 py-4 text-center text-xs opacity-70">© {new Date().getFullYear()} Mundo Animal</p>
    </footer>
  );
}
