import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import KennyCard from "@/components/KennyCard";
import { hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternates } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contacto">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).meta;
  return {
    title: t.contactoTitle,
    description: t.contactoDescription,
    alternates: alternates(lang, "/contacto"),
  };
}

export default async function ContactoPage({
  params,
}: PageProps<"/[lang]/contacto">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang).contacto;

  return (
    <div className="px-5 py-6">
      <h1 className="font-display text-2xl text-foreground">{t.title}</h1>

      {/* El cuestionario trae su propio encabezado ("Antes de tu llamada
          con Kenny"), así que aquí no hace falta otro título. */}
      <div className="mt-5 rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
        <ContactForm />
      </div>

      <div className="mt-8">
        <KennyCard />
      </div>
    </div>
  );
}
