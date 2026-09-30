// La versión publicada ahora mismo. La app instalada compara este valor
// con el que trae grabado en su código para saber si quedó atrás
// (ver VersionUpdater). Nunca se cachea: ni en Vercel ni en el teléfono.
export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(
    { version: process.env.NEXT_PUBLIC_APP_VERSION },
    { headers: { "Cache-Control": "no-store" } }
  );
}
