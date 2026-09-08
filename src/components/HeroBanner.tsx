"use client";

import { useState, type ReactNode } from "react";

/**
 * Full-bleed hero: a brand-colored gradient that always looks intentional,
 * with an optional real photo layered on top. If the photo file isn't
 * present yet (see /public/images), it silently fails to load and the
 * gradient alone carries the banner — no broken-image icon in a spot this
 * visible.
 */
export default function HeroBanner({
  src,
  alt,
  children,
  minHeight = "20rem",
}: {
  src?: string;
  alt: string;
  children: ReactNode;
  minHeight?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="relative flex items-end overflow-hidden bg-gradient-to-br from-brand via-brand-dark to-[#120f38]"
      style={{ minHeight }}
    >
      {src && !failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
      <div className="relative z-10 w-full px-5 pb-6 pt-16 text-white">{children}</div>
    </div>
  );
}
