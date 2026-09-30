import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeroBanner from "@/components/HeroBanner";
import Gallery from "@/components/Gallery";
import StickyCityHotels from "@/components/StickyCityHotels";
import RoutesSection from "@/components/RoutesSection";
import BackBar from "@/components/BackBar";
import { cities } from "@/lib/data/destinations";
import { getCity, getCityHotels, getCityRoutes } from "@/lib/data/localized";
import { hasLocale, localizePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternates } from "@/lib/i18n/metadata";

export function generateStaticParams() {
  return cities.map((city) => ({ citySlug: city.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/destinos/[citySlug]">): Promise<Metadata> {
  const { lang, citySlug } = await params;
  if (!hasLocale(lang)) return {};
  const city = getCity(citySlug, lang);
  return {
    title: city
      ? `${city.name} — Keys4Travels`
      : getDictionary(lang).meta.destinoFallback,
    description: city?.heroText,
    alternates: alternates(lang, `/destinos/${citySlug}`),
  };
}

export default async function CityDetailPage({
  params,
}: PageProps<"/[lang]/destinos/[citySlug]">) {
  const { lang, citySlug } = await params;
  if (!hasLocale(lang)) notFound();
  const city = getCity(citySlug, lang);
  if (!city) notFound();

  const t = getDictionary(lang);
  const hotels = getCityHotels(city.slug, lang);
  const routes = city.hideRoutes ? [] : getCityRoutes(city.slug, lang);

  return (
    <div>
      <BackBar
        href={localizePath(lang, "/destinos")}
        backLabel={t.nav.destinos}
        title={city.name}
        lang={lang}
      />

      <HeroBanner src={city.images[0]} alt={city.name} minHeight="16rem">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          {city.countryName}
        </p>
        <h1 className="font-display mt-1 text-2xl leading-snug sm:text-3xl">
          {city.name}
        </h1>
      </HeroBanner>

      <div className="px-5 py-6 pb-28">
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

        {city.sections?.map((section) => (
          <section key={section.title} className="mt-7">
            <h2 className="font-display text-lg text-foreground">
              {section.title}
            </h2>
            <div className="mt-2 flex flex-col gap-3">
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-zinc-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        {city.attractions.length > 0 && (
          <div className="mt-6">
            <h2 className="font-display text-lg text-foreground">{t.destino.queVer}</h2>
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

        <RoutesSection routes={routes} lang={lang} />
      </div>

      <StickyCityHotels
        cityName={city.name}
        hotels={hotels}
        comingSoon={city.comingSoon}
        lang={lang}
      />
    </div>
  );
}
