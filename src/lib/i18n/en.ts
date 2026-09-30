import type { Dictionary } from "@/lib/i18n/dictionaries";

/**
 * Textos de la interfaz en inglés. Mismas claves que es.ts: si se añade
 * un texto allí y no aquí, TypeScript no compila.
 */
export const en: Dictionary = {
  meta: {
    siteTitle: "Keys4Travels — The luxury of slow, unhurried travel",
    siteDescription:
      "Slow travel, handpicked destinations and boutique hotels for travelers who seek experiences, not a rush.",
    destinosTitle: "Destinations — Keys4Travels",
    destinosDescription: "Explore our destinations in Chile, Spain and Argentina.",
    destinoFallback: "Destination — Keys4Travels",
    hotelesTitle: "Hotels — Keys4Travels",
    hotelesDescription: "Boutique hotels handpicked by Keys4Travels.",
    hotelFallback: "Hotel — Keys4Travels",
    rutaFallback: "Place — Keys4Travels",
    contactoTitle: "Contact — Keys4Travels",
    contactoDescription: "Get in touch with Kenny Acosta, founder of Keys4Travels.",
  },

  nav: {
    ariaLabel: "Main navigation",
    inicio: "Home",
    destinos: "Destinations",
    hoteles: "Hotels",
    contacto: "Contact",
    reserva: "Booking",
    miCuenta: "My account",
    iniciarSesion: "Sign in",
    cambiarIdioma: "Cambiar a español",
    otroIdioma: "ES",
  },

  home: {
    heroPlaces: {
      amsterdam: "Amsterdam",
      cinqueTerre: "Cinque Terre",
      florencia: "Florence",
      baltinache: "Baltinache Lagoons",
      machuPicchu: "Machu Picchu",
    },
    heroTitle: "The luxury of slow, unhurried travel",
    intro1:
      "Travel is one of the most restorative and enriching experiences a person can have, which is why it should never be shaped by other people’s opinions alone. Two people can have completely different experiences visiting the same city, on the same days, walking through the very same places.",
    intro2Before: "At Keys4Travels we specialize in ",
    intro2Highlight: "Slow Travel",
    intro2After:
      ", so we invite you to discover each destination at your own pace — unhurried, without racing from one monument to the next and, above all, leaving time to feel what it’s like to be a local in a new city.",
    intro3:
      "Hotels chosen against very specific criteria, and a dedicated advisor who helps you plan your trip around your wishes and needs, based entirely on what you want to discover. That is what makes Keys4Travels the bridge between the destination of your dreams and the desire to experience it without the stress and anxiety that travel so often brings.",
    highlights: [
      {
        title: "Slow travel",
        text: "Journeys designed to live each destination calmly, never rushing from sight to sight.",
      },
      {
        title: "Handpicked boutique hotels",
        text: "Properties with character, chosen one by one — never generic chains.",
      },
      {
        title: "Personal advice",
        text: "We get to know each traveler to connect them with the right destination.",
      },
    ],
    explorarDestinos: "Explore destinations",
    verHoteles: "View hotels",
    fotosPortada: "Cover photos",
  },

  destinos: {
    title: "Destinations",
    subtitle: "Choose a country to see its cities.",
    proximamente: "Coming soon",
    muyPronto: "Available very soon!",
    numDestinos: (n: number) => `${n} ${n === 1 ? "destination" : "destinations"}`,
    numHotelesBoutique: (n: number) =>
      `${n} boutique ${n === 1 ? "hotel" : "hotels"}`,
    hotelesProximamente: "Hotels coming soon",
  },

  destino: {
    queVer: "What to see",
    rutasTitle: "Sights & places",
    rutasSubtitle: "Experiences designed to be enjoyed slowly.",
    verRuta: "See the route",
    descubrir: "Discover",
    hotelesEn: (ciudad: string) => `Hotels in ${ciudad}`,
    hotelesProximamente: (ciudad: string) =>
      `Coming soon — we are selecting the finest boutique hotels in ${ciudad}.`,
  },

  hoteles: {
    title: "Hotels",
    subtitle: "Boutique, full of character, handpicked one by one.",
    numHoteles: (n: number) => `${n} ${n === 1 ? "hotel" : "hotels"}`,
  },

  hotel: {
    galeria: "Gallery",
    interesadoAntes: (nombre: string) => `Would you like to stay at ${nombre}? `,
    interesadoEnlace: "Get in touch",
    interesadoDespues: " and we’ll help you arrange your stay.",
  },

  ruta: {
    elDestino: "the destination",
    volverA: (destino: string) => `Back to ${destino}`,
  },

  fotos: {
    verEnGrande: (que: string) => `View larger: ${que}`,
    foto: (n: number) => `photo ${n}`,
    fotosDe: (que: string) => `Photos of ${que}`,
    anterior: "Previous photo",
    siguiente: "Next photo",
    cerrar: "Close",
  },

  contacto: {
    title: "Contact",
  },

  kenny: {
    rol: "Founder — “the hotelier who travels”",
    compacto: "Questions before booking? Message him directly.",
    bio: "Born in southern Venezuela, with a lifelong passion for hospitality and travel. Trained in tourism and hotel management since the early 2000s and seasoned in major hotel groups, Kenny champions “Slow Travel” and designs every journey with an understanding of both the traveler’s and the hotelier’s point of view.",
  },

  cuestionario: {
    pasos: ["Your trip", "Your travel style", "Your contact details"],
    destinos: [
      "Santiago (Chile)",
      "Buenos Aires (Argentina)",
      "Viña del Mar (Chile)",
      "Madrid (Spain)",
    ],
    compania: [
      "Traveling solo",
      "As a couple",
      "As a family (with children)",
      "Group of friends",
    ],
    estilo: [
      "Travel slowly. I’d rather visit fewer places and get to know them better",
      "I want authentic experiences, true to the destination",
      "I have time to venture outside the city",
      "I want to know the city and its hidden corners in depth",
    ],
    alojamiento: [
      "History and Design",
      "Privacy and Style",
      "Location and Tranquility",
      "Lowest possible price",
    ],
    asesor: ["Yes", "No", "No, but I’m interested"],

    faltaDestino: "Please choose at least one destination.",
    faltaFechaIda: "Please add an approximate departure date.",
    faltaCompania: "Tell us who is traveling.",
    faltaEstilo: "Please choose at least one option for how you’d like to travel.",
    faltaAlojamiento: "Please choose at least one option for accommodation.",
    faltaAsesor: "Let us know whether you’ve traveled with an advisor before.",
    faltaObjetivo: "Tell us briefly what you expect from the call.",
    faltaNombre: "Please add your name.",
    faltaEmail: "Please add your email.",
    faltaWhatsapp: "Please add your WhatsApp number.",
    whatsappIncompleto: "The WhatsApp number looks incomplete.",

    enviadoTitulo: "We’ve opened WhatsApp with your answers",
    enviadoTexto: "Just tap send in WhatsApp and they’ll reach us.",
    abrirDeNuevo: "Open WhatsApp again",
    empezarDeNuevo: "Start over",

    kicker: "Before your call with Kenny",
    titulo: "Tell us about your trip",
    intro:
      "A few quick questions to prepare the call and make sure our curation matches what you’re looking for — this is not a booking form.",
    pasoDe: (n: number, total: number, nombre: string) =>
      `Step ${n} of ${total}: ${nombre}`,

    pDestinos: "Which destination(s) are you considering?",
    pFechas: "Approximate travel dates",
    ida: "Departure",
    vuelta: "Return",
    pCompania: "How many people are traveling, and who?",
    numViajeros: "Number of travelers",
    maximo4: "Maximum 4",
    pEstilo: "How would you like to travel?",
    lasQueQuieras: "Choose as many as you like.",
    pAlojamiento: "What matters most to you when choosing accommodation?",
    pAsesor:
      "Have you traveled before with a travel advisor who selects hotels and has real experience in the destination?",
    pObjetivo:
      "What questions are on your mind, and how do you hope we can help?",
    objetivoPlaceholder:
      "E.g. I’d like to plan 10 days in Buenos Aires and Santiago for our anniversary in June",
    nombre: "Name",
    nombrePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@email.com",
    whatsapp: "WhatsApp",
    prefijoAria: "Country code",
    consejo:
      "We focus on Slow Travel, so we recommend at least 4 days per city to truly feel and connect with the destination.",
    atras: "Back",
    continuar: "Continue",
    enviar: "Send via WhatsApp",
    seAbrira: "WhatsApp will open with your answers already written.",

    mensaje: {
      saludo: "Hello Keys4Travels 👋",
      presentacion: "Here are my answers before our call:",
      tuViaje: "MY TRIP",
      destinos: "Destinations",
      fechas: "Dates",
      viajan: "Traveling",
      tuEstilo: "MY TRAVEL STYLE",
      comoViajar: "How I’d like to travel",
      alojamiento: "What I value in accommodation",
      asesor: "Traveled with an advisor before",
      dudas: "My questions and expectations",
      misDatos: "MY DETAILS",
      nombre: "Name",
      email: "Email",
      whatsapp: "WhatsApp",
    },
  },

  reserva: {
    cargando: "Loading…",
    title: "Booking",
    entraParaReservar: "Sign in to book your trip and view your itinerary.",
    secciones: "Booking sections",
    reservar: "Book",
    misReservas: "My bookings",
    vacioTitulo: "No bookings or itinerary yet",
    vacioTexto: "Once you have a trip scheduled, your day-by-day itinerary will appear here.",
    reservarViaje: "Book a trip",
  },

  auth: {
    miCuenta: "My account",
    iniciarSesion: "Sign in",
    crearCuenta: "Create account",
    configurarSupabase: "Set up Supabase to enable sign-in.",
    email: "Email",
    contrasena: "Password",

    cuentaKickerFuera: "Your account",
    cuentaKickerDentro: "Signed in",
    cuentaTituloFuera: "You’re not signed in yet",
    cuentaSubtituloFuera: "Create an account to save your favorite hotels and destinations.",
    cargando: "Loading…",
    cerrarSesion: "Sign out",

    loginKicker: "Exclusive access",
    loginTitulo: "Welcome",
    loginSubtitulo: "Your next unhurried journey is waiting.",
    entrando: "Signing in…",
    entrar: "Sign in",
    sinCuenta: "Don’t have an account yet?",
    creaLaTuya: "Create one",

    registroKicker: "Join Keys4Travels",
    registroTitulo: "Begin the journey",
    registroSubtitulo:
      "Save your favorite hotels and destinations, and pick up your search where you left off.",
    registroListoAntes: "All set! Check your email to confirm your account, then ",
    registroListoEnlace: "sign in",
    registroListoDespues: ".",
    creandoCuenta: "Creating account…",
    yaTienesCuenta: "Already have an account?",
    iniciaSesion: "Sign in",
  },

  instalar: {
    titulo: "Install Keys4Travels",
    pantallaInicio:
      "Open it from your home screen, full screen and without the browser bar.",
    instalarApp: "Install app",
    samsungAntes: "To install it, open it in ",
    samsungDespues: ": your phone blocks it from this browser for security reasons.",
    abrirEnChrome: "Open in Chrome",
    iosPulsa: "Tap ",
    iosCompartir: "Share",
    iosEnLaBarra: " in the Safari bar and choose ",
    iosAnadir: "Add to Home Screen",
    androidAbre: "Open the browser menu ",
    androidDelNavegador: " and tap ",
    androidInstalar: "Install app",
    androidO: " or ",
    androidAnadir: "Add to Home screen",
    cerrar: "Close",
  },

  noEncontrada: {
    titulo: "This page doesn’t exist",
    texto: "The link may be mistyped, or the page may no longer be available.",
    boton: "Explore destinations",
  },

  backBar: {
    volverA: (donde: string) => `Back to ${donde}`,
  },
};
