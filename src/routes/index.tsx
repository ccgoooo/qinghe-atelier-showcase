import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Placeholder, meta } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: meta("Qinghe Atelier — Handmade Goods", "Qinghe Atelier is a fictional small studio making quiet, handmade objects for everyday life.") }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Small-batch studio</p>
          <h1 className="mt-4 font-display text-5xl leading-tight">Quiet objects, made slowly.</h1>
          <p className="mt-5 text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
          <Link to="/products" className="mt-8 inline-block rounded-md bg-primary px-5 py-3 text-sm text-primary-foreground hover:bg-primary/90">View products</Link>
        </div>
        <Placeholder label="Hero image" className="aspect-[4/5]" />
      </section>
      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 sm:grid-cols-3">
        {["Crafted by hand", "Natural materials", "Made to last"].map((t) => (
          <div key={t} className="border-t border-border pt-4">
            <h2 className="font-display text-xl">{t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">Placeholder text describing this value in a sentence or two.</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
