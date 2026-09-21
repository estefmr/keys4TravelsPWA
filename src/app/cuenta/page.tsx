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

export default function CuentaPage() {
  const { user, loading, signOut, configured } = useAuth();

  // Mientras se resuelve la sesión mantenemos el mismo panel: con un
  // "Cargando…" sobre fondo claro, la pantalla daba un fogonazo blanco
  // antes de ponerse oscura.
  const entrado = Boolean(user);

  return (
    <AuthShell
      // Pantalla raíz: se llega desde la barra de arriba, no cuelga de
      // ninguna otra, así que va sin flecha de volver.
      back={false}
      backTitle="Mi cuenta"
      photo="/images/home/machu-picchu.jpg"
      // Mientras carga no afirmamos nada: decir "aún no has iniciado sesión"
      // a quien sí la tiene sería un parpadeo desconcertante.
      kicker={loading || !entrado ? "Tu cuenta" : "Sesión iniciada"}
      title={loading || entrado ? "Mi cuenta" : "Aún no has iniciado sesión"}
      subtitle={
        loading
          ? ""
          : entrado
            ? (user?.email ?? "")
            : "Crea una cuenta para guardar tus hoteles y destinos favoritos."
      }
    >
      {loading ? (
        <p className="mt-8 text-center text-sm text-white/50">Cargando…</p>
      ) : entrado ? (
        <AuthActions>
          <button onClick={() => signOut()} className={authSecundario}>
            <LogOut className="h-4 w-4" /> Cerrar sesión
          </button>
        </AuthActions>
      ) : (
        <>
          {!configured && (
            <AuthNotice tone="warn">
              Configura Supabase para activar el acceso.
            </AuthNotice>
          )}

          <AuthActions>
            <Link href="/login" className={authPrimario}>
              Iniciar sesión
            </Link>
            <Link href="/registro" className={authSecundario}>
              Crear cuenta
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
