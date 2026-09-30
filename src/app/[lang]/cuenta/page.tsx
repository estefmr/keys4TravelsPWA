"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";
import AuthShell, {
  AuthActions,
  AuthNotice,
  authPrimario,
  authSecundario,
} from "@/components/AuthShell";
import { useAuth } from "@/contexts/AuthContext";
import InstallPrompt from "@/components/InstallPrompt";
import { useDict, useLocalizePath } from "@/lib/i18n/LocaleProvider";

export default function CuentaPage() {
  const { user, loading, signOut, configured } = useAuth();
  const t = useDict().auth;
  const loc = useLocalizePath();

  // Mientras se resuelve la sesión mantenemos el mismo panel: con un
  // "Cargando…" sobre fondo claro, la pantalla daba un fogonazo blanco
  // antes de ponerse oscura.
  const entrado = Boolean(user);

  return (
    <AuthShell
      // Pantalla raíz: se llega desde la barra de arriba, no cuelga de
      // ninguna otra, así que va sin flecha de volver.
      back={false}
      backTitle={t.miCuenta}
      photo="/images/home/machu-picchu.jpg"
      // Mientras carga no afirmamos nada: decir "aún no has iniciado sesión"
      // a quien sí la tiene sería un parpadeo desconcertante.
      kicker={loading || !entrado ? t.cuentaKickerFuera : t.cuentaKickerDentro}
      title={loading || entrado ? t.miCuenta : t.cuentaTituloFuera}
      subtitle={
        loading
          ? ""
          : entrado
            ? (user?.email ?? "")
            : t.cuentaSubtituloFuera
      }
    >
      {loading ? (
        <p className="mt-8 text-center text-sm text-white/50">{t.cargando}</p>
      ) : entrado ? (
        <AuthActions>
          <button onClick={() => signOut()} className={authSecundario}>
            <LogOut className="h-4 w-4" /> {t.cerrarSesion}
          </button>
        </AuthActions>
      ) : (
        <>
          {!configured && (
            <AuthNotice tone="warn">{t.configurarSupabase}</AuthNotice>
          )}

          <AuthActions>
            <Link href={loc("/login")} className={authPrimario}>
              {t.iniciarSesion}
            </Link>
            <Link href={loc("/registro")} className={authSecundario}>
              {t.crearCuenta}
            </Link>
          </AuthActions>
        </>
      )}

      {/* Acceso permanente: el banner del layout se puede descartar, este no. */}
      <div className="mt-8">
        <InstallPrompt variant="card-dark" />
      </div>
    </AuthShell>
  );
}
