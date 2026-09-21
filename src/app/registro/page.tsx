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
    <AuthShell
      backTitle="Crear cuenta"
      photo="/images/home/cinque-terre.jpg"
      kicker="Únete a Keys4Travels"
      title="Empieza el viaje"
      subtitle="Guarda tus hoteles y destinos favoritos, y retoma la búsqueda donde la dejaste."
    >
      {!configured && (
        <AuthNotice tone="warn">
          Configura Supabase para activar el acceso.
        </AuthNotice>
      )}

      {done ? (
        <AuthNotice>
          ¡Listo! Revisa tu email para confirmar tu cuenta y luego{" "}
          <Link
            href="/login"
            className="font-semibold underline decoration-sand/40 underline-offset-4 transition-colors hover:text-white"
          >
            inicia sesión
          </Link>
          .
        </AuthNotice>
      ) : (
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
            autoComplete="new-password"
            minLength={6}
          />

          {error && (
            <p role="alert" className="text-sm text-rose-200">
              {error}
            </p>
          )}

          <AuthButton type="submit" disabled={loading}>
            {loading ? "Creando cuenta…" : "Crear cuenta"}
          </AuthButton>
        </AuthCard>
      )}

      <AuthFooter>
        ¿Ya tienes cuenta?{" "}
        <Link
          href="/login"
          className="font-medium text-sand underline decoration-sand/40 underline-offset-4 transition-colors hover:text-white"
        >
          Inicia sesión
        </Link>
      </AuthFooter>
    </AuthShell>
  );
}
