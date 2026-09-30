import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import InstallPrompt from "@/components/InstallPrompt";
import VersionUpdater from "@/components/VersionUpdater";
import { hasLocale, locales } from "@/lib/i18n/config";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternates } from "@/lib/i18n/metadata";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).meta;
  return {
    // Base de las URL absolutas (hreflang, redes sociales).
    metadataBase: new URL(
      process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000"
    ),
    title: t.siteTitle,
    description: t.siteDescription,
    alternates: alternates(lang, "/"),
    manifest: "/manifest.json",
    icons: {
      icon: [
        { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "Keys4Travels",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#312783",
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-cream text-foreground">
        {/* Chrome dispara `beforeinstallprompt` antes de que React hidrate.
            Si nadie lo escucha en ese momento se pierde y el botón de
            instalar no llega a aparecer, así que lo guardamos aquí. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();window.__k4tInstallEvent=e;});",
          }}
        />
        <LocaleProvider locale={lang}>
          <AuthProvider>
            <TopBar />
            <InstallPrompt />
            <main className="mx-auto w-full max-w-3xl flex-1 pb-28">{children}</main>
            <BottomNav />
          </AuthProvider>
        </LocaleProvider>
        <ServiceWorkerRegister />
        <VersionUpdater />
      </body>
    </html>
  );
}
