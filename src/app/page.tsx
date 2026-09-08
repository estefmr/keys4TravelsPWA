import Link from "next/link";
import { Sparkles, Building2, Compass, ArrowRight } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";

const HIGHLIGHTS = [
  {
    icon: Compass,
    title: "Turismo lento",
    text: "Viajes diseñados para vivir cada destino con calma, sin correr entre puntos.",
  },
  {
    icon: Building2,
    title: "Hoteles boutique seleccionados",
    text: "Propiedades con carácter, elegidas una a una, no cadenas genéricas.",
  },
  {
    icon: Sparkles,
    title: "Asesoría personalizada",
    text: "Entendemos al viajero para conectarlo con el destino correcto.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroBanner
        src="/images/santiago/atardecer-en-santiago.jpg"
        alt="Atardecer en Santiago de Chile"
        priority
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
          Keys4Travels
        </p>
        <h1 className="font-display mt-2 max-w-sm text-3xl leading-tight sm:text-4xl">
          El lujo de viajar lento y sin prisa
        </h1>
      </HeroBanner>

      <section className="px-5 py-8">
        <p className="text-[15px] leading-relaxed text-zinc-600">
          En Keys4Travels diseñamos viajes de{" "}
          <span className="font-medium text-brand">turismo lento</span>,
          hechos a la medida del viajero: te conectamos con los destinos y
          hoteles boutique correctos, te acompañamos si algo se complica en
          el camino, y ponemos el foco en experiencias memorables, no en
          recorrer lugares a la carrera. Menos es más.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-3 px-5 sm:grid-cols-3">
        {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm"
          >
            <Icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
            <h3 className="mt-2 text-sm font-semibold text-foreground">{title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500">{text}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 flex flex-col gap-3 px-5 pb-10 sm:flex-row">
        <Link
          href="/destinos"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Explorar destinos
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/hoteles"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-brand/20 px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand/5"
        >
          Ver hoteles
        </Link>
      </section>
    </div>
  );
}
