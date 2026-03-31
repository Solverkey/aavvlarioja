import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/Logo-AAVV-2.svg"
                alt="Logo Federación AAVV La Rioja"
                width={40}
                height={40}
                className="w-10 h-10 object-contain brightness-0 invert"
              />
              <div>
                <p className="text-sm font-bold leading-tight">Federación de Asociaciones</p>
                <p className="text-sm font-bold leading-tight">Vecinales de La Rioja</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Desde 1989 defendiendo y mejorando los intereses generales de la vecindad.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
              Enlaces
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Inicio" },
                { href: "/constituir-aavv", label: "Constituir AAVV" },
                { href: "/asociaciones-federadas", label: "Asociaciones Federadas" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                C/ San Pablo n.º 2-Bajo<br />CP 26001 Logroño (La Rioja)
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone size={16} className="shrink-0 text-accent" />
                941 250 364 / 637 645 438
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail size={16} className="shrink-0 text-accent" />
                federacion@aavvlarioja.org
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
              Con el apoyo de
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 inline-block">
                <Image
                  src="/images/logo-larioja.png"
                  alt="Gobierno de La Rioja"
                  width={360}
                  height={120}
                  className="h-16 w-auto"
                />
              </div>
              <div className="bg-white rounded-lg p-4 inline-block">
                <Image
                  src="/images/logo-ministerio.png"
                  alt="Ministerio de Derechos Sociales, Consumo y Agenda 2030"
                  width={440}
                  height={160}
                  className="h-20 w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} Federación de Asociaciones Vecinales de La Rioja
            </p>
            <div className="flex gap-6">
              <Link href="/aviso-legal" className="text-xs text-white/50 hover:text-white/80 transition-colors">
                Aviso Legal
              </Link>
              <Link href="/politica-de-privacidad" className="text-xs text-white/50 hover:text-white/80 transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/politica-de-cookies" className="text-xs text-white/50 hover:text-white/80 transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
