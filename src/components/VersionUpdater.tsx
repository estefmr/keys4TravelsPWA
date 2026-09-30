"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Tras publicar, la PWA instalada puede seguir días con el código que
 * cargó: el sistema la deja viva en segundo plano y al volver no pide
 * nada nuevo. Este componente pregunta a /api/version si hay otra
 * versión y, cuando la hay, recarga en un momento que no moleste:
 *
 *  - al volver a la app desde segundo plano (lo que acaba de ver la
 *    persona no es algo que esté leyendo aún), o
 *  - al cambiar de pantalla (la siguiente llega ya con la versión nueva).
 *
 * Nunca a mitad de lectura ni con un formulario a medio escribir.
 */

const ESTA_VERSION = process.env.NEXT_PUBLIC_APP_VERSION;
const CADA_15_MIN = 15 * 60 * 1000;

async function hayVersionNueva() {
  try {
    const res = await fetch("/api/version", { cache: "no-store" });
    if (!res.ok) return false;
    const { version } = (await res.json()) as { version?: string };
    return !!version && version !== ESTA_VERSION;
  } catch {
    // Sin conexión o error puntual: se vuelve a mirar más tarde.
    return false;
  }
}

/** Un campo con texto enfocado: recargar borraría lo escrito. */
function escribiendo() {
  const el = document.activeElement;
  return (
    (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) &&
    el.value !== ""
  );
}

export default function VersionUpdater() {
  const pathname = usePathname();
  const vieja = useRef(false);
  const primeraRuta = useRef(pathname);

  useEffect(() => {
    // En local no hay publicaciones que comparar.
    if (ESTA_VERSION === "local") return;

    const mirar = async () => {
      if (!vieja.current) vieja.current = await hayVersionNueva();
    };

    const alVolver = async () => {
      if (document.hidden) return;
      await mirar();
      if (vieja.current && !escribiendo()) window.location.reload();
    };

    mirar();
    const t = setInterval(mirar, CADA_15_MIN);
    document.addEventListener("visibilitychange", alVolver);
    return () => {
      clearInterval(t);
      document.removeEventListener("visibilitychange", alVolver);
    };
  }, []);

  useEffect(() => {
    if (pathname === primeraRuta.current) return;
    primeraRuta.current = pathname;
    // La pantalla nueva se pintó con el código viejo: se pide entera.
    if (vieja.current) window.location.reload();
  }, [pathname]);

  return null;
}
