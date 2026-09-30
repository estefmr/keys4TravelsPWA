import { NextResponse, type NextRequest } from "next/server";
import {
  LOCALE_COOKIE,
  defaultLocale,
  hasLocale,
  type Locale,
} from "@/lib/i18n/config";

/**
 * Decide en qué idioma se sirve cada página.
 *
 * - /en/… se sirve tal cual, en inglés.
 * - /es/… no se usa hacia fuera: se redirige a la dirección sin prefijo,
 *   que es la oficial del español (así no hay dos URLs por página).
 * - Sin prefijo: si la persona eligió idioma en el selector, manda esa
 *   elección; si no, el idioma de su teléfono. En inglés se la lleva a
 *   /en/…; en español se reescribe por dentro a /es/… sin cambiar la URL.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return NextResponse.next();
  }

  if (pathname === "/es" || pathname.startsWith("/es/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url);
  }

  if (preferredLocale(request) === "en") {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
    const response = NextResponse.redirect(url);
    // La respuesta depende del idioma del navegador y de la cookie.
    response.headers.set("Vary", "Accept-Language, Cookie");
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/es${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.rewrite(url);
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

/**
 * La cookie del selector manda. Sin ella, el primer idioma del navegador
 * que tengamos: español si lo pide antes que el inglés; inglés si no pide
 * español (también para quien habla francés, alemán…: el inglés le sirve
 * más que el español). Sin cabecera —buscadores, herramientas— español.
 */
function preferredLocale(request: NextRequest): Locale {
  const elegido = request.cookies.get(LOCALE_COOKIE)?.value;
  if (elegido && hasLocale(elegido)) return elegido;

  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const idiomas = header
    .split(",")
    .map((parte) => {
      const [etiqueta, ...params] = parte.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return {
        idioma: etiqueta.trim().toLowerCase().split("-")[0],
        peso: q ? Number(q.trim().slice(2)) || 0 : 1,
      };
    })
    .filter((i) => i.idioma && i.peso > 0)
    .sort((a, b) => b.peso - a.peso);

  for (const { idioma } of idiomas) {
    if (idioma === "es") return "es";
    if (idioma === "en") return "en";
  }
  return idiomas.length > 0 ? "en" : defaultLocale;
}

export const config = {
  matcher: [
    // Todo menos la API, los archivos internos de Next y los archivos
    // públicos con extensión (fotos, iconos, sw.js, manifest.json…).
    "/((?!api|_next|.*\\..*).*)",
  ],
};
