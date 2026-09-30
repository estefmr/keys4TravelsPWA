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
import { useDict, useLocalizePath } from "@/lib/i18n/LocaleProvider";

export default function RegistroPage() {
  const { signUp, configured } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const t = useDict().auth;
  const loc = useLocalizePath();

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
      router.push(loc("/cuenta"));
      return;
    }
    setDone(true);
  }

  return (
    <AuthShell
      backTitle={t.crearCuenta}
      photo="/images/home/cinque-terre.jpg"
      kicker={t.registroKicker}
      title={t.registroTitulo}
      subtitle={t.registroSubtitulo}
    >
      {!configured && (
        <AuthNotice tone="warn">{t.configurarSupabase}</AuthNotice>
      )}

      {done ? (
        <AuthNotice>
          {t.registroListoAntes}
          <Link
            href={loc("/login")}
            className="font-semibold underline decoration-sand/40 underline-offset-4 transition-colors hover:text-white"
          >
            {t.registroListoEnlace}
          </Link>
          {t.registroListoDespues}
        </AuthNotice>
      ) : (
        <AuthCard onSubmit={handleSubmit}>
          <AuthField
            id="email"
            label={t.email}
            type="email"
            value={email}
            onChange={setEmail}
            autoComplete="email"
          />
          <AuthField
            id="password"
            label={t.contrasena}
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
            {loading ? t.creandoCuenta : t.crearCuenta}
          </AuthButton>
        </AuthCard>
      )}

      <AuthFooter>
        {t.yaTienesCuenta}{" "}
        <Link
          href={loc("/login")}
          className="font-medium text-sand underline decoration-sand/40 underline-offset-4 transition-colors hover:text-white"
        >
          {t.iniciaSesion}
        </Link>
      </AuthFooter>
    </AuthShell>
  );
}
