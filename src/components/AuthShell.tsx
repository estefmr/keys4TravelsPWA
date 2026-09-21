import Image from "next/image";
import type { ReactNode } from "react";
import BackBar from "@/components/BackBar";

/**
 * Carcasa compartida de las pantallas de acceso y registro.
 *
 * A diferencia del resto de la app —clara, de lectura— estas dos se van a
 * oscuro: una foto de viaje al fondo bajo un velo azul profundo, el logo en
 * blanco y el formulario sobre un cristal esmerilado. La idea es que entrar
 * se sienta como cruzar una puerta, no como rellenar un trámite.
 *
 * Todo el color sale de la paleta de marca (el azul + el crema "sand"), sin
 * inventar dorados: el lujo lo dan el aire entre elementos y la tipografía
 * con serifa, no la purpurina.
 *
 * Vive aquí y no en cada página porque las dos pantallas son gemelas: si el
 * estilo se duplicara, la siguiente retoque solo llegaría a una de ellas.
 */
export default function AuthShell({
  backTitle,
  photo,
  kicker,
  title,
  subtitle,
  children,
}: {
  /** Nombre de la pantalla en la barra de volver. */
  backTitle: string;
  /** Foto del fondo; cada pantalla lleva la suya para no ser calcadas. */
  photo: string;
  kicker: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    // `-mb-28` cancela el hueco que `main` reserva para la barra inferior:
    // aquí el panel oscuro llega hasta abajo del todo y ese hueco dejaría
    // una franja crema asomando bajo el azul.
    <div className="-mb-28">
      <BackBar href="/cuenta" backLabel="Mi cuenta" title={backTitle} />

      {/* La altura descuenta las dos barras de arriba (3.25rem + 3.55rem) para
          llenar la pantalla justa. `dvh` evita el salto cuando el navegador
          móvil esconde su propia barra al hacer scroll. */}
      <div className="relative isolate flex min-h-[calc(100dvh-6.8rem)] flex-col justify-center overflow-hidden px-5 pb-28 pt-12">
        <Image
          src={photo}
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
            {kicker}
          </p>
          <h1 className="font-display mt-3 text-3xl leading-tight text-white">
            {title}
          </h1>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
            {subtitle}
          </p>
        </header>

        {children}
      </div>
    </div>
  );
}

/** El cristal esmerilado que envuelve el formulario. */
export function AuthCard({ children, ...props }: React.ComponentProps<"form">) {
  return (
    <form
      {...props}
      className="mt-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-md"
    >
      {children}
    </form>
  );
}

/** Campo del formulario, con el rótulo en versalitas sobre el cristal. */
export function AuthField({
  id,
  label,
  type,
  value,
  onChange,
  autoComplete,
  minLength,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (valor: string) => void;
  autoComplete: string;
  minLength?: number;
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
        minLength={minLength}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-[15px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-sand/60 focus:bg-white/[0.14]"
      />
    </div>
  );
}

/** Botón principal: lo más claro de la pantalla, para que la mirada aterrice ahí. */
export function AuthButton({ children, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className="mt-2 rounded-full bg-sand px-5 py-3.5 text-sm font-semibold tracking-wide text-brand-dark transition-colors hover:bg-white disabled:opacity-60"
    >
      {children}
    </button>
  );
}

/** El "¿ya tienes cuenta?" del pie, con su enlace a la pantalla hermana. */
export function AuthFooter({ children }: { children: ReactNode }) {
  return (
    <p className="mt-8 text-center text-sm text-white/55">{children}</p>
  );
}

/** Aviso dentro del panel oscuro (error de configuración, registro hecho…). */
export function AuthNotice({
  tone = "info",
  children,
}: {
  tone?: "info" | "warn";
  children: ReactNode;
}) {
  const colores =
    tone === "warn"
      ? "border-amber-300/25 bg-amber-200/10 text-amber-100"
      : "border-sand/25 bg-sand/10 text-sand";
  return (
    <div className={`mt-8 rounded-2xl border p-4 text-sm leading-relaxed ${colores}`}>
      {children}
    </div>
  );
}
