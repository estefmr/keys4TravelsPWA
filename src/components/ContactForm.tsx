"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import WhatsAppGlyph from "@/components/WhatsAppGlyph";
import { buildWhatsAppMessageUrl } from "@/lib/contact";

export default function ContactForm() {
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const url = buildWhatsAppMessageUrl({
      nombre: String(data.get("nombre") ?? ""),
      email: String(data.get("email") ?? ""),
      mensaje: String(data.get("mensaje") ?? ""),
    });

    // Esto tiene que ocurrir de forma síncrona dentro del gesto de envío:
    // si se hiciera después de un await, los navegadores móviles lo
    // bloquearían como popup. Si aun así lo bloquean, navegamos directo.
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = url;

    setSentUrl(url);
    form.reset();
  }

  if (sentUrl) {
    return (
      <div className="flex items-start gap-3 rounded-2xl bg-brand/5 p-4 text-sm text-brand-dark">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
        <div>
          <p className="font-semibold">Te abrimos WhatsApp con tu mensaje listo</p>
          <p className="mt-1 text-brand-dark/80">
            Solo tienes que pulsar enviar dentro de WhatsApp para que nos
            llegue.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a
              href={sentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              <WhatsAppGlyph />
              Abrir WhatsApp de nuevo
            </a>
            <button
              type="button"
              onClick={() => setSentUrl(null)}
              className="text-xs font-medium underline underline-offset-2"
            >
              Escribir otro mensaje
            </button>
          </div>
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
        className="mt-1 flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        <WhatsAppGlyph />
        Enviar por WhatsApp
      </button>
      <p className="text-center text-xs text-zinc-400">
        Se abrirá WhatsApp con tu mensaje ya escrito.
      </p>
    </form>
  );
}
