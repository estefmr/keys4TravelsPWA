"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "@/components/SmartImage";

/**
 * Carrusel de fotos a ancho completo, pensado para móvil: se pasa
 * deslizando con el dedo y el navegador hace el encaje con scroll-snap,
 * sin librerías ni timers de animación.
 *
 * A diferencia de `Gallery` —miniaturas pequeñas para echar un vistazo—
 * aquí cada foto ocupa todo el ancho, para mirarlas de verdad.
 *
 * Las fotos avanzan solas, con tres frenos: se pausa mientras alguien
 * interactúa, no corre si el carrusel no está en pantalla, y se desactiva
 * entero si el sistema pide reducir las animaciones.
 */

/** Tiempo que se ve cada foto antes de pasar a la siguiente. */
const INTERVALO_MS = 4500;
/** Tras tocar el carrusel, cuánto espera antes de volver a pasar solo. */
const REANUDAR_MS = 9000;

export default function PhotoSlider({
  images,
  altPrefix,
}: {
  images: string[];
  altPrefix: string;
}) {
  const pistaRef = useRef<HTMLDivElement>(null);
  const reanudarRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [actual, setActual] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [visible, setVisible] = useState(false);

  /** Deduce la foto visible a partir del scroll, que es la fuente de verdad. */
  const alDesplazar = useCallback(() => {
    const pista = pistaRef.current;
    if (!pista || pista.clientWidth === 0) return;
    const indice = Math.round(pista.scrollLeft / pista.clientWidth);
    setActual(Math.max(0, Math.min(images.length - 1, indice)));
  }, [images.length]);

  const irA = useCallback(
    (indice: number) => {
      const pista = pistaRef.current;
      if (!pista) return;
      const destino = Math.max(0, Math.min(images.length - 1, indice));
      pista.scrollTo({ left: destino * pista.clientWidth, behavior: "smooth" });
    },
    [images.length]
  );

  /**
   * Alguien ha tomado el control: paramos el paso automático y lo
   * devolvemos un rato después, para no pelearnos con su dedo.
   */
  const pausarUnRato = useCallback(() => {
    setPausado(true);
    if (reanudarRef.current) clearTimeout(reanudarRef.current);
    reanudarRef.current = setTimeout(() => setPausado(false), REANUDAR_MS);
  }, []);

  // Solo corre mientras el carrusel está a la vista: fuera de pantalla no
  // tiene sentido gastar batería pasando fotos que nadie mira.
  useEffect(() => {
    const pista = pistaRef.current;
    if (!pista) return;
    const observador = new IntersectionObserver(
      ([entrada]) => setVisible(entrada.isIntersecting),
      { threshold: 0.4 }
    );
    observador.observe(pista);
    return () => observador.disconnect();
  }, []);

  // El paso automático.
  useEffect(() => {
    if (images.length < 2 || pausado || !visible) return;
    // Quien pide menos animación en su sistema no quiere carruseles solos.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      const pista = pistaRef.current;
      if (!pista || pista.clientWidth === 0) return;
      // Leemos la posición real en vez de fiarnos del estado: así el timer
      // nunca se desincroniza de lo que la persona ha deslizado a mano.
      const indice = Math.round(pista.scrollLeft / pista.clientWidth);
      const siguiente = indice >= images.length - 1 ? 0 : indice + 1;
      pista.scrollTo({
        left: siguiente * pista.clientWidth,
        behavior: "smooth",
      });
    }, INTERVALO_MS);

    return () => clearInterval(id);
  }, [images.length, pausado, visible]);

  // El temporizador de reanudar sobrevive al desmontaje si no se limpia.
  useEffect(() => {
    return () => {
      if (reanudarRef.current) clearTimeout(reanudarRef.current);
    };
  }, []);

  if (images.length === 0) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onTouchStart={pausarUnRato}
      onPointerDown={pausarUnRato}
    >
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
            onClick={() => {
              pausarUnRato();
              irA(actual - 1);
            }}
          />
          <Flecha
            lado="derecha"
            oculta={actual === images.length - 1}
            onClick={() => {
              pausarUnRato();
              irA(actual + 1);
            }}
          />

          {/* Puntos indicadores. */}
          <div className="mt-3 flex items-center justify-center gap-1.5">
            {images.map((src, i) => (
              <button
                key={src + i}
                type="button"
                onClick={() => {
                  pausarUnRato();
                  irA(i);
                }}
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
