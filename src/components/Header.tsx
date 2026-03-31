"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/constituir-aavv", label: "Constituir AAVV" },
  { href: "/asociaciones-federadas", label: "Asociaciones Federadas" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/Logo-AAVV-2.svg"
              alt="Logo Federación AAVV La Rioja"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-primary leading-tight">
                Federación de Asociaciones
              </p>
              <p className="text-sm font-bold text-primary leading-tight">
                Vecinales de La Rioja
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-primary hover:bg-bg-light transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-bg-light transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-text-muted hover:text-primary hover:bg-bg-light transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
