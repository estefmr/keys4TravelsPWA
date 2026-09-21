/** Una foto del carrusel: su ruta y el nombre con el que se ofrece. */
export type GalleryPhoto = {
  src: string;
  /** Texto del botón bajo el carrusel; también alimenta el alt de la foto. */
  label: string;
};

export type Hotel = {
  id: string;
  slug: string;
  name: string;
  citySlug: string;
  cityName: string;
  countryName: string;
  address?: string;
  summary: string;
  description: string[];
  images: string[];
  /**
   * Fotos extra para el carrusel del final de la ficha. La lista "images"
   * sigue siendo la portada y la tira de miniaturas de arriba; esto es una
   * segunda tanda, opcional, para enseñar la propiedad con calma.
   */
  gallery?: GalleryPhoto[];
};

export type City = {
  id: string;
  slug: string;
  name: string;
  countrySlug: string;
  countryName: string;
  heroText: string;
  body: string[];
  attractions: string[];
  images: string[];
  hotelIds: string[];
  comingSoon?: boolean;
};

export type Country = {
  id: string;
  slug: string;
  name: string;
  citySlugs: string[];
};

/** Una parada de una ruta: un lugar concreto que se visita. */
export type RouteStop = {
  title: string;
  paragraphs: string[];
  /** Listas cortas (consejos, tarifas) que el texto original da en viñetas. */
  bullets?: string[];
  photos?: GalleryPhoto[];
};

/**
 * Una ruta o atractivo de un destino, con su propia pantalla.
 * Contenido traído de keys4travels.com.
 */
export type Route = {
  id: string;
  slug: string;
  citySlug: string;
  /** Rótulo sobre el título ("Ruta 1"); las fichas sueltas no lo llevan. */
  kicker?: string;
  title: string;
  /** Una línea para la tarjeta de la pantalla del destino. */
  teaser: string;
  cover: string;
  /** Párrafos de entrada, antes de las paradas. */
  intro: string[];
  /** Fotos del propio lugar, para las fichas que no tienen paradas. */
  photos?: GalleryPhoto[];
  stops: RouteStop[];
};
