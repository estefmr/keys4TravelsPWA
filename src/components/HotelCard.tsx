import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import type { Hotel } from "@/lib/types";
import { localizePath, type Locale } from "@/lib/i18n/config";

/**
 * Tarjeta de la barra fija de hoteles en la ficha de un destino. Va en
 * horizontal —miniatura a la izquierda, nombre a la derecha— para que la
 * barra ocupe poco alto y deje leer la pantalla en el móvil.
 */
export function HotelCardCompact({ hotel, lang }: { hotel: Hotel; lang: Locale }) {
  return (
    <Link
      href={localizePath(lang, `/hoteles/${hotel.slug}`)}
      className="flex w-56 shrink-0 items-center gap-2.5 rounded-xl border border-black/5 bg-white p-1.5 pr-3 shadow-sm transition-transform active:scale-[0.98]"
    >
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-sand">
        <SmartImage
          src={hotel.images[0] ?? ""}
          alt={hotel.name}
          sizes="44px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0">
        <p className="truncate text-xs font-semibold text-foreground">{hotel.name}</p>
        <p className="truncate text-[11px] text-zinc-500">{hotel.cityName}</p>
      </div>
    </Link>
  );
}

export function HotelCardFull({ hotel, lang }: { hotel: Hotel; lang: Locale }) {
  return (
    <Link
      href={localizePath(lang, `/hoteles/${hotel.slug}`)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative h-40 w-full">
        <SmartImage
          src={hotel.images[0] ?? ""}
          alt={hotel.name}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg leading-snug text-foreground">{hotel.name}</h3>
        <p className="mt-0.5 text-sm text-zinc-500">
          {hotel.cityName}, {hotel.countryName}
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{hotel.summary}</p>
      </div>
    </Link>
  );
}
