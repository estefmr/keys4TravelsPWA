"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { HotelCardFull } from "@/components/HotelCard";
import type { Hotel } from "@/lib/types";

/**
 * Los hoteles agrupados por país en desplegables, como los países de la
 * pantalla Destinos: así se ve de un vistazo qué hay en cada país sin tener
 * que bajar por toda la lista. Dentro de cada país, los hoteles siguen
 * separados por ciudad.
 *
 * `orden` fija en qué orden salen los países (el mismo de Destinos); los que
 * no estén ahí van al final, por orden de aparición.
 */
export default function HotelsExplorer({
  hotels,
  orden,
}: {
  hotels: Hotel[];
  orden: string[];
}) {
  const paises = agrupar(hotels, orden);
  const [abierto, setAbierto] = useState<string | null>(
    paises[0]?.nombre ?? null
  );

  return (
    <div className="flex flex-col gap-4">
      {paises.map((pais) => {
        const estaAbierto = abierto === pais.nombre;

        return (
          <div key={pais.nombre} className="flex flex-col">
            <CabeceraPais
              nombre={pais.nombre}
              total={pais.total}
              portada={pais.portada}
              abierto={estaAbierto}
              onToggle={() => setAbierto(estaAbierto ? null : pais.nombre)}
            />

            {estaAbierto && (
              <div className="mt-3 flex flex-col gap-6">
                {pais.ciudades.map((ciudad) => (
                  <section key={ciudad.nombre}>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      {ciudad.nombre}
                    </h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {ciudad.hotels.map((hotel) => (
                        <HotelCardFull key={hotel.id} hotel={hotel} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function CabeceraPais({
  nombre,
  total,
  portada,
  abierto,
  onToggle,
}: {
  nombre: string;
  total: number;
  portada?: string;
  abierto: boolean;
  onToggle: () => void;
}) {
  const [cargada, setCargada] = useState(false);
  const [fallo, setFallo] = useState(false);

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={abierto}
      className="group relative flex h-28 w-full items-end overflow-hidden rounded-3xl text-left shadow-sm transition-transform active:scale-[0.99]"
    >
      {/* Degradado de base: la tarjeta se ve intencionada aunque la foto
          todavía no haya cargado o falle. */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-dark to-[#14103c]" />

      {portada && !fallo && (
        <Image
          src={portada}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          onLoad={() => setCargada(true)}
          onError={() => setFallo(true)}
          className={`object-cover transition-opacity duration-700 ${
            cargada ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/5" />

      <div className="relative z-10 flex w-full items-end justify-between px-5 pb-3.5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
            {total} {total === 1 ? "hotel" : "hoteles"}
          </p>
          <h2 className="font-display mt-0.5 text-2xl text-white">{nombre}</h2>
        </div>

        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
        >
          <ChevronDown
            className={`h-7 w-7 text-white transition-transform duration-200 ${
              abierto ? "rotate-180" : ""
            }`}
            strokeWidth={2.5}
          />
        </span>
      </div>
    </button>
  );
}

type Ciudad = { nombre: string; hotels: Hotel[] };
type Pais = {
  nombre: string;
  total: number;
  portada?: string;
  ciudades: Ciudad[];
};

function agrupar(hotels: Hotel[], orden: string[]): Pais[] {
  const porPais = new Map<string, Map<string, Hotel[]>>();

  for (const hotel of hotels) {
    if (!porPais.has(hotel.countryName)) porPais.set(hotel.countryName, new Map());
    const ciudades = porPais.get(hotel.countryName)!;
    ciudades.set(hotel.cityName, [...(ciudades.get(hotel.cityName) ?? []), hotel]);
  }

  const paises = [...porPais.entries()].map(([nombre, ciudades]) => {
    const lista = [...ciudades.entries()].map(([ciudad, hotelesCiudad]) => ({
      nombre: ciudad,
      hotels: hotelesCiudad,
    }));
    return {
      nombre,
      total: lista.reduce((suma, c) => suma + c.hotels.length, 0),
      portada: lista[0]?.hotels[0]?.images[0],
      ciudades: lista,
    };
  });

  // Un país que no esté en `orden` se va al final, conservando su posición
  // relativa de aparición.
  const posicion = (nombre: string) => {
    const i = orden.indexOf(nombre);
    return i === -1 ? orden.length : i;
  };
  return paises.sort((a, b) => posicion(a.nombre) - posicion(b.nombre));
}
