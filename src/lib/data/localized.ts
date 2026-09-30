import type { City, Country, Hotel, Route } from "@/lib/types";
import type { Locale } from "@/lib/i18n/config";
import { cities, countries } from "@/lib/data/destinations";
import { hotels } from "@/lib/data/hotels";
import { routes } from "@/lib/data/routes";
import { citiesEn, countryNamesEn } from "@/lib/data/en/destinations";
import { hotelsEn } from "@/lib/data/en/hotels";
import { routesEn } from "@/lib/data/en/routes";

/**
 * El contenido en el idioma de la página. El español es la fuente: fotos,
 * slugs, hoteles y orden salen siempre de ahí, y el inglés solo pone los
 * textos encima. Los nombres de hoteles y de lugares no se traducen nunca:
 * en inglés se escriben igual que en español. Si a algo le falta
 * traducción, se muestra en español en vez de romperse.
 */

function countryName(name: string, locale: Locale): string {
  return locale === "en" ? (countryNamesEn[name] ?? name) : name;
}

/** Cambia el nombre de cada foto por su traducción, en el mismo orden. */
function relabel<T extends { label: string }>(fotos: T[] | undefined, labels?: string[]) {
  return fotos?.map((foto, i) => ({ ...foto, label: labels?.[i] ?? foto.label }));
}

function localizeCity(city: City, locale: Locale): City {
  const base = { ...city, countryName: countryName(city.countryName, locale) };
  const t = locale === "en" ? citiesEn[city.slug] : undefined;
  if (!t) return base;
  return {
    ...base,
    heroText: t.heroText,
    body: t.body,
    sections: t.sections ?? base.sections,
    attractions: t.attractions,
  };
}

function localizeHotel(hotel: Hotel, locale: Locale): Hotel {
  const base = { ...hotel, countryName: countryName(hotel.countryName, locale) };
  const t = locale === "en" ? hotelsEn[hotel.slug] : undefined;
  if (!t) return base;
  return {
    ...base,
    address: t.address ?? base.address,
    summary: t.summary,
    description: t.description,
    gallery: relabel(base.gallery, t.galleryLabels),
  };
}

function localizeRoute(route: Route, locale: Locale): Route {
  const t = locale === "en" ? routesEn[route.slug] : undefined;
  if (!t) return route;
  return {
    ...route,
    kicker: t.kicker ?? route.kicker,
    // El título (nombre del lugar) no se toca: se respeta el original.
    teaser: t.teaser,
    intro: t.intro,
    photos: relabel(route.photos, t.photoLabels),
    stops: route.stops.map((stop, i) => {
      const ts = t.stops?.[i];
      if (!ts) return stop;
      return {
        ...stop,
        title: ts.title,
        paragraphs: ts.paragraphs,
        bullets: ts.bullets ?? stop.bullets,
        photos: relabel(stop.photos, ts.photoLabels),
      };
    }),
  };
}

export function getCountries(locale: Locale): Country[] {
  return countries.map((c) => ({ ...c, name: countryName(c.name, locale) }));
}

export function getCities(locale: Locale): City[] {
  return cities.map((c) => localizeCity(c, locale));
}

export function getCity(slug: string, locale: Locale): City | undefined {
  const city = cities.find((c) => c.slug === slug);
  return city && localizeCity(city, locale);
}

export function getHotels(locale: Locale): Hotel[] {
  return hotels.map((h) => localizeHotel(h, locale));
}

export function getHotel(slug: string, locale: Locale): Hotel | undefined {
  const hotel = hotels.find((h) => h.slug === slug);
  return hotel && localizeHotel(hotel, locale);
}

export function getCityHotels(citySlug: string, locale: Locale): Hotel[] {
  return hotels
    .filter((h) => h.citySlug === citySlug)
    .map((h) => localizeHotel(h, locale));
}

export function getRoute(slug: string, locale: Locale): Route | undefined {
  const route = routes.find((r) => r.slug === slug);
  return route && localizeRoute(route, locale);
}

export function getCityRoutes(citySlug: string, locale: Locale): Route[] {
  return routes
    .filter((r) => r.citySlug === citySlug)
    .map((r) => localizeRoute(r, locale));
}
