"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // React nulls out `currentTarget` once the handler returns, so capture
    // the form element before the first await or `reset()` below throws.
    const form = e.currentTarget;
    setSending(true);

    // TODO(Estefania / dev): once Supabase credentials exist, replace this
    // with either:
    //   1) an insert into a `contact_messages` table via the Supabase
    //      client (see src/lib/supabase/client.ts), or
    //   2) a call to an email-sending API route / Supabase Edge Function.
    // For now this just simulates a submission so the form is fully usable
    // in the UI without a backend.
    await new Promise((resolve) => setTimeout(resolve, 500));

    setSending(false);
    setSent(true);
    form.reset();
  }

  if (sent) {
    return (
      <div className="flex items-start gap-3 rounded-2xl bg-brand/5 p-4 text-sm text-brand-dark">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
        <div>
          <p className="font-semibold">¡Gracias por escribirnos!</p>
          <p className="mt-1 text-brand-dark/80">
            Recibimos tu mensaje. Te contactaremos pronto.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="mt-2 text-xs font-medium underline underline-offset-2"
          >
            Enviar otro mensaje
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <label htmlFor="nombre" className="mb-1 block text-xs font-medium text-zinc-500">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-brand"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-xs font-medium text-zinc-500">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-brand"
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="mb-1 block text-xs font-medium text-zinc-500">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={4}
          className="w-full resize-none rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-brand"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="mt-1 flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {sending ? "Enviando…" : "Enviar mensaje"}
        {!sending && <Send className="h-4 w-4" />}
      </button>
    </form>
  );
}
