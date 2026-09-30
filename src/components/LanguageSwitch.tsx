"use client";

import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import {
  LOCALE_COOKIE,
  localizePath,
  stripLocale,
  type Locale,
} from "@/lib/i18n/config";
import { useDict, useLocale } from "@/lib/i18n/LocaleProvider";

/** Un año: la elección se recuerda aunque se cierre la app. */
const UN_ANO = 60 * 60 * 24 * 365;

/**
 * Botón ES / EN de la barra superior. Muestra el idioma al que se cambia
 * y lleva a la misma pantalla en ese idioma.
 *
 * La elección se guarda en una cookie que lee proxy.ts: a partir de ahí
 * manda sobre el idioma del teléfono, también al abrir la app instalada
 * (que arranca en "/").
 */
export default function LanguageSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useDict().nav;
  const destino: Locale = locale === "es" ? "en" : "es";

  function cambiar() {
    document.cookie = `${LOCALE_COOKIE}=${destino}; path=/; max-age=${UN_ANO}; samesite=lax`;
    const ruta = localizePath(destino, stripLocale(pathname));
    // Carga completa y no navegación interna: cambia el <html lang> y el
    // layout entero, y así ninguna pieza queda en el idioma anterior.
    window.location.assign(ruta + window.location.search + window.location.hash);
  }

  return (
    <button
      type="button"
      onClick={cambiar}
      aria-label={t.cambiarIdioma}
      title={t.cambiarIdioma}
      lang={destino}
      className="flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold text-brand transition-colors hover:bg-brand/5"
    >
      <Globe className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
      {t.otroIdioma}
    </button>
  );
}
