import type { City, Country } from "@/lib/types";

/**
 * Static destinations content, adapted from https://keys4travels.com/.
 * Edit copy directly here — no CMS o base de datos.
 *
 * Fotos: cada array `images` apunta a archivos que YA existen en
 * `public/images/<carpeta>/`. La primera foto del array es la que se usa
 * como banner/portada. Para agregar más fotos después, basta con soltar el
 * archivo en esa carpeta y añadir su ruta al array.
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
    // Sin fotos aún: España sigue en documentación, así que la carpeta
    // `public/images/madrid/` está vacía y este destino no está enlazado
    // desde la navegación. Fotos pendientes (de keys4travels.com):
    // palacio-de-cibeles, puente-de-toledo, plaza-de-la-villa,
    // catedral-de-almudena, parque-el-capricho, posada-del-peine.
    // Al soltarlas en esa carpeta, añade aquí sus rutas .jpg.
    images: [],
    hotelIds: [],
    comingSoon: true,
  },
  {
    id: "buenos-aires",
    slug: "buenos-aires",
    name: "Buenos Aires",
    countrySlug: "argentina",
    countryName: "Argentina",
    heroText:
      "Buenos Aires, Argentina — la puerta de entrada al país del tango, donde el excelente vino y los cortes de carne más exquisitos son parte esencial de la vida cotidiana.",
    body: [
      "En el sur del continente americano se encuentra una de las ciudades más fascinantes que hemos tenido el privilegio de visitar. Pasear por la emblemática Avenida de Mayo, disfrutar del vibrante ambiente de Corrientes un viernes por la noche o deleitarse con una comida en el sofisticado Puerto Madero son solo algunas de las experiencias inolvidables que ofrece esta metrópolis cosmopolita.",
      "Buenos Aires fue fundada en dos ocasiones: la primera en 1536, como Ciudad de la Santísima Trinidad y Puerto Santa María del Buen Ayre, y de nuevo en 1580, cuando Juan de Garay la refundó bajo el mandato de la Corona española. Fue precisamente en el área que hoy conocemos como Plaza de Mayo donde comenzó a desarrollarse la vida social y comercial de la ciudad. En 1880 se convirtió en Capital Federal y destacó entre las grandes metrópolis del mundo por la elegancia de su arquitectura, inspirada en el estilo parisino.",
      "Es una ciudad extensa y dinámica, con dos aeropuertos internacionales. El más importante es el Aeropuerto Internacional Ministro Pistarini —el de Ezeiza—, a más de 30 km del centro. El Aeroparque Jorge Newbery, en cambio, se especializa en vuelos regionales y domésticos, y está en pleno centro: desde ahí llegas a tu hospedaje en unos 15 minutos.",
      "Toda la ciudad tiene su encanto, pero hay dos zonas favoritas para alojarse. Palermo es el barrio de mayor crecimiento y modernización: excelente propuesta gastronómica (desde lo más pintoresco hasta estrellas Michelin, como la parrilla Don Julio), muy bien conectado con el resto de la ciudad y seguro para caminar. El Casco Histórico es simplemente hermoso, con una arquitectura de fuerte influencia europea —y en particular francesa— donde edificios como el Palacio Barolo evocan construcciones de siglos atrás.",
      "Para el clima: si quieres verano porteño, entre diciembre y febrero, con temperaturas altas y una humedad que puede hacer el calor sofocante. Junio, julio y agosto son los meses más fríos, pero recorrer la ciudad sigue siendo buena opción. Si buscas el equilibrio perfecto, marzo y abril (otoño) u octubre y noviembre (primavera): menos turistas, hoteles más accesibles y caminar resulta mucho más agradable.",
      "Caminar por Buenos Aires es toda una experiencia. Es muy limpia y organizada, con edificios históricos que hoy albergan bancos o sedes de gobierno, y con un obelisco que es quizá la estructura más representativa de la ciudad. La vida nocturna es peculiar: las fiestas recién entran en calor pasada la medianoche, y en muchos locales a las 2 o 3 de la madrugada se considera que la noche es joven.",
    ],
    attractions: [
      "Plaza de Mayo, Casa Rosada y Museo del Cabildo",
      "Avenida de Mayo",
      "Palacio Barolo",
      "Plaza del Congreso, Plaza Lorea y Plaza Mariano Moreno",
      "Galería Güemes y Confitería Ideal",
      "Librería El Ateneo Grand Splendid",
      "Teatro Colón",
      "El Obelisco y la Avenida Corrientes",
      "Palermo y Palermo Hollywood",
      "Monumento de los Españoles",
      "Lagunas artificiales de Palermo (Bosques de Palermo)",
      "Mafalda y sus amigos, en San Telmo",
      "Puerto Madero",
      "Barrio de Recoleta",
      "Cafés notables: Tortoni, Las Violetas y El Gato Negro",
      "Parrilla Don Julio (una estrella Michelin; reserva con meses de antelación)",
    ],
    // 8 fotos reales traídas de keys4travels.com/buenos-aires-argentina.
    // La primera es el banner de la ciudad.
    images: [
      "/images/buenos-aires/avenida-de-mayo.jpg",
      "/images/buenos-aires/casco-historico.jpg",
      "/images/buenos-aires/teatro-colon.jpg",
      "/images/buenos-aires/ateneo-grand-splendid.jpg",
      "/images/buenos-aires/monumento-de-los-espanoles.jpg",
      "/images/buenos-aires/laguna-artificial-de-palermo.jpg",
      "/images/buenos-aires/mafalda-y-sus-amigos.jpg",
      "/images/buenos-aires/aeroparque-jorge-newbery.jpg",
    ],
    // La web de origen sí tiene dos hoteles en Buenos Aires (Cassa Lepage Art
    // Hotel y Mine Hotel Boutique). Cuando tengamos sus fotos y fichas, se
    // añaden a `hotels.ts` y sus ids aquí.
    hotelIds: [],
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
    // 4 fotos reales. La primera es el banner de la ciudad.
    images: [
      "/images/santiago/atardecer-en-santiago.jpg",
      "/images/santiago/pueblito-de-los-dominicos.jpg",
      "/images/santiago/cerro-san-cristobal-por-bellavista.jpg",
      "/images/santiago/palacio-presidencial-casa-de-la-moneda.jpg",
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
    // 5 fotos reales. La primera es el banner de la ciudad.
    images: [
      "/images/san-pedro-de-atacama/calle-caracoles.jpg",
      "/images/san-pedro-de-atacama/iglesia-san-pedro-de-a.jpg",
      "/images/san-pedro-de-atacama/valle-luna.jpg",
      "/images/san-pedro-de-atacama/laguna-cejar-y-laguna-piedra.jpg",
      "/images/san-pedro-de-atacama/piedras-rojas-y-lagunas-altiplanicas.jpg",
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
    // La web de origen no tiene fotos propias de la ciudad: reutilizamos la
    // galería del Esencia Hotel Boutique como banner/galería de Viña del Mar.
    // La primera es el banner de la ciudad.
    images: [
      "/images/esencia/entrada.jpg",
      "/images/esencia/patio-trasero.jpg",
      "/images/esencia/comedor.jpg",
    ],
    hotelIds: ["esencia"],
  },
];

// El orden de este array es el orden en que aparecen las tarjetas en la
// pantalla Destinos: primero los países publicados, al final los que están
// "Próximamente".
export const countries: Country[] = [
  {
    id: "chile",
    slug: "chile",
    name: "Chile",
    citySlugs: ["santiago", "san-pedro-de-atacama", "vina-del-mar"],
  },
  {
    id: "argentina",
    slug: "argentina",
    name: "Argentina",
    citySlugs: ["buenos-aires"],
  },
  {
    id: "espana",
    slug: "espana",
    name: "España",
    // España aún no está lista para publicarse: la asesora/fotógrafa de la
    // clienta sigue documentando el destino. El contenido de Madrid ya está
    // completo en `cities` arriba (y su página /destinos/madrid sigue
    // existiendo) — solo lo dejamos sin enlazar desde la navegación pública.
    // Cuando el contenido esté listo, basta con volver a poner
    // citySlugs: ["madrid"] para reactivarlo.
    citySlugs: [],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCitiesByCountry(countrySlug: string): City[] {
  return cities.filter((c) => c.countrySlug === countrySlug);
}
