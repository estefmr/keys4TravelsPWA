"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

/**
 * Portada del Home: las mismas palabras de siempre, pero sobre fotos que se
 * van relevando.
 *
 * Las fotos se funden unas con otras en vez de deslizarse, y el texto vive en
 * una capa aparte que no se mueve: así el titular se puede leer entero
 * durante todo el paso, en vez de irse con la foto a mitad de frase.
 *
 * Todas las fotos están en el DOM desde el principio (solo cambia su
 * opacidad), que es lo que permite fundirlas sin parpadeo.
 */

/** Tiempo que se ve cada foto antes de dar paso a la siguiente. */
const INTERVALO_MS = 5500;

export type HeroPhoto = {
  src: string;
  /** Nombre del lugar: no se dibuja, pero nombra su botón indicador. */
  place: string;
};

export default function HeroSlider({
  photos,
  children,
  minHeight = "20rem",
}: {
  photos: HeroPhoto[];
  children: ReactNode;
  minHeight?: string;
}) {
  const contenedorRef = useRef<HTMLDivElement>(null);
  const [actual, setActual] = useState(0);
  const [visible, setVisible] = useState(true);

  // Fuera de pantalla no tiene sentido gastar batería cambiando fotos que
  // nadie mira; la portada se va arriba en cuanto se baja un poco.
  useEffect(() => {
    const nodo = contenedorRef.current;
    if (!nodo) return;
    const observador = new IntersectionObserver(
      ([entrada]) => setVisible(entrada.isIntersecting),
      { threshold: 0.2 }
    );
    observador.observe(nodo);
    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    if (photos.length < 2 || !visible) return;
    // Quien pide menos animación en su sistema no quiere fotos pasando solas.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(
      () => setActual((i) => (i + 1) % photos.length),
      INTERVALO_MS
    );
    return () => clearInterval(id);
  }, [photos.length, visible]);

  return (
    <div
      ref={contenedorRef}
      className="relative flex items-end overflow-hidden bg-gradient-to-br from-brand via-brand-dark to-[#120f38]"
      style={{ minHeight }}
    >
      {photos.map((foto, i) => (
        <Image
          key={foto.src}
          src={foto.src}
          // Decorativas: el titular de encima es quien lleva el mensaje, y
          // cinco textos alternativos seguidos solo estorbarían al lector de
          // pantalla. Los nombres de los lugares van en los indicadores.
          alt=""
          aria-hidden="true"
          fill
          // Solo la primera entra en la primera pintura; las demás pueden
          // esperar, que no se ven hasta pasados unos segundos.
          priority={i === 0}
          sizes="(max-width: 768px) 100vw, 768px"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === actual ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Velo oscuro: mantiene legible el texto blanco sobre cualquier foto. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/5 blur-2xl" />

      <div className="relative z-10 w-full px-5 pb-6 pt-16 text-white drop-shadow-sm">
        {children}

        {photos.length > 1 && (
          <div
            role="tablist"
            aria-label="Fotos de la portada"
            className="mt-5 flex items-center gap-2"
          >
            {photos.map((foto, i) => (
              <button
                key={foto.src}
                type="button"
                role="tab"
                aria-selected={i === actual}
                aria-label={foto.place}
                onClick={() => setActual(i)}
                // Área de toque de 44 px (padding vertical) alrededor de una
                // barrita fina: cómoda con el dedo sin ensuciar el diseño.
                className="group py-2"
              >
                <span
                  className={`block h-1 rounded-full transition-all duration-300 ${
                    i === actual
                      ? "w-7 bg-white"
                      : "w-3 bg-white/40 group-hover:bg-white/70"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
