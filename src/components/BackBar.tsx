import Link from "next/link";
import { ChevronLeft } from "lucide-react";

/**
 * Barra de "volver" que acompaña toda la lectura de una pantalla interior.
 *
 * Es pegajosa a propósito: en la PWA instalada no hay botón atrás del
 * navegador, así que si la única salida vive dentro de la foto de cabecera,
 * desaparece en cuanto se baja un poco y no hay forma de retroceder.
 *
 * Se ancla bajo la barra superior con `--topbar-h`, y por debajo de su
 * `z-index`, para que al hacer scroll una pase por detrás de la otra.
 */
export default function BackBar({
  href,
  backLabel,
  title,
}: {
  href: string;
  /** A dónde se vuelve; se lee en voz alta aunque en pantalla no quepa. */
  backLabel: string;
  /** Dónde estás ahora: útil cuando el título ya quedó fuera de pantalla. */
  title: string;
}) {
  return (
    <div className="sticky top-[var(--topbar-h)] z-20 flex items-center gap-1 border-b border-black/5 bg-cream/95 px-2 py-2 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <Link
        href={href}
        aria-label={`Volver a ${backLabel}`}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-brand transition-colors hover:bg-brand/10 active:bg-brand/15"
      >
        <ChevronLeft className="h-6 w-6" strokeWidth={2.25} />
      </Link>
      <p className="truncate text-sm font-semibold text-foreground">{title}</p>
    </div>
  );
}
