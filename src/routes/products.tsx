import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Placeholder, meta } from "@/components/site";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: meta("Products — Qinghe Atelier", "Browse placeholder products from Qinghe Atelier: ceramics, textiles, and small goods for the home.") }),
  component: Products,
});

const items = ["Ceramic Cup", "Linen Cloth", "Wooden Tray", "Clay Vase", "Cotton Pouch", "Incense Holder"];

function Products() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="font-display text-5xl">Products</h1>
        <p className="mt-4 text-muted-foreground">Display only — no purchases are possible on this site.</p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((name) => (
            <article key={name}>
              <Placeholder label={name} className="aspect-square" />
              <h2 className="mt-3 font-display text-xl">{name}</h2>
              <p className="text-sm text-muted-foreground">Placeholder description.</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
