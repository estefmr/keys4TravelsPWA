import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import SmartImage from "@/components/SmartImage";
import BackBar from "@/components/BackBar";
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

/**
 * Pantalla de una ruta. A diferencia de la ficha de destino —que abre con una
 * foto a sangre y el nombre encima— esta arranca con el título sobre fondo
 * limpio y la foto debajo, para que se lea como un artículo y no como otra
 * portada más.
 */
export default async function RouteDetailPage({
  params,
}: {
  params: Promise<{ routeSlug: string }>;
}) {
  const { routeSlug } = await params;
  const route = getRouteBySlug(routeSlug);
  if (!route) notFound();

  const city = getCityBySlug(route.citySlug);
  const destino = city?.name ?? "el destino";
  const volver = `/destinos/${route.citySlug}`;

  return (
    <div>
      <BackBar href={volver} backLabel={destino} title={route.title} />

      <article className="px-5 pb-12 pt-6">
        <header>
          {route.kicker && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {route.kicker}
            </p>
          )}
          <h1 className="font-display mt-1 text-2xl leading-snug text-foreground sm:text-3xl">
            {route.title}
          </h1>
          <p className="mt-2 text-sm text-zinc-500">{route.teaser}</p>
        </header>

        <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-sand">
          <SmartImage
            src={route.cover}
            alt={route.title}
            sizes="(max-width: 768px) 100vw, 768px"
            priority
            className="object-cover"
          />
        </div>

        <div className="mt-5 flex flex-col gap-3">
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
            justo tras la entrada, porque no hay paradas que las repartan. */}
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
          <ChevronLeft className="h-4 w-4" />
          Volver a {destino}
        </Link>
      </article>
    </div>
  );
}
