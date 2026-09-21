"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, ArrowLeft, Info } from "lucide-react";
import WhatsAppGlyph from "@/components/WhatsAppGlyph";
import {
  buildCuestionarioWhatsAppUrl,
  PREFIJOS,
  PREFIJO_POR_DEFECTO,
  type Cuestionario,
} from "@/lib/contact";

/**
 * Cuestionario previo a la llamada con Kenny, en tres etapas con barra de
 * progreso. Las preguntas y las opciones vienen del documento
 * `Cuestionario.docx` que entregó la clienta.
 *
 * No hay backend: al terminar se abre WhatsApp con todas las respuestas ya
 * redactadas, igual que hacía el formulario corto anterior.
 */

const PASOS = ["Tu viaje", "Tu estilo de viaje", "Tus datos de contacto"];

// Las cuatro ciudades operativas hoy, según el documento.
const DESTINOS = [
  "Santiago (Chile)",
  "Buenos Aires (Argentina)",
  "Viña del Mar (Chile)",
  "Madrid (España)",
];

const COMPANIA = [
  "Viajo solo/a",
  "En pareja",
  "En familia (con niños)",
  "Grupo de amigos",
];

const ESTILO = [
  "Viajar despacio. Prefiero visitar menos lugares, pero conocer más",
  "Quiero experiencias reales y propias del destino",
  "Tengo tiempo para salir de la ciudad sin problema",
  "Quiero conocer a profundidad la ciudad y sus rincones",
];

const ALOJAMIENTO = [
  "Historia y Diseño",
  "Privacidad y Estilo",
  "Ubicación y Tranquilidad",
  "Precio más bajo posible",
];

const ASESOR = ["Sí", "No", "No, pero me interesa"];

const VACIO: Cuestionario = {
  destinos: [],
  fechaDesde: "",
  fechaHasta: "",
  compania: "",
  personas: "1",
  estilo: [],
  alojamiento: [],
  asesor: "",
  objetivo: "",
  nombre: "",
  email: "",
  prefijo: PREFIJO_POR_DEFECTO,
  whatsapp: "",
};

const CAJA =
  "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors";
const CAJA_ON = "border-brand bg-brand/5 text-foreground";
const CAJA_OFF = "border-black/10 bg-white text-zinc-700 hover:border-brand/30";
const CAMPO =
  "w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-brand";

function Pregunta({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-foreground">{label}</p>
      {children}
    </div>
  );
}

/** Una sola respuesta posible. */
function Opcion({
  activa,
  onClick,
  children,
}: {
  activa: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={activa}
      onClick={onClick}
      className={`${CAJA} ${activa ? CAJA_ON : CAJA_OFF}`}
    >
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
          activa ? "border-brand" : "border-zinc-300"
        }`}
      >
        {activa && <span className="h-2 w-2 rounded-full bg-brand" />}
      </span>
      {children}
    </button>
  );
}

/** Varias respuestas — el documento dice "el cliente puede elegir las que desee". */
function OpcionMulti({
  activa,
  onClick,
  children,
}: {
  activa: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={activa}
      onClick={onClick}
      className={`${CAJA} ${activa ? CAJA_ON : CAJA_OFF}`}
    >
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 ${
          activa ? "border-brand bg-brand" : "border-zinc-300"
        }`}
      >
        {activa && (
          <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
            <path
              d="M2.5 6.2l2.3 2.3 4.7-5"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {children}
    </button>
  );
}

/**
 * Hueco que dejamos sobre el formulario al saltar de etapa: el alto de la
 * barra superior pegajosa (--topbar-h, 3.25rem) más un respiro, para que el
 * título de la etapa no quede escondido detrás de ella.
 */
const MARGEN_SUPERIOR = 64;

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const primerDibujado = useRef(true);
  const [paso, setPaso] = useState(0);
  const [r, setR] = useState<Cuestionario>(VACIO);
  const [error, setError] = useState<string | null>(null);
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  function set<K extends keyof Cuestionario>(k: K, v: Cuestionario[K]) {
    setR((prev) => ({ ...prev, [k]: v }));
    setError(null);
  }

  function alternar(k: "destinos" | "estilo" | "alojamiento", valor: string) {
    const lista = r[k];
    set(
      k,
      lista.includes(valor) ? lista.filter((x) => x !== valor) : [...lista, valor]
    );
  }

  /** Primer requisito que falta en el paso indicado, o null si está completo. */
  function faltaEn(n: number): string | null {
    if (n === 0) {
      if (!r.destinos.length) return "Elige al menos un destino.";
      if (!r.fechaDesde) return "Indica la fecha aproximada de ida.";
      if (!r.compania) return "Cuéntanos quiénes viajan.";
    }
    if (n === 1) {
      if (!r.estilo.length)
        return "Elige al menos una opción sobre cómo te gustaría viajar.";
      if (!r.alojamiento.length)
        return "Elige al menos una opción sobre el alojamiento.";
      if (!r.asesor) return "Indica si has viajado antes con un asesor.";
      if (!r.objetivo.trim())
        return "Cuéntanos brevemente qué esperas de la llamada.";
    }
    if (n === 2) {
      if (!r.nombre.trim()) return "Falta tu nombre.";
      if (!r.email.trim()) return "Falta tu email.";
      if (!r.whatsapp.trim()) return "Falta tu WhatsApp.";
      // Sin el prefijo, un número corto de más suele ser un dedazo: seis
      // dígitos es menos que cualquier móvil de los países de la lista.
      if (r.whatsapp.replace(/\D/g, "").length < 6)
        return "El número de WhatsApp parece incompleto.";
    }
    return null;
  }

  /**
   * Al cambiar de etapa, sube al principio del formulario.
   *
   * Cada etapa es tan larga como la pantalla, así que al pasar a la
   * siguiente la vista se quedaba a la altura del botón —o sea, al final de
   * las preguntas nuevas— y había que subir a mano para empezar a
   * responderlas.
   *
   * Va en un efecto y no en cada botón porque así cubre también el "empezar
   * de nuevo", donde el formulario todavía no existe en el momento del clic
   * y una llamada directa no encontraría a dónde subir.
   */
  useEffect(() => {
    // En el primer dibujado nadie ha cambiado de etapa: mover la página aquí
    // daría un salto al abrir Contacto.
    if (primerDibujado.current) {
      primerDibujado.current = false;
      return;
    }
    const form = formRef.current;
    if (!form) return;
    const destino =
      form.getBoundingClientRect().top + window.scrollY - MARGEN_SUPERIOR;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: Math.max(0, destino),
      behavior: reduce ? "auto" : "smooth",
    });
  }, [paso]);

  function siguiente() {
    const falta = faltaEn(paso);
    // Con algo pendiente no subimos: el aviso sale junto al botón, y llevar
    // la vista arriba lo dejaría fuera de pantalla sin que nadie lo lea.
    if (falta) {
      setError(falta);
      return;
    }
    setPaso((p) => p + 1);
    setError(null);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const falta = faltaEn(2);
    if (falta) {
      setError(falta);
      return;
    }
    const url = buildCuestionarioWhatsAppUrl(r);

    // Síncrono dentro del gesto de envío: tras un await los navegadores
    // móviles lo bloquearían como popup. Si aun así lo bloquean, navegamos.
    const abierto = window.open(url, "_blank", "noopener,noreferrer");
    if (!abierto) window.location.href = url;

    setSentUrl(url);
  }

  if (sentUrl) {
    return (
      <div className="flex items-start gap-3 rounded-2xl bg-brand/5 p-4 text-sm text-brand-dark">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
        <div>
          <p className="font-semibold">Te abrimos WhatsApp con tus respuestas</p>
          <p className="mt-1 text-brand-dark/80">
            Solo tienes que pulsar enviar dentro de WhatsApp para que nos
            lleguen.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a
              href={sentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              <WhatsAppGlyph />
              Abrir WhatsApp de nuevo
            </a>
            <button
              type="button"
              onClick={() => {
                setSentUrl(null);
                setR(VACIO);
                setPaso(0);
              }}
              className="text-xs font-medium underline underline-offset-2"
            >
              Empezar de nuevo
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
        Antes de tu llamada con Kenny
      </p>
      <h2 className="font-display mt-1 text-2xl text-foreground">
        Cuéntanos sobre tu viaje
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500">
        Unas preguntas rápidas para preparar la llamada y asegurarnos de que la
        curaduría encaje con lo que buscas — no es un formulario de reserva.
      </p>

      {/* Barra de progreso: un segmento por etapa. */}
      <div className="mt-5 flex gap-1.5" aria-hidden="true">
        {PASOS.map((p, i) => (
          <span
            key={p}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i <= paso ? "bg-brand" : "bg-zinc-200"
            }`}
          />
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Paso {paso + 1} de {PASOS.length}: {PASOS[paso]}
      </p>

      <h3 className="font-display mt-6 text-xl text-foreground">{PASOS[paso]}</h3>

      <div className="mt-5 flex flex-col gap-6">
        {paso === 0 && (
          <>
            <Pregunta label="¿Qué destino(s) estás considerando?">
              <div className="flex flex-col gap-2">
                {DESTINOS.map((d) => (
                  <OpcionMulti
                    key={d}
                    activa={r.destinos.includes(d)}
                    onClick={() => alternar("destinos", d)}
                  >
                    {d}
                  </OpcionMulti>
                ))}
              </div>
            </Pregunta>

            <Pregunta label="Fechas aproximadas de viaje">
              <div className="flex gap-3">
                <label className="flex-1">
                  <span className="mb-1 block text-xs font-medium text-zinc-500">
                    Ida
                  </span>
                  <input
                    type="date"
                    value={r.fechaDesde}
                    onChange={(e) => set("fechaDesde", e.target.value)}
                    className={CAMPO}
                  />
                </label>
                <label className="flex-1">
                  <span className="mb-1 block text-xs font-medium text-zinc-500">
                    Vuelta
                  </span>
                  <input
                    type="date"
                    value={r.fechaHasta}
                    min={r.fechaDesde || undefined}
                    onChange={(e) => set("fechaHasta", e.target.value)}
                    className={CAMPO}
                  />
                </label>
              </div>
            </Pregunta>

            <Pregunta label="¿Cuántas personas viajan y quiénes?">
              <div className="flex flex-col gap-2">
                {COMPANIA.map((c) => (
                  <Opcion
                    key={c}
                    activa={r.compania === c}
                    onClick={() => set("compania", c)}
                  >
                    {c}
                  </Opcion>
                ))}
              </div>
              <label className="mt-3 flex flex-wrap items-center gap-3">
                <span className="text-xs font-medium text-zinc-500">
                  Número de viajeros
                </span>
                <select
                  value={r.personas}
                  onChange={(e) => set("personas", e.target.value)}
                  className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-brand"
                >
                  {["1", "2", "3", "4"].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
                <span className="text-xs text-zinc-400">Máximo 4</span>
              </label>
            </Pregunta>
          </>
        )}

        {paso === 1 && (
          <>
            <Pregunta label="¿Cómo te gustaría viajar?">
              <p className="-mt-1 mb-2 text-xs text-zinc-400">
                Puedes elegir las que quieras.
              </p>
              <div className="flex flex-col gap-2">
                {ESTILO.map((o) => (
                  <OpcionMulti
                    key={o}
                    activa={r.estilo.includes(o)}
                    onClick={() => alternar("estilo", o)}
                  >
                    {o}
                  </OpcionMulti>
                ))}
              </div>
            </Pregunta>

            <Pregunta label="¿Qué es lo más importante para ti al elegir alojamiento?">
              <p className="-mt-1 mb-2 text-xs text-zinc-400">
                Puedes elegir las que quieras.
              </p>
              <div className="flex flex-col gap-2">
                {ALOJAMIENTO.map((o) => (
                  <OpcionMulti
                    key={o}
                    activa={r.alojamiento.includes(o)}
                    onClick={() => alternar("alojamiento", o)}
                  >
                    {o}
                  </OpcionMulti>
                ))}
              </div>
            </Pregunta>

            <Pregunta label="¿Has viajado antes con un asesor de viajes, seleccionador de hoteles y con experiencia real en el destino?">
              <div className="flex flex-col gap-2">
                {ASESOR.map((o) => (
                  <Opcion
                    key={o}
                    activa={r.asesor === o}
                    onClick={() => set("asesor", o)}
                  >
                    {o}
                  </Opcion>
                ))}
              </div>
            </Pregunta>

            <Pregunta label="¿Cuáles son las dudas que más atraen tu atención y cómo esperas que te ayudemos?">
              <textarea
                rows={4}
                value={r.objetivo}
                onChange={(e) => set("objetivo", e.target.value)}
                placeholder="Ej: quiero armar 10 días en Buenos Aires y Santiago para mi aniversario en junio"
                className={`${CAMPO} resize-none`}
              />
            </Pregunta>
          </>
        )}

        {paso === 2 && (
          <>
            <Pregunta label="Nombre">
              <input
                type="text"
                value={r.nombre}
                onChange={(e) => set("nombre", e.target.value)}
                placeholder="Tu nombre"
                className={CAMPO}
              />
            </Pregunta>

            <div className="flex flex-col gap-6 sm:flex-row sm:gap-3">
              <div className="flex-1">
                <Pregunta label="Email">
                  <input
                    type="email"
                    value={r.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="tu@email.com"
                    className={CAMPO}
                  />
                </Pregunta>
              </div>
              <div className="flex-1">
                <Pregunta label="WhatsApp">
                  <div className="flex gap-2">
                    <select
                      aria-label="Prefijo del país"
                      value={r.prefijo}
                      onChange={(e) => set("prefijo", e.target.value)}
                      // Ancho fijo y contenido: el desplegable solo tiene que
                      // dejar ver el prefijo, y el número necesita el resto.
                      className={`${CAMPO} w-[7.5rem] shrink-0`}
                    >
                      {PREFIJOS.map(({ codigo, pais }) => (
                        <option key={codigo} value={codigo}>
                          {codigo} {pais}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      inputMode="tel"
                      value={r.whatsapp}
                      // Solo dígitos y separadores: así lo que se envía a
                      // Kenny se lee siempre igual, escriba como escriba cada
                      // persona.
                      onChange={(e) =>
                        set("whatsapp", e.target.value.replace(/[^\d\s-]/g, ""))
                      }
                      placeholder="9 1234 5678"
                      className={`${CAMPO} flex-1`}
                    />
                  </div>
                </Pregunta>
              </div>
            </div>

            <div className="flex items-start gap-2.5 rounded-xl bg-sand/60 p-3.5 text-xs leading-relaxed text-zinc-600">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <p>
                Nos enfocamos en Turismo Lento, por lo que recomendamos un
                mínimo de 4 días por cada ciudad para sentir y conectar de
                verdad con el destino.
              </p>
            </div>
          </>
        )}
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <div className="mt-6 flex items-center justify-between gap-3">
        {paso > 0 ? (
          <button
            type="button"
            onClick={() => {
              setPaso((p) => p - 1);
              setError(null);
            }}
            className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-zinc-500 transition-colors hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" />
            Atrás
          </button>
        ) : (
          <span />
        )}

        {paso < PASOS.length - 1 ? (
          <button
            type="button"
            onClick={siguiente}
            className="rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Continuar
          </button>
        ) : (
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            <WhatsAppGlyph />
            Enviar por WhatsApp
          </button>
        )}
      </div>

      {paso === PASOS.length - 1 && (
        <p className="mt-3 text-center text-xs text-zinc-400">
          Se abrirá WhatsApp con tus respuestas ya escritas.
        </p>
      )}
    </form>
  );
}
