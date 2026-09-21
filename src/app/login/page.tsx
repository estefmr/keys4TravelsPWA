"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackBar from "@/components/BackBar";
import { useAuth } from "@/contexts/AuthContext";

/**
 * Acceso. A diferencia del resto de la app —clara, de lectura— esta pantalla
 * se va a oscuro: una foto de viaje al fondo bajo un velo azul profundo, el
 * logo en blanco y el formulario sobre un cristal esmerilado.
 *
 * La idea es que entrar se sienta como cruzar una puerta, no como rellenar un
 * trámite. Todo el color sale de la paleta de marca (azul de la marca + el
 * crema "sand"), sin inventar dorados: el lujo lo dan el aire entre elementos
 * y la tipografía con serifa, no la purpurina.
 */
export default function LoginPage() {
  const { signInWithPassword, configured } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error } = await signInWithPassword(email, password);
    setLoading(false);
    if (error) {
      setError(error);
      return;
    }
    router.push("/cuenta");
  }

  return (
    // `-mb-28` cancela el hueco que `main` reserva para la barra inferior:
    // aquí el panel oscuro llega hasta abajo del todo y ese hueco dejaría
    // una franja crema asomando bajo el azul.
    <div className="-mb-28">
      <BackBar href="/cuenta" backLabel="Mi cuenta" title="Iniciar sesión" />

      {/* La altura descuenta las dos barras de arriba (3.25rem + 3.55rem) para
          llenar la pantalla justa. `dvh` evita el salto cuando el navegador
          móvil esconde su propia barra al hacer scroll. */}
      <div className="relative isolate flex min-h-[calc(100dvh-6.8rem)] flex-col justify-center overflow-hidden px-5 pb-28 pt-12">
        <Image
          src="/images/home/florencia.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="-z-10 object-cover"
        />
        {/* Velo: la foto se insinúa, pero el texto manda. */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-dark/85 via-[#120f38]/93 to-[#0a0818]" />
        <div className="pointer-events-none absolute -left-24 top-1/4 -z-10 h-72 w-72 rounded-full bg-brand-light/20 blur-3xl" />

        <header className="flex flex-col items-center text-center">
          <Image
            src="/logo-white.png"
            alt="Keys4Travels"
            width={480}
            height={114}
            priority
            className="h-11 w-auto object-contain"
          />

          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-sand/70">
            Acceso exclusivo
          </p>
          <h1 className="font-display mt-3 text-3xl leading-tight text-white">
            Bienvenido de vuelta
          </h1>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
            Tu próximo viaje sin prisa te está esperando.
          </p>
        </header>

        {!configured && (
          <div className="mt-8 rounded-2xl border border-amber-300/25 bg-amber-200/10 p-3.5 text-sm text-amber-100">
            Configura Supabase para activar el acceso.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-md"
        >
          <Campo
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            autoComplete="email"
          />
          <Campo
            id="password"
            label="Contraseña"
            type="password"
            value={password}
            onChange={setPassword}
            autoComplete="current-password"
          />

          {error && (
            <p role="alert" className="text-sm text-rose-200">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            // Crema sobre azul profundo: el botón es lo más claro de la
            // pantalla, así que la mirada aterriza ahí sola.
            className="mt-2 rounded-full bg-sand px-5 py-3.5 text-sm font-semibold tracking-wide text-brand-dark transition-colors hover:bg-white disabled:opacity-60"
          >
            {loading ? "Entrando…" : "Entrar"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-white/55">
          ¿Aún no tienes cuenta?{" "}
          <Link
            href="/registro"
            className="font-medium text-sand underline decoration-sand/40 underline-offset-4 transition-colors hover:text-white"
          >
            Crea la tuya
          </Link>
        </p>
      </div>
    </div>
  );
}

/** Campo del formulario, con el rótulo en versalitas sobre el cristal. */
function Campo({
  id,
  label,
  type,
  value,
  onChange,
  autoComplete,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (valor: string) => void;
  autoComplete: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-[15px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-sand/60 focus:bg-white/[0.14]"
      />
    </div>
  );
}
