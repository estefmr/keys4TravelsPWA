import type { Locale } from "@/lib/i18n/config";
import { es } from "@/lib/i18n/es";
import { en } from "@/lib/i18n/en";

export type Dictionary = typeof es;

const dictionaries: Record<Locale, Dictionary> = { es, en };

/**
 * Textos de la interfaz (menús, botones, formularios). El contenido de
 * destinos, hoteles y lugares no va aquí: vive en src/lib/data y su
 * traducción en src/lib/data/en.
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
