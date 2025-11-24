"use client"

import { useState } from "react"
import { GlassCard } from "./ui/glass-card"
import { cn } from "@/lib/utils"

// Data for directiva
const directiva = [
  {
    role: "Presidente/a",
    name: "Nombre Apellido",
    course: "Curso",
    image: "/placeholder.svg?height=400&width=400&text=Presidente",
  },
  {
    role: "Vicepresidente/a",
    name: "Nombre Apellido",
    course: "Curso",
    image: "/placeholder.svg?height=400&width=400&text=Vice",
  },
  {
    role: "Secretario/a General",
    name: "Nombre Apellido",
    course: "Curso",
    image: "/placeholder.svg?height=400&width=400&text=Sec+Gral",
  },
  {
    role: "Tesorero/a",
    name: "Nombre Apellido",
    course: "Curso",
    image: "/placeholder.svg?height=400&width=400&text=Tesorero",
  },
]

// Data for secretariats team (simplified for demo, structured to match original intent)
const teams: Record<string, Array<{ role: string; name: string; course: string; bio: string }>> = {
  comunicacion: [
    {
      role: "Secretario/a",
      name: "Nombre Apellido",
      course: "XX",
      bio: "Apasionado/a por comunicar las ideas de todos.",
    },
    { role: "Sub-secretario/a", name: "Nombre Apellido", course: "XX", bio: "Coordinando las redes con creatividad." },
    { role: "Comisión", name: "Nombre Apellido", course: "XX", bio: "Llevando la información a cada curso." },
  ],
  hacienda: [
    {
      role: "Secretario/a",
      name: "Nombre Apellido",
      course: "XX",
      bio: "Cuidando cada peso para que vuelva a los estudiantes.",
    },
    { role: "Sub-secretario/a", name: "Nombre Apellido", course: "XX", bio: "Gestionando recursos con transparencia." },
    { role: "Comisión", name: "Nombre Apellido", course: "XX", bio: "Buscando las mejores oportunidades para todos." },
  ],
  // Add other keys as needed, using a fallback for now to save space but maintaining structure
  default: [
    { role: "Secretario/a", name: "Nombre Apellido", course: "XX", bio: "[Texto de presentación pendiente]" },
    { role: "Sub-secretario/a", name: "Nombre Apellido", course: "XX", bio: "[Texto de presentación pendiente]" },
    { role: "Comisión", name: "Nombre Apellido", course: "XX", bio: "[Texto de presentación pendiente]" },
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
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">
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
                <p className="text-celeste-600 font-medium text-sm mb-1">{member.role}</p>
                <p className="text-slate-400 text-xs">{member.course}</p>
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
                      src="/placeholder.svg?height=100&width=100&text=Foto"
                      alt="Foto"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 leading-tight">{member.name}</h4>
                    <p className="text-xs text-celeste-600 font-medium">{member.role}</p>
                    <p className="text-xs text-slate-400">{member.course}</p>
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
