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
import InstallPrompt from "@/components/InstallPrompt";
import { useAuth } from "@/contexts/AuthContext";
import { useDict, useLocalizePath } from "@/lib/i18n/LocaleProvider";

export default function LoginPage() {
  const { signInWithPassword, configured } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const t = useDict().auth;
  const loc = useLocalizePath();

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
    router.push(loc("/cuenta"));
  }

  return (
    <AuthShell
      backTitle={t.iniciarSesion}
      photo="/images/home/florencia.jpg"
      kicker={t.loginKicker}
      title={t.loginTitulo}
      subtitle={t.loginSubtitulo}
    >
      {!configured && (
        <AuthNotice tone="warn">{t.configurarSupabase}</AuthNotice>
      )}

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
          autoComplete="current-password"
        />

        {error && (
          <p role="alert" className="text-sm text-rose-200">
            {error}
          </p>
        )}

        <AuthButton type="submit" disabled={loading}>
          {loading ? t.entrando : t.entrar}
        </AuthButton>
      </AuthCard>

      <AuthFooter>
        {t.sinCuenta}{" "}
        <Link
          href={loc("/registro")}
          className="font-medium text-sand underline decoration-sand/40 underline-offset-4 transition-colors hover:text-white"
        >
          {t.creaLaTuya}
        </Link>
      </AuthFooter>

      {/* Como en Mi cuenta: acceso permanente para instalar la app, aunque
          se haya cerrado el banner de arriba. Dentro de la app no sale. */}
      <div className="mt-8">
        <InstallPrompt variant="card-dark" />
      </div>
    </AuthShell>
  );
}
