import DestinationsAccordion from "@/components/DestinationsAccordion";
import { countries, cities } from "@/lib/data/destinations";

export const metadata = {
  title: "Destinos — Keys4Travels",
  description: "Explora nuestros destinos en España y Chile.",
};

export default function DestinosPage() {
  return (
    <div className="px-5 py-6">
      <h1 className="font-display text-2xl text-foreground">Destinos</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Elige un país para ver sus ciudades.
      </p>

      <div className="mt-5">
        <DestinationsAccordion countries={countries} cities={cities} />
      </div>
    </div>
  );
}
