"use client";

import { useState } from "react";
import SmartImage from "@/components/SmartImage";
import Lightbox from "@/components/Lightbox";

export default function Gallery({
  images,
  altPrefix,
}: {
  images: string[];
  altPrefix: string;
}) {
  const [abierta, setAbierta] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1">
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setAbierta(i)}
            aria-label={`Ver en grande: ${altPrefix} — foto ${i + 1}`}
            className="relative h-48 w-64 shrink-0 cursor-zoom-in snap-start overflow-hidden rounded-xl bg-sand"
          >
            <SmartImage src={src} alt={`${altPrefix} — foto ${i + 1}`} className="object-cover" />
          </button>
        ))}
      </div>

      {abierta !== null && (
        <Lightbox
          photos={images.map((src) => ({ src }))}
          index={abierta}
          altPrefix={altPrefix}
          onClose={() => setAbierta(null)}
        />
      )}
    </>
  );
}
