import SmartImage from "@/components/SmartImage";

export default function Gallery({
  images,
  altPrefix,
}: {
  images: string[];
  altPrefix: string;
}) {
  if (images.length === 0) return null;

  return (
    <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1">
      {images.map((src, i) => (
        <div
          key={src + i}
          className="relative h-48 w-64 shrink-0 snap-start overflow-hidden rounded-xl bg-sand"
        >
          <SmartImage src={src} alt={`${altPrefix} — foto ${i + 1}`} className="object-cover" />
        </div>
      ))}
    </div>
  );
}
