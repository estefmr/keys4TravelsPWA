"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "@/components/SmartImage";
import type { GalleryPhoto } from "@/lib/types";

/**
 * Carrusel de fotos a ancho completo, pensado para móvil: se pasa
 * deslizando con el dedo y el navegador hace el encaje con scroll-snap,
 * sin librerías ni timers de animación.
 *
 * A diferencia de `Gallery` —miniaturas pequeñas para echar un vistazo—
 * aquí cada foto ocupa todo el ancho, para mirarlas de verdad.
 *
 * Debajo, una fila de botones con el nombre de cada foto: hacen de
 * indicador de posición y de atajo para ir directo a una. Sustituyen a los
 * puntos anónimos de antes, que servían para lo mismo pero sin decir qué
 * había en cada una.
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
  photos,
  altPrefix,
}: {
  photos: GalleryPhoto[];
  altPrefix: string;
}) {
  const pistaRef = useRef<HTMLDivElement>(null);
  const filtrosRef = useRef<HTMLDivElement>(null);
  const reanudarRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [actual, setActual] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [visible, setVisible] = useState(false);

  /** Deduce la foto visible a partir del scroll, que es la fuente de verdad. */
  const alDesplazar = useCallback(() => {
    const pista = pistaRef.current;
    if (!pista || pista.clientWidth === 0) return;
    const indice = Math.round(pista.scrollLeft / pista.clientWidth);
    setActual(Math.max(0, Math.min(photos.length - 1, indice)));
  }, [photos.length]);

  const irA = useCallback(
    (indice: number) => {
      const pista = pistaRef.current;
      if (!pista) return;
      const destino = Math.max(0, Math.min(photos.length - 1, indice));
      pista.scrollTo({ left: destino * pista.clientWidth, behavior: "smooth" });
    },
    [photos.length]
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
    if (photos.length < 2 || pausado || !visible) return;
    // Quien pide menos animación en su sistema no quiere carruseles solos.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      const pista = pistaRef.current;
      if (!pista || pista.clientWidth === 0) return;
      // Leemos la posición real en vez de fiarnos del estado: así el timer
      // nunca se desincroniza de lo que la persona ha deslizado a mano.
      const indice = Math.round(pista.scrollLeft / pista.clientWidth);
      const siguiente = indice >= photos.length - 1 ? 0 : indice + 1;
      pista.scrollTo({
        left: siguiente * pista.clientWidth,
        behavior: "smooth",
      });
    }, INTERVALO_MS);

    return () => clearInterval(id);
  }, [photos.length, pausado, visible]);

  // La fila de nombres no cabe entera en móvil: arrastramos el botón
  // activo a la vista para que nunca quede escondido fuera del borde.
  useEffect(() => {
    const fila = filtrosRef.current;
    if (!fila) return;
    const boton = fila.children[actual] as HTMLElement | undefined;
    if (!boton) return;
    // `block: "nearest"` evita que el navegador desplace también la página.
    boton.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [actual]);

  // El temporizador de reanudar sobrevive al desmontaje si no se limpia.
  useEffect(() => {
    return () => {
      if (reanudarRef.current) clearTimeout(reanudarRef.current);
    };
  }, []);

  if (photos.length === 0) return null;

  return (
    <div
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onTouchStart={pausarUnRato}
      onPointerDown={pausarUnRato}
    >
      <div className="relative">
        <div
          ref={pistaRef}
          onScroll={alDesplazar}
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-2xl"
        >
          {photos.map((foto) => (
            <div
              key={foto.src}
              className="relative aspect-[4/3] w-full shrink-0 snap-center bg-sand"
            >
              <SmartImage
                src={foto.src}
                alt={`${altPrefix} — ${foto.label}`}
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {photos.length > 1 && (
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
              oculta={actual === photos.length - 1}
              onClick={() => {
                pausarUnRato();
                irA(actual + 1);
              }}
            />
          </>
        )}
      </div>

      {photos.length > 1 && (
        <div
          ref={filtrosRef}
          role="tablist"
          aria-label={`Fotos de ${altPrefix}`}
          className="no-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-1"
        >
          {photos.map((foto, i) => (
            <button
              key={foto.src}
              type="button"
              role="tab"
              aria-selected={i === actual}
              onClick={() => {
                pausarUnRato();
                irA(i);
              }}
              // `shrink-0` es lo que hace que la fila se desplace en vez de
              // apretujar los nombres: en móvil no caben todos a la vez.
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                i === actual
                  ? "border-brand bg-brand text-white"
                  : "border-black/10 bg-white text-zinc-600 hover:border-brand/40 hover:text-brand"
              }`}
            >
              {foto.label}
            </button>
          ))}
        </div>
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
