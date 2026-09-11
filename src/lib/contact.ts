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
