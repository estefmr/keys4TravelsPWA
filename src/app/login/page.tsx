"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthShell, {
  AuthButton,
  AuthCard,
  AuthField,
  AuthFooter,
  AuthNotice,
} from "@/components/AuthShell";
import { useAuth } from "@/contexts/AuthContext";

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
    <AuthShell
      backTitle="Iniciar sesión"
      photo="/images/home/florencia.jpg"
      kicker="Acceso exclusivo"
      title="Bienvenido"
      subtitle="Tu próximo viaje sin prisa te está esperando."
    >
      {!configured && (
        <AuthNotice tone="warn">
          Configura Supabase para activar el acceso.
        </AuthNotice>
      )}

      <AuthCard onSubmit={handleSubmit}>
        <AuthField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
        />
        <AuthField
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

        <AuthButton type="submit" disabled={loading}>
          {loading ? "Entrando…" : "Entrar"}
        </AuthButton>
      </AuthCard>

      <AuthFooter>
        ¿Aún no tienes cuenta?{" "}
        <Link
          href="/registro"
          className="font-medium text-sand underline decoration-sand/40 underline-offset-4 transition-colors hover:text-white"
        >
          Crea la tuya
        </Link>
      </AuthFooter>
    </AuthShell>
  );
}
