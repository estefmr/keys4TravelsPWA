"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type FotoAmpliable = { src: string; label?: string };

/**
 * Visor de fotos a pantalla completa. Se abre al tocar una foto y deja
 * pasar al resto del mismo grupo deslizando (móvil) o con flechas y
 * teclado (escritorio).
 *
 * Va sobre un <dialog> nativo: queda por encima de todo (barras fijas
 * incluidas), cierra con Escape y encierra el foco sin código extra.
 *
 * Al abrir se añade una entrada al historial, así el botón «atrás» del
 * teléfono cierra la foto en vez de sacar a la persona de la pantalla
 * —en la PWA instalada no hay otra barra con la que volver.
 */
export default function Lightbox({
  photos,
  index,
  altPrefix,
  onClose,
}: {
  photos: FotoAmpliable[];
  index: number;
  altPrefix: string;
  onClose: () => void;
}) {
  const dialogoRef = useRef<HTMLDialogElement>(null);
  const pistaRef = useRef<HTMLDivElement>(null);
  const [actual, setActual] = useState(index);
  // true mientras nuestra entrada del historial siga puesta.
  const enHistorial = useRef(false);
  // Guardado en ref para que abrir no dependa de que el padre memorice
  // la función: si cambiara, se volvería a abrir y a sumar historial.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const cerrar = useCallback(() => {
    // Si abrimos con entrada propia, se cierra quitándola: el popstate
    // de abajo hace el resto. Así atrás y la X dejan el historial igual.
    if (enHistorial.current) window.history.back();
    else onCloseRef.current();
  }, []);

  // Abrir: modal nativo, sin scroll detrás y con entrada en el historial.
  useEffect(() => {
    const dialogo = dialogoRef.current;
    if (!dialogo) return;
    dialogo.showModal();

    const html = document.documentElement;
    const overflowAntes = html.style.overflow;
    html.style.overflow = "hidden";

    // En desarrollo React monta dos veces: no apilar dos entradas.
    if (!window.history.state?.k4tFoto) {
      window.history.pushState({ k4tFoto: true }, "");
    }
    enHistorial.current = true;
    const alVolver = () => {
      enHistorial.current = false;
      onCloseRef.current();
    };
    window.addEventListener("popstate", alVolver);

    return () => {
      window.removeEventListener("popstate", alVolver);
      html.style.overflow = overflowAntes;
      if (dialogo.open) dialogo.close();
    };
  }, []);

  // Colocar la foto tocada antes de que se vea, sin animación.
  useEffect(() => {
    const pista = pistaRef.current;
    if (pista) pista.scrollLeft = index * pista.clientWidth;
  }, [index]);

  const irA = useCallback(
    (i: number) => {
      const pista = pistaRef.current;
      if (!pista) return;
      const destino = Math.max(0, Math.min(photos.length - 1, i));
      pista.scrollTo({ left: destino * pista.clientWidth, behavior: "smooth" });
    },
    [photos.length]
  );

  function alDesplazar() {
    const pista = pistaRef.current;
    if (!pista || pista.clientWidth === 0) return;
    setActual(Math.round(pista.scrollLeft / pista.clientWidth));
  }

  function alTeclear(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") irA(actual - 1);
    if (e.key === "ArrowRight") irA(actual + 1);
  }

  const foto = photos[actual];
  const varias = photos.length > 1;

  return (
    <dialog
      ref={dialogoRef}
      aria-label={`Fotos de ${altPrefix}`}
      // Escape: se cierra por nuestro camino para retirar la entrada
      // del historial.
      onCancel={(e) => {
        e.preventDefault();
        cerrar();
      }}
      onKeyDown={alTeclear}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-black p-0 text-white backdrop:bg-black"
    >
      <div
        ref={pistaRef}
        onScroll={alDesplazar}
        className="no-scrollbar flex h-full snap-x snap-mandatory overflow-x-auto"
      >
        {photos.map((f, i) => (
          <div
            key={f.src + i}
            // Tocar el fondo negro (fuera de la foto) cierra.
            onClick={(e) => e.target === e.currentTarget && cerrar()}
            className="flex h-full w-full shrink-0 snap-center items-center justify-center px-2 py-16 sm:px-16"
          >
            <Image
              src={f.src}
              alt={f.label ? `${altPrefix} — ${f.label}` : altPrefix}
              width={1600}
              height={1200}
              sizes="100vw"
              // Solo la tocada y sus vecinas: el resto, cuando se llegue.
              loading={Math.abs(i - index) <= 1 ? "eager" : "lazy"}
              className="h-auto max-h-full w-auto max-w-full rounded-lg object-contain"
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent px-4 pb-6 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <span className="text-sm font-medium tabular-nums text-white/80">
          {varias ? `${actual + 1} / ${photos.length}` : ""}
        </span>
        <button
          type="button"
          onClick={cerrar}
          aria-label="Cerrar"
          autoFocus
          className="pointer-events-auto rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {foto?.label && (
        <p className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-8 text-center text-sm text-white/90">
          {foto.label}
        </p>
      )}

      {varias && (
        <>
          <Flecha lado="izquierda" oculta={actual === 0} onClick={() => irA(actual - 1)} />
          <Flecha
            lado="derecha"
            oculta={actual === photos.length - 1}
            onClick={() => irA(actual + 1)}
          />
        </>
      )}
    </dialog>
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
      // En móvil manda el gesto de deslizar; las flechas, desde sm.
      className={`absolute top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 ${
        oculta ? "" : "sm:flex"
      } ${lado === "izquierda" ? "left-4" : "right-4"}`}
    >
      <Icono className="h-6 w-6" />
    </button>
  );
}
