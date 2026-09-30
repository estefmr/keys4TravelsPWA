import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DestinationsExplorer from "@/components/DestinationsExplorer";
import { getCities, getCountries } from "@/lib/data/localized";
import { hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternates } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/destinos">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).meta;
  return {
    title: t.destinosTitle,
    description: t.destinosDescription,
    alternates: alternates(lang, "/destinos"),
  };
}

export default async function DestinosPage({
  params,
}: PageProps<"/[lang]/destinos">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang).destinos;

  return (
    <div className="px-5 py-6">
      <h1 className="font-display text-2xl text-foreground">{t.title}</h1>
      <p className="mt-1 text-sm text-zinc-500">{t.subtitle}</p>

      <div className="mt-5">
        <DestinationsExplorer countries={getCountries(lang)} cities={getCities(lang)} />
      </div>
    </div>
  );
}
