import { Phone, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import {
  CONTACT_EMAIL,
  CONTACT_INSTAGRAM_HANDLE,
  CONTACT_INSTAGRAM_URL,
  CONTACT_PHONE,
  CONTACT_WHATSAPP_URL,
} from "@/lib/contact";

export const metadata = {
  title: "Contacto — Keys4Travels",
  description: "Escríbele a Kenny Acosta, fundador de Keys4Travels.",
};

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export default function ContactoPage() {
  return (
    <div className="px-5 py-6">
      <h1 className="font-display text-2xl text-foreground">Contacto</h1>

      <div className="mt-5 rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 font-display text-lg text-brand">
            KA
          </div>
          <div>
            <h2 className="font-display text-lg leading-tight text-foreground">
              Kenny Acosta
            </h2>
            <p className="text-xs text-zinc-500">Fundador — &ldquo;el hotelero que viaja&rdquo;</p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-zinc-600">
          Venezolano del sur de Venezuela, con toda una vida de pasión por la
          hotelería y los viajes. Con estudios en turismo y hotelería desde
          inicios de los 2000 y experiencia en cadenas hoteleras importantes,
          Kenny impulsa el &ldquo;Turismo Lento&rdquo; y diseña cada viaje
          entendiendo tanto la perspectiva del viajero como la del hotelero.
        </p>

        <div className="mt-4 flex flex-col gap-2 text-sm">
          <a
            href={CONTACT_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 rounded-full border border-brand/20 px-4 py-2 font-medium text-brand transition-colors hover:bg-brand/5"
          >
            <InstagramGlyph />
            {CONTACT_INSTAGRAM_HANDLE}
          </a>

          {CONTACT_PHONE && (
            <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-2 text-zinc-600">
              <Phone className="h-4 w-4 text-brand-light" /> {CONTACT_PHONE}
            </a>
          )}
          {CONTACT_EMAIL && (
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 text-zinc-600">
              <Mail className="h-4 w-4 text-brand-light" /> {CONTACT_EMAIL}
            </a>
          )}
          {CONTACT_WHATSAPP_URL && (
            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600"
            >
              WhatsApp
            </a>
          )}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="font-display text-lg text-foreground">Escríbenos</h2>
        <p className="mt-1 text-sm text-zinc-500">
          Cuéntanos qué estás buscando y te respondemos a la brevedad.
        </p>
        <div className="mt-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
