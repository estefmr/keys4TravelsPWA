"use client";

import Link from "next/link";
import { Compass } from "lucide-react";
import { useDict, useLocalizePath } from "@/lib/i18n/LocaleProvider";

export default function NotFound() {
  const t = useDict().noEncontrada;
  const loc = useLocalizePath();

  return (
    <div className="flex flex-col items-center px-5 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sand text-brand">
        <Compass className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h1 className="font-display mt-4 text-2xl text-foreground">{t.titulo}</h1>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-500">{t.texto}</p>
      <Link
        href={loc("/destinos")}
        className="mt-6 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        {t.boton}
      </Link>
    </div>
  );
}
