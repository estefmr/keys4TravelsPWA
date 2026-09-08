import { HotelCardFull } from "@/components/HotelCard";
import { hotels } from "@/lib/data/hotels";

export const metadata = {
  title: "Hoteles — Keys4Travels",
  description: "Hoteles boutique seleccionados por Keys4Travels.",
};

export default function HotelesPage() {
  const groups = new Map<string, typeof hotels>();
  for (const hotel of hotels) {
    const key = `${hotel.countryName} · ${hotel.cityName}`;
    groups.set(key, [...(groups.get(key) ?? []), hotel]);
  }

  return (
    <div className="px-5 py-6">
      <h1 className="font-display text-2xl text-foreground">Hoteles</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Boutique, con carácter, seleccionados uno a uno.
      </p>

      <div className="mt-6 flex flex-col gap-8">
        {Array.from(groups.entries()).map(([group, groupHotels]) => (
          <section key={group}>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
              {group}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {groupHotels.map((hotel) => (
                <HotelCardFull key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
