"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "@/components/SmartImage";

/**
 * Carrusel de fotos a ancho completo, pensado para móvil: se pasa
 * deslizando con el dedo y el navegador hace el encaje con scroll-snap,
 * sin librerías ni timers.
 *
 * A diferencia de `Gallery` —miniaturas pequeñas para echar un vistazo—
 * aquí cada foto ocupa todo el ancho, para mirarlas de verdad.
 *
 * Las flechas son un extra para ratón y teclado; en táctil el gesto manda.
 */
export default function PhotoSlider({
  images,
  altPrefix,
}: {
  images: string[];
  altPrefix: string;
}) {
  const pistaRef = useRef<HTMLDivElement>(null);
  const [actual, setActual] = useState(0);

  if (images.length === 0) return null;

  /** Deduce la foto visible a partir del scroll, que es la fuente de verdad. */
  function alDesplazar() {
    const pista = pistaRef.current;
    if (!pista) return;
    const indice = Math.round(pista.scrollLeft / pista.clientWidth);
    setActual(Math.max(0, Math.min(images.length - 1, indice)));
  }

  function irA(indice: number) {
    const pista = pistaRef.current;
    if (!pista) return;
    const destino = Math.max(0, Math.min(images.length - 1, indice));
    pista.scrollTo({ left: destino * pista.clientWidth, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={pistaRef}
        onScroll={alDesplazar}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-2xl"
      >
        {images.map((src, i) => (
          <div
            key={src + i}
            className="relative aspect-[4/3] w-full shrink-0 snap-center bg-sand"
          >
            <SmartImage
              src={src}
              alt={`${altPrefix} — foto ${i + 1} de ${images.length}`}
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <Flecha
            lado="izquierda"
            oculta={actual === 0}
            onClick={() => irA(actual - 1)}
          />
          <Flecha
            lado="derecha"
            oculta={actual === images.length - 1}
            onClick={() => irA(actual + 1)}
          />

          {/* Puntos indicadores. */}
          <div className="mt-3 flex items-center justify-center gap-1.5">
            {images.map((src, i) => (
              <button
                key={src + i}
                type="button"
                onClick={() => irA(i)}
                aria-label={`Ir a la foto ${i + 1}`}
                aria-current={i === actual}
                className={`h-1.5 rounded-full transition-all ${
                  i === actual ? "w-5 bg-brand" : "w-1.5 bg-zinc-300"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Flecha({
  lado,
  oculta,
  onClick,
}: {
  lado: "izquierda" | "derecha";
  oculta: boolean;
  onClick: () => void;
}) {
  const Icono = lado === "izquierda" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={lado === "izquierda" ? "Foto anterior" : "Foto siguiente"}
      // Ocultas en móvil (ahí manda el gesto) y en los extremos. El atributo
      // `hidden` de HTML no serviría: cualquier `display` de Tailwind lo
      // pisa, así que se controla con las propias clases.
      className={`absolute top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-brand-dark shadow-md backdrop-blur transition-colors hover:bg-white ${
        oculta ? "" : "sm:flex"
      } ${lado === "izquierda" ? "left-3" : "right-3"}`}
    >
      <Icono className="h-5 w-5" strokeWidth={2} />
    </button>
  );
}
