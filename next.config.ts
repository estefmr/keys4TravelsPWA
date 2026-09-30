import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Identifica cada publicación: queda grabado en el código del
    // navegador y lo devuelve /api/version. Si no coinciden, la app
    // abierta es vieja y VersionUpdater la recarga.
    NEXT_PUBLIC_APP_VERSION: process.env.VERCEL_GIT_COMMIT_SHA ?? "local",
  },
};

export default nextConfig;
