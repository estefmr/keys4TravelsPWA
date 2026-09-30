import Link from "next/link";
import { notFound } from "next/navigation";
import { Sparkles, Building2, Compass, ArrowRight } from "lucide-react";
import HeroSlider, { type HeroPhoto } from "@/components/HeroSlider";
import { hasLocale, localizePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

const ICONOS = [Compass, Building2, Sparkles];

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang).home;

  /** Las fotos que se van relevando en la portada del Home. */
  const portada: HeroPhoto[] = [
    { src: "/images/home/amsterdam.jpg", place: t.heroPlaces.amsterdam },
    { src: "/images/home/cinque-terre.jpg", place: t.heroPlaces.cinqueTerre },
    { src: "/images/home/florencia.jpg", place: t.heroPlaces.florencia },
    { src: "/images/home/baltinache.jpg", place: t.heroPlaces.baltinache },
    { src: "/images/home/machu-picchu.jpg", place: t.heroPlaces.machuPicchu },
  ];

  return (
    <div className="flex flex-col">
      <HeroSlider photos={portada}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
          Keys4Travels
        </p>
        <h1 className="font-display mt-2 max-w-sm text-3xl leading-tight sm:text-4xl">
          {t.heroTitle}
        </h1>
      </HeroSlider>

      <section className="flex flex-col gap-4 px-5 py-8 text-[15px] leading-relaxed text-zinc-600">
        <p>{t.intro1}</p>
        <p>
          {t.intro2Before}
          <span className="font-medium text-brand">{t.intro2Highlight}</span>
          {t.intro2After}
        </p>
        <p>{t.intro3}</p>
      </section>

      <section className="grid grid-cols-1 gap-3 px-5 sm:grid-cols-3">
        {t.highlights.map(({ title, text }, i) => {
          const Icon = ICONOS[i];
          return (
            <div
              key={title}
              className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm"
            >
              <Icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
              <h3 className="mt-2 text-sm font-semibold text-foreground">{title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-zinc-500">{text}</p>
            </div>
          );
        })}
      </section>

      <section className="mt-8 flex flex-col gap-3 px-5 pb-10 sm:flex-row">
        <Link
          href={localizePath(lang, "/destinos")}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          {t.explorarDestinos}
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href={localizePath(lang, "/hoteles")}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-brand/20 px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand/5"
        >
          {t.verHoteles}
        </Link>
      </section>
    </div>
  );
}
