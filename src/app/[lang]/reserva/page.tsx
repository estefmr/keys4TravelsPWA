"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarClock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import KennyCard from "@/components/KennyCard";
import { useAuth } from "@/contexts/AuthContext";
import { useDict, useLocalizePath } from "@/lib/i18n/LocaleProvider";

type Seccion = "reservar" | "mis-reservas";

/**
 * La pestaña de quien ya entró: reservar un viaje y consultar el que tenga.
 *
 * Las dos secciones van en un selector y no una debajo de otra porque el
 * cuestionario es largo: apilados, el itinerario quedaría enterrado tras
 * tres pantallazos de formulario.
 */
export default function ReservaPage() {
  const { user, loading } = useAuth();
  const [seccion, setSeccion] = useState<Seccion>("reservar");
  const t = useDict();
  const loc = useLocalizePath();

  if (loading) {
    return <div className="px-5 py-10 text-sm text-zinc-500">{t.reserva.cargando}</div>;
  }

  // La pestaña solo sale con sesión abierta, pero a esta dirección se puede
  // llegar a pelo (un enlace guardado, el historial): mejor invitar a entrar
  // que dejar una pantalla vacía sin explicación.
  if (!user) {
    return (
      <div className="px-5 py-10">
        <h1 className="font-display text-2xl text-foreground">{t.reserva.title}</h1>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          {t.reserva.entraParaReservar}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href={loc("/login")}
            className="rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            {t.auth.iniciarSesion}
          </Link>
          <Link
            href={loc("/registro")}
            className="rounded-full border border-brand/20 px-5 py-3 text-center text-sm font-semibold text-brand transition-colors hover:bg-brand/5"
          >
            {t.auth.crearCuenta}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-5 py-6">
      <h1 className="font-display text-2xl text-foreground">Reserva</h1>

      <div
        role="tablist"
        aria-label={t.reserva.secciones}
        className="mt-4 flex gap-1 rounded-full bg-sand/70 p-1"
      >
        <Pestana
          activa={seccion === "reservar"}
          onClick={() => setSeccion("reservar")}
        >
          {t.reserva.reservar}
        </Pestana>
        <Pestana
          activa={seccion === "mis-reservas"}
          onClick={() => setSeccion("mis-reservas")}
        >
          {t.reserva.misReservas}
        </Pestana>
      </div>

      {seccion === "reservar" ? (
        <div className="mt-5 rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
          <ContactForm />
        </div>
      ) : (
        <MisReservas onReservar={() => setSeccion("reservar")} />
      )}

      {/* Bajo las dos secciones, no dentro de una: la pestaña Contacto
          desaparece del menú al iniciar sesión, así que esta es la única
          vía que le queda a quien ya entró para escribirle a Kenny. */}
      <div className="mt-8">
        <KennyCard compact />
      </div>
    </div>
  );
}

function Pestana({
  activa,
  onClick,
  children,
}: {
  activa: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={activa}
      onClick={onClick}
      className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
        activa
          ? "bg-white text-brand shadow-sm"
          : "text-zinc-500 hover:text-brand"
      }`}
    >
      {children}
    </button>
  );
}

/**
 * Mis reservas / Itinerario.
 *
 * Todavía no hay dónde guardar un itinerario: la app usa Supabase solo para
 * identificar a la persona, sin tablas. Hasta que exista ese almacén, esta
 * sección enseña siempre el estado vacío.
 */
function MisReservas({ onReservar }: { onReservar: () => void }) {
  const t = useDict().reserva;
  return (
    <div className="mt-5 flex flex-col items-center rounded-2xl border border-black/5 bg-white px-5 py-12 text-center shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sand text-brand">
        <CalendarClock className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h2 className="font-display mt-4 text-lg text-foreground">
        {t.vacioTitulo}
      </h2>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-500">
        {t.vacioTexto}
      </p>
      <button
        type="button"
        onClick={onReservar}
        className="mt-6 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        {t.reservarViaje}
      </button>
    </div>
  );
}
