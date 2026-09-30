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
      "Santiago de Chile: la puerta perfecta a la aventura sudamericana.",
    // Texto de entrada del documento "Santiago. K4T App" de la clienta.
    body: [
      "Capital cosmopolita de un país multipremiado como Mejor Destino de Turismo de Aventura en los World Travel Awards, Santiago te recibe con transporte público eficiente, una oferta hotelera para todos los gustos, parques al aire libre y una vida nocturna que no se detiene. Aquí conviven la comodidad de una gran metrópolis con la calidez de sus barrios más buscados: Providencia, Las Condes, Ñuñoa y Vitacura, ideales para hospedarte por su conectividad y encanto.",
      "Llegar es fácil: desde el aeropuerto Arturo Merino Benítez puedes tomar un taxi oficial, solicitar el pick-up de tu hotel o moverte de forma económica en bus hasta conectar con el metro, una de las redes más limpias y modernas de Sudamérica. Una sola tarjeta recargable te permite recorrer toda la ciudad sin complicaciones, combinando metro y buses según lo necesites.",
      "La ciudad ofrece experiencias para cada tipo de viajero: el mirador y zoológico del Cerro San Cristóbal, las artesanías del Pueblito Los Dominicos, el ambiente fiestero de Ñuñoa y Barrio Lastarria, y un centro histórico donde el Palacio de La Moneda, el Museo de Bellas Artes y La Chascona narran la historia de Chile. Para quienes buscan aventura y desconexión, el Cajón del Maipo, la costa literaria de Isla Negra y el santuario de Yerba Loca son escapadas imperdibles a menos de 2 horas de la capital.",
      "Y si de sabores se trata, las viñas cercanas como Concha y Toro, Cousiño Macul o Santa Rita revelan los secretos detrás de los mejores vinos del mundo. Santiago no es solo un punto de llegada: es el inicio perfecto de tu próxima gran aventura.",
      "¡Vívelo con Keys4Travels!",
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
      {
        title: "Experiencias y desconexión",
        paragraphs: [
          "Hay momentos que quizás no se repitan en la vida; por eso, si tienes la oportunidad de hacer algo significativo en un destino, no dudes en hacerlo, o quizás te arrepientas más adelante.",
          "Santiago es una ciudad bastante segura para recorrerla por tu cuenta, pero las distancias pueden ser un tanto largas, así que alquilar un auto no es una idea descabellada, y recorrer algunos de los siguientes puntos por tu cuenta puede ser todo un planazo.",
          "Estas opciones también están disponibles contratando uno de los tour operadores que gustosamente contactaré por ti, o incluso en transporte público.",
          "Pomaire: imagínate comprar uno de los famosos «chanchitos» de greda como el regalo perfecto para alguien que quieres; entonces debes ir a Pomaire. A tan solo una hora en coche propio o alquilado se encuentra la zona de la greda y de la empanada al horno predilecta de chilenos y viajeros de todo el mundo. Este poblado se mantiene vivo gracias a una tradición alfarera de 300 años, en la que aún hoy se siguen creando vasijas, jarros y hasta alcancías en forma de cochinitos.",
          "Pomaire no solo es conocido por sus típicos jarrones, sino también por sus talleres textiles, que acompañan a las muchas creaciones que salen de sus talleres. Visitarlo es perfecto por su cercanía con Santiago, sus obras en greda (arcilla roja) y su gastronomía típica, y en medio día puedes ir y regresar para seguir disfrutando de una tarde de más aventuras y experiencias.",
          "Cajón del Maipo: ¿qué mejor manera de desconectarte y relajarte de la carga del día que pasar una noche rodeado de ríos, cumbres y cielos despejados a tan solo una hora de Santiago? El Cajón, como le dicen los santiaguinos, es el lugar por excelencia para un merecido descanso.",
          "Para disfrutar al máximo de esta experiencia te recomiendo dormir una noche en la zona: así puedes tomarte un delicioso chocolate o un helado en Casa Chocolate, visitar el Embalse El Yeso y recorrer el depósito y reserva de agua potable que surte a toda la ciudad de Santiago, tomarte unas horas para hacer un retiro y recibir los mejores tratamientos wellness, o simplemente contemplar el impresionante cielo nocturno en una cabaña de ensueño o en un tour de astrofotografía.",
          "El Cajón es sin duda la idea predilecta de muchos para conectarse con la naturaleza y desconectarse de la cotidianidad de la semana. Vale cada minuto.",
          "Embalse El Yeso: si no te animas a quedarte a dormir una noche en el Cajón del Maipo, puedes planificar una escapada de algunas horas durante el día hacia la principal reserva de agua de toda la Región Metropolitana. La entrada es gratuita, pero es recomendable ir en un vehículo con buena tracción, mejor del tipo rústico; también puedes ver las opciones con un tour operador de la zona. El embalse es inmenso e ideal para sacar fotos de otro planeta y contemplar lo imponente que puede ser la naturaleza y lo diminutos que podemos ser ante ella.",
          "Valle de Casablanca: nada como tomar uno de los mejores chardonnay en un ambiente fresco y cercano al mar. El Valle de Casablanca está en una zona muy estratégica si vas a Santiago o a Viña del Mar, ya que queda casi a mitad de la Ruta 68, que conecta ambas ciudades. Se caracteriza por sus exquisitos vinos blancos y pinot noir, gracias al clima frío y templado de la zona, y se puede visitar en una tarde sin problema, degustando una cata de vinos frescos y de aromas excepcionales.",
          "Viña del Mar y Valparaíso: aquí sí te recomiendo que te quedes por lo menos una noche, no para vivir experiencias de locura, sino para descansar, porque Viña y Valparaíso son ciudades que tienen mucho para mostrar.",
          "Valparaíso, por una parte, es un lienzo de colores: una ciudad que se mantiene viva, con sus característicos cerros, como el Alegre y el Concepción, atravesados por calles estrechas y empinadas que terminan en algunos de los miradores más hermosos de la Quinta Región. Caminar por Valparaíso es una aventura: cada esquina revela un mural y un callejón con historia, y los cafés bohemios, el arte y una suave brisa marina completan a la perfección la escapada a una de las zonas más visitadas por los viajeros.",
          "Viña del Mar, la ciudad jardín de la Quinta Región, es la ciudad hermana de Valparaíso. Se puede visitar en un día y tiene un urbanismo más moderno, que apuesta por un viajero más joven. Aquí se celebra todos los años el famoso Festival de Viña del Mar, que marca el fin del verano chileno, y su propuesta gastronómica, basada en productos del mar, es muy potente.",
          "También está el Muelle Vergara, con puestas de sol increíbles para fotos dignas de catálogo, y muy cerca de Viña se encuentran Reñaca y Concón, otra franja costera unida por el Pacífico con Viña y Valparaíso. Mucho más al norte está Zapallar, una zona un poco más exclusiva y con un estilo distinto al del resto. La importancia turística de estas localidades sigue creciendo con los años, y muchos viajeros vuelven a ellas temporada tras temporada: la zona es un pilar del turismo en Chile.",
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
  },
  {
    id: "san-pedro-de-atacama",
    slug: "san-pedro-de-atacama",
    name: "San Pedro de Atacama",
    countrySlug: "chile",
    countryName: "Chile",
    heroText:
      "San Pedro de Atacama: el corazón del desierto más árido del planeta te espera.",
    // Texto de entrada del documento "San Pedro de Atacama" de la clienta.
    body: [
      "Fundado en 1450, este pueblo milenario de calles de tierra y casas de adobe ha sido reconocido repetidamente como el principal destino de aventura de Sudamérica. Sus atardeceres y cielos estrellados, entre los más limpios del mundo, ofrecen un espectáculo celestial inolvidable durante casi todo el año.",
      "Llegar es sencillo: vuela hasta Calama (aeropuerto El Loa), a dos horas desde Santiago, y luego recorre unos 80 minutos por la Ruta 23 en auto de alquiler o transfer privado, muchos con descuento si reservas ida y vuelta. Una vez en el pueblo, la bicicleta es reina: rápida, económica y perfecta para explorar sus calles de tierra, aunque conviene tener experiencia, ya que la altura (2.400 m s. n. m.) y el terreno árido pueden sorprenderte. Y por supuesto, ¡caminar sigue siendo la mejor forma de descubrirlo todo!",
      "Con 1.600 km de extensión, San Pedro guarda paisajes para varios días de exploración; lo ideal es quedarse al menos 4 o 5 días y vivir el Turismo Slow con calma. El propio pueblo es una joya histórica: declarado Zona Típica en 1980, sus raíces se remontan siglos a. C., pasando por civilizaciones nómadas, el auge textil y minero, la llegada del imperio inca en 1450 y la conquista española en 1540. Su iglesia, construida en 1557 y declarada Monumento Histórico en 1951, sigue de pie junto a la plaza principal, testigo silencioso de siglos de historia.",
      "San Pedro de Atacama no es solo un destino: es un viaje en el tiempo bajo el cielo más despejado del mundo. ¡Vamos a descubrirlo juntos!",
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
