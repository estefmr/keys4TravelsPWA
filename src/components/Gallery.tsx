"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SmartImage from "@/components/SmartImage";
import Lightbox from "@/components/Lightbox";
import { useDict } from "@/lib/i18n/LocaleProvider";

/** Tiempo entre un paso automático y el siguiente. */
const INTERVALO_MS = 3500;
/** Tras tocar la galería, cuánto espera antes de volver a pasar sola. */
const REANUDAR_MS = 9000;

/**
 * Fila de miniaturas que avanza sola, foto a foto, y vuelve al principio
 * al llegar al final. En escritorio no se puede deslizar con el dedo, así
 * que sin esto las últimas fotos quedaban fuera de la vista.
 *
 * Mismos frenos que `PhotoSlider`: se pausa con el ratón encima o al
 * tocarla, no corre fuera de pantalla ni con el visor abierto, y se
 * desactiva si el sistema pide reducir las animaciones.
 */
export default function Gallery({
  images,
  altPrefix,
}: {
  images: string[];
  altPrefix: string;
}) {
  const pistaRef = useRef<HTMLDivElement>(null);
  const reanudarRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [abierta, setAbierta] = useState<number | null>(null);
  const [pausado, setPausado] = useState(false);
  const [visible, setVisible] = useState(false);
  const t = useDict().fotos;

  const pausarUnRato = useCallback(() => {
    setPausado(true);
    if (reanudarRef.current) clearTimeout(reanudarRef.current);
    reanudarRef.current = setTimeout(() => setPausado(false), REANUDAR_MS);
  }, []);

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

  useEffect(() => {
    if (images.length < 2 || pausado || !visible || abierta !== null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      const pista = pistaRef.current;
      const primera = pista?.firstElementChild as HTMLElement | null;
      if (!pista || !primera) return;
      const maximo = pista.scrollWidth - pista.clientWidth;
      // Si todas caben en pantalla no hay nada que pasar.
      if (maximo <= 1) return;
      // Un paso = una miniatura más el hueco entre ellas.
      const segunda = primera.nextElementSibling as HTMLElement | null;
      const paso = segunda
        ? segunda.offsetLeft - primera.offsetLeft
        : primera.offsetWidth;
      const alFinal = pista.scrollLeft >= maximo - 2;
      pista.scrollTo({
        left: alFinal ? 0 : Math.min(maximo, pista.scrollLeft + paso),
        behavior: "smooth",
      });
    }, INTERVALO_MS);

    return () => clearInterval(id);
  }, [images.length, pausado, visible, abierta]);

  useEffect(() => {
    return () => {
      if (reanudarRef.current) clearTimeout(reanudarRef.current);
    };
  }, []);

  if (images.length === 0) return null;

  return (
    <>
      <div
        ref={pistaRef}
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
        onTouchStart={pausarUnRato}
        onPointerDown={pausarUnRato}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1"
      >
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setAbierta(i)}
            aria-label={t.verEnGrande(`${altPrefix} — ${t.foto(i + 1)}`)}
            className="relative h-48 w-64 shrink-0 cursor-zoom-in snap-start overflow-hidden rounded-xl bg-sand"
          >
            <SmartImage src={src} alt={`${altPrefix} — ${t.foto(i + 1)}`} className="object-cover" />
          </button>
        ))}
      </div>

      {abierta !== null && (
        <Lightbox
          photos={images.map((src) => ({ src }))}
          index={abierta}
          altPrefix={altPrefix}
          onClose={() => setAbierta(null)}
        />
      )}
    </>
  );
}
