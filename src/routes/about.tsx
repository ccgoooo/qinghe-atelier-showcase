import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Placeholder, meta } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: meta("About — Qinghe Atelier", "The story behind Qinghe Atelier, a fictional studio of makers focused on simple, lasting craft.") }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-display text-5xl">About us</h1>
        <p className="mt-6 text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <Placeholder label="Studio image" className="mt-10 aspect-video" />
        <p className="mt-10 text-muted-foreground">Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum.</p>
      </section>
    </SiteLayout>
  );
}
