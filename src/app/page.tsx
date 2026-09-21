import Link from "next/link";
import { Sparkles, Building2, Compass, ArrowRight } from "lucide-react";
import HeroSlider, { type HeroPhoto } from "@/components/HeroSlider";

/** Las fotos que se van relevando en la portada del Home. */
const PORTADA: HeroPhoto[] = [
  { src: "/images/home/amsterdam.jpg", place: "Ámsterdam" },
  { src: "/images/home/cinque-terre.jpg", place: "Cinque Terre" },
  { src: "/images/home/florencia.jpg", place: "Florencia" },
  { src: "/images/home/baltinache.jpg", place: "Lagunas de Baltinache" },
  { src: "/images/home/machu-picchu.jpg", place: "Machu Picchu" },
];

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
      <HeroSlider photos={PORTADA}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
          Keys4Travels
        </p>
        <h1 className="font-display mt-2 max-w-sm text-3xl leading-tight sm:text-4xl">
          El lujo de viajar lento y sin prisa
        </h1>
      </HeroSlider>

      <section className="flex flex-col gap-4 px-5 py-8 text-[15px] leading-relaxed text-zinc-600">
        <p>
          El viajar es una de las experiencias más reconfortantes y
          enriquecedoras que existe para el ser humano, es por ello por lo que
          esta experiencia no debe limitarse a la opinión de otros. Dos
          personas pueden tener experiencias totalmente diferentes visitando la
          misma ciudad, los mismos días y recorriendo los dos mismos lugares.
        </p>
        <p>
          En Keys4Travels nos especializamos en el{" "}
          <span className="font-medium text-brand">Turismo Lento</span> y los
          viajes, por lo que te proponemos conocer el destino a tu ritmo, sin
          prisas, sin correr de un monumento a otro y, sobre todo, dejando
          tiempo para que sientas lo que es ser un local en una ciudad nueva.
        </p>
        <p>
          Hoteles seleccionados bajo criterios muy específicos y un agente a
          tu disposición que te ayuda a organizar tu viaje según tus deseos y
          necesidades basado exclusivamente en lo que tú quieras conocer. Esto
          hace de Keys4Travels un puente entre ese destino soñado y tus deseos
          de conocerlo sin estrés ni ansiedades propias del viaje.
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
