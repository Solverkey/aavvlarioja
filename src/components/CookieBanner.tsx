"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Cookie, X, ChevronDown, Shield } from "lucide-react";

const STORAGE_KEY = "aavv_cookie_preferences";

interface CookiePreferences {
  necessary: true;
  analytics: boolean;
  functional: boolean;
  timestamp: number;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  functional: false,
  timestamp: 0,
};

const CATEGORIES = [
  {
    id: "necessary" as const,
    label: "Cookies necesarias",
    description:
      "Imprescindibles para el funcionamiento del sitio web. Incluyen la sesión de navegación y la preferencia de cookies. No se pueden desactivar.",
    locked: true,
  },
  {
    id: "analytics" as const,
    label: "Cookies de análisis",
    description:
      "Nos permiten medir el número de visitantes, las páginas más populares y cómo se navega por el sitio. Toda la información es anónima y se usa para mejorar la web. Proveedor: Google Analytics.",
    locked: false,
  },
  {
    id: "functional" as const,
    label: "Cookies funcionales",
    description:
      "Permiten funcionalidades adicionales como la integración con redes sociales (Instagram), mapas embebidos y contenido multimedia externo.",
    locked: false,
  },
];

function getStoredPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function savePreferences(prefs: CookiePreferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...prefs, timestamp: Date.now() }));
}

export default function CookieBanner() {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [draft, setDraft] = useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = getStoredPreferences();
    if (stored) {
      setPreferences(stored);
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = useCallback(() => {
    const prefs: CookiePreferences = { necessary: true, analytics: true, functional: true, timestamp: Date.now() };
    savePreferences(prefs);
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
  }, []);

  const rejectAll = useCallback(() => {
    const prefs: CookiePreferences = { ...DEFAULT_PREFERENCES, timestamp: Date.now() };
    savePreferences(prefs);
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
  }, []);

  const saveCustom = useCallback(() => {
    const prefs = { ...draft, necessary: true as const, timestamp: Date.now() };
    savePreferences(prefs);
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
  }, [draft]);

  const openSettings = useCallback(() => {
    setDraft(preferences ?? DEFAULT_PREFERENCES);
    setShowSettings(true);
    setShowBanner(false);
  }, [preferences]);

  if (!mounted) return null;

  return (
    <>
      {/* Banner inicial */}
      {showBanner && !showSettings && (
        <div className="fixed bottom-0 inset-x-0 z-[100] p-4 md:p-6 animate-in slide-in-from-bottom">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border border-border p-5 md:p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <Shield size={20} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-text-dark mb-1">
                  Tu privacidad es importante
                </p>
                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  Utilizamos cookies propias y de terceros para analizar el tráfico
                  y mejorar tu experiencia. Puedes aceptar todas, rechazar las
                  opcionales o{" "}
                  <button
                    onClick={openSettings}
                    className="text-accent hover:underline font-medium"
                  >
                    personalizar tu elección
                  </button>
                  . Consulta nuestra{" "}
                  <Link
                    href="/politica-de-cookies"
                    className="text-accent hover:underline font-medium"
                  >
                    política de cookies
                  </Link>
                  .
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={acceptAll}
                    className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                  >
                    Aceptar todas
                  </button>
                  <button
                    onClick={rejectAll}
                    className="bg-bg-light hover:bg-border text-text-dark text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors border border-border"
                  >
                    Solo necesarias
                  </button>
                  <button
                    onClick={openSettings}
                    className="text-text-muted hover:text-text-dark text-sm font-semibold px-3 py-2.5 transition-colors"
                  >
                    Configurar
                  </button>
                </div>
              </div>
              <button
                onClick={rejectAll}
                className="p-1.5 rounded-lg hover:bg-bg-light transition-colors shrink-0"
                aria-label="Cerrar"
              >
                <X size={18} className="text-text-muted" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Panel de configuración */}
      {showSettings && (
        <div className="fixed inset-0 z-[200] flex items-end md:items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => {
              setShowSettings(false);
              if (!preferences) setShowBanner(true);
            }}
          />
          <div className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-t-2xl md:rounded-2xl shadow-2xl border border-border">
            <div className="sticky top-0 bg-white border-b border-border px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
              <div className="flex items-center gap-3">
                <Shield size={20} className="text-accent" />
                <h2 className="font-bold text-text-dark">Configuración de cookies</h2>
              </div>
              <button
                onClick={() => {
                  setShowSettings(false);
                  if (!preferences) setShowBanner(true);
                }}
                className="p-1.5 rounded-lg hover:bg-bg-light transition-colors"
                aria-label="Cerrar"
              >
                <X size={18} className="text-text-muted" />
              </button>
            </div>

            <div className="px-6 py-4">
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                Selecciona qué categorías de cookies deseas permitir. Las cookies
                necesarias siempre están activas porque son imprescindibles para
                el funcionamiento del sitio. Más información en nuestra{" "}
                <Link
                  href="/politica-de-cookies"
                  className="text-accent hover:underline font-medium"
                  onClick={() => setShowSettings(false)}
                >
                  política de cookies
                </Link>
                .
              </p>

              <div className="space-y-3">
                {CATEGORIES.map((cat) => {
                  const isOn = cat.locked || draft[cat.id];
                  const isExpanded = expandedCategory === cat.id;

                  return (
                    <div
                      key={cat.id}
                      className="border border-border rounded-xl overflow-hidden"
                    >
                      <div className="flex items-center gap-3 px-4 py-3">
                        <button
                          onClick={() =>
                            setExpandedCategory(isExpanded ? null : cat.id)
                          }
                          className="flex-1 flex items-center gap-2 text-left"
                        >
                          <ChevronDown
                            size={16}
                            className={`text-text-muted transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                          <span className="text-sm font-semibold text-text-dark">
                            {cat.label}
                          </span>
                          {cat.locked && (
                            <span className="text-[10px] bg-accent/10 text-accent font-semibold px-2 py-0.5 rounded-full">
                              Siempre activas
                            </span>
                          )}
                        </button>
                        <button
                          onClick={() => {
                            if (cat.locked) return;
                            setDraft((d) => ({ ...d, [cat.id]: !d[cat.id] }));
                          }}
                          disabled={cat.locked}
                          className={`relative w-11 h-6 rounded-full transition-colors duration-200 shrink-0 ${
                            cat.locked
                              ? "bg-accent cursor-not-allowed"
                              : isOn
                                ? "bg-accent cursor-pointer"
                                : "bg-gray-300 cursor-pointer"
                          }`}
                          aria-label={`${isOn ? "Desactivar" : "Activar"} ${cat.label}`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                              isOn ? "translate-x-5" : ""
                            }`}
                          />
                        </button>
                      </div>

                      <div
                        className={`grid transition-all duration-200 ${
                          isExpanded
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-xs text-text-muted leading-relaxed px-4 pb-3 pt-0 border-t border-border/50 mt-0 pt-3">
                            {cat.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-border px-6 py-4 flex flex-wrap gap-3">
              <button
                onClick={saveCustom}
                className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors flex-1 min-w-[140px]"
              >
                Guardar preferencias
              </button>
              <button
                onClick={acceptAll}
                className="bg-bg-light hover:bg-border text-text-dark text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors border border-border flex-1 min-w-[140px]"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Botón flotante (siempre visible después de elegir) */}
      {preferences && !showSettings && (
        <button
          onClick={openSettings}
          className="fixed bottom-5 right-5 z-[90] w-11 h-11 bg-white hover:bg-bg-light border border-border rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105"
          aria-label="Configurar cookies"
          title="Configurar cookies"
        >
          <Cookie size={18} className="text-text-muted" />
        </button>
      )}
    </>
  );
}
