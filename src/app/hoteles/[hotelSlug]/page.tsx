import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, MapPin } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import Gallery from "@/components/Gallery";
import PhotoSlider from "@/components/PhotoSlider";
import { hotels, getHotelBySlug } from "@/lib/data/hotels";

export function generateStaticParams() {
  return hotels.map((hotel) => ({ hotelSlug: hotel.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hotelSlug: string }>;
}) {
  const { hotelSlug } = await params;
  const hotel = getHotelBySlug(hotelSlug);
  return {
    title: hotel ? `${hotel.name} — Keys4Travels` : "Hotel — Keys4Travels",
  };
}

export default async function HotelDetailPage({
  params,
}: {
  params: Promise<{ hotelSlug: string }>;
}) {
  const { hotelSlug } = await params;
  const hotel = getHotelBySlug(hotelSlug);
  if (!hotel) notFound();

  return (
    <div>
      <HeroBanner src={hotel.images[0]} alt={hotel.name} minHeight="16rem">
        <Link
          href="/hoteles"
          className="mb-3 inline-flex items-center gap-1 text-xs font-medium text-white/80 hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" /> Hoteles
        </Link>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          {hotel.cityName}, {hotel.countryName}
        </p>
        <h1 className="font-display mt-1 text-2xl leading-snug sm:text-3xl">
          {hotel.name}
        </h1>
      </HeroBanner>

      <div className="px-5 py-6">
        {hotel.address && (
          <p className="flex items-start gap-2 text-sm text-zinc-500">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
            {hotel.address}
          </p>
        )}

        {hotel.images.length > 0 && (
          <div className="mt-4">
            <Gallery images={hotel.images} altPrefix={hotel.name} />
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3">
          {hotel.description.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-zinc-600">
              {paragraph}
            </p>
          ))}
        </div>

        {hotel.gallery && hotel.gallery.length > 0 && (
          <section className="mt-8">
            <h2 className="font-display mb-3 text-xl text-foreground">
              Galería
            </h2>
            <PhotoSlider images={hotel.gallery} altPrefix={hotel.name} />
          </section>
        )}

        <div className="mt-8 rounded-2xl bg-brand/5 p-4 text-sm text-brand-dark">
          ¿Interesado en hospedarte en {hotel.name}?{" "}
          <Link href="/contacto" className="font-semibold underline underline-offset-2">
            Escríbenos por Contacto
          </Link>{" "}
          y te ayudamos a coordinar tu estadía.
        </div>
      </div>
    </div>
  );
}
