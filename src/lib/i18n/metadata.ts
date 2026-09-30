import type { Metadata } from "next";
import { localizePath, type Locale } from "@/lib/i18n/config";

/**
 * Enlaces entre las dos versiones de una página, para que Google muestre
 * a cada quien la de su idioma. `path` es la ruta sin prefijo ("/hoteles").
 */
export function alternates(locale: Locale, path: string): Metadata["alternates"] {
  return {
    canonical: localizePath(locale, path),
    languages: {
      es: path,
      en: localizePath("en", path),
      "x-default": path,
    },
  };
}
