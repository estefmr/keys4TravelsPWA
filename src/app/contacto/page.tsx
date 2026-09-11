import { Phone, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import {
  CONTACT_EMAIL,
  CONTACT_INSTAGRAM_HANDLE,
  CONTACT_INSTAGRAM_URL,
  CONTACT_PHONE,
  CONTACT_WHATSAPP_NUMBER,
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

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35.99 2.51c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.18-.47-.3Z" />
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
          {CONTACT_WHATSAPP_URL && (
            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 rounded-full bg-brand px-4 py-2 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              <WhatsAppGlyph />
              {CONTACT_WHATSAPP_NUMBER}
            </a>
          )}

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
