"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MapPin } from "lucide-react";
import type { Country, City } from "@/lib/types";

export default function DestinationsAccordion({
  countries,
  cities,
}: {
  countries: Country[];
  cities: City[];
}) {
  const [openCountry, setOpenCountry] = useState<string | null>(
    countries[0]?.slug ?? null
  );

  return (
    <div className="flex flex-col gap-3">
      {countries.map((country) => {
        const isOpen = openCountry === country.slug;
        const countryCities = country.citySlugs
          .map((slug) => cities.find((c) => c.slug === slug))
          .filter((c): c is City => Boolean(c));

        return (
          <div
            key={country.slug}
            className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenCountry(isOpen ? null : country.slug)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg text-foreground">
                {country.name}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-brand transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <ul className="border-t border-black/5">
                {countryCities.map((city) => (
                  <li key={city.slug} className="border-b border-black/5 last:border-b-0">
                    <Link
                      href={`/destinos/${city.slug}`}
                      className="flex items-center gap-3 px-5 py-3.5 transition-colors hover:bg-cream"
                    >
                      <MapPin className="h-4 w-4 shrink-0 text-brand-light" strokeWidth={1.75} />
                      <span className="flex-1">
                        <span className="block text-sm font-medium text-foreground">
                          {city.name}
                        </span>
                        {city.comingSoon && (
                          <span className="text-xs text-zinc-400">
                            Hoteles próximamente
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
