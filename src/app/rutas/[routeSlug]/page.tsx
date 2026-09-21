import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ArrowRight } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import PhotoSlider from "@/components/PhotoSlider";
import { routes, getRouteBySlug } from "@/lib/data/routes";
import { getCityBySlug } from "@/lib/data/destinations";

export function generateStaticParams() {
  return routes.map((route) => ({ routeSlug: route.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ routeSlug: string }>;
}) {
  const { routeSlug } = await params;
  const route = getRouteBySlug(routeSlug);
  return {
    title: route ? `${route.title} — Keys4Travels` : "Ruta — Keys4Travels",
    description: route?.teaser,
  };
}

export default async function RouteDetailPage({
  params,
}: {
  params: Promise<{ routeSlug: string }>;
}) {
  const { routeSlug } = await params;
  const route = getRouteBySlug(routeSlug);
  if (!route) notFound();

  const city = getCityBySlug(route.citySlug);
  const volver = `/destinos/${route.citySlug}`;

  return (
    <div>
      <HeroBanner src={route.cover} alt={route.title} minHeight="16rem" priority>
        <Link
          href={volver}
          className="mb-3 inline-flex items-center gap-1 text-xs font-medium text-white/80 hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" /> {city?.name ?? "Destino"}
        </Link>
        {route.kicker && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            {route.kicker}
          </p>
        )}
        <h1 className="font-display mt-1 text-2xl leading-snug sm:text-3xl">
          {route.title}
        </h1>
      </HeroBanner>

      <div className="px-5 py-6 pb-12">
        <div className="flex flex-col gap-3">
          {route.intro.map((parrafo, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-[15px] font-medium leading-relaxed text-foreground"
                  : "text-sm leading-relaxed text-zinc-600"
              }
            >
              {parrafo}
            </p>
          ))}
        </div>

        {/* Fichas de un solo lugar (Tatio, Baltinache…): sus fotos van aquí,
            justo después de la entrada, porque no hay paradas que las repartan. */}
        {route.photos && route.photos.length > 0 && (
          <div className="mt-6">
            <PhotoSlider photos={route.photos} altPrefix={route.title} />
          </div>
        )}

        {route.stops.map((parada) => (
          <section key={parada.title} className="mt-8">
            <h2 className="font-display text-xl leading-snug text-foreground">
              {parada.title}
            </h2>

            {parada.photos && parada.photos.length > 0 && (
              <div className="mt-3">
                <PhotoSlider photos={parada.photos} altPrefix={parada.title} />
              </div>
            )}

            <div className="mt-3 flex flex-col gap-3">
              {parada.paragraphs.map((parrafo, i) => (
                <p key={i} className="text-sm leading-relaxed text-zinc-600">
                  {parrafo}
                </p>
              ))}
            </div>

            {parada.bullets && parada.bullets.length > 0 && (
              <ul className="mt-3 flex flex-col gap-2 rounded-2xl bg-sand/60 p-4">
                {parada.bullets.map((linea) => (
                  <li
                    key={linea}
                    className="flex items-start gap-2 text-sm text-zinc-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-light" />
                    {linea}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <Link
          href={volver}
          className="mt-10 flex items-center justify-center gap-2 rounded-full border border-brand/20 px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand/5"
        >
          Volver a {city?.name ?? "el destino"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
