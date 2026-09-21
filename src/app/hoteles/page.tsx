import HotelsExplorer from "@/components/HotelsExplorer";
import { hotels } from "@/lib/data/hotels";
import { countries } from "@/lib/data/destinations";

export const metadata = {
  title: "Hoteles — Keys4Travels",
  description: "Hoteles boutique seleccionados por Keys4Travels.",
};

export default function HotelesPage() {
  // Los países salen en el mismo orden que en Destinos.
  const orden = countries.map((country) => country.name);

  return (
    <div className="px-5 py-6">
      <h1 className="font-display text-2xl text-foreground">Hoteles</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Boutique, con carácter, seleccionados uno a uno.
      </p>

      <div className="mt-5">
        <HotelsExplorer hotels={hotels} orden={orden} />
      </div>
    </div>
  );
}
