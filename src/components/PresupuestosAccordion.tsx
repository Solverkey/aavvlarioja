"use client";

import { useState } from "react";
import { ChevronDown, FileText, Download } from "lucide-react";

interface DocLink {
  label: string;
  href: string;
}

interface YearData {
  year: number;
  description?: string;
  dataLink?: DocLink;
  distritos: DocLink[];
  extraContent?: string;
}

const presupuestos: YearData[] = [
  {
    year: 2023,
    dataLink: {
      label: "DATOS DE PARTICIPACIÓN",
      href: "/documents/DATOS-PRESUPUESTOS-2023-.docx",
    },
    description:
      "Estas son las propuestas que se debatirán en las mesas de barrio.",
    distritos: [
      { label: "Distrito Norte", href: "/documents/PRIORIZACION-NORTE_2.pdf" },
      { label: "Distrito Centro", href: "/documents/PRIORIZACION-CENTRO_2.pdf" },
      { label: "Distrito Sur", href: "/documents/PRIORIZACION-SUR_2.pdf" },
      { label: "Distrito Oeste", href: "/documents/PRIORIZACION-OESTE_2.pdf" },
      { label: "Distrito Este", href: "/documents/PRIORIZACION-ESTE_2.pdf" },
    ],
  },
  {
    year: 2022,
    dataLink: {
      label: "DATOS DE PARTICIPACIÓN",
      href: "/documents/DATOS-PRESUPUESTOS-2022-.docx",
    },
    description:
      "Estas son las propuestas que se debatirán en las mesas de barrio.",
    distritos: [
      { label: "Distrito Norte", href: "/documents/PRIORIZACION-NORTE_1.pdf" },
      { label: "Distrito Centro", href: "/documents/PRIORIZACION-CENTRO_1.pdf" },
      { label: "Distrito Sur", href: "/documents/PRIORIZACION-SUR.pdf" },
      { label: "Distrito Oeste", href: "/documents/PRIORIZACION-OESTE_1.pdf" },
      { label: "Distrito Este", href: "/documents/PRIORIZACION-ESTE.pdf" },
      { label: "Sin priorización ciudadana", href: "/documents/SIN-PRIORIZACION-CIUDAD.pdf" },
    ],
  },
  {
    year: 2021,
    dataLink: {
      label: "DATOS DE PARTICIPACIÓN",
      href: "/documents/DATOS-PRESUPUESTOS-2021.docx",
    },
    description:
      "Estas son las propuestas que se debatirán en las mesas de barrio.",
    distritos: [
      { label: "Distrito Norte", href: "/documents/PRIORIZACION-NORTE.pdf" },
      { label: "Distrito Centro", href: "/documents/PRIORIZACION-CENTRO.pdf" },
      { label: "Distrito Sur", href: "/documents/PRIORIZACION-SUR_1.pdf" },
      { label: "Distrito Oeste", href: "/documents/PRIORIZACION-OESTE.pdf" },
      { label: "Distrito Este", href: "/documents/PRIORIZACION-ESTE_1.pdf" },
    ],
  },
  {
    year: 2020,
    description:
      "Estas son las propuestas que las mesas de barrio priorizaron.",
    distritos: [
      { label: "Distrito Centro", href: "/documents/CENTRO-2020.pdf" },
      { label: "Distrito Sur", href: "/documents/SUR-2020.pdf" },
      { label: "Distrito Oeste", href: "/documents/OESTE-2020.pdf" },
      { label: "Distrito Este", href: "/documents/ESTE-APOYOS.pdf" },
    ],
  },
  {
    year: 2019,
    description:
      "Estas son las propuestas que las mesas de barrio priorizaron.",
    distritos: [
      { label: "Distrito Norte", href: "/documents/2019-NORTE.pdf" },
      { label: "Distrito Centro", href: "/documents/2019--CENTRO.pdf" },
      { label: "Distrito Sur", href: "/documents/2019-SUR.pdf" },
      { label: "Distrito Oeste", href: "/documents/2019-OESTE.pdf" },
      { label: "Distrito Este", href: "/documents/2019--ESTE.pdf" },
    ],
  },
  {
    year: 2018,
    dataLink: {
      label: "DATOS DE PARTICIPACIÓN",
      href: "/documents/DATOS-PRESUPUESTOS-2018.doc",
    },
    description:
      "Estas son las propuestas que las mesas de barrio priorizaron.",
    distritos: [
      { label: "Distrito Norte", href: "/documents/NORTE-PROPUESTAS-DEFINITIVAS.pdf" },
      { label: "Distrito Centro", href: "/documents/CENTRO-PROPUESTAS-DEFINITIVAS.pdf" },
      { label: "Distrito Sur", href: "/documents/SUR-PROPUESTAS-DEFINITIVAS-.pdf" },
      { label: "Distrito Oeste", href: "/documents/OESTEPROPUESTAS-DEFINITVAS.pdf" },
      { label: "Distrito Este", href: "/documents/ESTE-PROPUESTAS-DEFINITIVAS.pdf" },
      { label: "Ciudad", href: "/documents/CIUDAD-PROPUESTAS-DEFINITIVAS.pdf" },
    ],
  },
  {
    year: 2017,
    description:
      "Propuestas priorizadas en las Mesas de Barrio y que se debatirán en las Juntas de Distrito y en el Consejo Social de la Ciudad.",
    distritos: [
      { label: "Distrito Norte", href: "/documents/OD-NORTE.pdf" },
      { label: "Distrito Centro", href: "/documents/OD-CENTRO.pdf" },
      { label: "Distrito Sur", href: "/documents/OD-SUR.pdf" },
      { label: "Distrito Oeste", href: "/documents/OD-OESTE.pdf" },
      { label: "Distrito Este", href: "/documents/OD-ESTE.pdf" },
      { label: "Ciudad", href: "/documents/OD-CIUDAD.pdf" },
    ],
  },
  {
    year: 2016,
    extraContent:
      "En el Presupuesto Participativo de 2016 hubo un total de 7.234 propuestas. Participaron 100 entidades, 2.841 hombres y 4.289 mujeres.",
    distritos: [
      { label: "Propuestas elegidas por distritos", href: "/documents/Resumen-2016.pdf" },
    ],
  },
  {
    year: 2015,
    extraContent:
      "En el Presupuesto Participativo de 2015 hubo un total de 4.376 propuestas. Participaron 139 entidades, 1.656 hombres y 2.342 mujeres.",
    distritos: [],
  },
  {
    year: 2014,
    extraContent:
      "En el Presupuesto Participativo de 2014 hubo un total de 3.069 propuestas. Participaron 139 entidades, 1.380 hombres y 1.863 mujeres.",
    distritos: [],
  },
];

export default function PresupuestosAccordion() {
  const [openYear, setOpenYear] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {presupuestos.map((item) => (
        <div
          key={item.year}
          className="bg-white rounded-xl border border-border overflow-hidden"
        >
          <button
            onClick={() =>
              setOpenYear(openYear === item.year ? null : item.year)
            }
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-bg-light/50 transition-colors"
          >
            <span className="font-bold text-text-dark">{item.year}</span>
            <ChevronDown
              size={18}
              className={`text-text-muted transition-transform duration-200 ${
                openYear === item.year ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openYear === item.year
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-4 pb-4 border-t border-border pt-3">
                {item.extraContent && (
                  <p className="text-xs text-text-muted leading-relaxed mb-3">
                    {item.extraContent}
                  </p>
                )}

                {item.dataLink && (
                  <a
                    href={item.dataLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-semibold text-xs hover:underline mb-2"
                  >
                    <FileText size={14} />
                    {item.dataLink.label}
                  </a>
                )}

                {item.description && (
                  <p className="text-xs text-text-muted mb-3">
                    {item.description}
                  </p>
                )}

                {item.distritos.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {item.distritos.map((doc) => (
                      <a
                        key={doc.label}
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-accent/5 hover:bg-accent/10 text-accent text-xs font-medium px-2.5 py-1.5 rounded-lg transition-colors border border-accent/10"
                      >
                        <Download size={12} />
                        {doc.label}
                      </a>
                    ))}
                  </div>
                )}

                {item.distritos.length === 0 && !item.dataLink && (
                  <p className="text-xs text-text-muted italic">
                    Datos informativos (sin documentos descargables).
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
