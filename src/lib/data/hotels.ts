import type { Hotel } from "@/lib/types";

/**
 * Static hotel content, adapted from https://keys4travels.com/.
 *
 * NOTE for Estefania: the source site names this property "Castillo Rojo
 * Hotel Boutique". The original brief mentioned "Hotel Diablo Rojo" — if
 * that is actually a different property, just change `name` (and `slug`
 * if you want a different URL) below; nothing else needs to change.
 *
 * Fotos: cada array `images` apunta a archivos que YA existen en
 * `public/images/<carpeta>/`. La primera foto del array es la que se usa
 * como banner/portada y como miniatura en las tarjetas. Para agregar más
 * fotos después, basta con soltar el archivo en esa carpeta y añadir su
 * ruta al array.
 */
export const hotels: Hotel[] = [
  {
    id: "castillo-rojo",
    slug: "castillo-rojo",
    name: "Castillo Rojo Hotel Boutique",
    citySlug: "santiago",
    cityName: "Santiago",
    countryName: "Chile",
    address:
      "Av. Constitución 195, esquina Antonia López de Bello, Barrio Bellavista, Santiago",
    summary:
      "Una mansión centenaria declarada Monumento Nacional, restaurada como hotel boutique en pleno Barrio Bellavista.",
    description: [
      "Elegante hotel boutique instalado en una mansión centenaria declarada Monumento Nacional, construida en 1923 como residencia de la familia aristocrática Lehuedé y restaurada desde 2010 conservando su estilo art nouveau de los años 20.",
      "Cuenta con 19 habitaciones exclusivas repartidas en categorías Economy, Classic, Premium y Suites, de 15 a 37 m², estacionamiento privado, sábanas de algodón egipcio, desayuno incluido (7:30–10:30), estación de té, un wine bar íntimo y una terraza abierta las 24 horas.",
      "A pasos de La Chascona (casa de Pablo Neruda), el Patio Bellavista y el Cerro San Cristóbal.",
    ],
    // 4 fotos reales. La primera es la portada del hotel.
    images: [
      "/images/castillo-rojo/castillo-rojo-hotel-boutique.jpg",
      "/images/castillo-rojo/patio.jpg",
      "/images/castillo-rojo/lobby-front-desk.jpg",
      "/images/castillo-rojo/habitacion-classic.jpg",
    ],
  },
  {
    id: "casa-solcor",
    slug: "casa-solcor",
    name: "Casa Solcor Bed&Breakfast Boutique",
    citySlug: "san-pedro-de-atacama",
    cityName: "San Pedro de Atacama",
    countryName: "Chile",
    summary: '"Tu hogar en el desierto": un B&B boutique en pleno desierto de Atacama.',
    description: [
      'Un B&B boutique en pleno desierto de Atacama, descrito por sus dueños como "tu hogar en el desierto". La propiedad tiene más de 3.300 m² repartidos en dos casas (Algarrobo y Chañar), con un marcado toque familiar.',
      "Tiene un patio central con zona de estar, piscina, dos cocinas disponibles las 24 horas, living y comedor de desayuno (8:00–10:30), tres habitaciones nuevas y jacuzzi bajo reserva. Ofrece bicicletas de montaña gratuitas y organiza tours a Valle de la Luna, Géiser del Tatio y las Lagunas Altiplánicas.",
      "15 habitaciones en tres categorías: Kala (15 m²), Suite Selti (17 m²) y Suite Ckari (22 m², con terraza privada). Todas con caja fuerte, baño privado, aire acondicionado, USB, parlante Bluetooth, minibar y enchufes universales.",
    ],
    // 4 fotos reales. La primera es la portada del hotel.
    images: [
      "/images/casa-solcor/casa-solcor-bb.jpg",
      "/images/casa-solcor/piscina-y-casa-2.jpg",
      "/images/casa-solcor/patio.jpg",
      "/images/casa-solcor/habitacion-kala.jpg",
    ],
  },
  {
    id: "esencia",
    slug: "esencia",
    name: "Esencia Hotel Boutique",
    citySlug: "vina-del-mar",
    cityName: "Viña del Mar",
    countryName: "Chile",
    summary:
      "Un refugio simple pero elegante, escondido en las calles angostas de Viña del Mar.",
    description: [
      "Un refugio simple pero elegante, escondido en las calles angostas de una de las ciudades costeras más famosas del mundo. Es un proyecto personal de sus dueños chileno-canadienses, Adri y Cristian, que supervisaron cada detalle del desarrollo.",
      "Las habitaciones están en el segundo piso de la residencia principal, con un comedor acogedor en la planta baja, y habitaciones adicionales, decoradas con esmero, en un sector posterior. Todas cuentan con escritorio, mesas de noche, baño privado, TV y una selección de vinos locales; hay servicio a la habitación para ocasiones especiales según disponibilidad.",
      "El diseño combina estética minimalista con elegancia oriental. Sin estacionamiento en el hotel. A 10 minutos del Casino de Viña del Mar, 15 del muelle Vergara y 20 de la Quinta Vergara (sede del Festival de Viña del Mar desde 1960).",
    ],
    // 5 fotos reales. La primera es la portada del hotel.
    images: [
      "/images/esencia/entrada.jpg",
      "/images/esencia/descanso.jpg",
      "/images/esencia/comedor.jpg",
      "/images/esencia/habitacion-1.jpg",
      "/images/esencia/patio-trasero.jpg",
    ],
  },
];

export function getHotelBySlug(slug: string): Hotel | undefined {
  return hotels.find((h) => h.slug === slug);
}

export function getHotelsByCitySlug(citySlug: string): Hotel[] {
  return hotels.filter((h) => h.citySlug === citySlug);
}
