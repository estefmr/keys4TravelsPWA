import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import Gallery from "@/components/Gallery";
import StickyCityHotels from "@/components/StickyCityHotels";
import { cities, getCityBySlug } from "@/lib/data/destinations";
import { getHotelsByCitySlug } from "@/lib/data/hotels";

export function generateStaticParams() {
  return cities.map((city) => ({ citySlug: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ citySlug: string }>;
}) {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);
  return {
    title: city ? `${city.name} — Keys4Travels` : "Destino — Keys4Travels",
  };
}

export default async function CityDetailPage({
  params,
}: {
  params: Promise<{ citySlug: string }>;
}) {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const hotels = getHotelsByCitySlug(city.slug);

  return (
    <div>
      <HeroBanner src={city.images[0]} alt={city.name} minHeight="16rem">
        <Link
          href="/destinos"
          className="mb-3 inline-flex items-center gap-1 text-xs font-medium text-white/80 hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" /> Destinos
        </Link>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          {city.countryName}
        </p>
        <h1 className="font-display mt-1 text-2xl leading-snug sm:text-3xl">
          {city.name}
        </h1>
      </HeroBanner>

      <div className="px-5 py-6 pb-40">
        <p className="text-[15px] font-medium leading-relaxed text-foreground">
          {city.heroText}
        </p>

        <div className="mt-4 flex flex-col gap-3">
          {city.body.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-zinc-600">
              {paragraph}
            </p>
          ))}
        </div>

        {city.images.length > 0 && (
          <div className="mt-6">
            <Gallery images={city.images} altPrefix={city.name} />
          </div>
        )}

        {city.attractions.length > 0 && (
          <div className="mt-6">
            <h2 className="font-display text-lg text-foreground">Qué ver</h2>
            <ul className="mt-3 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
              {city.attractions.map((attraction) => (
                <li
                  key={attraction}
                  className="flex items-start gap-2 text-sm text-zinc-600"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-light" />
                  {attraction}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <StickyCityHotels
        cityName={city.name}
        hotels={hotels}
        comingSoon={city.comingSoon}
      />
    </div>
  );
}
