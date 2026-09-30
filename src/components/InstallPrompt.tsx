"use client";

import { useState, useSyncExternalStore, type ReactNode } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Download, X, Plus, ExternalLink, EllipsisVertical } from "lucide-react";
import { stripLocale } from "@/lib/i18n/config";
import { useDict } from "@/lib/i18n/LocaleProvider";

/**
 * Chrome ya no muestra un banner de instalación por su cuenta: desde
 * Chrome 76 la mini-infobar desapareció y la web tiene que capturar
 * `beforeinstallprompt` y ofrecer su propio botón. Safari en iOS nunca ha
 * emitido ese evento, así que ahí lo único posible es explicar el gesto
 * manual (Compartir → Añadir a pantalla de inicio).
 *
 * Samsung Internet sí emite el evento, pero la app que genera al instalar
 * la construye Samsung para una versión vieja de Android y Google Play
 * Protect la bloquea («Se bloqueó la app no segura»). Chrome la construye
 * con Google y no salta nada, así que en Samsung no se ofrece instalar:
 * se ofrece abrir la página en Chrome. En el resto de navegadores de
 * Android sin evento se explica el gesto a mano desde el menú.
 *
 * La detección vive en un store externo en vez de en estado de React
 * porque nace fuera del árbol: el evento lo dispara el navegador, a veces
 * antes de que React hidrate (por eso layout.tsx lo guarda en window).
 */

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

declare global {
  interface Window {
    __k4tInstallEvent?: BeforeInstallPromptEvent;
  }
}

const DISMISS_KEY = "k4t-install-dismissed";

/** Pantallas con su propia tarjeta `card-dark` para instalar. */
const PANTALLAS_CON_TARJETA = ["/login", "/cuenta"];

type Snapshot = {
  prompt: BeforeInstallPromptEvent | null;
  installed: boolean;
  ios: boolean;
  android: boolean;
  samsung: boolean;
  standalone: boolean;
  dismissed: boolean;
};

const SERVER_SNAPSHOT: Snapshot = {
  prompt: null,
  installed: false,
  ios: false,
  android: false,
  samsung: false,
  standalone: false,
  dismissed: false,
};

let snapshot: Snapshot = SERVER_SNAPSHOT;
let initialized = false;
const listeners = new Set<() => void>();

function update(patch: Partial<Snapshot>) {
  snapshot = { ...snapshot, ...patch };
  for (const listener of listeners) listener();
}

function detectIOS() {
  const ua = navigator.userAgent;
  // iPadOS 13+ se identifica como Macintosh; se distingue por el táctil.
  return (
    /iPad|iPhone|iPod/.test(ua) ||
    (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)
  );
}

/**
 * Enlace que abre la página actual en Chrome desde otro navegador de
 * Android. Si Chrome no está instalado, lleva a su ficha en Play Store.
 */
function chromeIntentUrl() {
  const { host, pathname, search } = window.location;
  const sinChrome = encodeURIComponent(
    "https://play.google.com/store/apps/details?id=com.android.chrome"
  );
  return `intent://${host}${pathname}${search}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${sinChrome};end`;
}

function detectStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    // Safari en iOS usa esta propiedad no estándar.
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

function init() {
  if (initialized) return;
  initialized = true;

  let dismissed = false;
  try {
    dismissed = localStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    // Modo privado o almacenamiento bloqueado: mostramos el banner igual.
  }

  snapshot = {
    // El evento pudo dispararse antes de hidratar; layout.tsx lo guardó.
    prompt: window.__k4tInstallEvent ?? null,
    installed: false,
    ios: detectIOS(),
    android: /Android/.test(navigator.userAgent),
    samsung: /SamsungBrowser/.test(navigator.userAgent),
    standalone: detectStandalone(),
    dismissed,
  };

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    update({ prompt: e as BeforeInstallPromptEvent });
  });
  window.addEventListener("appinstalled", () => {
    window.__k4tInstallEvent = undefined;
    update({ prompt: null, installed: true });
  });
}

function subscribe(listener: () => void) {
  init();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return snapshot;
}

function getServerSnapshot() {
  return SERVER_SNAPSHOT;
}

export default function InstallPrompt({
  variant = "banner",
}: {
  /** "card-dark" es la misma tarjeta sobre el panel oscuro de Mi cuenta. */
  variant?: "banner" | "card" | "card-dark";
}) {
  const oscuro = variant === "card-dark";
  // Sin prefijo de idioma, para reconocer también /en/login.
  const pathname = stripLocale(usePathname());
  const t = useDict().instalar;
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [dismissedNow, setDismissedNow] = useState(false);

  const { installed, ios, android, samsung, standalone } = state;
  // En Samsung Internet el botón de instalar lleva al bloqueo de Play
  // Protect: se hace como si no hubiera evento y se manda a Chrome.
  const samsungAndroid = samsung && android;
  const prompt = samsungAndroid ? null : state.prompt;
  // La tarjeta de "Mi cuenta" es el acceso permanente: ignora que el
  // banner se haya descartado antes.
  const dismissed =
    variant === "banner" && (dismissedNow || state.dismissed);

  async function handleInstall() {
    if (!prompt) return;
    await prompt.prompt();
    const { outcome } = await prompt.userChoice;
    // El evento solo puede usarse una vez.
    window.__k4tInstallEvent = undefined;
    update(outcome === "accepted" ? { prompt: null, installed: true } : { prompt: null });
  }

  function handleDismiss() {
    setDismissedNow(true);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Sin almacenamiento reaparecerá en la próxima visita; aceptable.
    }
  }

  if (standalone || installed || dismissed) return null;
  // Estas pantallas llevan su propia tarjeta de instalar: el banner de
  // arriba la repetiría.
  if (variant === "banner" && PANTALLAS_CON_TARJETA.includes(pathname)) {
    return null;
  }
  // Nada que ofrecer: ni botón, ni iPhone ni Android con instrucciones
  // (en la práctica, un navegador de escritorio sin evento).
  if (!prompt && !ios && !android) return null;

  const suave = oscuro ? "text-white/60" : "text-zinc-500";
  const resalte = oscuro ? "text-sand" : "text-brand";
  const botonClase = `mt-2.5 flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
    oscuro
      ? "bg-sand text-brand-dark hover:bg-white"
      : "bg-brand text-white hover:bg-brand-dark"
  }`;

  let cuerpo: ReactNode;
  if (prompt) {
    cuerpo = (
      <>
        <p className={`mt-1 text-xs leading-relaxed ${suave}`}>
          {t.pantallaInicio}
        </p>
        <button type="button" onClick={handleInstall} className={botonClase}>
          <Download className="h-3.5 w-3.5" strokeWidth={2.25} />
          {t.instalarApp}
        </button>
      </>
    );
  } else if (samsungAndroid) {
    cuerpo = (
      <>
        <p className={`mt-1 text-xs leading-relaxed ${suave}`}>
          {t.samsungAntes}
          <span className={`font-semibold ${resalte}`}>Chrome</span>
          {t.samsungDespues}
        </p>
        <a href={chromeIntentUrl()} className={botonClase}>
          <ExternalLink className="h-3.5 w-3.5" strokeWidth={2.25} />
          {t.abrirEnChrome}
        </a>
      </>
    );
  } else if (ios) {
    cuerpo = (
      <p className={`mt-1 text-xs leading-relaxed ${suave}`}>
        {t.iosPulsa}
        <span className={`font-semibold ${resalte}`}>{t.iosCompartir}</span>
        {t.iosEnLaBarra}
        <span className={`inline-flex items-center gap-0.5 font-semibold ${resalte}`}>
          {t.iosAnadir} <Plus className="h-3 w-3" />
        </span>
        .
      </p>
    );
  } else {
    // Android sin evento: otro navegador, o Chrome antes de avisar.
    cuerpo = (
      <p className={`mt-1 text-xs leading-relaxed ${suave}`}>
        {t.androidAbre}
        <span className={`inline-flex items-center font-semibold ${resalte}`}>
          <EllipsisVertical className="h-3.5 w-3.5" />
        </span>
        {t.androidDelNavegador}
        <span className={`font-semibold ${resalte}`}>{t.androidInstalar}</span>
        {t.androidO}
        <span className={`font-semibold ${resalte}`}>{t.androidAnadir}</span>
        .
      </p>
    );
  }

  const content = (
    <div className="flex items-start gap-3">
      <Image
        src="/icons/icon-192.png"
        alt=""
        width={44}
        height={44}
        className="mt-0.5 shrink-0 rounded-xl shadow-sm"
      />
      <div className="min-w-0 flex-1">
        <p
          className={`text-sm font-semibold ${
            oscuro ? "text-white" : "text-foreground"
          }`}
        >
          {t.titulo}
        </p>
        {cuerpo}
      </div>
      {variant === "banner" && (
        <button
          type="button"
          onClick={handleDismiss}
          aria-label={t.cerrar}
          className="-mr-1 -mt-1 shrink-0 rounded-full p-1.5 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );

  if (variant === "card" || oscuro) {
    return (
      <div
        className={`w-full rounded-2xl border p-4 text-left ${
          oscuro
            ? "border-white/10 bg-white/[0.06] backdrop-blur-md"
            : "border-black/5 bg-white shadow-sm"
        }`}
      >
        {content}
      </div>
    );
  }

  return (
    <div className="border-b border-black/5 bg-sand/70">
      <div className="mx-auto max-w-3xl px-4 py-3">{content}</div>
    </div>
  );
}
