/**
 * Datos de contacto públicos de Keys4Travels.
 *
 * El único canal confirmado por la clienta es WhatsApp (+34, España) más el
 * Instagram de la marca. Teléfono fijo y email siguen vacíos a propósito:
 * en cuanto existan, basta con rellenarlos aquí y aparecen solos en la
 * pantalla de Contacto.
 */

/** Número en formato E.164 sin signos — es el que espera wa.me. */
const WHATSAPP_E164 = "34615019752";

export const CONTACT_PHONE = ""; // e.g. "+34 615 019 752"
export const CONTACT_EMAIL = ""; // e.g. "hola@keys4travels.com"
export const CONTACT_WHATSAPP_NUMBER = "+34 615 019 752";
export const CONTACT_WHATSAPP_URL = `https://wa.me/${WHATSAPP_E164}`;
export const CONTACT_INSTAGRAM_URL = "https://instagram.com/keys4travels";
export const CONTACT_INSTAGRAM_HANDLE = "@keys4travels";

/**
 * Construye el enlace de WhatsApp con el mensaje del formulario ya
 * redactado, para que el visitante solo tenga que pulsar enviar.
 *
 * Una web no puede enviar un WhatsApp por sí sola: eso exige la WhatsApp
 * Business Cloud API de Meta, con número registrado y plantillas aprobadas.
 * Con este enlace el mensaje sale del WhatsApp del propio visitante, así
 * que Kenny lo recibe como un chat normal y puede responderle directamente.
 *
 * Los asteriscos son el formato de negrita de WhatsApp, no markdown.
 */
export function buildWhatsAppMessageUrl({
  nombre,
  email,
  mensaje,
}: {
  nombre: string;
  email: string;
  mensaje: string;
}): string {
  const texto = [
    "Hola Keys4Travels 👋",
    "",
    `*Nombre:* ${nombre}`,
    `*Email:* ${email}`,
    "",
    "*Mensaje:*",
    mensaje,
  ].join("\n");

  return `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(texto)}`;
}

/**
 * Prefijos telefónicos que ofrece el formulario.
 *
 * Chile va primero porque es el destino principal y el valor por defecto;
 * detrás, los otros dos países del catálogo, y después el resto ordenado
 * alfabéticamente. Cada código aparece una sola vez: Estados Unidos y
 * Canadá comparten el +1 y van en la misma entrada.
 */
export const PREFIJOS = [
  { codigo: "+56", pais: "Chile" },
  { codigo: "+54", pais: "Argentina" },
  { codigo: "+34", pais: "España" },
  { codigo: "+49", pais: "Alemania" },
  { codigo: "+591", pais: "Bolivia" },
  { codigo: "+55", pais: "Brasil" },
  { codigo: "+57", pais: "Colombia" },
  { codigo: "+506", pais: "Costa Rica" },
  { codigo: "+53", pais: "Cuba" },
  { codigo: "+593", pais: "Ecuador" },
  { codigo: "+503", pais: "El Salvador" },
  { codigo: "+1", pais: "EE. UU. / Canadá" },
  { codigo: "+33", pais: "Francia" },
  { codigo: "+502", pais: "Guatemala" },
  { codigo: "+504", pais: "Honduras" },
  { codigo: "+39", pais: "Italia" },
  { codigo: "+52", pais: "México" },
  { codigo: "+505", pais: "Nicaragua" },
  { codigo: "+31", pais: "Países Bajos" },
  { codigo: "+507", pais: "Panamá" },
  { codigo: "+595", pais: "Paraguay" },
  { codigo: "+51", pais: "Perú" },
  { codigo: "+351", pais: "Portugal" },
  { codigo: "+44", pais: "Reino Unido" },
  { codigo: "+41", pais: "Suiza" },
  { codigo: "+598", pais: "Uruguay" },
  { codigo: "+58", pais: "Venezuela" },
] as const;

/** Prefijo con el que arranca el formulario. */
export const PREFIJO_POR_DEFECTO = "+56";

export type Cuestionario = {
  destinos: string[];
  fechaDesde: string;
  fechaHasta: string;
  compania: string;
  personas: string;
  estilo: string[];
  alojamiento: string[];
  asesor: string;
  objetivo: string;
  nombre: string;
  email: string;
  /** Prefijo del país, separado del número para no adivinarlo al leerlo. */
  prefijo: string;
  whatsapp: string;
};

/** DD/MM/AAAA, el formato que pide el documento del cuestionario. */
function formatearFecha(iso: string): string {
  if (!iso) return "";
  const [a, m, d] = iso.split("-");
  return d && m && a ? `${d}/${m}/${a}` : iso;
}

/**
 * Redacta el cuestionario completo como un mensaje de WhatsApp legible.
 *
 * Mismo principio que `buildWhatsAppMessageUrl`: el mensaje sale del
 * WhatsApp del propio viajero, así que Kenny lo recibe como un chat normal
 * y puede responder ahí mismo. Los asteriscos son negrita de WhatsApp.
 */
export function buildCuestionarioWhatsAppUrl(r: Cuestionario): string {
  const fechas = [formatearFecha(r.fechaDesde), formatearFecha(r.fechaHasta)]
    .filter(Boolean)
    .join(" — ");

  const lineas = [
    "Hola Keys4Travels 👋",
    "Te comparto mis respuestas antes de la llamada:",
    "",
    "*TU VIAJE*",
    `*Destinos:* ${r.destinos.join(", ")}`,
    `*Fechas:* ${fechas}`,
    `*Viajan:* ${r.compania} (${r.personas})`,
    "",
    "*TU ESTILO DE VIAJE*",
    `*Cómo me gustaría viajar:* ${r.estilo.join("; ")}`,
    `*Al elegir alojamiento valoro:* ${r.alojamiento.join("; ")}`,
    `*He viajado antes con un asesor:* ${r.asesor}`,
    "",
    "*Mis dudas y lo que espero:*",
    r.objetivo,
    "",
    "*MIS DATOS*",
    `*Nombre:* ${r.nombre}`,
    `*Email:* ${r.email}`,
    `*WhatsApp:* ${r.prefijo} ${r.whatsapp}`.trim(),
  ];

  return `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(lineas.join("\n"))}`;
}
