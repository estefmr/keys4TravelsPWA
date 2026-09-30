/**
 * Idiomas de la app. El español es el original y vive en las direcciones de
 * siempre (/destinos/santiago), para no romper ningún enlace ya compartido;
 * el inglés va bajo /en (/en/destinos/santiago).
 *
 * Por dentro las dos versiones son la ruta `app/[lang]`: proxy.ts reescribe
 * las direcciones sin prefijo a /es sin que el navegador lo vea.
 */
export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

/** Cookie con el idioma que la persona eligió a mano en el selector. */
export const LOCALE_COOKIE = "k4t-lang";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Idioma de una dirección, con o sin prefijo. */
export function localeFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

/** "/en/destinos" → "/destinos". También quita el /es interno. */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(es|en)(\/.*)?$/);
  return match ? (match[2] ?? "/") : pathname;
}

/** "/destinos" → "/en/destinos" en inglés; en español queda igual. */
export function localizePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
