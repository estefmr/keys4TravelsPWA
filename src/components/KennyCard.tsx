import { Phone, Mail } from "lucide-react";
import WhatsAppGlyph from "@/components/WhatsAppGlyph";
import {
  CONTACT_EMAIL,
  CONTACT_INSTAGRAM_HANDLE,
  CONTACT_INSTAGRAM_URL,
  CONTACT_PHONE,
  CONTACT_WHATSAPP_NUMBER,
  CONTACT_WHATSAPP_URL,
} from "@/lib/contact";

/**
 * Ficha de Kenny con sus vías de contacto.
 *
 * Vive en su propio archivo porque sale en dos sitios: en Contacto, entera,
 * y en Reserva, sin la biografía —ahí quien mira ya sabe quién es y lo que
 * busca es el botón de WhatsApp—.
 */
export default function KennyCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 font-display text-lg text-brand">
          KA
        </div>
        <div>
          <h2 className="font-display text-lg leading-tight text-foreground">
            Kenny Acosta
          </h2>
          <p className="text-xs text-zinc-500">
            Fundador — &ldquo;el hotelero que viaja&rdquo;
          </p>
        </div>
      </div>

      {compact ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600">
          ¿Dudas antes de reservar? Escríbele directamente.
        </p>
      ) : (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600">
          Venezolano del sur de Venezuela, con toda una vida de pasión por la
          hotelería y los viajes. Con estudios en turismo y hotelería desde
          inicios de los 2000 y experiencia en cadenas hoteleras importantes,
          Kenny impulsa el &ldquo;Turismo Lento&rdquo; y diseña cada viaje
          entendiendo tanto la perspectiva del viajero como la del hotelero.
        </p>
      )}

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
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="flex items-center gap-2 text-zinc-600"
          >
            <Phone className="h-4 w-4 text-brand-light" /> {CONTACT_PHONE}
          </a>
        )}
        {CONTACT_EMAIL && (
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-2 text-zinc-600"
          >
            <Mail className="h-4 w-4 text-brand-light" /> {CONTACT_EMAIL}
          </a>
        )}
      </div>
    </div>
  );
}

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}
