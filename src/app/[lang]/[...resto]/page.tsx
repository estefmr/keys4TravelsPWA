import { notFound } from "next/navigation";

/**
 * Cualquier dirección que no existe cae aquí para mostrar el 404 propio
 * (not-found.tsx), con el diseño y el idioma de la app en vez de la
 * página genérica de Next.
 */
export default function PaginaInexistente() {
  notFound();
}
