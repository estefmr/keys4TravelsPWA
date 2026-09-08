"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";

/**
 * Full-bleed hero: a brand-colored gradient that always looks intentional,
 * with the real photo layered on top (optimized through next/image). If a
 * photo file is ever missing, it silently fails to load and the gradient
 * alone carries the banner — no broken-image icon in a spot this visible.
 */
export default function HeroBanner({
  src,
  alt,
  children,
  minHeight = "20rem",
  priority = false,
}: {
  src?: string;
  alt: string;
  children: ReactNode;
  minHeight?: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="relative flex items-end overflow-hidden bg-gradient-to-br from-brand via-brand-dark to-[#120f38]"
      style={{ minHeight }}
    >
      {src && !failed && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 768px"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      {/* Dark scrim: keeps the white headline readable over any photo. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
      <div className="relative z-10 w-full px-5 pb-6 pt-16 text-white drop-shadow-sm">
        {children}
      </div>
    </div>
  );
}
