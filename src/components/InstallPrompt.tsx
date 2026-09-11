"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { Download, X, Plus } from "lucide-react";

/**
 * Chrome ya no muestra un banner de instalación por su cuenta: desde
 * Chrome 76 la mini-infobar desapareció y la web tiene que capturar
 * `beforeinstallprompt` y ofrecer su propio botón. Safari en iOS nunca ha
 * emitido ese evento, así que ahí lo único posible es explicar el gesto
 * manual (Compartir → Añadir a pantalla de inicio).
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

type Snapshot = {
  prompt: BeforeInstallPromptEvent | null;
  installed: boolean;
  ios: boolean;
  standalone: boolean;
  dismissed: boolean;
};

const SERVER_SNAPSHOT: Snapshot = {
  prompt: null,
  installed: false,
  ios: false,
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
  variant?: "banner" | "card";
}) {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [dismissedNow, setDismissedNow] = useState(false);

  const { prompt, installed, ios, standalone } = state;
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
  // Nada que ofrecer: ni instalable por Chrome ni iOS con instrucciones.
  if (!prompt && !ios) return null;

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
        <p className="text-sm font-semibold text-foreground">
          Instala Keys4Travels
        </p>
        {ios && !prompt ? (
          <p className="mt-1 text-xs leading-relaxed text-zinc-500">
            Pulsa <span className="font-semibold text-brand">Compartir</span> en
            la barra de Safari y elige{" "}
            <span className="inline-flex items-center gap-0.5 font-semibold text-brand">
              Añadir a pantalla de inicio <Plus className="h-3 w-3" />
            </span>
            .
          </p>
        ) : (
          <>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500">
              Ábrela desde tu pantalla de inicio, a pantalla completa y sin
              barra del navegador.
            </p>
            <button
              type="button"
              onClick={handleInstall}
              className="mt-2.5 flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              <Download className="h-3.5 w-3.5" strokeWidth={2.25} />
              Instalar app
            </button>
          </>
        )}
      </div>
      {variant === "banner" && (
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Cerrar"
          className="-mr-1 -mt-1 shrink-0 rounded-full p-1.5 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );

  if (variant === "card") {
    return (
      <div className="w-full rounded-2xl border border-black/5 bg-white p-4 text-left shadow-sm">
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
