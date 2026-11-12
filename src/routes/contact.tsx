import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout, meta } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: meta("Contact — Qinghe Atelier", "Send a message to Qinghe Atelier. This is a demo form; nothing is stored or sent.") }),
  component: Contact,
});

const field = "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Demo only: nothing is stored or transmitted.
    e.currentTarget.reset();
    setSent(true);
  };
  return (
    <SiteLayout>
      <section className="mx-auto max-w-xl px-6 py-20">
        <h1 className="font-display text-5xl">Contact</h1>
        <p className="mt-4 text-sm text-muted-foreground">Demo form — please don't enter real personal information. Nothing is saved or sent.</p>
        {sent ? (
          <div role="status" className="mt-10 rounded-md border border-border bg-secondary p-6">
            <h2 className="font-display text-2xl">Thank you!</h2>
            <p className="mt-2 text-sm text-muted-foreground">Your message was received (demo only).</p>
            <button onClick={() => setSent(false)} className="mt-4 text-sm underline">Send another</button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-10 space-y-5">
            <label className="block text-sm">Name<input required maxLength={100} name="name" className={field} /></label>
            <label className="block text-sm">Email<input required type="email" maxLength={255} name="email" className={field} /></label>
            <label className="block text-sm">Message<textarea required maxLength={1000} rows={5} name="message" className={field} /></label>
            <button type="submit" className="rounded-md bg-primary px-5 py-3 text-sm text-primary-foreground hover:bg-primary/90">Send message</button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}
