import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HotelsExplorer from "@/components/HotelsExplorer";
import { getCountries, getHotels } from "@/lib/data/localized";
import { hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternates } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/hoteles">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).meta;
  return {
    title: t.hotelesTitle,
    description: t.hotelesDescription,
    alternates: alternates(lang, "/hoteles"),
  };
}

export default async function HotelesPage({
  params,
}: PageProps<"/[lang]/hoteles">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang).hoteles;
  // Los países salen en el mismo orden que en Destinos.
  const orden = getCountries(lang).map((country) => country.name);

  return (
    <div className="px-5 py-6">
      <h1 className="font-display text-2xl text-foreground">{t.title}</h1>
      <p className="mt-1 text-sm text-zinc-500">{t.subtitle}</p>

      <div className="mt-5">
        <HotelsExplorer hotels={getHotels(lang)} orden={orden} />
      </div>
    </div>
  );
}
