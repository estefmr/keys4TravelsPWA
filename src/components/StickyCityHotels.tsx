import { HotelCardCompact } from "@/components/HotelCard";
import type { Hotel } from "@/lib/types";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default function StickyCityHotels({
  cityName,
  hotels,
  comingSoon,
  lang,
}: {
  cityName: string;
  hotels: Hotel[];
  comingSoon?: boolean;
  lang: Locale;
}) {
  const t = getDictionary(lang).destino;
  return (
    <div
      className="fixed inset-x-0 z-30 border-t border-black/5 bg-white/97 shadow-[0_-6px_20px_rgba(0,0,0,0.06)] backdrop-blur"
      style={{ bottom: "calc(56px + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto max-w-3xl px-4 py-2">
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-400">
          {t.hotelesEn(cityName)}
        </p>

        {comingSoon || hotels.length === 0 ? (
          <p className="pb-1 text-sm text-zinc-500">
            {t.hotelesProximamente(cityName)}
          </p>
        ) : (
          <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-0.5">
            {hotels.map((hotel) => (
              <HotelCardCompact key={hotel.id} hotel={hotel} lang={lang} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
