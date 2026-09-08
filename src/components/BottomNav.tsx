"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, BedDouble, Mail } from "lucide-react";

const TABS = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/destinos", label: "Destinos", icon: Compass },
  { href: "/hoteles", label: "Hoteles", icon: BedDouble },
  { href: "/contacto", label: "Contacto", icon: Mail },
] as const;

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Navegación principal"
    >
      <ul className="mx-auto flex max-w-3xl items-stretch justify-between">
        {TABS.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                className={`flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors ${
                  active ? "text-brand" : "text-zinc-400 hover:text-brand-light"
                }`}
              >
                <Icon
                  className="h-5 w-5"
                  strokeWidth={active ? 2.25 : 1.75}
                  aria-hidden="true"
                />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
