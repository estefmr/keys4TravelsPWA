import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SmartImage from "@/components/SmartImage";
import type { Route } from "@/lib/types";

/**
 * "Atractivos y lugares" dentro de la ficha de un destino: una tarjeta por
 * ruta, con su foto de portada y un botón que lleva a su pantalla completa.
 *
 * En móvil las tarjetas se apilan a ancho completo —la foto es el gancho, así
 * que se deja grande— y a partir de `sm` pasan a dos columnas.
 */
export default function RoutesSection({ routes }: { routes: Route[] }) {
  if (routes.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="font-display text-lg text-foreground">Atractivos y lugares</h2>
      <p className="mt-1 text-sm text-zinc-500">
        Recorridos pensados para hacerlos con calma.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {routes.map((route) => (
          <Link
            key={route.slug}
            href={`/rutas/${route.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md active:scale-[0.99]"
          >
            <div className="relative aspect-[16/10] w-full bg-sand">
              <SmartImage
                src={route.cover}
                alt={route.title}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {route.kicker && (
                <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                  {route.kicker}
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-4">
              <h3 className="font-display text-lg leading-snug text-foreground">
                {route.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                {route.teaser}
              </p>
              {/* `mt-auto` pega el botón abajo: con tarjetas de alto distinto
                  en la rejilla, así quedan todos los botones alineados. */}
              <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-brand">
                Ver la ruta
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
