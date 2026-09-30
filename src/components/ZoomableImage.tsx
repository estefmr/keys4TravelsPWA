"use client";

import { useState } from "react";
import SmartImage from "@/components/SmartImage";
import Lightbox from "@/components/Lightbox";

/**
 * Una sola foto (la portada de una ruta, por ejemplo) que se abre en el
 * visor a pantalla completa al tocarla. Ocupa el contenedor del padre,
 * igual que SmartImage con `fill`.
 */
export default function ZoomableImage({
  src,
  alt,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [abierta, setAbierta] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setAbierta(true)}
        aria-label={`Ver en grande: ${alt}`}
        className="absolute inset-0 cursor-zoom-in"
      >
        <SmartImage src={src} alt={alt} sizes={sizes} priority={priority} className="object-cover" />
      </button>
      {abierta && (
        <Lightbox photos={[{ src }]} index={0} altPrefix={alt} onClose={() => setAbierta(false)} />
      )}
    </>
  );
}
