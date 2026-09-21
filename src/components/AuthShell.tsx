import Image from "next/image";
import type { ReactNode } from "react";
import BackBar from "@/components/BackBar";

/**
 * Carcasa compartida de las pantallas de cuenta: acceso, registro y Mi cuenta.
 *
 * A diferencia del resto de la app —clara, de lectura— estas se van a
 * oscuro: una foto de viaje al fondo bajo un velo azul profundo, el logo en
 * blanco y el formulario sobre un cristal esmerilado. La idea es que entrar
 * se sienta como cruzar una puerta, no como rellenar un trámite.
 *
 * Todo el color sale de la paleta de marca (el azul + el crema "sand"), sin
 * inventar dorados: el lujo lo dan el aire entre elementos y la tipografía
 * con serifa, no la purpurina.
 *
 * Vive aquí y no en cada página porque las tres son hermanas: si el estilo se
 * duplicara, el siguiente retoque solo llegaría a una de ellas.
 */
export default function AuthShell({
  backTitle,
  back = true,
  photo,
  kicker,
  title,
  subtitle,
  children,
}: {
  /** Nombre de la pantalla en la barra de volver. */
  backTitle: string;
  /** Las pantallas raíz (Mi cuenta) no cuelgan de nada: van sin flecha. */
  back?: boolean;
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
      {back && (
        <BackBar href="/cuenta" backLabel="Mi cuenta" title={backTitle} />
      )}

      {/* La altura descuenta lo que ocupan las barras de arriba, para llenar
          la pantalla justa: la superior siempre (3.25rem) y la de volver solo
          cuando la hay (3.55rem). `dvh` evita el salto cuando el navegador
          móvil esconde su propia barra al hacer scroll. */}
      <div
        className={`relative isolate flex flex-col justify-center overflow-hidden px-5 pb-28 pt-12 ${
          back ? "min-h-[calc(100dvh-6.8rem)]" : "min-h-[calc(100dvh-3.25rem)]"
        }`}
      >
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

/**
 * Forma común de los botones. Se exportan como clases —y no solo como
 * componentes— porque aquí unas acciones son <button> y otras <Link>, y
 * deben verse idénticas.
 */
export const authPrimario =
  "rounded-full bg-sand px-5 py-3.5 text-center text-sm font-semibold tracking-wide text-brand-dark transition-colors hover:bg-white disabled:opacity-60";

export const authSecundario =
  "flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3.5 text-center text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white/10";

/** Botón principal: lo más claro de la pantalla, para que la mirada aterrice ahí. */
export function AuthButton({ children, ...props }: React.ComponentProps<"button">) {
  return (
    <button {...props} className={`mt-2 ${authPrimario}`}>
      {children}
    </button>
  );
}

/** Columna de acciones, para las pantallas que ofrecen botones en vez de formulario. */
export function AuthActions({ children }: { children: ReactNode }) {
  return <div className="mt-8 flex flex-col gap-3">{children}</div>;
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
