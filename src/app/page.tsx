import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Heart,
  Users,
  Shield,
  ExternalLink,
  Vote,
  History,
} from "lucide-react";
import PresupuestosAccordion from "@/components/PresupuestosAccordion";

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <Image
          src="/images/logrono-cabecera.jpg"
          alt="Logroño"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Desde 1989 a pie de calle
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Defendiendo y mejorando{" "}
              <span className="text-accent">tu barrio</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Actuando como intermediaria con las administraciones públicas y
              privadas, e informando, educando y formando a la ciudadanía en
              temas de interés general.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contactar
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/asociaciones-federadas"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 border border-white/20"
              >
                Ver Asociaciones
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "35+", label: "Años de experiencia" },
              { number: "27+", label: "Asociaciones federadas" },
              { number: "5", label: "Distritos en Logroño" },
              { number: "6", label: "Municipios de La Rioja" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-extrabold text-accent">
                  {stat.number}
                </p>
                <p className="text-sm text-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redes sociales */}
      <section className="bg-bg-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Social
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
              ¡Estamos al día!
            </h2>
            <p className="mt-3 text-text-muted max-w-xl mx-auto">
              Aquí podréis ver la actualidad en nuestras redes sociales. ¡No te
              pierdas nada!
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/fvecinalesrioja/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity shadow-lg"
            >
              <InstagramIcon size={24} />
              Síguenos en Instagram
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Red Vecinal contra la Violencia de Género */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-purple-100">
            <a
              href="https://redvecinal.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-6"
            >
              <Image
                src="/images/Red-Vecinal_1.svg"
                alt="Red Vecinal contra la Violencia de Género"
                width={280}
                height={80}
                className="h-14 w-auto"
              />
            </a>

            <p className="text-text-muted leading-relaxed mb-4">
              La Red Vecinal contra la Violencia de Género es un programa de
              la Federación de Asociaciones Vecinales de La Rioja y el
              Gobierno de La Rioja que ofrece acompañamientos, traslados y
              apoyos a personas en situación de maltrato. Actúa en toda La
              Rioja gracias a la colaboración anónima de personas voluntarias.
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              También se organizan y realizan grupos de apoyo mutuo,
              autoayuda y autonomía de vida para mujeres, asimismo realizan
              diferentes actuaciones con el objetivo de concienciar,
              sensibilizar y formar en materia de igualdad y en violencia de
              género.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Actualmente la Red Vecinal contra la Violencia de Género tiene
              Puntos de Información en{" "}
              <strong>
                Logroño, Nájera, Arnedo, Alfaro y Calahorra
              </strong>
              .
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 border border-purple-100">
                <p className="text-sm font-semibold text-purple-700 mb-1">
                  Coordinadora
                </p>
                <p className="font-bold text-text-dark">
                  Nuria Lázaro Somalo
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-purple-100 flex flex-col gap-3">
                <p className="text-sm font-semibold text-purple-700 mb-0">
                  Teléfonos de contacto
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:941244902"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2.5 rounded-xl transition-colors text-sm"
                  >
                    <Phone size={16} />
                    941 244 902
                  </a>
                  <a
                    href="tel:636759083"
                    className="inline-flex items-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold px-4 py-2.5 rounded-xl transition-colors text-sm"
                  >
                    <Phone size={16} />
                    636 759 083
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section id="quienes-somos" className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Conócenos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
              ¿Quiénes somos?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-text-muted leading-relaxed text-lg mb-6">
              La Federación de Asociaciones Vecinales de La Rioja es una
              organización sin fines de lucro que agrupa a diferentes
              asociaciones vecinales de Logroño y La Rioja.
            </p>
            <p className="text-text-muted leading-relaxed text-lg mb-10">
              Su objetivo es{" "}
              <strong className="text-text-dark">defender y mejorar</strong> los
              intereses generales de la vecindad, actuando como intermediaria con
              las administraciones públicas y privadas, e informando, educando y
              formando a la ciudadanía en temas de interés general. También
              promueve la participación ciudadana, el asociacionismo juvenil, la
              sanidad, la cultura, la seguridad y el voluntariado.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: Users,
                title: "Participación ciudadana",
                desc: "Promovemos la implicación activa de la vecindad en la toma de decisiones de su comunidad.",
              },
              {
                icon: Heart,
                title: "Voluntariado",
                desc: "Impulsamos programas de voluntariado que fortalecen los lazos vecinales y la solidaridad.",
              },
              {
                icon: Shield,
                title: "Defensa de derechos",
                desc: "Actuamos como intermediarios con las administraciones para defender los intereses de los vecinos.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-bold text-text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presupuestos Participativos */}
      <section id="presupuestos" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Participación
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
              Presupuestos Participativos
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto text-lg">
              El Presupuesto Participativo es un proceso de participación por el
              cual la vecindad de Logroño decide sobre el destino de una parte
              del presupuesto municipal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Nueva plataforma */}
            <div className="bg-gradient-to-br from-accent/5 to-accent/15 rounded-3xl border border-accent/20 flex flex-col overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src="/images/participa-mockup.png"
                  alt="Plataforma ParticipAVV"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <Image
                  src="/images/participa-logo-2.png"
                  alt="ParticipAVV"
                  width={2797}
                  height={447}
                  className="h-8 w-auto mb-4 self-start"
                />
                <h3 className="text-2xl font-bold text-text-dark mb-3">
                  ¡Nueva plataforma de participación!
                </h3>
                <p className="text-text-muted leading-relaxed mb-6 flex-1">
                  Ahora puedes crear y votar propuestas directamente desde
                  nuestra nueva plataforma digital. Participa de forma sencilla
                  y transparente en las decisiones de tu barrio.
                </p>
                <a
                  href="https://participa.aavvlarioja.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl self-start"
                >
                  Ir a participa.aavvlarioja.org
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* Histórico */}
            <div className="bg-bg-light rounded-3xl p-8 md:p-10 border border-border flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <History size={22} className="text-text-muted" />
                <h3 className="text-xl font-bold text-text-dark">
                  Histórico
                </h3>
              </div>
              <p className="text-sm text-text-muted mb-5">
                Consulta los datos de participación y propuestas priorizadas en
                ediciones anteriores por distritos.
              </p>
              <div className="flex-1 overflow-y-auto max-h-[500px] pr-1">
                <PresupuestosAccordion />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localización */}
      <section id="localizacion" className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Localización
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
              ¿Dónde estamos?
            </h2>
            <p className="mt-3 text-text-muted">
              Ven a visitarnos en persona y podremos conocernos
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark">Dirección</p>
                    <p className="text-text-muted">
                      C/ San Pablo n.º 2-Bajo
                      <br />
                      CP 26001 Logroño (La Rioja)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark">Teléfonos</p>
                    <p className="text-text-muted">941 250 364</p>
                    <p className="text-text-muted">637 645 438</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark">Fax</p>
                    <p className="text-text-muted">941 261 247</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark">
                      Correo electrónico
                    </p>
                    <a
                      href="mailto:federacion@aavvlarioja.org"
                      className="text-accent hover:underline"
                    >
                      federacion@aavvlarioja.org
                    </a>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-text-muted">Presidenta</p>
                  <p className="font-semibold text-text-dark">
                    M.ª Ángeles Matute Bobadilla
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden border border-border h-80 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d183.94512233236955!2d-2.4472226!3d42.4676948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5aab38e6eaa6b1%3A0x5079b7c680a86c9c!2sFederaci%C3%B3n%20de%20Asociaciones%20Vecinales%20de%20La%20Rioja!5e0!3m2!1ses!2ses!4v1711101594203!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Federación AAVV La Rioja"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
