"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";

type SmartImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

/**
 * Wraps next/image with a graceful fallback: if the file at `src` doesn't
 * exist yet (Estefania hasn't dropped the real photo into /public/images/
 * yet), shows an elegant placeholder instead of a broken image icon.
 */
export default function SmartImage({
  src,
  alt,
  fill = true,
  sizes,
  className = "",
  priority = false,
}: SmartImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand/90 to-brand-dark text-white/70 ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="h-6 w-6" strokeWidth={1.5} />
        <span className="px-4 text-center text-xs font-medium tracking-wide">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
