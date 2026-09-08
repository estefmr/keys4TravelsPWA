"use client";

import Link from "next/link";
import { LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function CuentaPage() {
  const { user, loading, signOut, configured } = useAuth();

  if (loading) {
    return <div className="px-5 py-10 text-sm text-zinc-500">Cargando…</div>;
  }

  return (
    <div className="flex flex-col items-center px-5 py-10 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
        <User className="h-7 w-7" strokeWidth={1.75} />
      </div>

      {user ? (
        <>
          <h1 className="font-display mt-4 text-xl text-foreground">Mi cuenta</h1>
          <p className="mt-1 text-sm text-zinc-500">{user.email}</p>
          <button
            onClick={() => signOut()}
            className="mt-6 flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50"
          >
            <LogOut className="h-4 w-4" /> Cerrar sesión
          </button>
        </>
      ) : (
        <>
          <h1 className="font-display mt-4 text-xl text-foreground">
            Aún no has iniciado sesión
          </h1>
          <p className="mt-1 max-w-xs text-sm text-zinc-500">
            Crea una cuenta para guardar tus hoteles y destinos favoritos.
          </p>

          {!configured && (
            <div className="mt-4 w-full rounded-xl bg-amber-50 p-3 text-sm text-amber-800">
              Configura Supabase para activar el acceso.
            </div>
          )}

          <div className="mt-6 flex w-full flex-col gap-3">
            <Link
              href="/login"
              className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/registro"
              className="rounded-full border border-brand/20 px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand/5"
            >
              Crear cuenta
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
