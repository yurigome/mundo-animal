import { Pill, Package } from "lucide-react";
import type { Category } from "@/lib/site";

export function CategoryCircle({ c, size = "lg" }: { c: Category; size?: "lg" | "sm" }) {
  const dim = size === "lg" ? "h-36 w-36 md:h-40 md:w-40" : "h-24 w-24";
  return (
    <span className={`relative grid ${dim} place-items-center overflow-hidden rounded-full border-4 border-highlight bg-card shadow-[var(--shadow-ring)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-soft)]`}>
      {c.image ? (
        <img src={c.image} alt={c.name} loading="lazy" width={816} height={816} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
      ) : c.slug === "medicamentos" ? (
        <Pill className="h-1/2 w-1/2 text-primary" />
      ) : (
        <Package className="h-1/2 w-1/2 text-primary" />
      )}
    </span>
  );
}
