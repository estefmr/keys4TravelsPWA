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
    hotelIds: ["cassa-lepage", "mine-hotel"],
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
      "Santiago es la capital de Chile, un país rico en bellezas naturales y ganador del premio a Mejor Destino de Turismo de Aventura de los World Travel Awards en varias oportunidades. Y es en Santiago donde está el mejor punto para entrar al país si vienes desde el extranjero.",
      "Es una metrópolis con muchas cosas a su favor: transporte público de calidad, amplia oferta hotelera, parques al aire libre y buena vida nocturna.",
    ],
    sections: [
      {
        title: "Cómo llegar",
        paragraphs: [
          "Casi todos los viajeros llegan en avión, al Aeropuerto Internacional Arturo Merino Benítez (SCL), en la zona de Pudahuel. Desde ahí tienes varias formas de llegar al hotel.",
          "Lo más cómodo es el taxi: busca siempre los oficiales, en la salida de las terminales nacional o internacional. La otra opción cómoda es pedirle a tu alojamiento el servicio de pick up, aunque sale bastante más caro —entre 30 y 100 USD de media, según cuántos vayan y dónde esté el hotel.",
          "Lo más económico es el transporte público. Si llegas en vuelo internacional, tras recoger las maletas ve a la salida de la derecha: la puerta 5 es buena opción, porque al cruzarla verás en diagonal los paraderos de los autobuses que van al centro. Si tu vuelo es nacional llegas a la terminal T1 y tienes que bajar al primer nivel para tomarlos. El pasaje cuesta unos 3 USD y el trayecto dura unos 25 minutos hasta la estación de metro Pajaritos, donde conviene bajarse para combinar con el metro y llegar más rápido al hotel.",
        ],
      },
      {
        title: "Dónde alojarse",
        paragraphs: [
          "Las mejores zonas son las del sector Oriente: Providencia, Las Condes y Vitacura. En algunas zonas del centro también hay excelentes alternativas, y de hecho varios de los mejores hoteles boutique de la ciudad están ahí. Son las más buscadas por su conectividad y por lo bien situadas que quedan para moverse.",
        ],
      },
      {
        title: "Cómo moverse por la ciudad",
        paragraphs: [
          "Santiago puede darse el lujo de tener una de las redes de metro más limpias de Sudamérica, y sin duda es la manera más rápida de moverse.",
          "Para usarlo hay que comprar una tarjeta recargable, que venden en todas las estaciones. Lo bueno del sistema es que con una sola tarjeta pueden viajar varias personas: basta validar el viaje en el torniquete cada vez que alguien la use.",
          "La red sigue creciendo, pero para llegar a ciertos lugares tendrás que combinar con los buses, que también funcionan bien; hoy hay algunas líneas que operan 24 horas.",
        ],
      },
      {
        title: "Qué visitar",
        paragraphs: [
          "Pueblito Los Dominicos: hacia 1980 se permitió a un puñado de artesanos vender sus creaciones alrededor de la capilla San Vicente Ferrer, y más tarde se les cedió un espacio junto a las caballerizas. Así nació este pueblito, hoy un recinto privado y abierto a todo el mundo, ideal para comprar recuerdos.",
          "Plaza y Boulevard Ñuñoa: una de las plazas con más afluencia de la ciudad, con muy buena comida y un ambiente fiestero. Siempre ha tenido más locales que turistas. El Boulevard Ñuñoa es un pasaje que reúne más de diez restaurantes con propuestas distintas y una gran variedad de tragos y cocteles.",
          "Cerro San Cristóbal: probablemente el cerro más turístico de Santiago y uno de los parques urbanos más grandes del mundo. Tiene zoológico, teleférico, jardín japonés y un mirador en lo más alto. Es de los sitios preferidos por los santiaguinos para hacer deporte al aire libre. Se entra por el barrio Bellavista o por la avenida Pedro de Valdivia.",
          "Paseo Orrego Luco y Barrio Lastarria: buena comida y un ambiente muy animado si vas un fin de semana por la noche.",
          "Parque Bicentenario y Parque Araucano: dos de los grandes parques de la ciudad, perfectos para un pícnic, caminar o simplemente descansar al aire libre.",
        ],
      },
      {
        title: "Escapadas de un día",
        paragraphs: [
          "Un día en Santiago no alcanza para un viajero de verdad, pero si andas con el tiempo justo hay panoramas para todos los gustos, del turismo urbano y lento al de aventura.",
          "El Cajón del Maipo: imagina un camino de tierra con una colosal formación montañosa a un lado y una inmensa reserva artificial de agua al otro. Eso es el Embalse El Yeso, a unas dos horas de la ciudad. Los mejores meses para ir son entre noviembre y febrero, y conviene ir bien abrigado: las ráfagas de viento enfrían bastante.",
          "El centro histórico: el casco central puede sorprenderte muy positivamente. El Palacio de La Moneda y su centro cultural, el Centro Gabriela Mistral, el Museo Nacional de Bellas Artes, la Biblioteca Nacional y La Chascona cuentan buena parte de la historia del país. Caminar sus calles llenas de comercio, mezclándote con los locales, es una experiencia que no conviene saltarse; como en cualquier ciudad que visitas por primera vez, vale la pena hacerlo con un guía.",
          "Isla Negra: llamada así por Pablo Neruda. Un lugar tranquilo y bonito, no solo por el museo, sino por la serenidad de la costa. Está a 90 minutos de Santiago y tiene un clima frío, con unos 16° de media.",
          "Yerba Loca: el santuario natural más grande de la región metropolitana, camino a Farallones. Se pueden hacer caminatas, deportes de montaña y avistamiento de aves. Puedes ir por el día o quedarte en alguna de sus zonas de camping si quieres conocerlo a fondo.",
          "Visitar una viña: Chile es conocido en el mundo por sus vinos, y muy cerca de Santiago puedes visitar Errázuriz, Cousiño Macul, Matetic, Antiyal, Concha y Toro, Villard y Santa Rita. En cualquiera de ellas aprenderás cómo se obtienen los mejores vinos del país, sus cepas y la historia que hay detrás de cada una: temas políticos, religiosos y hasta de terror envuelven el nacimiento de algunas de las viñas más famosas.",
        ],
      },
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
    // Santiago no muestra la sección "Atractivos y lugares": sus tres rutas
    // siguen en routes.ts (y sus páginas /rutas/… siguen existiendo), pero no
    // se enlazan desde aquí. Quita esta línea para volver a mostrarlas.
    hideRoutes: true,
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
      "San Pedro de Atacama es una joya encantadora en el corazón del desierto chileno. Fundado en 1450, es uno de los pueblos más antiguos del país y destaca por su autenticidad: calles de tierra, casitas de adobe y hoteles acogedores perfectamente integrados con el entorno. No es casualidad que haya sido reconocido en repetidas ocasiones como el principal destino de aventura de Sudamérica.",
      "Es también la puerta de entrada para los miles de viajeros que cada año se aventuran a explorar las tierras desérticas que lo rodean. Y ofrece un espectáculo celestial incomparable: sus atardeceres y sus noches, bajo cielos despejados y estrellados, son un deleite inolvidable en cualquier estación del año.",
    ],
    sections: [
      {
        title: "Cómo llegar",
        paragraphs: [
          "San Pedro ha sobrevivido en el tiempo gracias a lo alejado que está de las grandes ciudades, lo que no le ha impedido recibir viajeros de todo el mundo. Para llegar hay que tomar un vuelo hasta Calama, a unos 100 km, y aterrizar en su Aeropuerto El Loa (CJC). Está a unos 1.500 km de Santiago, menos de dos horas de vuelo comercial en la ruta SCL–CJC.",
          "El aeropuerto es pequeño y la mayoría de los vuelos, de ida y de vuelta, salen entre las primeras horas del día y el mediodía. Encontrar la salida no tiene misterio: al bajar del avión caes directamente en las puertas de embarque y las salas de espera, y solo tienes que bajar las escaleras mecánicas que quedan a tu izquierda, retirar el equipaje y salir por la única puerta.",
          "Al salir verás muchas compañías de alquiler de autos y empresas de traslado que te llevan hasta la puerta de tu alojamiento. Varios hoteles ofrecen también ese servicio, privado o incluido en sus paquetes. Un dato útil: las empresas de traslado dan descuento si pagas la ida y el retorno en un solo pago.",
          "Vayas en auto alquilado o en transfer, son unos 80 minutos de carretera por la Ruta 23. Si conduces tú, ve muy atento: es una vía muy transitada por camiones de gran tamaño y se han reportado accidentes por conductores que se distraen.",
        ],
      },
      {
        title: "Cómo moverse por el pueblo",
        paragraphs: [
          "La mejor opción, sin duda, es la bicicleta: sigue siendo lo más rápido, fácil y económico, y en estas calles de tierra resulta sumamente práctico. Hay muchas para alquilar en el pueblo.",
          "Conviene tener algo de experiencia pedaleando, porque el terreno árido y la altura de San Pedro —2.400 m s. n. m.— pueden ser un desafío inesperado. El consejo es pedalear suave y constante: te cansarás menos y disfrutarás más del paseo.",
          "Las compañías de arriendo ponen a tu disposición todo el equipo necesario para moverte con seguridad, tanto por el pueblo como hacia las afueras. Y queda la opción número uno, la que siempre recomendamos al llegar a un destino nuevo: ¡caminar!",
        ],
      },
      {
        title: "Cuánto tiempo quedarse",
        paragraphs: [
          "Con 1.600 km de longitud, ya te puedes imaginar la cantidad de zonas que hay para explorar en este desierto único en el mundo. Lo que vas a necesitar aquí es tiempo.",
          'Nuestra recomendación es quedarte al menos 6 días completos, para poder practicar el "turismo lento" y conocer los parajes más impresionantes con calma y detenimiento.',
        ],
      },
      {
        title: "Un poco de historia",
        paragraphs: [
          "Declarado Zona Típica el 28 de marzo de 1980, la historia de este pueblo se remonta miles de años atrás. Hacia el 10.000 a. C. empiezan a registrarse los primeros indicios del paso de civilizaciones nómadas por la región: comunidades que habitaban en cuevas y se dedicaban a la caza de animales característicos de la zona, como llamas y alpacas.",
          "Con los años la región fue acogiendo civilizaciones cada vez más sedentarias, gracias a una flora y fauna abundantes que les daban alimento y refugio. Hacia el segundo milenio ya eran comunidades completamente sedentarias, con la ganadería de llamas y el cultivo del maíz como principales actividades económicas. Más adelante la textilería y la cerámica ganaron relevancia, y la minería del cobre se consolidó como un recurso valioso que enriqueció a los habitantes de la zona.",
          "En 1450 el imperio inca toma posesión de la región de Atacama, lo que trajo consigo el perfeccionamiento de la metalurgia y la arquitectura, además de la adoración a las altas cumbres y al Sol. Todos esos cambios elevaron mucho el grado de desarrollo de la zona.",
          "En 1540 Atacama es conquistada por el imperio español, que trae el cristianismo a estas tierras. En 1557 se construye el templo de San Pedro, en el mismo lugar donde lo vemos hoy, aunque con las reconstrucciones y ampliaciones que fueron necesarias por los sismos e incendios de los siglos siguientes.",
        ],
      },
      {
        title: "La iglesia de San Pedro",
        paragraphs: [
          "Es una edificación que se conserva bastante bien, justo al lado de la Plaza de San Pedro de Atacama y casi frente a la municipalidad. De un blanco muy llamativo, con dos capillas laterales y una única nave de 41 metros de largo, es uno de los lugares que tienes que conocer en el pueblo.",
          "Fue declarada Monumento Histórico en 1951 y su campanario se construyó en 1965. En su interior todavía se puede ver, a través de un cristal, el suelo original de la iglesia.",
        ],
      },
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
