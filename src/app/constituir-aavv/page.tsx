import { FileText, Download, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Constituir una AAVV | Federación de AAVV de La Rioja",
  description:
    "Conoce toda la información necesaria para crear vuestra Asociación Vecinal y cómo poder federarla.",
};

export default function ConstituirAAVV() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-3">Información</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              ¿Cómo constituir una Asociación Vecinal?
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Conoce toda la información necesaria para crear vuestra Asociación
              Vecinal y cómo poder federarla.
            </p>
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Información
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
              ¿Qué es una asociación?
            </h2>
          </div>
          <div className="bg-bg-light rounded-2xl p-8 border border-border">
            <p className="text-text-muted leading-relaxed text-lg">
              Las Asociaciones son agrupaciones de personas constituidas para
              realizar una actividad colectiva de una forma estable, organizadas
              democráticamente, sin ánimo de lucro e independientes, al menos
              formalmente, del Estado, los partidos políticos y las empresas.
            </p>
            <p className="text-text-muted leading-relaxed text-lg mt-4">
              Están reguladas por la{" "}
              <strong className="text-text-dark">
                Ley Orgánica 1/2002, de 22 de marzo
              </strong>
              , reguladora del Derecho de Asociación.
            </p>
          </div>
        </div>
      </section>

      {/* Documentos */}
      <section className="py-16 md:py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Documentación
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
              ¿Qué documentos necesito?
            </h2>
            <p className="mt-3 text-text-muted">
              Descarga y cumplimenta los documentos adjuntos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <FileText size={28} className="text-accent" />
              </div>
              <h3 className="font-bold text-text-dark text-lg mb-2">
                Modelo de estatutos
              </h3>
              <p className="text-sm text-text-muted mb-4">
                Plantilla de estatutos para la constitución de la asociación
                vecinal.
              </p>
              <button className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:underline">
                <Download size={16} />
                Descargar documento
              </button>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <FileText size={28} className="text-accent" />
              </div>
              <h3 className="font-bold text-text-dark text-lg mb-2">
                Acta Fundacional
              </h3>
              <p className="text-sm text-text-muted mb-4">
                Documento del acta fundacional necesario para la constitución.
              </p>
              <button className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:underline">
                <Download size={16} />
                Descargar documento
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Federarse */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Federarse
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
              Requisitos para Federarse
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-bg-light rounded-2xl p-8 border border-border">
              <h3 className="font-bold text-text-dark text-lg mb-4">
                Documentos a presentar
              </h3>
              <ul className="space-y-3">
                {[
                  "Copia de Estatutos",
                  "Solicitud de Admisión",
                  "Certificado del Acta Asamblea General, donde acordaron federarse",
                  "Certificado del Número de Socios",
                  "Cargo en Cuenta Bancaria",
                ].map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <span className="text-text-muted">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-bg-light rounded-2xl p-8 border border-border">
              <h3 className="font-bold text-text-dark text-lg mb-4">
                Condiciones
              </h3>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Podrán pertenecer como asociadas de la Federación, todas las
                  Asociaciones Vecinales de Logroño o de la Comunidad Autónoma de
                  La Rioja, que estén legalmente constituidas, lo soliciten y no
                  igualen o superen el ámbito territorial de la Federación.
                </p>
                <p>
                  No podrán ser miembros de la Federación aquellas Asociaciones
                  Vecinales que tengan el mismo ámbito territorial de las que ya
                  existan.
                </p>
                <p>
                  La condición de asociación federada se adquiere mediante
                  solicitud expresa por escrito de admisión, a la que se
                  acompañarán los Estatutos de la Asociación y certificación del
                  acta de la Asamblea General en la que se tomó acuerdo de
                  federarse, correspondiendo la aceptación a la Asamblea General
                  de la Federación.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg"
            >
              ¿Tienes dudas? Contáctanos
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
