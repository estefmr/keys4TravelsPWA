import ContactForm from "@/components/ContactForm";
import KennyCard from "@/components/KennyCard";

export const metadata = {
  title: "Contacto — Keys4Travels",
  description: "Escríbele a Kenny Acosta, fundador de Keys4Travels.",
};

export default function ContactoPage() {
  return (
    <div className="px-5 py-6">
      <h1 className="font-display text-2xl text-foreground">Contacto</h1>

      {/* El cuestionario trae su propio encabezado ("Antes de tu llamada
          con Kenny"), así que aquí no hace falta otro título. */}
      <div className="mt-5 rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
        <ContactForm />
      </div>

      <div className="mt-8">
        <KennyCard />
      </div>
    </div>
  );
}
