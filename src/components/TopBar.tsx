"use client";

import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useDict, useLocalizePath } from "@/lib/i18n/LocaleProvider";

export default function TopBar() {
  const { user, loading } = useAuth();
  const t = useDict().nav;
  const loc = useLocalizePath();

  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      {/* Alto fijo (no derivado del padding) para que la barra de "volver" de
          las rutas pueda anclarse justo debajo con `--topbar-h`. */}
      <div className="mx-auto flex h-[var(--topbar-h)] max-w-3xl items-center justify-between px-4">
        <Link href={loc("/")} className="flex items-center gap-2">
          <Image
            src="/logo-primary.png"
            alt="Keys4Travels"
            width={150}
            height={40}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-2">
        <LanguageSwitch />
        <Link
          href={loc("/cuenta")}
          className="flex items-center gap-1.5 rounded-full border border-brand/15 px-3 py-1.5 text-xs font-medium text-brand transition-colors hover:bg-brand/5"
        >
          <User className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          {loading ? "" : user ? t.miCuenta : t.iniciarSesion}
        </Link>
        </div>
      </div>
    </header>
  );
}
