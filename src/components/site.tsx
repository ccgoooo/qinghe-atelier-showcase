import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link to="/" className="font-display text-2xl tracking-wide">Qinghe Atelier</Link>
          <nav className="flex gap-6 text-sm">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
                className="text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground underline underline-offset-8" }}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © Qinghe Atelier — a fictional brand. All content is placeholder.
      </footer>
    </div>
  );
}

export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div role="img" aria-label={`Placeholder image: ${label}`}
      className={`flex items-center justify-center rounded-md bg-secondary text-sm text-muted-foreground ${className}`}>
      {label}
    </div>
  );
}

export const meta = (title: string, description: string) => [
  { title },
  { name: "description", content: description },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary" },
];
