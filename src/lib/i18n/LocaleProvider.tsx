"use client";

import { createContext, useContext, type ReactNode } from "react";
import { defaultLocale, localizePath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

const LocaleContext = createContext<Locale>(defaultLocale);

/** Lo pone el layout: el idioma de la página, para los componentes de cliente. */
export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

/** Los textos de la interfaz en el idioma de la página. */
export function useDict() {
  return getDictionary(useLocale());
}

/** Convierte una ruta en la del idioma actual: "/hoteles" → "/en/hoteles". */
export function useLocalizePath() {
  const locale = useLocale();
  return (path: string) => localizePath(locale, path);
}
