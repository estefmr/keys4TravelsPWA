"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Clock3, ArrowRight } from "lucide-react";
import type { Country, City } from "@/lib/types";

/**
 * Country cards for the Destinos screen. A country with linked cities
 * (`citySlugs.length > 0`) is fully interactive: tapping it expands a list
 * of city cards that navigate to the existing city detail screens. A
 * country with no linked cities yet (e.g. España, still being documented)
 * renders the same visual language but locked — it shows a small
 * "Próximamente" badge and does not expand or navigate.
 */
export default function DestinationsExplorer({
  countries,
  cities,
}: {
  countries: Country[];
  cities: City[];
}) {
  const firstReady = countries.find((c) => c.citySlugs.length > 0);
  const [openCountry, setOpenCountry] = useState<string | null>(
    firstReady?.slug ?? null
  );

  return (
    <div className="flex flex-col gap-4">
      {countries.map((country) => {
        const ready = country.citySlugs.length > 0;
        const isOpen = ready && openCountry === country.slug;
        const countryCities = country.citySlugs
          .map((slug) => cities.find((c) => c.slug === slug))
          .filter((c): c is City => Boolean(c));
        const coverImage = countryCities[0]?.images[0];

        return (
          <div key={country.slug} className="flex flex-col">
            <CountryCard
              name={country.name}
              cityCount={countryCities.length}
              ready={ready}
              isOpen={isOpen}
              coverImage={coverImage}
              onToggle={() =>
                ready && setOpenCountry(isOpen ? null : country.slug)
              }
            />

            {isOpen && (
              <div className="mt-3 flex flex-col gap-2.5 pl-1">
                {countryCities.map((city) => (
                  <CityRow key={city.slug} city={city} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function CountryCard({
  name,
  cityCount,
  ready,
  isOpen,
  coverImage,
  onToggle,
}: {
  name: string;
  cityCount: number;
  ready: boolean;
  isOpen: boolean;
  coverImage?: string;
  onToggle: () => void;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={!ready}
      aria-expanded={ready ? isOpen : undefined}
      aria-disabled={!ready}
      className={`group relative flex h-36 w-full items-end overflow-hidden rounded-3xl text-left shadow-sm transition-transform ${
        ready ? "active:scale-[0.99]" : "cursor-default"
      }`}
    >
      {/* Base gradient — always present, so the card looks intentional even
          without a real photo. */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-dark to-[#14103c]" />

      {coverImage && !imgFailed && (
        <Image
          src={coverImage}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgFailed(true)}
          className={`object-cover transition-opacity duration-700 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          } ${!ready ? "grayscale" : ""}`}
        />
      )}

      <div
        className={`absolute inset-0 bg-gradient-to-t ${
          ready ? "from-black/75 via-black/15 to-black/5" : "from-black/80 via-black/40 to-black/25"
        }`}
      />

      {!ready && (
        <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-brand-dark shadow-sm backdrop-blur">
          <Clock3 className="h-3 w-3" strokeWidth={2} />
          Próximamente
        </span>
      )}

      <div className="relative z-10 flex w-full items-end justify-between px-5 pb-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
            {ready
              ? `${cityCount} ${cityCount === 1 ? "destino" : "destinos"}`
              : "En documentación por nuestro asesor"}
          </p>
          <h2 className="font-display mt-0.5 text-2xl text-white">{name}</h2>
        </div>

        {ready && (
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-white transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </div>
    </button>
  );
}

function CityRow({ city }: { city: City }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const cover = city.images[0];

  return (
    <Link
      href={`/destinos/${city.slug}`}
      className="group flex items-center gap-3 overflow-hidden rounded-2xl border border-black/5 bg-white p-2.5 pr-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-brand-light to-brand">
        {cover && !imgFailed && (
          <Image
            src={cover}
            alt=""
            fill
            sizes="64px"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgFailed(true)}
            className={`object-cover transition-opacity duration-500 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-foreground">{city.name}</p>
        <p className="truncate text-xs text-zinc-500">
          {city.hotelIds.length > 0
            ? `${city.hotelIds.length} ${city.hotelIds.length === 1 ? "hotel" : "hoteles"} boutique`
            : "Hoteles próximamente"}
        </p>
      </div>

      <ArrowRight
        className="h-4 w-4 shrink-0 text-brand-light transition-transform group-hover:translate-x-0.5"
        strokeWidth={2}
      />
    </Link>
  );
}
