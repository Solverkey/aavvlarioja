import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Contacto | Federación de AAVV de La Rioja",
  description:
    "Ponte en contacto con la Federación de Asociaciones Vecinales de La Rioja.",
};

export default function Contacto() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-warm rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-3">Contacto</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Ponte en contacto con nosotros
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Estamos aquí para ayudarte. No dudes en escribirnos o visitarnos
              en nuestra sede.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-text-dark mb-6">
                  Información de contacto
                </h2>
              </div>

              <div className="bg-bg-light rounded-2xl p-6 border border-border space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">
                      Dirección
                    </p>
                    <p className="text-text-muted text-sm">
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
                    <p className="font-semibold text-text-dark text-sm">
                      Teléfonos
                    </p>
                    <p className="text-text-muted text-sm">
                      <a href="tel:941250364" className="hover:text-accent">
                        941 250 364
                      </a>
                    </p>
                    <p className="text-text-muted text-sm">
                      <a href="tel:637645438" className="hover:text-accent">
                        637 645 438
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">Fax</p>
                    <p className="text-text-muted text-sm">941 261 247</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">
                      Correo electrónico
                    </p>
                    <a
                      href="mailto:federacion@aavvlarioja.org"
                      className="text-sm text-accent hover:underline"
                    >
                      federacion@aavvlarioja.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-bg-light rounded-2xl p-6 border border-border">
                <p className="text-sm text-text-muted mb-1">Presidenta</p>
                <p className="font-bold text-text-dark">
                  M.ª Ángeles Matute Bobadilla
                </p>
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-3">
              <div className="bg-bg-light rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-text-dark mb-6">
                  Envíanos un mensaje
                </h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text-dark mb-1.5"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-dark placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text-dark mb-1.5"
                      >
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-dark placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-text-dark mb-1.5"
                    >
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-dark placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-dark mb-1.5"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-dark placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Send size={18} />
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="mt-12 bg-white rounded-2xl overflow-hidden border border-border h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d183.94512233236955!2d-2.4472226!3d42.4676948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5aab38e6eaa6b1%3A0x5079b7c680a86c9c!2sFederaci%C3%B3n%20de%20Asociaciones%20Vecinales%20de%20La%20Rioja!5e0!3m2!1ses!2ses!4v1711101594203!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Federación AAVV La Rioja"
            />
          </div>
        </div>
      </section>
    </>
  );
}
