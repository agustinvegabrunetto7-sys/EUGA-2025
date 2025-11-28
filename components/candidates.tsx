"use client"

import { useState } from "react"
import { GlassCard } from "./ui/glass-card"
import { cn } from "@/lib/utils"

// Data for directiva
const directiva = [
  {
    role: "Presidente",
    name: "Morena Kopecky",
    image: "https://i.postimg.cc/1R6fCDLH/More-Pagina1.jpg",
  },
  {
    role: "Vicepresidente",
    name: "Luciano Olcina",
    image: "/placeholder.svg?height=400&width=400&text=Vice",
  },
  {
    role: "Secretaria General",
    name: "Luna Aguilera",
    image: "/placeholder.svg?height=400&width=400&text=Sec+Gral",
  },
  {
    role: "Secretario de Parlamento",
    name: "Joaquin Valfre",
    image: "https://i.postimg.cc/05B1w4Wx/Valfre-Pagina.jpg",
  },
]

// Data for secretariats team (simplified for demo, structured to match original intent)
const teams: Record<string, Array<{ role: string; name: string; bio: string; image?: string }>> = {
  comunicacion: [
    {
      role: "Secretario/a",
      name: "Nombre Apellido",
      bio: "Apasionado/a por comunicar las ideas de todos.",
      image: "",
    },
    { role: "Sub-secretario/a", name: "Nombre Apellido", bio: "Coordinando las redes con creatividad.", image: "" },
    { role: "Comisión", name: "Nombre Apellido", bio: "Llevando la información a cada curso.", image: "" },
  ],
  hacienda: [
    {
      role: "Secretario/a",
      name: "Nombre Apellido",
      bio: "Cuidando cada peso para que vuelva a los estudiantes.",
      image: "",
    },
    { role: "Sub-secretario/a", name: "Nombre Apellido", bio: "Gestionando recursos con transparencia.", image: "" },
    { role: "Comisión", name: "Nombre Apellido", bio: "Buscando las mejores oportunidades para todos.", image: "" },
  ],
  salud: [
    { role: "Secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Sub-secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Comisión", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
  ],
  sociales: [
    { role: "Secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Sub-secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Comisión", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
  ],
  genero: [
    { role: "Secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Sub-secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Comisión", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
  ],
  humanidades: [
    { role: "Secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Sub-secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Comisión", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
  ],
  edilicias: [
    { role: "Secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Sub-secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Comisión", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
  ],
  parlamentaria: [
    { role: "Secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Sub-secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Comisión", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
  ],
  relaciones: [
    { role: "Secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Sub-secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Comisión", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
  ],
  actas: [
    { role: "Secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Sub-secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Comisión", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
  ],
  deportes: [
    { role: "Secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Sub-secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Comisión", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
  ],
  arte: [
    { role: "Secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Sub-secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Comisión", name: "Milagros Buffa", bio: "Hola, soy Milagros y entre a la lista por las propuestas que tenía en mente y para hacer del colegio un lugar mejor.", image: "https://i.postimg.cc/1X2z73yg/Buffa-Comision-Arte.jpg" },
  ],
  default: [
    { role: "Secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Sub-secretario/a", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
    { role: "Comisión", name: "Nombre Apellido", bio: "[Texto de presentación pendiente]", image: "" },
  ],
}

const secretariatButtons = [
  { id: "comunicacion", icon: "📢", label: "Comunicación" },
  { id: "hacienda", icon: "💰", label: "Hacienda" },
  { id: "salud", icon: "🏥", label: "Salud" },
  { id: "sociales", icon: "🤝", label: "Sociales" },
  { id: "genero", icon: "🚺", label: "Género" },
  { id: "humanidades", icon: "📚", label: "Humanidades" },
  { id: "edilicias", icon: "🏫", label: "Edilicias" },
  { id: "parlamentaria", icon: "🗳️", label: "Parlamentaria" },
  { id: "relaciones", icon: "🌐", label: "Relaciones" },
  { id: "actas", icon: "📜", label: "Actas" },
  { id: "deportes", icon: "⚽", label: "Deportes" },
  { id: "arte", icon: "🎨", label: "Arte" },
]

export function Candidates() {
  const [activeTeam, setActiveTeam] = useState("comunicacion")

  const currentTeam = teams[activeTeam] || teams.default

  return (
    <section id="candidatos" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Directiva Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-10 font-sans">
            COMISIÓN <span className="text-celeste-500">DIRECTIVA</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directiva.map((member, i) => (
              <GlassCard key={i} hoverEffect className="p-4 text-center group">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg group-hover:scale-105 transition-transform">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover bg-slate-200"
                  />
                </div>
                <h3 className="font-bold text-lg text-slate-800">{member.name}</h3>
                <p className="text-celeste-600 font-medium text-sm">{member.role}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Team Explorer */}
        <div id="equipo">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">
            NUESTRO <span className="text-celeste-500">EQUIPO</span>
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Conocé a los estudiantes que trabajarán día a día en cada secretaría.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {secretariatButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveTeam(btn.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                  activeTeam === btn.id
                    ? "bg-celeste-500 text-white shadow-md shadow-celeste-300/50 scale-105"
                    : "glass-panel hover:bg-white/80 text-slate-600",
                )}
              >
                <span>{btn.icon}</span>
                <span className="hidden sm:inline">{btn.label}</span>
              </button>
            ))}
          </div>

          <div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 min-h-[300px] animate-in fade-in slide-in-from-bottom-4 duration-500"
            key={activeTeam}
          >
            {currentTeam.map((member, i) => (
              <GlassCard key={i} className="flex flex-col h-full border-t-4 border-t-celeste-400">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden shrink-0">
                    <img
                      src={member.image || "/placeholder.svg?height=100&width=100&text=Foto"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 leading-tight">{member.name}</h4>
                    <p className="text-xs text-celeste-600 font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 italic mt-auto">"{member.bio}"</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
