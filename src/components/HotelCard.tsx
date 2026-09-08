import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import type { Hotel } from "@/lib/types";

export function HotelCardCompact({ hotel }: { hotel: Hotel }) {
  return (
    <Link
      href={`/hoteles/${hotel.slug}`}
      className="flex w-44 shrink-0 flex-col overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition-transform active:scale-[0.98]"
    >
      <div className="relative h-20 w-full">
        <SmartImage src={hotel.images[0] ?? ""} alt={hotel.name} className="object-cover" />
      </div>
      <div className="p-2">
        <p className="truncate text-xs font-semibold text-foreground">{hotel.name}</p>
        <p className="truncate text-[11px] text-zinc-500">{hotel.cityName}</p>
      </div>
    </Link>
  );
}

export function HotelCardFull({ hotel }: { hotel: Hotel }) {
  return (
    <Link
      href={`/hoteles/${hotel.slug}`}
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
