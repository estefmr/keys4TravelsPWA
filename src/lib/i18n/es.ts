/**
 * Textos de la interfaz en español: el original. La versión inglesa
 * (en.ts) tiene que tener exactamente las mismas claves; TypeScript avisa
 * si falta alguna.
 */
export const es = {
  meta: {
    siteTitle: "Keys4Travels — El lujo de viajar lento y sin prisa",
    siteDescription:
      "Turismo lento, destinos seleccionados y hoteles boutique para viajeros que buscan experiencias, no apuros.",
    destinosTitle: "Destinos — Keys4Travels",
    destinosDescription: "Explora nuestros destinos en Chile, España y Argentina.",
    destinoFallback: "Destino — Keys4Travels",
    hotelesTitle: "Hoteles — Keys4Travels",
    hotelesDescription: "Hoteles boutique seleccionados por Keys4Travels.",
    hotelFallback: "Hotel — Keys4Travels",
    rutaFallback: "Ruta — Keys4Travels",
    contactoTitle: "Contacto — Keys4Travels",
    contactoDescription: "Escríbele a Kenny Acosta, fundador de Keys4Travels.",
  },

  nav: {
    ariaLabel: "Navegación principal",
    inicio: "Inicio",
    destinos: "Destinos",
    hoteles: "Hoteles",
    contacto: "Contacto",
    reserva: "Reserva",
    miCuenta: "Mi cuenta",
    iniciarSesion: "Iniciar sesión",
    /** El botón del selector muestra el idioma al que se cambia. */
    cambiarIdioma: "Switch to English",
    otroIdioma: "EN",
  },

  home: {
    heroPlaces: {
      amsterdam: "Ámsterdam",
      cinqueTerre: "Cinque Terre",
      florencia: "Florencia",
      baltinache: "Lagunas de Baltinache",
      machuPicchu: "Machu Picchu",
    },
    heroTitle: "El lujo de viajar lento y sin prisa",
    intro1:
      "El viajar es una de las experiencias más reconfortantes y enriquecedoras que existe para el ser humano, es por ello por lo que esta experiencia no debe limitarse a la opinión de otros. Dos personas pueden tener experiencias totalmente diferentes visitando la misma ciudad, los mismos días y recorriendo los dos mismos lugares.",
    intro2Before: "En Keys4Travels nos especializamos en el ",
    intro2Highlight: "Turismo Lento",
    intro2After:
      " y los viajes, por lo que te proponemos conocer el destino a tu ritmo, sin prisas, sin correr de un monumento a otro y, sobre todo, dejando tiempo para que sientas lo que es ser un local en una ciudad nueva.",
    intro3:
      "Hoteles seleccionados bajo criterios muy específicos y un agente a tu disposición que te ayuda a organizar tu viaje según tus deseos y necesidades basado exclusivamente en lo que tú quieras conocer. Esto hace de Keys4Travels un puente entre ese destino soñado y tus deseos de conocerlo sin estrés ni ansiedades propias del viaje.",
    highlights: [
      {
        title: "Turismo lento",
        text: "Viajes diseñados para vivir cada destino con calma, sin correr entre puntos.",
      },
      {
        title: "Hoteles boutique seleccionados",
        text: "Propiedades con carácter, elegidas una a una, no cadenas genéricas.",
      },
      {
        title: "Asesoría personalizada",
        text: "Entendemos al viajero para conectarlo con el destino correcto.",
      },
    ],
    explorarDestinos: "Explorar destinos",
    verHoteles: "Ver hoteles",
    fotosPortada: "Fotos de la portada",
  },

  destinos: {
    title: "Destinos",
    subtitle: "Elige un país para ver sus ciudades.",
    proximamente: "Próximamente",
    muyPronto: "¡Muy pronto disponible!",
    numDestinos: (n: number) => `${n} ${n === 1 ? "destino" : "destinos"}`,
    numHotelesBoutique: (n: number) =>
      `${n} ${n === 1 ? "hotel" : "hoteles"} boutique`,
    hotelesProximamente: "Hoteles próximamente",
  },

  destino: {
    queVer: "Qué ver",
    rutasTitle: "Atractivos y lugares",
    rutasSubtitle: "Recorridos pensados para hacerlos con calma.",
    verRuta: "Ver la ruta",
    descubrir: "Descubrir",
    hotelesEn: (ciudad: string) => `Hoteles en ${ciudad}`,
    hotelesProximamente: (ciudad: string) =>
      `Próximamente — estamos seleccionando los mejores hoteles boutique para ${ciudad}.`,
  },

  hoteles: {
    title: "Hoteles",
    subtitle: "Boutique, con carácter, seleccionados uno a uno.",
    numHoteles: (n: number) => `${n} ${n === 1 ? "hotel" : "hoteles"}`,
  },

  hotel: {
    galeria: "Galería",
    interesadoAntes: (nombre: string) => `¿Interesado en hospedarte en ${nombre}? `,
    interesadoEnlace: "Escríbenos por Contacto",
    interesadoDespues: " y te ayudamos a coordinar tu estadía.",
  },

  ruta: {
    elDestino: "el destino",
    volverA: (destino: string) => `Volver a ${destino}`,
  },

  fotos: {
    verEnGrande: (que: string) => `Ver en grande: ${que}`,
    foto: (n: number) => `foto ${n}`,
    fotosDe: (que: string) => `Fotos de ${que}`,
    anterior: "Foto anterior",
    siguiente: "Foto siguiente",
    cerrar: "Cerrar",
  },

  contacto: {
    title: "Contacto",
  },

  kenny: {
    rol: "Fundador — “el hotelero que viaja”",
    compacto: "¿Dudas antes de reservar? Escríbele directamente.",
    bio: "Venezolano del sur de Venezuela, con toda una vida de pasión por la hotelería y los viajes. Con estudios en turismo y hotelería desde inicios de los 2000 y experiencia en cadenas hoteleras importantes, Kenny impulsa el “Turismo Lento” y diseña cada viaje entendiendo tanto la perspectiva del viajero como la del hotelero.",
  },

  cuestionario: {
    pasos: ["Tu viaje", "Tu estilo de viaje", "Tus datos de contacto"],
    destinos: [
      "Santiago (Chile)",
      "Buenos Aires (Argentina)",
      "Viña del Mar (Chile)",
      "Madrid (España)",
    ],
    compania: [
      "Viajo solo/a",
      "En pareja",
      "En familia (con niños)",
      "Grupo de amigos",
    ],
    estilo: [
      "Viajar despacio. Prefiero visitar menos lugares, pero conocer más",
      "Quiero experiencias reales y propias del destino",
      "Tengo tiempo para salir de la ciudad sin problema",
      "Quiero conocer a profundidad la ciudad y sus rincones",
    ],
    alojamiento: [
      "Historia y Diseño",
      "Privacidad y Estilo",
      "Ubicación y Tranquilidad",
      "Precio más bajo posible",
    ],
    asesor: ["Sí", "No", "No, pero me interesa"],

    faltaDestino: "Elige al menos un destino.",
    faltaFechaIda: "Indica la fecha aproximada de ida.",
    faltaCompania: "Cuéntanos quiénes viajan.",
    faltaEstilo: "Elige al menos una opción sobre cómo te gustaría viajar.",
    faltaAlojamiento: "Elige al menos una opción sobre el alojamiento.",
    faltaAsesor: "Indica si has viajado antes con un asesor.",
    faltaObjetivo: "Cuéntanos brevemente qué esperas de la llamada.",
    faltaNombre: "Falta tu nombre.",
    faltaEmail: "Falta tu email.",
    faltaWhatsapp: "Falta tu WhatsApp.",
    whatsappIncompleto: "El número de WhatsApp parece incompleto.",

    enviadoTitulo: "Te abrimos WhatsApp con tus respuestas",
    enviadoTexto:
      "Solo tienes que pulsar enviar dentro de WhatsApp para que nos lleguen.",
    abrirDeNuevo: "Abrir WhatsApp de nuevo",
    empezarDeNuevo: "Empezar de nuevo",

    kicker: "Antes de tu llamada con Kenny",
    titulo: "Cuéntanos sobre tu viaje",
    intro:
      "Unas preguntas rápidas para preparar la llamada y asegurarnos de que la curaduría encaje con lo que buscas — no es un formulario de reserva.",
    pasoDe: (n: number, total: number, nombre: string) =>
      `Paso ${n} de ${total}: ${nombre}`,

    pDestinos: "¿Qué destino(s) estás considerando?",
    pFechas: "Fechas aproximadas de viaje",
    ida: "Ida",
    vuelta: "Vuelta",
    pCompania: "¿Cuántas personas viajan y quiénes?",
    numViajeros: "Número de viajeros",
    maximo4: "Máximo 4",
    pEstilo: "¿Cómo te gustaría viajar?",
    lasQueQuieras: "Puedes elegir las que quieras.",
    pAlojamiento: "¿Qué es lo más importante para ti al elegir alojamiento?",
    pAsesor:
      "¿Has viajado antes con un asesor de viajes, seleccionador de hoteles y con experiencia real en el destino?",
    pObjetivo:
      "¿Cuáles son las dudas que más atraen tu atención y cómo esperas que te ayudemos?",
    objetivoPlaceholder:
      "Ej: quiero armar 10 días en Buenos Aires y Santiago para mi aniversario en junio",
    nombre: "Nombre",
    nombrePlaceholder: "Tu nombre",
    email: "Email",
    emailPlaceholder: "tu@email.com",
    whatsapp: "WhatsApp",
    prefijoAria: "Prefijo del país",
    consejo:
      "Nos enfocamos en Turismo Lento, por lo que recomendamos un mínimo de 4 días por cada ciudad para sentir y conectar de verdad con el destino.",
    atras: "Atrás",
    continuar: "Continuar",
    enviar: "Enviar por WhatsApp",
    seAbrira: "Se abrirá WhatsApp con tus respuestas ya escritas.",

    /** El mensaje que llega a Kenny. Los asteriscos son negrita de WhatsApp. */
    mensaje: {
      saludo: "Hola Keys4Travels 👋",
      presentacion: "Te comparto mis respuestas antes de la llamada:",
      tuViaje: "TU VIAJE",
      destinos: "Destinos",
      fechas: "Fechas",
      viajan: "Viajan",
      tuEstilo: "TU ESTILO DE VIAJE",
      comoViajar: "Cómo me gustaría viajar",
      alojamiento: "Al elegir alojamiento valoro",
      asesor: "He viajado antes con un asesor",
      dudas: "Mis dudas y lo que espero",
      misDatos: "MIS DATOS",
      nombre: "Nombre",
      email: "Email",
      whatsapp: "WhatsApp",
    },
  },

  reserva: {
    cargando: "Cargando…",
    title: "Reserva",
    entraParaReservar:
      "Entra en tu cuenta para reservar tu viaje y consultar tu itinerario.",
    secciones: "Secciones de reserva",
    reservar: "Reservar",
    misReservas: "Mis reservas",
    vacioTitulo: "Sin reserva y sin itinerario",
    vacioTexto:
      "Cuando tengas un viaje programado, aquí verás tu itinerario día a día.",
    reservarViaje: "Reservar un viaje",
  },

  auth: {
    miCuenta: "Mi cuenta",
    iniciarSesion: "Iniciar sesión",
    crearCuenta: "Crear cuenta",
    configurarSupabase: "Configura Supabase para activar el acceso.",
    email: "Email",
    contrasena: "Contraseña",

    cuentaKickerFuera: "Tu cuenta",
    cuentaKickerDentro: "Sesión iniciada",
    cuentaTituloFuera: "Aún no has iniciado sesión",
    cuentaSubtituloFuera:
      "Crea una cuenta para guardar tus hoteles y destinos favoritos.",
    cargando: "Cargando…",
    cerrarSesion: "Cerrar sesión",

    loginKicker: "Acceso exclusivo",
    loginTitulo: "Bienvenido",
    loginSubtitulo: "Tu próximo viaje sin prisa te está esperando.",
    entrando: "Entrando…",
    entrar: "Entrar",
    sinCuenta: "¿Aún no tienes cuenta?",
    creaLaTuya: "Crea la tuya",

    registroKicker: "Únete a Keys4Travels",
    registroTitulo: "Empieza el viaje",
    registroSubtitulo:
      "Guarda tus hoteles y destinos favoritos, y retoma la búsqueda donde la dejaste.",
    registroListoAntes: "¡Listo! Revisa tu email para confirmar tu cuenta y luego ",
    registroListoEnlace: "inicia sesión",
    registroListoDespues: ".",
    creandoCuenta: "Creando cuenta…",
    yaTienesCuenta: "¿Ya tienes cuenta?",
    iniciaSesion: "Inicia sesión",
  },

  instalar: {
    titulo: "Instala Keys4Travels",
    pantallaInicio:
      "Ábrela desde tu pantalla de inicio, a pantalla completa y sin barra del navegador.",
    instalarApp: "Instalar app",
    samsungAntes: "Para instalarla, ábrela en ",
    samsungDespues: ": desde este navegador el teléfono la bloquea por seguridad.",
    abrirEnChrome: "Abrir en Chrome",
    iosPulsa: "Pulsa ",
    iosCompartir: "Compartir",
    iosEnLaBarra: " en la barra de Safari y elige ",
    iosAnadir: "Añadir a pantalla de inicio",
    androidAbre: "Abre el menú ",
    androidDelNavegador: " del navegador y toca ",
    androidInstalar: "Instalar app",
    androidO: " o ",
    androidAnadir: "Añadir a pantalla de inicio",
    cerrar: "Cerrar",
  },

  noEncontrada: {
    titulo: "Esta página no existe",
    texto: "Puede que el enlace esté mal escrito o que la página ya no esté disponible.",
    boton: "Explorar destinos",
  },

  backBar: {
    volverA: (donde: string) => `Volver a ${donde}`,
  },
};
