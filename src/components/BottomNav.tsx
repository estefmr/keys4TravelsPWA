"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, BedDouble, Mail, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { stripLocale } from "@/lib/i18n/config";
import { useDict, useLocalizePath } from "@/lib/i18n/LocaleProvider";

const FIJAS = [
  { href: "/", key: "inicio", icon: Home },
  { href: "/destinos", key: "destinos", icon: Compass },
  { href: "/hoteles", key: "hoteles", icon: BedDouble },
] as const;

/**
 * La última pestaña cambia según haya sesión o no: quien no ha entrado
 * necesita una forma de escribirnos; quien ya entró necesita llegar a su
 * reserva y su itinerario, que es lo que viene a hacer.
 */
const CONTACTO = { href: "/contacto", key: "contacto", icon: Mail } as const;
const RESERVA = { href: "/reserva", key: "reserva", icon: User } as const;

export default function BottomNav() {
  // Sin el prefijo de idioma: "/en/hoteles" marca Hoteles igual que "/hoteles".
  const pathname = stripLocale(usePathname());
  const { user } = useAuth();
  const t = useDict().nav;
  const loc = useLocalizePath();

  // Mientras se resuelve la sesión se muestra Contacto: es lo que vale para
  // cualquiera, y así la pestaña no aparece y desaparece al cargar.
  const tabs = [...FIJAS, user ? RESERVA : CONTACTO];

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label={t.ariaLabel}
    >
      <ul className="mx-auto flex max-w-3xl items-stretch justify-between">
        {tabs.map(({ href, key, icon: Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href} className="flex-1">
              <Link
                href={loc(href)}
                className={`flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors ${
                  active ? "text-brand" : "text-zinc-400 hover:text-brand-light"
                }`}
              >
                <Icon
                  className="h-5 w-5"
                  strokeWidth={active ? 2.25 : 1.75}
                  aria-hidden="true"
                />
                {t[key]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
