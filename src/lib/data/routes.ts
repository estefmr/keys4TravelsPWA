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
  // Lugares & Atractivos del documento "Santiago. K4T App" de la clienta, en
  // su mismo orden. La portada de cada ficha no se repite en su carrusel.
  {
    id: "barrio-paris-londres",
    slug: "barrio-paris-londres",
    citySlug: "santiago",
    title: "Barrio París-Londres",
    teaser: "Belleza, historia y memoria en el corazón de Santiago.",
    cover: "/images/rutas/barrio-paris-londres/hotel-paris-londres.webp",
    intro: [
      "En pleno centro histórico de Santiago, el barrio París-Londres es un pequeño rincón que parece transportado directamente desde el Barrio Latino de París. Construido en la década de 1920, este conjunto de dos cuadras adoquinadas combina fachadas europeas, balcones de hierro forjado y casonas de tres y cuatro pisos que contrastan con los rascacielos modernos a solo una cuadra de distancia.",
      "Pero este barrio no es solo una postal bonita: sus calles guardan también una parte oscura y valiente de la historia reciente de Chile. Durante la dictadura militar (1973-1990), el edificio de Londres 38 funcionó como centro clandestino de detención, un episodio doloroso que hoy se recuerda y honra como espacio de memoria. Desde 2010, este sitio está abierto al público para conectar a visitantes chilenos y extranjeros con la historia real del país.",
      "Visitar el barrio París-Londres es una experiencia que va más allá de la fotografía: es caminar por la belleza arquitectónica europea y, al mismo tiempo, comprender la memoria histórica de Chile. Se recomienda especialmente recorrerlo con un guía local para vivir una experiencia más profunda y enriquecedora.",
      "Un barrio que combina historia y resiliencia en pleno centro de Santiago. ¿Te animas a descubrirlo?",
    ],
    photos: [
      {
        src: "/images/rutas/barrio-paris-londres/antiguo-cuartel-yucatan.webp",
        label: "Antiguo Cuartel Yucatán",
      },
    ],
    stops: [],
  },
  {
    id: "iglesia-de-san-francisco",
    slug: "iglesia-de-san-francisco",
    citySlug: "santiago",
    title: "Iglesia de San Francisco",
    teaser: "La más antigua de Santiago y testigo de 5 siglos de historia chilena.",
    cover: "/images/rutas/iglesia-de-san-francisco/nave-del-templo.webp",
    intro: [
      "En plena Alameda Bernardo O'Higgins, la Iglesia de San Francisco es el edificio más antiguo de Santiago de Chile. Su construcción comenzó en 1572 y, desde entonces, ha sobrevivido a terremotos, revoluciones y a la transformación total de la ciudad que la rodea, manteniéndose en pie con sus muros de adobe de más de 450 años.",
      "Su torre actual, de estilo neoclásico, fue reconstruida en 1857 por Fermín Vivaceta tras sucesivos sismos, y contrasta con el cuerpo colonial del templo. En su interior destaca un techo de madera de roble pellín traído desde el sur de Chile, además de la venerada Virgen del Socorro, una pequeña imagen que llegó junto a Pedro de Valdivia en 1540 y que acompañó la fundación de Santiago en 1541.",
      "El conjunto se completa con el Museo Colonial de San Francisco, uno de los más importantes de Sudamérica, que resguarda 53 lienzos sobre la vida de San Francisco de Asís pintados en el Virreinato del Perú.",
      "Ubicada cerca del metro Santa Lucía y del barrio París-Londres, esta iglesia es una parada obligada para quienes buscan conectar con la historia real de Santiago. La entrada al templo es gratuita. ¿Te animas a descubrirla?",
    ],
    photos: [
      {
        src: "/images/rutas/iglesia-de-san-francisco/lienzos-siglo-xvii.webp",
        label: "Lienzos del siglo XVII",
      },
      {
        src: "/images/rutas/iglesia-de-san-francisco/pasillos-y-jardines.webp",
        label: "Pasillos y jardines",
      },
    ],
    stops: [],
  },
  {
    id: "museo-de-la-educacion-gabriela-mistral",
    slug: "museo-de-la-educacion-gabriela-mistral",
    citySlug: "santiago",
    title: "Museo de la Educación Gabriela Mistral",
    teaser: "Memoria pedagógica en el corazón del Barrio Yungay.",
    cover: "/images/rutas/museo-de-la-educacion-gabriela-mistral/patio-de-los-tilos.webp",
    intro: [
      "En la intersección de Chacabuco y Compañía de Jesús, en el histórico Barrio Yungay de Santiago de Chile, se encuentra el Museo de la Educación Gabriela Mistral (MEGM), ubicado en el ala oeste de la antigua Escuela Normal de Preceptoras.",
      "Su nombre rinde un doble homenaje a Gabriela Mistral: como la primera mujer latinoamericana en ganar el Premio Nobel de Literatura (1945), pero también como maestra, ya que fue en este mismo edificio donde obtuvo, en 1910, su licencia para ejercer como profesora primaria. Antes de ser poeta, Mistral fue educadora, y ese legado pedagógico es una parte esencial de su historia.",
      "Más que un museo tradicional, el MEGM es un espacio vivo que reflexiona sobre los procesos educativos en Chile a través de su patrimonio pedagógico. Recibe mensualmente a ex alumnas de la Escuela Normal N°1, que regresan a las mismas salas donde se formaron como maestras, y trabaja activamente temas de primera infancia, género y comunidad local.",
      "De acceso gratuito, este museo se ha consolidado como un punto de encuentro abierto y democrático en el Barrio Yungay, ideal para quienes buscan una mirada distinta y profunda de la cultura chilena.",
    ],
    photos: [
      {
        src: "/images/rutas/museo-de-la-educacion-gabriela-mistral/antiguo-despacho.webp",
        label: "Antiguo despacho",
      },
      {
        src: "/images/rutas/museo-de-la-educacion-gabriela-mistral/cronologia-de-la-educacion.webp",
        label: "Cronología de la educación chilena",
      },
    ],
    stops: [],
  },
  {
    id: "centro-cultural-la-moneda",
    slug: "centro-cultural-la-moneda",
    citySlug: "santiago",
    title: "Centro Cultural La Moneda",
    teaser: "El palacio subterráneo de cultura en el centro de Santiago.",
    cover: "/images/rutas/centro-cultural-la-moneda/interior-del-centro.webp",
    intro: [
      "Bajo la Plaza de la Ciudadanía, frente al Palacio de La Moneda, se esconde uno de los espacios culturales más sorprendentes de Santiago de Chile: el Centro Cultural La Moneda. Ubicado en pleno corazón cívico de la capital, este centro subterráneo nació con un objetivo claro: democratizar el acceso al arte y posicionar a Chile en el circuito cultural internacional.",
      "Construido entre 2004 y 2006 por la oficina Undurraga Devés e inaugurado por el expresidente Ricardo Lagos como parte del Proyecto Bicentenario, sorprende por su arquitectura vanguardista: hormigón a la vista, barandas de vidrio y un espectacular techo de cristal que inunda de luz natural todo el espacio, como una catedral moderna dedicada al arte.",
      "Es un lugar vivo y en constante movimiento: exposiciones rotativas, seminarios de arte contemporáneo, festivales de lectura, actividades infantiles y eventos como el Día de los Patrimonios o el Santiago Wild Festival, dedicado a la naturaleza y conservación.",
      "Abierto de martes a domingo, de 10:00 a 18:30 horas, con entrada gratuita a sus exposiciones. Se llega fácilmente en metro, bajando en la estación La Moneda (Línea 1).",
    ],
    photos: [
      {
        src: "/images/rutas/centro-cultural-la-moneda/entrada.webp",
        label: "Entrada al centro cultural",
      },
    ],
    stops: [],
  },
  {
    id: "museo-ferroviario",
    slug: "museo-ferroviario",
    citySlug: "santiago",
    title: "Museo Ferroviario de Santiago",
    teaser: "Gigantes de acero en el Parque Quinta Normal.",
    cover: "/images/rutas/museo-ferroviario/locomotora-alco-1940.webp",
    intro: [
      "En pleno Parque Quinta Normal de Santiago de Chile, rodeado de árboles centenarios, se encuentra el Museo Ferroviario de Santiago, hogar de una de las colecciones de locomotoras a vapor más importantes de Sudamérica: 16 máquinas monumentales que narran la historia del desarrollo y la unificación del país.",
      "Fundado el 19 de diciembre de 1984, este museo nació gracias al esfuerzo de los propios trabajadores de la desaparecida Maestranza Central de San Bernardo, quienes conservaron estas piezas patrimoniales tras su retiro de servicio, salvándolas del olvido.",
      "Es un plan perfecto para toda la familia: los niños pueden recorrer libremente entre locomotoras gigantes y descubrir la historia de Chile de forma entretenida, mientras los visitantes pueden subir a vagones históricos, como un coche de madera de 1923 fabricado en Alemania. En julio de 2025, el museo sumó cuatro vagones del Ferrocarril de Antofagasta a Bolivia, construidos en Inglaterra a inicios del siglo XX.",
      "Más que un museo, es una verdadera máquina del tiempo que transporta a la época dorada del ferrocarril chileno. Una visita imperdible para descubrir estos gigantes de acero que escribieron la historia sobre rieles.",
    ],
    photos: [
      {
        src: "/images/rutas/museo-ferroviario/locomotora-kitson-meyer.webp",
        label: "Locomotora Kitson Meyer",
      },
      {
        src: "/images/rutas/museo-ferroviario/locomotora-tipo-20-1911.webp",
        label: "Locomotora Tipo 20 (1911)",
      },
    ],
    stops: [],
  },
  {
    id: "cerro-santa-lucia",
    slug: "cerro-santa-lucia",
    citySlug: "santiago",
    title: "Cerro Santa Lucía",
    teaser: "El corazón donde nació Santiago de Chile.",
    cover: "/images/rutas/cerro-santa-lucia/fuente-de-neptuno.webp",
    intro: [
      "En pleno centro de Santiago, el Cerro Santa Lucía —o Huelén, como lo llamaban los mapuches— es mucho más que un mirador natural: es el lugar exacto donde comenzó la historia de la capital chilena. Con apenas 69 metros de altura, este cerro fue considerado sagrado por los pueblos originarios, quienes lo usaban como sitio de observación y conexión espiritual.",
      "Fue aquí donde Pedro de Valdivia decidió fundar Santiago de Nueva Extremadura el 12 de febrero de 1541, tras llegar al Valle del Mapocho el día de Santa Lucía en 1540. Siglos después, el cerro también fue escenario científico: Charles Darwin lo utilizó como observatorio en 1834 para estudiar la Cordillera de los Andes, y en 1908 se instaló allí la primera estación sismológica de Chile.",
      "Un dato sorprendente: el Cerro Santa Lucía es en realidad el remanente de un volcán de 15 millones de años de antigüedad. Hoy, sus senderos invitan a recorrer el Castillo Hidalgo, la Fuente de Neptuno, la Capilla Neogótica, el sepulcro de Benjamín Vicuña Mackenna y hermosos jardines con faroles y estatuas antiguas.",
      "Visitar este cerro es pararse literalmente donde nació Santiago hace casi 500 años.",
    ],
    photos: [
      {
        src: "/images/rutas/cerro-santa-lucia/jardin-circular-castillo-hidalgo.webp",
        label: "Jardín circular (Castillo Hidalgo)",
      },
      { src: "/images/rutas/cerro-santa-lucia/mirador.webp", label: "El mirador" },
      {
        src: "/images/rutas/cerro-santa-lucia/sepulcro-vicuna-mackenna.webp",
        label: "Sepulcro de Vicuña Mackenna",
      },
    ],
    stops: [],
  },
  {
    id: "museo-nacional-de-bellas-artes",
    slug: "museo-nacional-de-bellas-artes",
    citySlug: "santiago",
    title: "Museo Nacional de Bellas Artes",
    teaser: "El palacio que respira arte en el Parque Forestal.",
    cover: "/images/rutas/museo-nacional-de-bellas-artes/fachada.webp",
    intro: [
      "En pleno Parque Forestal de Santiago de Chile se levanta el Museo Nacional de Bellas Artes (MNBA), el museo de arte más antiguo de Sudamérica y el primero de Latinoamérica, fundado el 18 de septiembre de 1880. Su elegante cúpula de vidrio y fachada neoclásica evocan los bulevares parisinos, y no es casualidad: el arquitecto chileno Emilio Jéquier se inspiró en el Petit Palais de París para diseñar este palacio, inaugurado en 1910 como parte de las celebraciones del Centenario.",
      "Su cúpula de vidrio, fabricada en Bélgica con 2.400 piezas y 115 toneladas de estructura, ilumina un hall central de gran belleza. En su interior, el museo resguarda miles de obras —pinturas, esculturas, dibujos y grabados— que recorren desde el arte colonial religioso hasta las expresiones contemporáneas, incluyendo a grandes nombres del arte chileno como Pedro Lira.",
      "Más que un edificio con cuadros, el MNBA es un espejo de la identidad chilena, donde el arte refleja la historia, las luchas y los sueños del país. Tras sufrir graves daños en el terremoto de 1985, el museo se reconstruyó y hoy sigue siendo el corazón artístico de Chile.",
    ],
    photos: [
      {
        src: "/images/rutas/museo-nacional-de-bellas-artes/gran-salon.webp",
        label: "El gran salón",
      },
      {
        src: "/images/rutas/museo-nacional-de-bellas-artes/esculturas-la-quimera.webp",
        label: "Esculturas (La Quimera)",
      },
    ],
    stops: [],
  },
  {
    id: "pueblito-los-dominicos",
    slug: "pueblito-los-dominicos",
    citySlug: "santiago",
    title: "Pueblito de Los Dominicos",
    teaser: "De los establos a la cuna de la artesanía chilena.",
    cover: "/images/rutas/pueblito-los-dominicos/pueblito.webp",
    intro: [
      "En pleno Santiago de Chile, el Pueblito de Los Dominicos es hoy uno de los destinos más buscados por turistas extranjeros, pero su historia comienza mucho antes de convertirse en centro artesanal. Estas tierras fueron entregadas en 1544 a Inés de Suárez, la única mujer conquistadora reconocida oficialmente en el país, y en 1767 pasaron a manos de la Orden de los Dominicos gracias a la donación de María Antonia de Portusagasti y su esposo.",
      "El lugar también guarda un capítulo patriótico: durante la Guerra de Independencia de Chile, fue escondite del guerrillero Manuel Rodríguez y refugio de otras figuras históricas como José Manuel Balmaceda.",
      "Por casi dos siglos, sus antiguos establos y bodegas permanecieron vacíos, hasta que en 1978 un grupo de artesanos comenzó a vender sus obras junto a la iglesia. Así nació, en 1979, el actual Pueblito Los Dominicos, que hoy reúne más de 160 talleres con artesanos trabajando en vivo, creando piezas en plata, madera, lapislázuli, greda y cerámica de todo Chile.",
      "Aquí no hay souvenirs en serie: cada pieza es hecha a mano y cuenta una historia real de tradición chilena.",
    ],
    photos: [
      {
        src: "/images/rutas/pueblito-los-dominicos/entrada.webp",
        label: "Entrada al pueblito",
      },
      {
        src: "/images/rutas/pueblito-los-dominicos/fuente-jardin-de-los-bonsai.webp",
        label: "Fuente del Jardín de los Bonsái",
      },
    ],
    stops: [],
  },
  {
    id: "basilica-de-los-sacramentinos",
    slug: "basilica-de-los-sacramentinos",
    citySlug: "santiago",
    title: "Basílica de los Sacramentinos",
    teaser: "El Sacré-Cœur escondido de Santiago de Chile.",
    cover: "/images/rutas/basilica-de-los-sacramentinos/fachada.webp",
    intro: [
      "En el barrio San Diego, en pleno centro de Santiago, se levanta la Basílica de los Sacramentinos, un templo con 72 metros de cúpula y un secreto único en Chile: son dos iglesias, una encima de la otra.",
      "Todo comenzó en 1908, cuando María Lecaros de Marchant trajo a los sacramentinos a Chile y pidió un templo inspirado en la Basílica del Sagrado Corazón de París. El arquitecto Ricardo Larraín Bravo hizo realidad ese sueño afrancesado en pleno Santiago.",
      "Su diseño de doble iglesia es lo que la hace irrepetible: arriba, el templo principal; abajo, una cripta a 4 metros de profundidad con mármoles, piedras preciosas y mosaicos bizantinos dorados que recuerdan a las catacumbas romanas. Muchos visitantes aseguran que la cripta impresiona incluso más que el templo superior.",
      "Declarada votivo nacional por el centenario de la independencia y bendecida por el Papa Pío X en 1910, hoy funciona como parroquia activa del barrio.",
      "Un pedazo de París construido con devoción chilena: una joya arquitectónica que pocos turistas conocen y que vale la pena descubrir.",
    ],
    photos: [
      { src: "/images/rutas/basilica-de-los-sacramentinos/la-nave.webp", label: "La nave" },
      {
        src: "/images/rutas/basilica-de-los-sacramentinos/desde-lo-alto.webp",
        label: "El templo desde lo alto",
      },
    ],
    stops: [],
  },
  {
    id: "museo-de-la-memoria",
    slug: "museo-de-la-memoria",
    citySlug: "santiago",
    title: "Museo de la Memoria y los Derechos Humanos",
    teaser: "La historia de Chile que no debe olvidarse.",
    cover: "/images/rutas/museo-de-la-memoria/exterior.webp",
    intro: [
      "En Santiago de Chile, el Museo de la Memoria y los Derechos Humanos es un espacio dedicado a preservar uno de los capítulos más difíciles de la historia reciente del país: los 17 años de dictadura militar que comenzaron tras el golpe de Estado del 11 de septiembre de 1973, cuando fue derrocado el gobierno democrático de Salvador Allende.",
      "El museo, un edificio moderno de tres pisos con hormigón expuesto y luz natural controlada, fue diseñado para invitar a la reflexión más que al espectáculo. Sus exposiciones permanentes recorren cronológicamente el periodo 1973-1990: el golpe de Estado, los centros de detención, la resistencia, el exilio de miles de chilenos y el retorno a la democracia. A través de testimonios, documentos, cartas y objetos originales, el visitante puede comprender de manera directa el impacto humano de este periodo histórico.",
      "Es un ejemplo destacado de turismo de memoria y turismo negro: no busca el morbo, sino la educación y la reflexión sobre la importancia de los derechos humanos y la democracia. Muchos visitantes salen conmovidos tras el recorrido.",
      "Una visita profundamente necesaria para entender el Chile contemporáneo.",
    ],
    photos: [
      {
        src: "/images/rutas/museo-de-la-memoria/historias-en-fotos.webp",
        label: "Historias en fotos",
      },
      {
        src: "/images/rutas/museo-de-la-memoria/las-victimas-conocidas.webp",
        label: "Las víctimas conocidas",
      },
      {
        src: "/images/rutas/museo-de-la-memoria/periodicos-de-la-epoca.webp",
        label: "Periódicos de la época",
      },
    ],
    stops: [],
  },
  {
    id: "templo-bahai",
    slug: "templo-bahai",
    citySlug: "santiago",
    title: "Templo Bahá'í de Sudamérica",
    teaser: "La flor de luz que corona la precordillera de Santiago.",
    cover: "/images/rutas/templo-bahai/el-templo.webp",
    intro: [
      "En plena precordillera de Santiago de Chile, a 1.000 metros de altura, se alza el Templo Bahá'í de Sudamérica, una construcción con forma de flor de nueve pétalos que parece levitar sobre la cordillera de los Andes. El bahaísmo llegó al país en 1919 gracias a la periodista Martha Root, pero este templo comenzó a gestarse recién en 2002, tras un concurso internacional de arquitectura, y fue inaugurado en octubre de 2016.",
      "Su diseño, con nueve entradas, caminos, fuentes y \"velas\" arqueadas, responde al número sagrado del bahaísmo, símbolo de unidad entre todas las religiones. De día, la luz atraviesa sus paneles de vidrio creando patrones sobre el mármol blanco; de noche, el templo se ilumina como un faro visible desde varios kilómetros de distancia.",
      "Es un espacio sin rituales ni sermones, abierto a personas de todas las creencias y orígenes, ideal para quienes buscan paz, contemplación y vistas panorámicas de Santiago rodeadas de flora nativa como quillayes y boldos.",
      "Más que un templo, es un encuentro entre fe, arquitectura y naturaleza que invita a la reflexión personal.",
    ],
    photos: [
      {
        src: "/images/rutas/templo-bahai/estanque-y-mirador.webp",
        label: "Estanque y mirador",
      },
    ],
    stops: [],
  },
  {
    id: "vina-concha-y-toro",
    slug: "vina-concha-y-toro",
    citySlug: "santiago",
    title: "Viña Concha y Toro",
    teaser: "La leyenda del diablo que custodia los mejores vinos de Chile.",
    cover: "/images/rutas/vina-concha-y-toro/barricas-en-bodegas.webp",
    intro: [
      "A solo una hora de Santiago de Chile, en el Valle del Maipo, se encuentra Viña Concha y Toro, una de las bodegas más emblemáticas del país, fundada en 1883 por Don Melchor Concha y Toro. Su historia esconde una leyenda fascinante: cansado de que le robaran sus mejores vinos —creados con cepas traídas desde Burdeos, Francia—, Don Melchor difundió el rumor de que el Diablo habitaba en sus bodegas. La superstición funcionó, los robos cesaron, y años después nació una de las marcas de vino más reconocidas del mundo: Casillero del Diablo.",
      "Ubicado en la zona de Pirque, este viñedo es una de las visitas obligadas cerca de Santiago, gracias a la belleza de sus bodegas subterráneas, la antigua casa de veraneo de Don Melchor y sus imponentes jardines. El recorrido permite sentir el frío característico de las bodegas, descubrir los aromas de las mejores cosechas y conocer de cerca la historia vitivinícola chilena.",
      "Debido a su alta demanda turística, se recomienda reservar la visita con anticipación a través del sitio web oficial del viñedo. Al finalizar, es posible comprar vinos en su tienda especializada.",
    ],
    photos: [
      {
        src: "/images/rutas/vina-concha-y-toro/entrada.webp",
        label: "Entrada a Concha y Toro",
      },
      { src: "/images/rutas/vina-concha-y-toro/mansion.webp", label: "La mansión de la viña" },
    ],
    stops: [],
  },
  {
    id: "catedral-de-santiago",
    slug: "catedral-de-santiago",
    citySlug: "santiago",
    title: "Catedral de Santiago",
    teaser: "Donde la ciudad comenzó a escribir su historia.",
    cover: "/images/rutas/catedral-de-santiago/fachada.webp",
    intro: [
      "¿Alguna vez has sentido que un lugar guarda más secretos de los que muestra? Párate frente a la Catedral de Santiago y mira bien su fachada. Detrás de esas paredes hay casi cinco siglos de fe, terremotos, reconstrucciones y momentos que marcaron a todo un país.",
      "Su historia comienza en 1541, cuando Pedro de Valdivia fundó Santiago y reservó este terreno frente a la plaza para levantar la primera iglesia. Desde entonces, con cada tragedia que dañaba su estructura, la ciudad volvía a construirla. Esa terquedad hace que este sitio sea mucho más que un edificio: es un símbolo de que Santiago siempre se levanta.",
      "La que ves hoy se construyó a fines del siglo XVIII, con diseño de Joaquín Toesca, el mismo arquitecto del Palacio de La Moneda. Por fuera es elegante y sobria. Por dentro te sorprenden sus columnas, sus altares dorados y una calma rara en pleno centro de la ciudad.",
      "Es el corazón espiritual y ceremonial de Chile, Monumento Nacional y punto de encuentro de la vida religiosa, política y cultural del país. Por eso es una de las paradas más visitadas del centro histórico.",
    ],
    photos: [
      { src: "/images/rutas/catedral-de-santiago/nave-central.webp", label: "La nave central" },
      { src: "/images/rutas/catedral-de-santiago/altares.webp", label: "Columnas y altares" },
    ],
    stops: [
      {
        title: "Para tu visita",
        paragraphs: [
          "Se ubica frente a la Plaza de Armas. Baja en Metro Plaza de Armas (líneas 3 y 5) y estarás ahí, pero te recomiendo que revises los horarios antes de ir.",
          "Te dejo este consejito para tu foto perfecta: entra y párate al fondo de la nave central para lograr una imagen simétrica hacia el altar, es decir, las líneas deben terminar donde tú te estás parando, manteniendo la misma distancia entre las líneas y el borde de la cámara. Ve por la mañana, cuando la luz suave entra por las ventanas.",
        ],
      },
    ],
  },
  {
    id: "museo-de-arte-precolombino",
    slug: "museo-de-arte-precolombino",
    citySlug: "santiago",
    title: "Museo Chileno de Arte Precolombino",
    teaser: "Un viaje en el tiempo por miles de años de historia americana.",
    cover: "/images/rutas/museo-de-arte-precolombino/salon-subterraneo.webp",
    intro: [
      "¿Y si te dijera que en pleno centro de Santiago puedes conocer miles de años de historia americana antes de que llegaran los conquistadores? Cruzas una puerta antigua y, de pronto, el ruido de la ciudad desaparece. Adentro te esperan rostros de cerámica, textiles increíblemente finos, joyas, máscaras y objetos que tienen más de 3.000 años.",
      "El museo abrió en 1981, gracias al arquitecto Sergio Larraín García-Moreno, quien reunió su colección personal y decidió compartirla con todo el mundo. Hoy es uno de los museos más importantes de América Latina en su tema. Funciona en la antigua Real Aduana, un edificio de comienzos del siglo XIX que ya tiene historia propia.",
      "Lo mejor es cómo te cuenta la historia. No solo ves piezas: entiendes cómo vivían, qué creían y cómo se expresaban los pueblos de México, Centroamérica, los Andes y Chile. Su exposición permanente, Chile antes de Chile, te muestra la riqueza cultural de los pueblos que habitaron este territorio, con momias, tejidos y cerámica que te dejan pensando.",
      "Para el turismo es un punto clave del centro histórico, muy valorado por viajeros, escuelas y amantes de la cultura. Es ideal si quieres entender Chile más allá de sus paisajes.",
    ],
    photos: [
      {
        src: "/images/rutas/museo-de-arte-precolombino/pasillos-interiores.webp",
        label: "Pasillos interiores",
      },
    ],
    stops: [],
  },
  {
    id: "jardin-japones",
    slug: "jardin-japones",
    citySlug: "santiago",
    title: "Jardín Japonés de Santiago",
    teaser: "El rincón de calma que no esperabas.",
    cover: "/images/rutas/jardin-japones/torre-costanera-desde-el-jardin.webp",
    intro: [
      "Aquí el agua, las piedras, los puentes y las flores te invitan a bajar el ritmo y a mirar con otros ojos.",
      "Este jardín también se conoce como el Jardín de la Amistad, y su nombre cuenta lo que representa: un puente cultural entre Chile y Japón. Es el jardín japonés más grande del país y uno de los espacios más visitados del Parque Metropolitano. Por eso es un clásico del cerro San Cristóbal.",
      "Su cultura se inspira en la filosofía japonesa del silencio, la contemplación y el respeto por la naturaleza. Por eso, al entrar, verás carteles que te piden disfrutar de la calma. Para el turismo, es una parada muy valorada si buscas naturaleza y tranquilidad sin salir de la ciudad. Es perfecto para combinar con una visita al cerro, sus miradores y el teleférico.",
      "Excelente opción para una tarde de descanso después de un viaje tan ¡Bakan!",
    ],
    photos: [
      { src: "/images/rutas/jardin-japones/caminos.webp", label: "Los caminos" },
      { src: "/images/rutas/jardin-japones/riachuelo.webp", label: "El riachuelo" },
    ],
    stops: [],
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
