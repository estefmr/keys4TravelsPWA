import type { Route } from "@/lib/types";

/**
 * Rutas y atractivos de cada destino, con su pantalla propia en
 * `/rutas/<slug>`. El texto y las fotos vienen de la sección "Atractivos y
 * lugares" de keys4travels.com; solo se han corregido erratas de acentuación
 * del original y se han ordenado las tarifas, que allí quedaban partidas en
 * dos columnas sin encabezado.
 *
 * Las fotos viven en `public/images/rutas/<slug>/`. El orden de este array es
 * el orden en que salen las tarjetas dentro de cada destino.
 */
export const routes: Route[] = [
  // ─────────────────────────── Santiago de Chile ───────────────────────────
  {
    id: "santiago-historico",
    slug: "santiago-historico",
    citySlug: "santiago",
    kicker: "Ruta 1",
    title: "Santiago Histórico",
    teaser: "Nueve paradas a pie por los 500 años de historia del centro.",
    cover: "/images/rutas/santiago-historico/portada.jpg",
    intro: [
      "En Keys4Travels fomentamos el turismo Lento (SLOW), o esa modalidad donde solo un viajero de verdad se permite hacer. Acá te dejo una ruta que no les tomará más de una hora hacerla caminando si lo que quieres es pasar y ver algunos sitios de interés de Santiago, pero si lo que están buscando es conectarse con esta ciudad, entonces deberás conocer un poco de sus 500 años de historia.",
    ],
    stops: [
      {
        title: "Iglesia de los Sacramentinos",
        paragraphs: [
          "La iglesia de los Sacramentinos nos da la bienvenida a esta ruta. La historia de esta basílica se remonta al año 1908, cuando la consagración de los Sacramentinos llega a Chile, quienes al poco tiempo encargan al arquitecto chileno Ricardo Larraín Bravo la creación de un templo similar al Sacre Couer de París. La basílica consta de dos iglesias, la cripta subterránea de unos 1500 metros cuadrados que se construye entre los años 1912 y 1920. Entre los años 1920 y 1934 se construye la iglesia superior al estilo romano bizantino.",
          "Para el año 1985 sufre estragos producto de un gran sismo, debilitando su estructura y tumbando una gran cruz de 3 metros que había sido diseñada por el mismo arquitecto Larraín. En el centro se pueden observar finos parquets chilenos y vitrales franceses y argentinos, creando un interior perfectamente elegante, y su construcción se diferencia de la basílica del Sagrado Corazón de París en que en esta se usó hormigón, mientras que en Francia predominó el uso de la piedra. En 1991 esta basílica es declarada Monumento Histórico.",
        ],
        photos: [
          {
            src: "/images/rutas/santiago-historico/sacramentinos-fachada.jpg",
            label: "Fachada",
          },
          {
            src: "/images/rutas/santiago-historico/sacramentinos-basilica.jpg",
            label: "La basílica",
          },
          {
            src: "/images/rutas/santiago-historico/sacramentinos-nave.jpg",
            label: "La nave",
          },
        ],
      },
      {
        title: "Parque Almagro",
        paragraphs: [
          "Se ubica en el centro de Santiago, a solo 3 minutos caminando de la Iglesia de los Sacramentinos, entre las calles San Ignacio y San Diego, a un costado el Museo Palacio Cousiño y sus jardines y al otro la Iglesia de los Sacramentinos. En sus inicios este lugar sirvió como punto de descanso para los viajeros provenientes del sur del país, durante la época colonial por allá en el siglo XVII. Más tarde, en el siglo XX, ya se utilizaba como una plaza de abasto llamada Mercado de San Diego, donde se vendían productos sureños.",
          "En la actualidad, en la esquina de San Diego con Santa Isabel se pueden observar 2 puntos históricos de la zona. Primero encontramos una feria de libros usados que se instaló y permanece en el mismo sitio desde la década de 1970. El otro paraje son las instalaciones y el campus de la Universidad Central de Chile, con unos 80 mil metros cuadrados aproximadamente, siendo una de las universidades privadas más prestigiosas del país, fundada en el año 1982.",
        ],
      },
      {
        title: "Museo Palacio Cousiño",
        paragraphs: [
          "Este palacio de estilo neoclásico consta de 2 pisos y 27 habitaciones y se ubica en la esquina de las calles Dieciocho y Santa Isabel. Fue construido y terminado en el año 1878 por un arquitecto francés poco conocido en el mundo, pero de grandes e impecables obras, llamado Paul Lathoud, por órdenes de Luis Cousiño para la Sra. Isidora Goyenechea, quien sería viuda de Luis Cousiño antes de la terminación del palacio.",
          "En 1940 el inmueble es traspasado a la municipalidad de Santiago, sirviendo de residencia a visitas internacionales como Charles de Gaulle, el presidente italiano Saragat y el Rey Balduino de Bélgica, entre otros. En 1968 sufre un serio incendio en la segunda planta, y no es hasta el año 1977 cuando reabre sus puertas como museo.",
        ],
        bullets: [
          "Nacionales y residentes: 3.000 CLP (4 USD)",
          "Estudiantes nacionales: 1.000 CLP (1.5 USD)",
          "Adulto mayor de 60 años: 1.000 CLP (1 USD)",
          "Turistas extranjeros: 4.000 CLP (5 USD)",
          "Estudiantes extranjeros: 3.000 CLP (4 USD)",
          "Gratis: niños menores de 10 años",
        ],
        photos: [
          {
            src: "/images/rutas/santiago-historico/palacio-cousino.jpg",
            label: "El palacio",
          },
        ],
      },
      {
        title: "Paseo Bulnes",
        paragraphs: [
          "Antiguamente era un camino de tierra que servía para que los viajeros continuaran su rumbo hacia el norte después de atravesar el Parque Almagro. Este corredor peatonal fue creado en 1940 y la intención era mantener una estrecha relación estética con los edificios gubernamentales de la época, en un emplazamiento que ya era referencia geocultural. También se buscaba unificar el sur con el centro de la ciudad y posteriormente el norte, no sin antes contemplar el Palacio de la Moneda.",
          "Hoy en día, este corredor muestra las marcas dejadas por el golpe de Estado realizado en el año 1973, las cuales se mantienen como recordatorio de lo sucedido en esa época tan trágica para el país.",
        ],
        photos: [
          {
            src: "/images/rutas/santiago-historico/paseo-bulnes.jpg",
            label: "El paseo",
          },
          {
            src: "/images/rutas/santiago-historico/paseo-bulnes-2.jpg",
            label: "Hacia La Moneda",
          },
        ],
      },
      {
        title: "Cripta de Bernardo O’Higgins",
        paragraphs: [
          "Es un mausoleo de mármol dedicado a este prócer de la historia chilena. Militar y político chileno, recibió el título de director supremo por su desempeño en el proceso de independencia de Chile y gracias a él el país tiene un himno nacional y una bandera, los cuales siguen hasta nuestros días. Este monumento fúnebre se inaugura en el año 1869 en el cementerio general. Hoy en día se puede visitar la cripta totalmente gratis, ubicada en el subterráneo de la Plaza de la Ciudadanía, donde además se muestra la historia militar de Chile en una pequeña exposición.",
        ],
        photos: [
          {
            src: "/images/rutas/santiago-historico/cripta-ohiggins.jpg",
            label: "La cripta",
          },
        ],
      },
      {
        title: "Palacio de la Moneda",
        paragraphs: [
          "También conocida como La Moneda, es la sede de la presidencia de la República de Chile. En el año 1784 comenzó la construcción de este edificio. Se ubica entre las calles Morandé y Teatinos a sus costados, y al norte con la calle Agustinas y al sur con la calle Moneda. Fue Joaquín Toesca a quien se le encomienda realizar los planos y el diseño de lo que sería en definitiva este palacio presidencial, en el año 1786, pero en el año 1799 Toesca muere a los 54 años luego de una vida amorosa bien tormentosa, donde su esposa intentó terminar con su vida. Sus restos fueron enterrados en la Iglesia de San Francisco.",
          "El palacio fue finalmente inaugurado en el año 1805, aún con algunas partes de su estructura inconclusas. 40 años más tarde, el presidente Bulnes ordena que el palacio sea utilizado como sede del Gobierno y lugar de residencia de los jefes de Estado. Entre los años 1822 y 1850 el palacio sufrió muchos estragos producto de los sismos registrados en esa época, y en 1855 el ala donde los presidentes tenían sus residencias sufre un incendio. Pero no es sino hasta 1973 cuando este coloso de la arquitectura sufre los peores daños registrados en su larga historia: durante el golpe de Estado de dicho año las pérdidas fueron incalculables, siendo el Acta de la Independencia el documento de mayor valor para este país que se destruiría en los hechos mencionados.",
          "El Centro Cultural La Moneda se encuentra justo debajo de este palacio y es recomendable visitarlo.",
        ],
        photos: [
          {
            src: "/images/rutas/santiago-historico/palacio-la-moneda.jpg",
            label: "La Moneda",
          },
        ],
      },
      {
        title: "Plaza de la Constitución",
        paragraphs: [
          "Es una explanada que está al norte del Palacio de la Moneda, entre las calles Moneda y Agustinas. Esta plaza cuenta con varios caminos, formando una X que se unen en una zona central. Debajo de esta se encuentran los estacionamientos. La plaza finalmente se termina de construir para el año 1935 y a lo largo de su historia ha recibido los nombres de Plaza de la Moneda, Portales y el nombre actual, que es Plaza de la Constitución, esto gracias a las 10 constituciones que ha tenido Chile.",
          "En la actualidad sirve de punto de encuentro para muchos tours caminados, punto de referencia para quienes se encuentran en la zona o simplemente un área para descansar en las zonas verdes que tiene la plaza.",
        ],
        photos: [
          {
            src: "/images/rutas/santiago-historico/plaza-de-la-constitucion.jpg",
            label: "La plaza",
          },
        ],
      },
      {
        title: "Museo Chileno de Arte Precolombino",
        paragraphs: [
          "Lo que comenzó con la idea de una colección privada para Sergio Larraín García Moreno terminó por transformarse en lo que conocemos hoy como el Museo Precolombino. Esta institución se funda en 1981, pero su historia se remonta al año 1555, cuando este edificio fue usado como solar; en el año 1635 se utiliza como Convictorio y para el año 1802 el gobernador Luis Muñoz de Guzmán ordena que se construya la sede de la Real Aduana. En 1845 se transforma en la Corte Suprema de Justicia hasta el año 1968, cuando es destruido por completo por un gran incendio.",
          "En este museo se exponen piezas únicas basadas en la historia y cultura del continente americano, resaltando su colección textil andina que data de 3.000 años de antigüedad, piezas de las culturas mayas y aztecas, así como obras provenientes del Amazonas y el Caribe y una impresionante colección de arte de las distintas culturas y pueblos de Chile. Esta casa fue por décadas una de las más importantes del país, ya que se dice fue la única que tenía dos pisos.",
        ],
        bullets: [
          "Nacionales y residentes: 2.000 CLP (3 USD)",
          "Estudiantes nacionales: 1.000 CLP (1.5 USD)",
          "Turistas extranjeros: 10.000 CLP (13 USD)",
          "Estudiantes extranjeros: 5.000 CLP (6 USD)",
          "Gratis: niños menores de 10 años y adultos mayores de 60 años",
        ],
        photos: [
          {
            src: "/images/rutas/santiago-historico/precolombino-fachada.jpg",
            label: "El edificio",
          },
          {
            src: "/images/rutas/santiago-historico/precolombino-sala.jpg",
            label: "Una sala",
          },
          {
            src: "/images/rutas/santiago-historico/precolombino-piezas.jpg",
            label: "Las piezas",
          },
        ],
      },
      {
        title: "Plaza de Armas",
        paragraphs: [
          "En 1541 un señor de nombre Pedro de Valdivia es quien se encarga de fundar la capital chilena en un lugar que hoy se conoce como kilómetro 0. Este punto era un campo de entrenamiento militar durante la época de la conquista española, pero con el pasar de los años se fueron construyendo edificaciones gubernamentales, convirtiéndose en el núcleo social y administrativo de la ciudad.",
          "Por una parte tenemos la Catedral Metropolitana de Santiago, ocupando casi toda una manzana y construida en el año 1566. El edificio del Correo Central comienza a construirse en 1882 y actualmente son las oficinas de Correos de Chile, siendo hoy un monumento histórico desde el año 1976. Justo al lado de este encontramos el Museo Histórico Nacional, mismo sitio donde funcionó la Real Audiencia, máximo tribunal colonial del país para esos tiempos. Por último, en la esquina de la calle Monjitas y el paseo 21 de Mayo se encontraba la antigua cárcel colonial, lo que hoy es conocido como la Municipalidad de Santiago.",
          "Plaza de Armas sigue siendo uno de los lugares más visitados de la capital chilena por la fuerte historia que encierran sus edificios y su atmósfera.",
        ],
        photos: [
          {
            src: "/images/rutas/santiago-historico/plaza-armas-catedral.jpg",
            label: "Catedral de Santiago",
          },
          {
            src: "/images/rutas/santiago-historico/plaza-armas-museo-historico.jpg",
            label: "Museo Histórico Nacional",
          },
        ],
      },
    ],
  },
  {
    id: "de-lo-antiguo-a-lo-moderno",
    slug: "de-lo-antiguo-a-lo-moderno",
    citySlug: "santiago",
    kicker: "Ruta 2",
    title: "De lo antiguo a lo moderno",
    teaser:
      "Un día entero, del lugar donde se fundó la ciudad al barrio más bohemio.",
    cover: "/images/rutas/de-lo-antiguo-a-lo-moderno/portada.jpg",
    intro: [
      "Acá te dejo otra ruta con la cual puedes pasar todo un día conociendo algunos de los lugares más visitados e históricos de la ciudad de Santiago. En esta ruta podrás conocer desde el lugar donde se fundó la ciudad hasta llegar a uno de los barrios más bohemios y Open Mind de la capital.",
      "¡Recuerda! Yo enfoco el Turismo Slow como pilar de un verdadero viajero, es por ello que te invito a que camines esta ruta con calma, admirando los alrededores y conociendo la vida y la historia de Santiago a través de los siguientes lugares que te estoy dejando a continuación.",
    ],
    stops: [
      {
        title: "Barrio París – Londres",
        paragraphs: [
          "Por una parte, para el año 1920 la ciudad de Santiago crecía paulatinamente cada vez más y más; por la otra, los religiosos de la Orden de San Francisco estaban teniendo ciertos problemas económicos, razón por la cual venden una buena porción de sus tierras, solucionando así muchos de estos problemas. Algunas de estas tierras fueron adquiridas por el Estado, delegando a los arquitectos Roberto Araya y Ernesto Holzman la responsabilidad de crear un espacio que evocara ese estilo medieval característico de las ciudades y pueblos de Europa.",
          "El barrio cubre 4 manzanas que, desde su diseño con calles estrechas y curvas, buscaba romper con el damero característico de la ciudad de Santiago de ese entonces. Los edificios aledaños no comparten el mismo diseño plasmado por Araya y Holzman, pero sí mantienen una armonía visual producto de los trabajos realizados por grandes arquitectos chilenos como Ricardo Larraín Bravo (Iglesia de los Sacramentinos) y Alberto Cruz Montt (Banco Central de Chile, 1928).",
          "Actualmente se considera un barrio bohemio donde se consiguen hostales, pequeños cafés y hasta lo que era la sede de la DINA (la Gestapo de Pinochet, Cuartel Yucatán), que fue un centro de detención y tortura durante el régimen dictatorial impuesto en 1973.",
        ],
        photos: [
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/paris-londres-esquina.jpg",
            label: "Esquina París-Londres",
          },
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/paris-londres-calle.jpg",
            label: "Calle Londres",
          },
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/paris-londres-dina.jpg",
            label: "Cuartel Yucatán",
          },
        ],
      },
      {
        title: "Iglesia de San Francisco",
        paragraphs: [
          "Hablar de esta iglesia nos llevará unos 5 siglos atrás en la historia, pues estamos hablando de la edificación que aún se mantiene en pie con la fecha registrada más antigua de Santiago y la segunda a nivel nacional. Todo comienza a mediados del año 1570, cuando en un lugar lejano y peligroso (a las afueras de las murallas de la ciudad) se construye un edificio con base de adobe y paja, trabajo realizado por los indígenas, la cual fue destruida en 1583 producto de un terremoto, siendo este el primer intento por construir la Iglesia de San Francisco.",
          "Luego de esto, en el año 1595 se retoman los trabajos de construcción para dar por finalizada esta gran iglesia en el año 1618, ya con muros de piedra y techos que la hacían más resistente. A lo largo de los años este recinto sobrevivió con solidez a los terremotos de los años 1647 (Terremoto Magno) y 1730, este último hizo que se demoliera por completo el edificio producto del daño sufrido.",
          "Este histórico de Santiago ha visto no solo desastres naturales y remodelaciones a su estructura, sino que también se ha adaptado al ensanchamiento de la avenida Alameda en los años 40. Para el año 1951 esta iglesia es declarada Monumento Histórico. En 1969 se inaugura el Museo Colonial en lo que antes era el edificio del convento, donde se conservan los lienzos que narran la vida de San Francisco, hechos en Perú en el año 1684. En los años 1985 y 2010 sufre daños debido a los terremotos ocurridos en dichos años, haciendo que su estructura sea reparada y restaurada una vez más.",
        ],
        photos: [
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/san-francisco-entrada.jpg",
            label: "La entrada",
          },
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/san-francisco-nave.jpg",
            label: "La nave",
          },
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/san-francisco-museo.jpg",
            label: "Museo Colonial",
          },
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/san-francisco-jardines.jpg",
            label: "Los jardines",
          },
        ],
      },
      {
        title: "Biblioteca Nacional de Chile",
        paragraphs: [
          "Gustavo García del Postigo fue el arquitecto responsable de presentar lo que hoy conocemos como la Biblioteca Nacional de Chile. Este es el principal centro bibliográfico del país y se comienza a construir para el año 1813, y desde esa fecha tiene como tarea la recopilación de libros; durante el siglo XIX esta tarea fue consolidada.",
          "Entre las bibliotecas que enriquecieron el gran catálogo se encuentran la biblioteca de Benjamín Vicuña Mackenna y la de Andrés Bello, entre otros, conformando un verdadero tesoro bibliográfico. En 1854 se crea el primer catálogo impreso de los libros de la Biblioteca Nacional, en 1861 se crea la Sección de Manuscritos a partir del material recibido de los juzgados y en 1871 realiza la primera Estadística Bibliográfica chilena.",
          "En el año 1913 se inicia la construcción del actual edificio en los terrenos que antiguamente servían para el Convento de las Monjas Claras. Este edificio también pasó a la historia por ser uno de los primeros en los que se empleaba el hormigón armado desde sus cimientos, lo que le sirvió para soportar los terremotos, y en su interior se nota el nivel de exigencia en la selección de los materiales para su construcción, lo que permite que aún hoy se mantenga en perfectas condiciones si se le compara con otras edificaciones públicas de la ciudad. El edificio fue declarado Monumento Histórico en el año 1976.",
        ],
        photos: [
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/biblioteca-edificio.jpg",
            label: "El edificio",
          },
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/biblioteca-sala.jpg",
            label: "Sala de lectura",
          },
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/biblioteca-interior.jpg",
            label: "El interior",
          },
        ],
      },
      {
        title: "Cerro Santa Lucía",
        paragraphs: [
          "Es un parque urbano ubicado en pleno corazón de Santiago, limitando al sur por la principal arteria vial, Av. Libertador Bernardo O’Higgins (Alameda), y al norte con la calle Merced. Muy cerca de este cerro se encuentra la estación de metro Santa Lucía, perteneciente a la Línea 1 (roja), y también la Biblioteca Nacional de Chile.",
          "El cerro Santa Lucía es uno de los paseos y atractivos más interesantes que visitar en la capital chilena. Con sus 69 metros de altura y una vista privilegiada del centro cívico, se entiende cómo Pedro de Valdivia funda la ciudad de Santiago en el año 1541 a los pies de este cerro, al que nombró Santa Lucía. En el año 1814, y bajo la orden del último gobernador de Chile, Casimiro Marcó del Pont, lo convierte en una especie de fortaleza realista, construyendo los fuertes Marcó y Santa Lucía (castillo González y castillo Hidalgo respectivamente).",
          "En este cerro se encuentra la bella Fuente de Neptuno, una capilla de estilo neogótico, caminerías y un jardín japonés, el cual se construye con la colaboración del gobierno japonés. El cerro es declarado Monumento Nacional en la categoría de Monumentos Históricos en el año 1983.",
        ],
        photos: [
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/santa-lucia-neptuno.jpg",
            label: "Fuente de Neptuno",
          },
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/santa-lucia-castillo.jpg",
            label: "Castillo Hidalgo",
          },
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/santa-lucia-castillo-2.jpg",
            label: "Desde el cerro",
          },
        ],
      },
      {
        title: "Museo de Bellas Artes",
        paragraphs: [
          "Fue fundado en el año 1880 con el nombre de Museo Nacional de las Pinturas, gracias a la necesidad del escultor José Miguel Blanco de reunir bajo un mismo techo todas las piezas de arte que estaban dispersas en diferentes edificios institucionales. En 1901 el arquitecto chileno-francés Émile Jéquier resulta ganador para el proyecto de construcción de dicho museo, quien finalmente en el año 1910 inaugura el palacio de Bellas Artes, inspirándose en el Petit Palais de París.",
          "El museo cuenta con una planta subterránea de 60 metros cuadrados, un hall central que da la bienvenida a sus visitantes y un segundo piso, todos destinados a exposiciones y actividades culturales. La inmensa cúpula de cristal sobre el museo brinda la suficiente luz natural para observar cada detalle en el hall central y fue diseñada y construida en Bélgica hace más de 100 años.",
        ],
        photos: [
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/bellas-artes-fachada.jpg",
            label: "La fachada",
          },
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/bellas-artes-hall.jpg",
            label: "El hall central",
          },
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/bellas-artes-subterranea.jpg",
            label: "Sala subterránea",
          },
        ],
      },
      {
        title: "Barrio Lastarria",
        paragraphs: [
          "Este barrio existe casi desde la fundación de la ciudad de Santiago en 1541 y, como la mayoría de muchas zonas, comenzó a moldearse gracias a la construcción de una iglesia, la Iglesia de la Veracruz, la cual se terminó de construir en el año 1857, y en este sector solo vivía la elite de la ciudad.",
          "Esta zona, declarada como Típica en 1996 y catalogada como una de las más cool del mundo, es el primer barrio gay-friendly de Santiago, que combinado con los bares, cafés y hoteles boutique hacen de esta zona uno de los lugares que siempre recomendaría visitar en Santiago.",
        ],
        photos: [
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/lastarria.jpg",
            label: "El barrio",
          },
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/lastarria-calle.jpg",
            label: "Calle Lastarria",
          },
          {
            src: "/images/rutas/de-lo-antiguo-a-lo-moderno/lastarria-veracruz.jpg",
            label: "Iglesia de la Veracruz",
          },
        ],
      },
    ],
  },
  {
    id: "de-museo-en-museo",
    slug: "de-museo-en-museo",
    citySlug: "santiago",
    kicker: "Ruta 3",
    title: "De museo en museo",
    teaser: "Cinco museos de Quinta Normal, a unos pasos unos de otros.",
    cover: "/images/rutas/de-museo-en-museo/portada.jpg",
    intro: [
      "Los museos siempre tendrán algo que nos sorprenderá de una u otra manera, es por ello que en esta ruta te propongo que salgas a recorrer parte de la zona de Quinta Normal y sus alrededores. En este barrio encontrarás varios museos que harán que quieras quedarte toda una tarde recorriéndolos, ya que están a unos cuantos pasos de distancia y ¡créeme!, son muy interesantes para conocer un poco del pasado de la bella capital chilena.",
    ],
    stops: [
      {
        title: "Museo de la Memoria y los Derechos Humanos",
        paragraphs: [
          "El 21 de mayo de 2007 es anunciada la creación de este museo por quien fuera presidenta de la república para ese tiempo, Michelle Bachelet. Casi 3 años más tarde, el 11 de enero de 2010, el museo de tres pisos es inaugurado. Este recinto está dedicado a las víctimas de los Derechos Humanos durante la dictadura militar de Augusto Pinochet, siendo el lugar donde se conservan y exhiben los documentos que muestran un pasado oscuro en la historia de Chile.",
          "En el museo, de varios pisos, se muestran periódicos y fotografías de la época. El MMDH es un proyecto de reparación moral a las miles de víctimas de ejecuciones, desapariciones y torturas ocasionadas por los cuerpos de seguridad, como la DINA. El museo tiene una entrada conectada con la estación de metro Quinta Normal, línea verde (5), y es totalmente gratis visitarlo.",
        ],
        bullets: ["Tiempo para recorrerlo: 2 a 3 horas", "Entrada gratuita"],
        photos: [
          {
            src: "/images/rutas/de-museo-en-museo/memoria.jpg",
            label: "El museo",
          },
          {
            src: "/images/rutas/de-museo-en-museo/memoria-edificio.jpg",
            label: "El edificio",
          },
          {
            src: "/images/rutas/de-museo-en-museo/memoria-muro.jpg",
            label: "Muro de las víctimas",
          },
          {
            src: "/images/rutas/de-museo-en-museo/memoria-piso-3.jpg",
            label: "Tercer piso",
          },
        ],
      },
      {
        title: "Museo Nacional de Historia Natural",
        paragraphs: [
          "Siendo uno de los museos más antiguos del continente, el Museo Nacional de Historia Natural (MNHN) es fundado por el francés Claudio Gay en el año 1830. Desde el año 1876 ocupa el edificio que vemos hoy y que fue una de las obras de Paul Lathoud (Museo Palacio Cousiño). El MNHN abre sus puertas de forma gratuita desde el año 2015 y en él verás salas dedicadas a la Paleontología, la Botánica y la Antropología, entre otras. También cuenta con exposiciones permanentes y temporales.",
          "Este museo, al igual que otros, ha tenido una vida llena de altibajos, siendo la década de 1920 una de las más complejas por serios problemas económicos que llevaron a despidos masivos y recortes salariales de gran importancia. El recinto cuenta con dos pisos, pero solo el primer piso es accesible al público en general.",
        ],
        bullets: ["Tiempo para recorrerlo: 2 a 2:30 horas", "Entrada gratuita"],
        photos: [
          {
            src: "/images/rutas/de-museo-en-museo/historia-natural-fachada.jpg",
            label: "La fachada",
          },
          {
            src: "/images/rutas/de-museo-en-museo/historia-natural-galeria.jpg",
            label: "La galería",
          },
          {
            src: "/images/rutas/de-museo-en-museo/historia-natural-ballena.jpg",
            label: "Esqueleto de ballena",
          },
          {
            src: "/images/rutas/de-museo-en-museo/historia-natural-sala-marina.jpg",
            label: "Sala marina",
          },
        ],
      },
      {
        title: "Museo de la Educación Gabriela Mistral",
        paragraphs: [
          "El que inicialmente se llamase Museo Pedagógico de Chile fue creado en el año 1941 con la idea de poder recopilar el material necesario para exhibir gran parte de la historia educativa pública y privada en Chile a través de la Exposición Retrospectiva de la Enseñanza, organizada en ese mismo año y razón por la cual se crea dicho museo.",
          "En este museo verás todo el proceso evolutivo de la educación chilena a través de murales, libros y un sinfín de piezas que se exponen de manera permanente. En 2006 este museo cambia su nombre a Museo de la Educación Gabriela Mistral (MEGM), tomando el nombre de quien fuera la primera Premio Nobel de Literatura de Chile y Latinoamérica. En el año 2016 se hacen renovaciones, mejorando así los espacios de circulación, la iluminación y hasta el área interna llamada el Patio de los Tilos. El edificio es declarado Monumento Nacional el 2 de junio de 1981.",
        ],
        bullets: ["Tiempo para recorrerlo: 2 horas"],
        photos: [
          {
            src: "/images/rutas/de-museo-en-museo/gabriela-mistral-entrada.jpg",
            label: "Entrada lateral",
          },
          {
            src: "/images/rutas/de-museo-en-museo/gabriela-mistral-sala.jpg",
            label: "Una sala",
          },
          {
            src: "/images/rutas/de-museo-en-museo/gabriela-mistral-archivador.jpg",
            label: "El archivador",
          },
          {
            src: "/images/rutas/de-museo-en-museo/gabriela-mistral-patio.jpg",
            label: "Patio de los Tilos",
          },
        ],
      },
      {
        title: "Museo Ferroviario de Santiago",
        paragraphs: [
          "Este museo no es lo que comúnmente uno se espera de un museo, con piezas en una vitrina mostrando algo importante que en un punto fue parte de la historia del país. El Museo Ferroviario es más un espacio al aire libre donde podrás ver las locomotoras o trenes que fueron piezas claves en el desarrollo de Chile desde finales de 1800 hasta finales de 1900.",
          "En el museo se puede apreciar la tercera locomotora más antigua que existe en Chile, también una de las locomotoras de mayor complejidad mecánica en el mundo para comienzos del siglo XX, y podrás además entrar al interior de uno de los vagones de pasajeros de la época.",
        ],
        bullets: [
          "Tiempo para recorrerlo: 2 horas",
          "Nacionales, residentes y extranjeros: 1.500 CLP (1.70 USD)",
          "Adulto mayor, estudiantes y niños: 1.000 CLP (1.20 USD)",
        ],
        photos: [
          {
            src: "/images/rutas/de-museo-en-museo/ferroviario-locomotora-211.jpg",
            label: "Locomotora 211",
          },
          {
            src: "/images/rutas/de-museo-en-museo/ferroviario-locomotora-306.jpg",
            label: "Locomotora 306",
          },
          {
            src: "/images/rutas/de-museo-en-museo/ferroviario-alco-1940.jpg",
            label: "Locomotora ALCO 1940",
          },
          {
            src: "/images/rutas/de-museo-en-museo/ferroviario-tanque-3349.jpg",
            label: "Tipo tanque 3349",
          },
        ],
      },
      {
        title: "Museo Artequin de Santiago",
        paragraphs: [
          "Antes de comenzar a comentarles del museo quiero mencionar un dato interesante, y me refiero al edificio donde está este museo, pues se trata del Pabellón París, un hermoso edificio que choca y resalta dentro del sector de Quinta Normal. Este edificio se construyó para la Exposición Universal de París en 1889 y sus materiales fueron el hierro y el zinc. Se trasladó a Chile después de dicha exposición, rearmándose en el mismo lugar donde se encuentra actualmente, como si de un Lego estuviésemos hablando.",
          "Es Monumento Nacional desde el año 1986 y desde 1992 funciona como el Museo Artequin. En este museo se pueden observar exposiciones temporales y con una excelente audioguía para que no te pierdas de cada detalle.",
        ],
        bullets: [
          "Tiempo para recorrerlo: 2:30 horas",
          "Nacionales, residentes y extranjeros: 1.500 CLP (1.70 USD)",
          "Adulto mayor, estudiantes y niños: 1.000 CLP (1.20 USD)",
        ],
        photos: [
          {
            src: "/images/rutas/de-museo-en-museo/artequin-fachada.jpg",
            label: "La fachada",
          },
          {
            src: "/images/rutas/de-museo-en-museo/artequin-escaleras.jpg",
            label: "Escaleras internas",
          },
          {
            src: "/images/rutas/de-museo-en-museo/artequin-sala.jpg",
            label: "La sala",
          },
        ],
      },
    ],
  },

  // ───────────────────────── San Pedro de Atacama ─────────────────────────
  {
    id: "geiseres-del-tatio",
    slug: "geiseres-del-tatio",
    citySlug: "san-pedro-de-atacama",
    title: "Los Géiseres del Tatio",
    teaser: "A 4.200 msnm, el tercer campo de géiseres más grande del mundo.",
    cover: "/images/rutas/geiseres-del-tatio/portada.jpg",
    intro: [
      "Este es un lugar imprescindible cuando visites San Pedro de Atacama. Un auténtico santuario natural que merece ser explorado. Prepárate para la experiencia, ya que se encuentra a una imponente altitud de 4.200 msnm, donde la majestuosidad de la naturaleza te dejará sin aliento.",
      "Los Géiseres del Tatio constituyen el tercer campo geotérmico de géiseres más grande del mundo, solo superado por el Parque Nacional Yellowstone (EE.UU.) y la Reserva Natural de Kronotski (Rusia). Recomiendo visitar este impresionante lugar acompañado de un guía especializado, ya que sus indicaciones serán fundamentales para garantizar una experiencia segura y plenamente disfrutable. También podrás ir por tu cuenta, solo debes salir muy temprano desde San Pedro (05:00 h). El trayecto es de una hora.",
      "Para comprender mejor de qué se trata este lugar, un géiser es una fuente natural que expulsa gases y agua a temperaturas extremadamente altas de manera intermitente e impredecible. Este fenómeno se debe a la actividad volcánica, donde el agua entra en contacto con el magma ubicado en el subsuelo, generando espectáculos fascinantes que dejan sin palabras a quienes tienen la fortuna de presenciar este impresionante fenómeno natural.",
      "Esta zona es verdaderamente impresionante, especialmente si la visitas temprano por la mañana, cuando se alcanza el máximo punto de ebullición de las fuentes. Las temperaturas en este lugar suelen estar por debajo de cero, por lo que es fundamental ir bien abrigado con varias capas de ropa. Los vapores que emanan pueden alcanzar alturas de hasta 10 metros, ofreciendo un espectáculo natural único.",
    ],
    photos: [
      { src: "/images/rutas/geiseres-del-tatio/amanecer.jpg", label: "Al amanecer" },
      {
        src: "/images/rutas/geiseres-del-tatio/campo-geotermico.jpg",
        label: "El campo geotérmico",
      },
      { src: "/images/rutas/geiseres-del-tatio/vapores.jpg", label: "Los vapores" },
      { src: "/images/rutas/geiseres-del-tatio/altura.jpg", label: "Altura de un géiser" },
      { src: "/images/rutas/geiseres-del-tatio/aguas.jpg", label: "Las aguas" },
    ],
    stops: [
      {
        title: "Antes de ir",
        paragraphs: [
          "Las temperaturas del agua que emerge alcanzan aproximadamente los 86 °C, lo que representa un nivel suficiente para causar graves lesiones e incluso la muerte. Un trágico ejemplo ocurrió en 2004, cuando un visitante, en su afán por obtener la “foto perfecta”, perdió el equilibrio y cayó en uno de los géiseres, un incidente que destaca entre los más lamentables registrados.",
          "A pesar del peligro que implica visitar los Géiseres del Tatio, existen numerosas medidas de seguridad e información disponible para los visitantes, lo que hace que esta experiencia sea muy segura.",
          "La fascinación por estos lugares es inmensa, por lo que siempre resulta fundamental seguir las indicaciones del personal capacitado al visitar este entorno natural, ya que estamos frente a la majestuosa fuerza de la madre tierra.",
        ],
        bullets: [
          "Evita inhalar los gases que emanan de los géiseres: contienen una cantidad extremadamente alta de bacterias.",
          "No intentes tocar las aguas que fluyen de estos, por las mismas razones.",
          "Ve bien abrigado con varias capas de ropa: las temperaturas suelen estar por debajo de cero.",
        ],
      },
    ],
  },
  {
    id: "lagunas-de-baltinache",
    slug: "lagunas-de-baltinache",
    citySlug: "san-pedro-de-atacama",
    title: "Lagunas Escondidas de Baltinache",
    teaser: "Siete pozones de sal en el Llano de la Paciencia, a 55 min del pueblo.",
    cover: "/images/rutas/lagunas-de-baltinache/portada.jpg",
    intro: [
      "Las Lagunas de Baltinache son un conjunto de siete pozones situados en la planicie conocida como El Llano de la Paciencia, a aproximadamente 55 minutos en auto desde el pueblo de San Pedro de Atacama. Estos pozos se forman gracias a las aguas subterráneas provenientes de la Cordillera de la Sal, que rodean y alimentan estas lagunas. El acceso al lugar puede realizarse de manera independiente o a través de alguna de las empresas de turismo disponibles en la zona.",
      "De los siete pozones que conforman este complejo, solo uno está habilitado para el uso de los viajeros. Por motivos de conservación y debido al tamaño de los demás, se ha decidido mantener cerradas las seis lagunas restantes. En el lugar, los visitantes pueden admirar estas impresionantes lagunas recorriendo un sendero de madera durante aproximadamente 30 minutos, seguido de un paseo sobre la propia superficie de sal. Es fundamental que los viajeros respeten los senderos establecidos para evitar dañar el delicado suelo, formado a lo largo de miles de años.",
      "Se comenta que la concentración de sales en estas lagunas supera incluso a la del Mar Muerto (aunque aún no he tenido la oportunidad de visitarlo). Además, el contraste entre el blanco resplandeciente del suelo y el azul turquesa de las lagunas crea una escena espectacular, ideal para la fotografía.",
    ],
    photos: [
      { src: "/images/rutas/lagunas-de-baltinache/lagunas.jpg", label: "Las lagunas" },
      { src: "/images/rutas/lagunas-de-baltinache/pozon.jpg", label: "El pozón" },
      {
        src: "/images/rutas/lagunas-de-baltinache/laguna-pequena.jpg",
        label: "Laguna pequeña",
      },
      { src: "/images/rutas/lagunas-de-baltinache/sendero.jpg", label: "El sendero" },
      {
        src: "/images/rutas/lagunas-de-baltinache/sendero-de-sal.jpg",
        label: "Sendero de sal",
      },
    ],
    stops: [
      {
        title: "Recomendaciones",
        paragraphs: [
          "Otros dos consejos importantes que quiero darte son los siguientes: lleva dinero en efectivo. Aunque los problemas con las conexiones y los sistemas de pago ya no son tan frecuentes, siempre es mejor estar preparado en caso de que ocurran fallos inesperados. Además, el camino hacia las lagunas está bien señalizado, pero hay tramos donde el terreno está en muy malas condiciones. Si decides ir por tu cuenta, lo ideal sería hacerlo en un auto todoterreno para mayor comodidad. Si optas por un tour operador, solo concéntrate en relajarte y disfrutar del viaje.",
          "A partir de junio de 2024 está prohibido bañarse en Baltinache, como medida para su conservación y debido al uso inadecuado de químicos por parte de algunos visitantes.",
        ],
        bullets: [
          "No trates de sumergirte en las heladas aguas.",
          "Las paredes y el fondo de la laguna tienen formaciones bastante filosas: anda con precaución donde pisas y te apoyas.",
          "Evita secarte con una toalla al salir de las aguas de la laguna.",
          "En caso de que te haya entrado agua salada en los ojos, evita a toda costa rascarte: podrías empeorar el dolor.",
          "La salinidad del agua puede ser perjudicial si te quedas durante un tiempo prolongado dentro de la laguna.",
        ],
      },
    ],
  },
  {
    id: "museo-del-meteorito",
    slug: "museo-del-meteorito",
    citySlug: "san-pedro-de-atacama",
    title: "Museo del Meteorito",
    teaser: "La mayor colección de rocas siderales de Chile, bajo un domo.",
    cover: "/images/rutas/museo-del-meteorito/portada.jpg",
    intro: [
      "El Museo del Meteorito alberga la mayor colección de estas fascinantes rocas siderales en todo Chile. Su historia comenzó en 1983, cuando los hermanos Edmundo y Rodrigo, originarios de Atacama, emprendieron recorridos por el vasto desierto de la región. Durante más de 40 años, dedicaron su esfuerzo a recolectar estas extraordinarias piezas, dando vida a una de las colecciones más impresionantes del país.",
      "El recinto es un domo donde se muestra una única sala en la cual verás un grupo de pantallas y piezas expuestas que, con la ayuda de un sistema de audioguía en varios idiomas, te va narrando los distintos módulos que presenta la colección. El recorrido consiste en ir descubriendo el enigma que envuelve a los fragmentos del universo más antiguos que alguna vez podrás llegar a tener en tus manos.",
      "La información sobre los meteoritos que se presenta en este museo es realmente abundante e interesante. En primer lugar, podrás descubrir cómo nuestro planeta tiene la capacidad de protegernos de la caída de estas rocas espaciales, que ingresan a la atmósfera terrestre a una impresionante velocidad promedio de 137.000 km/h. Además, se ofrece una explicación concisa sobre el cráter de Monturaqui, el astroblema mejor conservado de Sudamérica, descubierto en 1962 al sur del Salar de Atacama.",
    ],
    photos: [
      { src: "/images/rutas/museo-del-meteorito/entrada.jpg", label: "La entrada" },
      { src: "/images/rutas/museo-del-meteorito/sala.jpg", label: "La sala" },
      {
        src: "/images/rutas/museo-del-meteorito/fragmento.jpg",
        label: "Un fragmento",
      },
      { src: "/images/rutas/museo-del-meteorito/condritos.jpg", label: "Condritos" },
      { src: "/images/rutas/museo-del-meteorito/galaxia.jpg", label: "La galaxia" },
    ],
    stops: [
      {
        title: "Para tu visita",
        paragraphs: [
          "El museo se encuentra en la calle Tocopilla 201 y abre sus puertas de martes a domingo, desde las 17:00 hasta las 20:00 horas. Recomiendo dedicar aproximadamente 45 minutos para disfrutar plenamente del recorrido.",
          "Al finalizar la visita, tendrás la oportunidad de adquirir fragmentos de meteoritos, acompañados de un certificado que garantiza su autenticidad. Cabe destacar que todos los hallazgos expuestos en este museo cuentan con certificación de la NASA, el CEREGE de la Universidad de Marsella en Francia y la Universidad de California en Los Ángeles, Estados Unidos.",
        ],
        bullets: [
          "Entrada: 6.000 CLP (6 €), sin reserva previa.",
          "Martes a domingo, de 17:00 a 20:00 h. Calle Tocopilla 201.",
          "Tiempo para recorrerlo: 45 minutos.",
          "La temporada alta abarca los primeros y los últimos tres meses del año: habrá más gente.",
        ],
      },
    ],
  },
];

export function getRouteBySlug(slug: string): Route | undefined {
  return routes.find((r) => r.slug === slug);
}

export function getRoutesByCitySlug(citySlug: string): Route[] {
  return routes.filter((r) => r.citySlug === citySlug);
}
