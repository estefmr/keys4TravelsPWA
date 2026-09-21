"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Session, User } from "@supabase/supabase-js";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";

type AuthContextValue = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  configured: boolean;
  signInWithPassword: (
    email: string,
    password: string
  ) => Promise<{ error: string | null }>;
  signUp: (
    email: string,
    password: string
  ) => Promise<{ error: string | null; needsConfirmation: boolean }>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  // If Supabase isn't configured there is nothing to load — start as "not
  // loading" so the UI can render the friendly fallback state immediately.
  const [loading, setLoading] = useState(isSupabaseConfigured);

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user: session?.user ?? null,
      session,
      loading,
      configured: isSupabaseConfigured,
      async signInWithPassword(email, password) {
        const supabase = getSupabaseBrowserClient();
        if (!supabase) {
          return { error: "Configura Supabase para activar el acceso." };
        }
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        return { error: error?.message ?? null };
      },
      async signUp(email, password) {
        const supabase = getSupabaseBrowserClient();
        if (!supabase) {
          return {
            error: "Configura Supabase para activar el acceso.",
            needsConfirmation: false,
          };
        }
        const { data, error } = await supabase.auth.signUp({ email, password });
        // Con "Confirm email" desactivado en Supabase, signUp ya devuelve
        // sesión y el usuario queda dentro. Si está activado, no hay sesión
        // y hay que esperar al correo. Lo deducimos de la respuesta en vez
        // de dar por hecho una de las dos: así el código sigue siendo
        // correcto si algún día se vuelve a activar la confirmación.
        return {
          error: error?.message ?? null,
          needsConfirmation: !error && !data.session,
        };
      },
      async signOut() {
        const supabase = getSupabaseBrowserClient();
        if (!supabase) return;
        await supabase.auth.signOut();
      },
    }),
    [session, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
