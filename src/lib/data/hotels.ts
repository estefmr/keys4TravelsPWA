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
    // Tanda que envió la clienta por Drive, descargada al repo por los
    // mismos motivos que la de Casa Solcor: cache offline y no depender
    // de que la carpeta siga compartida.
    gallery: [
      { src: "/images/castillo-rojo/el-hotel.jpg", label: "El hotel" },
      {
        src: "/images/castillo-rojo/entrada-al-lobby.jpg",
        label: "Entrada al lobby",
      },
      {
        src: "/images/castillo-rojo/living-room-y-bar.jpg",
        label: "Living room y bar",
      },
      { src: "/images/castillo-rojo/habitacion.jpg", label: "Habitación" },
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
    // Tanda que envió la clienta por Drive, ya descargada al repo para que
    // funcione sin conexión y no dependa de que el Drive siga compartido.
    gallery: [
      { src: "/images/casa-solcor/piscina.jpg", label: "Piscina" },
      { src: "/images/casa-solcor/atardecer.jpg", label: "Atardecer" },
      {
        src: "/images/casa-solcor/area-de-descanso.jpg",
        label: "Área de descanso",
      },
      { src: "/images/casa-solcor/habitacion-1.jpg", label: "Habitación 1" },
      { src: "/images/casa-solcor/habitacion-2.jpg", label: "Habitación 2" },
      { src: "/images/casa-solcor/cocina.jpg", label: "Cocina" },
      { src: "/images/casa-solcor/bicicletas.jpg", label: "Bicicletas" },
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
  {
    id: "cassa-lepage",
    slug: "cassa-lepage",
    name: "Cassa Lepage Art Hotel",
    citySlug: "buenos-aires",
    cityName: "Buenos Aires",
    countryName: "Argentina",
    address:
      "Pasaje Belgrano, barrio de Monserrat (Casco Histórico), Buenos Aires",
    summary:
      "Un hotel con museo propio en el subsuelo: 300 piezas arqueológicas halladas bajo el edificio, en pleno Casco Histórico.",
    description: [
      "La historia del lugar se remonta a 1580, cuando Juan de Garay repartió terrenos tras la segunda fundación de Buenos Aires. La propiedad fue Jardín de la Casa del Obispo en 1756, pasó por varios dueños —entre ellos el comerciante Martín de Álzaga— y en 1881 sirvió de sede del Primer Círculo de la Prensa. En 1891 se construyó un nuevo edificio en el Pasaje Belgrano para iniciar la industria cinematográfica nacional: ese edificio es hoy el Cassa Lepage Art Hotel, y fue aquí donde Carlos Gardel comenzó su vida en el mundo de la cultura. En 1932 se renovó por completo y se le dio su imagen Art Déco.",
      "La entrada es el propio Pasaje Belgrano, que años atrás era un paseo comercial. En el lobby hay piezas del edificio original y pisos de cristal reforzado que dejan ver el suelo antiguo y los puntos donde aparecieron muchas de las piezas del museo.",
      "Todas las habitaciones tienen TV, minibar, baño privado, amenidades, aire acondicionado, escritorio, decoración minimalista y un gran aislamiento acústico. Cada lavamanos es distinto: fueron diseñados por separado, a mano, con cierta similitud a los azulejos portugueses. Las camas adicionales no caben en todas las habitaciones, así que conviene avisar cuántas personas viajan.",
      "Arriba está la terraza —con un mural dedicado a Carlos Gardel que ocupa toda una pared— donde se sirve el desayuno buffet hasta las 10:30 h, y en lo más alto un jardín nativo con plantas endémicas de Latinoamérica que funciona como un pequeño pulmón en medio de la ciudad.",
      "Lo que lo hace único es su museo en el subsuelo: durante las excavaciones previas a la restauración (2005, 2008 y 2009) aparecieron más de 900 piezas —cristalería, vasijas, platos, botellas, joyería—, y unas 300 se exponen de forma permanente, datadas, algunas con más de dos siglos. El acceso es ilimitado para los huéspedes; quien no lo sea puede visitarlo con cita previa en recorridos guiados.",
      "Check in desde las 15:00 h y check out hasta las 11:00 h. No es pet friendly. Tarifas desde 160 USD + impuestos en su web oficial (cassalepage.com), con opción de traslado desde el aeropuerto.",
    ],
    // 4 fotos reales de keys4travels.com. La primera es la portada.
    images: [
      "/images/cassa-lepage/cassa-lepage-art-hotel.jpg",
      "/images/cassa-lepage/lobby.jpg",
      "/images/cassa-lepage/habitaciones-con-estilo.jpg",
      "/images/cassa-lepage/museo.jpg",
    ],
    gallery: [
      { src: "/images/cassa-lepage/pasaje-belgrano.jpg", label: "Pasaje Belgrano" },
      { src: "/images/cassa-lepage/mural-a-gardel.jpg", label: "Mural a Gardel" },
      { src: "/images/cassa-lepage/areas-comunes.jpg", label: "Áreas comunes" },
      { src: "/images/cassa-lepage/descanso.jpg", label: "Descanso" },
      { src: "/images/cassa-lepage/habitacion.jpg", label: "Habitación" },
      {
        src: "/images/cassa-lepage/balcon-de-habitacion.jpg",
        label: "Balcón de habitación",
      },
      {
        src: "/images/cassa-lepage/camas-adicionales.jpg",
        label: "Camas adicionales",
      },
      { src: "/images/cassa-lepage/tina-jacuzzi.jpg", label: "Tina jacuzzi" },
      { src: "/images/cassa-lepage/bano-suite.jpg", label: "Baño de la suite" },
      { src: "/images/cassa-lepage/lavamanos.jpg", label: "Lavamanos" },
      { src: "/images/cassa-lepage/excavaciones.jpg", label: "Excavaciones" },
      { src: "/images/cassa-lepage/subsuelo.jpg", label: "Subsuelo" },
      { src: "/images/cassa-lepage/salas-del-museo.jpg", label: "Salas del museo" },
      {
        src: "/images/cassa-lepage/restos-de-porcelana.jpg",
        label: "Restos de porcelana",
      },
    ],
  },
  {
    id: "mine-hotel",
    slug: "mine-hotel",
    name: "Mine Hotel Boutique",
    citySlug: "buenos-aires",
    cityName: "Buenos Aires",
    countryName: "Argentina",
    address: "Gorriti 4770, Palermo Soho, Buenos Aires",
    summary:
      "En pleno Palermo Soho: 20 habitaciones, piscina climatizada y un equipo que te hace sentir en casa.",
    description: [
      "En pleno barrio de Palermo Soho encontramos un hotel boutique con muchísimo encanto, sencillez y elegancia al mismo tiempo, y una cordialidad que no tiene nada que envidiar a ningún hotel del mundo. Su propuesta tiene estilo propio y un personal amigable, atento y muy cercano a sus huéspedes.",
      "Aparte de su ubicación a pasos de los locales más bohemios y chic de Palermo, es una propiedad incluida en la guía Michelin por sus confortables habitaciones. Está a 20 minutos del Aeroparque y a unos 45 del Ezeiza: lo más sencillo es tomar un Uber o taxi en la puerta de cualquiera de los dos.",
      "Son 20 habitaciones distribuidas en 3 pisos, en 3 categorías que se diferencian sobre todo por el tamaño. Predominan los tonos claros —blanco y matices del beige—, sábanas de muchos hilos y un aislamiento acústico que asegura un buen descanso. Algunas habitaciones tienen ducha y otras tina o jacuzzi; todas llevan minibar, caja de seguridad, TV de alta definición, aire acondicionado, escritorio y teléfono.",
      "Para socializar hay una gran sala de estar llena de libros, un pequeño jardín zen con fuente ideal para leer, y el restaurante del primer piso donde se sirve el desayuno —caben unas 20 personas— y también se puede cenar. La joya del descanso está afuera: una piscina climatizada, mejor de diciembre a marzo, con toda su área pensada para pasar la tarde o celebrar algo.",
      "El equipo del hotel elaboró su propia guía de bares, restaurantes y dónde ir de fiesta en Palermo, con las distancias a cada sitio; se pide en recepción, si no te la dan primero. También ofrecen traslados de ida y vuelta al aeropuerto.",
      "Check in desde las 14:00 h y check out hasta las 11:00 h.",
    ],
    // 4 fotos reales de keys4travels.com. La primera es la portada.
    images: [
      "/images/mine-hotel/mine-hotel-boutique.jpg",
      "/images/mine-hotel/lobby.jpg",
      "/images/mine-hotel/habitacion-matrimonial.jpg",
      "/images/mine-hotel/piscina.jpg",
    ],
    gallery: [
      { src: "/images/mine-hotel/barra-restaurante.jpg", label: "Barra y restaurante" },
      { src: "/images/mine-hotel/tv-y-lectura.jpg", label: "TV y lectura" },
      { src: "/images/mine-hotel/business-center.jpg", label: "Business center" },
      { src: "/images/mine-hotel/patio-interior.jpg", label: "Patio interior" },
      { src: "/images/mine-hotel/areas-comunes.jpg", label: "Áreas comunes" },
      {
        src: "/images/mine-hotel/restaurante-para-desayunar.jpg",
        label: "Restaurante del desayuno",
      },
      {
        src: "/images/mine-hotel/piscina-area-de-descanso.jpg",
        label: "Área de descanso",
      },
      { src: "/images/mine-hotel/bano.jpg", label: "Baño" },
      { src: "/images/mine-hotel/tina-jacuzzi.jpg", label: "Tina jacuzzi" },
    ],
  },
];

export function getHotelBySlug(slug: string): Hotel | undefined {
  return hotels.find((h) => h.slug === slug);
}

export function getHotelsByCitySlug(citySlug: string): Hotel[] {
  return hotels.filter((h) => h.citySlug === citySlug);
}
