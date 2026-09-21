"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackBar from "@/components/BackBar";
import { useAuth } from "@/contexts/AuthContext";

export default function RegistroPage() {
  const { signUp, configured } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error, needsConfirmation } = await signUp(email, password);
    setLoading(false);
    if (error) {
      setError(error);
      return;
    }
    // Sin confirmación por email el registro ya deja la sesión abierta, así
    // que llevamos al usuario directo a su cuenta en lugar de pedirle que
    // revise un correo que nunca va a llegar.
    if (!needsConfirmation) {
      router.push("/cuenta");
      return;
    }
    setDone(true);
  }

  return (
    <div>
      <BackBar href="/cuenta" backLabel="Mi cuenta" title="Crear cuenta" />

      <div className="flex flex-col items-center px-5 py-10">
      <Image
        src="/logo-primary.png"
        alt="Keys4Travels"
        width={200}
        height={54}
        className="h-12 w-auto object-contain"
      />

      <h1 className="font-display mt-6 text-2xl text-foreground">Crear cuenta</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Guarda tus hoteles y destinos favoritos.
      </p>

      {!configured && (
        <div className="mt-5 w-full rounded-xl bg-amber-50 p-3 text-sm text-amber-800">
          Configura Supabase para activar el acceso.
        </div>
      )}

      {done ? (
        <div className="mt-6 w-full rounded-xl bg-brand/5 p-4 text-sm text-brand-dark">
          ¡Listo! Revisa tu email para confirmar tu cuenta y luego{" "}
          <Link href="/login" className="font-semibold underline underline-offset-2">
            inicia sesión
          </Link>
          .
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex w-full flex-col gap-3">
          <div>
            <label htmlFor="email" className="mb-1 block text-xs font-medium text-zinc-500">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-brand"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-xs font-medium text-zinc-500">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-brand"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-1 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
          >
            {loading ? "Creando cuenta…" : "Crear cuenta"}
          </button>
        </form>
      )}

      <p className="mt-5 text-sm text-zinc-500">
        ¿Ya tienes cuenta?{" "}
        <Link href="/login" className="font-medium text-brand underline underline-offset-2">
          Inicia sesión
        </Link>
      </p>
      </div>
    </div>
  );
}
