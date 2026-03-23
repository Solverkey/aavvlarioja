import { MapPin, Phone, Mail, Building2, Map } from "lucide-react";

export const metadata = {
  title: "Asociaciones Federadas | Federación de AAVV de La Rioja",
  description:
    "Listado completo de asociaciones vecinales federadas en Logroño y La Rioja.",
};

const asociacionesLogrono = [
  {
    name: "AVEZO (Zona Oeste)",
    address: "Huesca 57, bajo",
    phone: "678 066 131",
  },
  {
    name: "Carretera del Cortijo",
    address: "Ctra. del Cortijo, 44",
    phone: "",
  },
  {
    name: "Centro",
    address: "Santa Isabel, 1",
    phone: "",
  },
  {
    name: "Centro Histórico de Logroño",
    address: "San Gregorio 57-59",
    phone: "",
  },
  {
    name: "Ciudad Jardín Joaquín Elizalde",
    address: "Virgen del Pilar 8",
    phone: "",
  },
  {
    name: "Cascajos",
    address: "C/ Pedregales 1-3, bajo",
    phone: "661 804 175",
  },
  {
    name: "El Arco",
    address: "Manuel de Falla n.º 55, bajo",
    phone: "",
  },
  {
    name: "El Carmen",
    address: "Avda. España 11, bajo",
    phone: "616 216 417",
  },
  {
    name: "El Cortijo",
    address: "Pza. Pantaleona Melón s/n",
    phone: "",
  },
  {
    name: "El Cubo",
    address: "Ronda de los Cuarteles n.º 54, bajo",
    phone: "",
  },
  {
    name: "Excuevas-Norte-Barriocepo",
    address: "Norte n.º 11, 2.º Dcha.",
    phone: "",
  },
  {
    name: "Fueclaya",
    address: "Pamplona n.º 2",
    phone: "",
  },
  {
    name: "La Cava - Fardachón",
    address: "Torrecilla en Cameros n.º 3, bajo",
    phone: "",
  },
  {
    name: "Los Lirios",
    address: "C/ Tudela 18",
    phone: "",
  },
  {
    name: "Lobete",
    address: "Jorge Vigón n.º 66, bajo",
    phone: "",
  },
  {
    name: "Montesoria",
    address: "Avda. de La Sierra n.º 121 E",
    phone: "",
  },
  {
    name: "Parque de los Enamorados - San Lázaro",
    address: "Portillejo, 45-47",
    phone: "",
  },
  {
    name: "San Antonio",
    address: "Paseo Francisco Sáez Porres n.º 5",
    phone: "",
  },
  {
    name: "San José",
    address: "Paseo Prior n.º 10",
    phone: "",
  },
  {
    name: "7 Infantes - Las Gaunas",
    address: "Paseo Prior n.º 10",
    phone: "",
  },
  {
    name: "Valdegastea",
    address: "Fuenmayor 23-25, bajo",
    phone: "",
  },
  {
    name: "Varea",
    address: "C/ Artesanos n.º 2, bajo",
    phone: "",
  },
];

const asociacionesProvincia = [
  {
    name: "La Pionera",
    location: "Arnedo",
    address: "",
    phone: "",
  },
  {
    name: "Virgen del Prado",
    location: "Inestrillas",
    address: "",
    phone: "",
  },
  {
    name: "Entre Ríos",
    location: "La Rioja",
    address: "",
    phone: "",
  },
  {
    name: "La Inmaculada",
    location: "Nájera",
    address: "",
    phone: "",
  },
  {
    name: "Trevijano",
    location: "Trevijano",
    address: "",
    phone: "",
  },
  {
    name: "Torresolano",
    location: "Nalda",
    address: "",
    phone: "",
  },
];

export default function AsociacionesFederadas() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-warm rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-3">Nuestras asociaciones</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Asociaciones Federadas
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Descubre todas las asociaciones vecinales que forman parte de
              nuestra Federación en Logroño y La Rioja.
            </p>
          </div>
        </div>
      </section>

      {/* Logroño */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Building2 size={24} className="text-accent" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-dark">
                Logroño
              </h2>
              <p className="text-text-muted text-sm">
                {asociacionesLogrono.length} asociaciones
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {asociacionesLogrono.map((a) => (
              <div
                key={a.name}
                className="bg-bg-light rounded-xl p-5 border border-border hover:border-accent/30 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-text-dark mb-2">{a.name}</h3>
                {a.address && (
                  <div className="flex items-start gap-2 text-sm text-text-muted mb-1">
                    <MapPin size={14} className="mt-0.5 shrink-0 text-accent" />
                    {a.address}
                  </div>
                )}
                {a.phone && (
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <Phone size={14} className="shrink-0 text-accent" />
                    <a href={`tel:${a.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                      {a.phone}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provincia */}
      <section className="py-16 md:py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Map size={24} className="text-accent" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-dark">
                Provincia de La Rioja
              </h2>
              <p className="text-text-muted text-sm">
                {asociacionesProvincia.length} asociaciones
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {asociacionesProvincia.map((a) => (
              <div
                key={a.name}
                className="bg-white rounded-xl p-5 border border-border hover:border-accent/30 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-text-dark mb-1">{a.name}</h3>
                <div className="flex items-center gap-2 text-sm text-accent font-medium">
                  <MapPin size={14} />
                  {a.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
