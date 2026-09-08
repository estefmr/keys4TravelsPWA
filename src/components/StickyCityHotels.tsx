import { HotelCardCompact } from "@/components/HotelCard";
import type { Hotel } from "@/lib/types";

export default function StickyCityHotels({
  cityName,
  hotels,
  comingSoon,
}: {
  cityName: string;
  hotels: Hotel[];
  comingSoon?: boolean;
}) {
  return (
    <div
      className="fixed inset-x-0 z-30 border-t border-black/5 bg-white/97 shadow-[0_-6px_20px_rgba(0,0,0,0.06)] backdrop-blur"
      style={{ bottom: "calc(56px + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto max-w-3xl px-4 py-2.5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">
          Hoteles en {cityName}
        </p>

        {comingSoon || hotels.length === 0 ? (
          <p className="pb-1 text-sm text-zinc-500">
            Próximamente — estamos seleccionando los mejores hoteles boutique
            para {cityName}.
          </p>
        ) : (
          <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-0.5">
            {hotels.map((hotel) => (
              <HotelCardCompact key={hotel.id} hotel={hotel} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
