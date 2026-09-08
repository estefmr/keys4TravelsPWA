import type { City, Country } from "@/lib/types";

/**
 * Static destinations content, adapted from https://keys4travels.com/.
 * Edit copy directly here — no CMS or database needed.
 *
 * Image files: drop real photos into `public/images/<city-slug>/` using the
 * exact filenames referenced below and they will appear automatically (a
 * friendly placeholder shows until then).
 */
export const cities: City[] = [
  {
    id: "madrid",
    slug: "madrid",
    name: "Madrid",
    countrySlug: "espana",
    countryName: "España",
    heroText:
      "Madrid, España — la puerta de entrada al viejo mundo, un mundo lleno de historia, sofisticación, lugares increíbles y los mejores hoteles.",
    body: [
      "Madrid tiene tantos siglos de historia que es imposible resumirla en pocas líneas. Tres días como turista en Madrid no son suficientes: se recomiendan de 7 a 10 noches para vivirla con calma.",
      'Aplicando el "Turismo Lento" es posible descubrir de verdad la ciudad, sin correr entre puntos, dejando espacio para perderse por sus barrios y disfrutar cada rincón.',
    ],
    attractions: [
      "Gran Vía",
      "Palacio Real",
      "Plaza Mayor",
      "Monasterio de las Descalzas Reales",
      "Colegiata de San Isidro",
      "Barrio de las Letras",
      "Calle del Codo",
      "Plaza de la Villa",
      "Catedral de la Almudena",
      "Parque El Capricho",
      "Petit Palace Posada del Peine (el hotel más antiguo de Madrid, desde 1610)",
    ],
    images: [
      "/images/madrid/palacio-de-cibeles.webp",
      "/images/madrid/puente-de-toledo.webp",
      "/images/madrid/plaza-de-la-villa.webp",
      "/images/madrid/catedral-de-almudena.jpg",
      "/images/madrid/parque-el-capricho.webp",
      "/images/madrid/posada-del-peine.webp",
    ],
    hotelIds: [],
    comingSoon: true,
  },
  {
    id: "santiago",
    slug: "santiago",
    name: "Santiago",
    countrySlug: "chile",
    countryName: "Chile",
    heroText:
      "Santiago de Chile — una ciudad con mucho que mostrar y la puerta de entrada a uno de los países más maravillosos para el turismo que existe.",
    body: [
      "Santiago es una metrópolis con transporte público de calidad (uno de los metros más limpios de Sudamérica), amplia oferta hotelera, parques al aire libre y buena vida nocturna.",
    ],
    attractions: [
      "Cerro San Cristóbal",
      "Pueblito Los Dominicos",
      "Plaza y Boulevard Ñuñoa",
      "Parque Bicentenario",
      "Parque Araucano",
      "Barrio Bellavista",
      "Cajón del Maipo / Embalse El Yeso",
      "Palacio de La Moneda",
      "Museo Nacional de Bellas Artes",
      "Isla Negra (Casa de Neruda)",
      "Viñas cercanas: Concha y Toro, Errázuriz, Cousiño Macul",
    ],
    images: [
      "/images/santiago/atardecer-en-santiago.webp",
      "/images/santiago/pueblito-de-los-dominicos.webp",
      "/images/santiago/cerro-san-cristobal-por-bellavista.webp",
      "/images/santiago/jardin-japones-y-torre-costanera.webp",
      "/images/santiago/palacio-presidencial-casa-de-la-moneda.webp",
      "/images/santiago/museo-de-bellas-artes-de-santiago.webp",
    ],
    hotelIds: ["castillo-rojo"],
  },
  {
    id: "san-pedro-de-atacama",
    slug: "san-pedro-de-atacama",
    name: "San Pedro de Atacama",
    countrySlug: "chile",
    countryName: "Chile",
    heroText:
      "Uno de los lugares más remotos del planeta, con una energía que parece estar más allá de nuestro entendimiento.",
    body: [
      "San Pedro de Atacama es una joya en el corazón del desierto chileno, fundada en 1450, de calles de tierra y casas de adobe, reconocida como uno de los mejores destinos de aventura de Sudamérica, con atardeceres espectaculares y cielos estrellados todo el año.",
      'Se recomienda al menos 6 días para un "turismo lento" en la zona.',
    ],
    attractions: [
      "Géiser del Tatio",
      "Lagunas Escondidas de Baltinache",
      "Museo del Meteorito",
      "Valle de la Luna",
      "Vallecito (Bus Mágico)",
      "Valle del Arcoíris",
      "Laguna Cejar y Laguna Piedra",
      "Laguna Tebinquinche",
      "Ojos del Salar",
      "Garganta del Diablo",
      "Piedras Rojas y Lagunas Altiplánicas",
      "Laguna Chaxa",
      "Termas de Puritama",
    ],
    images: [
      "/images/san-pedro-de-atacama/calle-caracoles.jpg",
      "/images/san-pedro-de-atacama/iglesia-san-pedro-de-a.jpg",
      "/images/san-pedro-de-atacama/valle-luna.jpg",
      "/images/san-pedro-de-atacama/laguna-cejar-y-laguna-piedra.jpg",
      "/images/san-pedro-de-atacama/piedras-rojas-y-lagunas-altiplanicas.jpg",
      "/images/san-pedro-de-atacama/termas-de-puritama.jpg",
    ],
    hotelIds: ["casa-solcor"],
  },
  {
    id: "vina-del-mar",
    slug: "vina-del-mar",
    name: "Viña del Mar",
    countrySlug: "chile",
    countryName: "Chile",
    heroText: "Viña del Mar, una de las ciudades costeras más famosas del mundo.",
    body: [
      "Viña del Mar, una de las ciudades costeras más famosas del mundo, con calles estrechas llenas de encanto. Cerca del Casino de Viña del Mar (10 min caminando), el muelle Vergara (15 min) y la Quinta Vergara, sede del Festival de Viña del Mar desde 1960 (20 min).",
    ],
    attractions: [],
    // No dedicated destination photos for Viña del Mar on the source site;
    // reusing the Esencia Hotel Boutique gallery as the city banner/gallery.
    images: [
      "/images/esencia/entrada.webp",
      "/images/esencia/patio-trasero.webp",
      "/images/esencia/comedor.webp",
    ],
    hotelIds: ["esencia"],
  },
];

export const countries: Country[] = [
  {
    id: "espana",
    slug: "espana",
    name: "España",
    citySlugs: ["madrid"],
  },
  {
    id: "chile",
    slug: "chile",
    name: "Chile",
    citySlugs: ["santiago", "san-pedro-de-atacama", "vina-del-mar"],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCitiesByCountry(countrySlug: string): City[] {
  return cities.filter((c) => c.countrySlug === countrySlug);
}
