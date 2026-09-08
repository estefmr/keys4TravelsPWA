"use client";

import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function TopBar() {
  const { user, loading } = useAuth();

  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-2.5">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-primary.png"
            alt="Keys4Travels"
            width={150}
            height={40}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>

        <Link
          href="/cuenta"
          className="flex items-center gap-1.5 rounded-full border border-brand/15 px-3 py-1.5 text-xs font-medium text-brand transition-colors hover:bg-brand/5"
        >
          <User className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          {loading ? "" : user ? "Mi cuenta" : "Iniciar sesión"}
        </Link>
      </div>
    </header>
  );
}
