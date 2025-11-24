"use client"

import { useState } from "react"
import { GlassCard } from "./ui/glass-card"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const secretariats = [
  {
    id: "comunicacion",
    icon: "📢",
    title: "Secretaría de Comunicación y Prensa",
    subtitle: "Fortaleciendo la comunicación institucional y la visibilidad",
    items: [
      {
        emoji: "📰",
        title: "Boletín institucional",
        desc: "Se elaborará un boletín con noticias, entrevistas y coberturas de las actividades escolares, con el propósito de fortalecer la comunicación interna.",
      },
      {
        emoji: "📱",
        title: "Gestión de redes sociales",
        desc: "La Secretaría administrará las redes oficiales del CEGA, difundiendo proyectos, logros y eventos de la comunidad educativa, priorizando un uso responsable y transparente.",
      },
      {
        emoji: "🎥",
        title: "Murales informativos y producciones audiovisuales",
        desc: "Se crearán murales y contenidos audiovisuales con información relevante, educativa y de participación estudiantil, visibilizando las distintas acciones del centro.",
      },
    ],
  },
  {
    id: "hacienda",
    icon: "💰",
    title: "Secretaría de Hacienda y Finanzas",
    subtitle: "Transparencia, autogestión y administración responsable",
    items: [
      {
        emoji: "📊",
        title: "Balances públicos mensuales",
        desc: "Se publicarán informes detallados de ingresos y egresos cada mes para garantizar la total transparencia en el manejo de los fondos del Centro de Estudiantes.",
      },
      {
        emoji: "💳",
        title: "Carnet de beneficios estudiantiles",
        desc: "Se gestionarán convenios con comercios cercanos (librerías, fotocopiadoras, kioscos) para obtener descuentos exclusivos presentando el carnet del estudiante.",
      },
      {
        emoji: "🛍️",
        title: "Feria de emprendedores",
        desc: "Se organizarán espacios para que los estudiantes puedan vender productos elaborados por ellos mismos, fomentando la cultura emprendedora y la autogestión.",
      },
      {
        emoji: "🎟️",
        title: "Eventos de recaudación",
        desc: "Se realizarán rifas, bingos y torneos con el fin de generar recursos propios para financiar proyectos y mejoras en la escuela.",
      },
    ],
  },
  {
    id: "salud",
    icon: "🏥",
    title: "Secretaría de Salud y Medio Ambiente",
    subtitle: "Bienestar integral y conciencia ecológica",
    items: [
      {
        emoji: "🍎",
        title: "Kiosco saludable",
        desc: "Se promoverá la incorporación de opciones de alimentos nutritivos y accesibles en el buffet escolar, atendiendo a diversas necesidades alimentarias.",
      },
      {
        emoji: "♻️",
        title: "Puntos de reciclaje",
        desc: "Se instalarán estaciones de separación de residuos en lugares estratégicos y se realizarán campañas de concientización sobre la importancia del reciclaje.",
      },
      {
        emoji: "🌱",
        title: "Huertas y espacios verdes",
        desc: "Se implementarán huertas escolares y se impulsará el cuidado del ambiente, trabajando en la educación ambiental y en prácticas sostenibles que involucren a todos los cursos.",
      },
      {
        emoji: "🪴",
        title: "Taller de enverdecimiento escolar",
        desc: "Se realizarán actividades para embellecer el colegio mediante la creación de macetas y plantas decorativas, elaboradas por los propios estudiantes para colocar en patios, pasillos y aulas.",
      },
    ],
  },
  {
    id: "sociales",
    icon: "🤝",
    title: "Secretaría de Asuntos Sociales",
    subtitle: "Acciones solidarias y redes de apoyo comunitario",
    items: [
      {
        emoji: "🤲",
        title: "Campañas solidarias y de voluntariado",
        desc: "Se coordinarán colectas, donaciones y actividades solidarias junto a comedores o instituciones barriales, fomentando el compromiso social de los estudiantes.",
      },
      {
        emoji: "🧩",
        title: "Talleres de inclusión y diversidad",
        desc: "Se desarrollarán espacios de reflexión para promover el respeto y la integración entre todos los compañeros, sin discriminación ni exclusión.",
      },
      {
        emoji: "🫂",
        title: "Red de apoyo estudiantil",
        desc: "Se organizará una red de acompañamiento académico y emocional entre estudiantes, para fortalecer la solidaridad y el compañerismo.",
      },
      {
        emoji: "🎉",
        title: "Actividades recreativas e integradoras",
        desc: "Se impulsarán jornadas recreativas que permitan la participación y vinculación entre los distintos cursos, fortaleciendo la unidad dentro del colegio.",
      },
    ],
  },
  {
    id: "genero",
    icon: "🚺",
    title: "Subsecretaría de Género",
    subtitle: "Espacios seguros y promoción de la igualdad",
    items: [
      {
        emoji: "💜",
        title: "Charlas y talleres de ESI",
        desc: "Se gestionarán encuentros con profesionales para abordar temáticas de Educación Sexual Integral, consentimiento y relaciones saludables.",
      },
      {
        emoji: "🛡️",
        title: "Protocolo de acción",
        desc: "Se trabajará en la difusión y aplicación de herramientas para prevenir y actuar ante situaciones de violencia de género o discriminación en el ámbito escolar.",
      },
    ],
  },
  {
    id: "humanidades",
    icon: "📚",
    title: "Subsecretaría de Humanidades",
    subtitle: "Fomento del pensamiento crítico y la cultura",
    items: [
      {
        emoji: "📖",
        title: "Club de lectura y debate",
        desc: "Se crearán espacios para compartir lecturas y debatir sobre temas de actualidad, filosofía y literatura.",
      },
      {
        emoji: "🎭",
        title: "Ciclos de cine y teatro",
        desc: "Se organizarán proyecciones y salidas culturales para acercar el arte y la cultura a los estudiantes.",
      },
    ],
  },
  {
    id: "edilicias",
    icon: "🏫",
    title: "Secretaría de Problemáticas Edilicias",
    subtitle: "Mejora y mantenimiento de nuestras instalaciones",
    items: [
      {
        emoji: "🛠️",
        title: "Relevamiento de necesidades",
        desc: "Se realizará un seguimiento constante del estado de las aulas y espacios comunes para gestionar las reparaciones necesarias ante las autoridades.",
      },
      {
        emoji: "🧹",
        title: "Jornadas de limpieza y pintura",
        desc: "Se organizarán actividades voluntarias para mantener la escuela limpia y en condiciones dignas para estudiar.",
      },
    ],
  },
  {
    id: "parlamentaria",
    icon: "🗳️",
    title: "Secretaría Parlamentaria",
    subtitle: "Representación y defensa de los derechos estudiantiles",
    items: [
      {
        emoji: "📜",
        title: "Asambleas estudiantiles",
        desc: "Se garantizará la realización periódica de asambleas para debatir y decidir sobre los temas que afectan al estudiantado.",
      },
      {
        emoji: "⚖️",
        title: "Revisión del estatuto",
        desc: "Se trabajará en la actualización del estatuto del Centro de Estudiantes para que sea más inclusivo y representativo.",
      },
    ],
  },
  {
    id: "relaciones",
    icon: "🌐",
    title: "Secretaría de Relaciones Institucionales",
    subtitle: "Vinculación con otras instituciones y organismos",
    items: [
      {
        emoji: "🤝",
        title: "Intercolegiales",
        desc: "Se fomentará la participación en encuentros y competencias con otros centros de estudiantes de la región.",
      },
      {
        emoji: "🎓",
        title: "Charlas de orientación vocacional",
        desc: "Se gestionarán visitas de universidades y profesionales para ayudar a los estudiantes en su elección de carrera.",
      },
    ],
  },
  {
    id: "actas",
    icon: "📜",
    title: "Secretaría de Actas y Archivo",
    subtitle: "Registro y memoria de nuestra gestión",
    items: [
      {
        emoji: "📝",
        title: "Libro de actas",
        desc: "Se llevará un registro detallado de todas las reuniones y decisiones tomadas por la Comisión Directiva y el Cuerpo de Delegados.",
      },
      {
        emoji: "🗄️",
        title: "Archivo digital",
        desc: "Se digitalizarán los documentos importantes para garantizar su preservación y fácil acceso.",
      },
    ],
  },
  {
    id: "deportes",
    icon: "⚽",
    title: "Secretaría de Deportes",
    subtitle: "Promoción de la actividad física y el compañerismo",
    items: [
      {
        emoji: "🏆",
        title: "Torneos internos",
        desc: "Se organizarán campeonatos de fútbol, voley, basquet y otros deportes para fomentar la integración y el juego limpio.",
      },
      {
        emoji: "🏃",
        title: "Jornadas deportivas",
        desc: "Se realizarán eventos recreativos al aire libre para disfrutar del deporte y la vida sana.",
      },
    ],
  },
  {
    id: "arte",
    icon: "🎨",
    title: "Secretaría de Arte y Cultura",
    subtitle: "Expresión creativa y difusión artística",
    items: [
      {
        emoji: "🖌️",
        title: "Murales participativos",
        desc: "Se convocarán concursos y jornadas para pintar murales en la escuela, expresando la identidad estudiantil.",
      },
      {
        emoji: "🎶",
        title: "Festivales de música y talento",
        desc: "Se organizarán eventos para que los estudiantes puedan mostrar sus habilidades artísticas en un escenario.",
      },
    ],
  },
]

export function Proposals() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="propuestas" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">
            NUESTRAS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-celeste-400 to-blue-600">
              PROPUESTAS
            </span>
          </h2>
          <p className="text-xl text-slate-600">Ideas concretas para transformar nuestra realidad educativa.</p>
        </div>

        <div className="space-y-4">
          {secretariats.map((sec) => (
            <GlassCard
              key={sec.id}
              className={cn(
                "cursor-pointer transition-all duration-300 border-l-4 border-l-transparent hover:border-l-celeste-400 overflow-hidden p-0",
                openId === sec.id && "border-l-celeste-500 ring-2 ring-celeste-200",
              )}
            >
              <div
                className="p-6 flex items-start gap-4 select-none"
                onClick={() => setOpenId(openId === sec.id ? null : sec.id)}
              >
                <div className="text-4xl shrink-0 p-2 bg-celeste-50 rounded-xl">{sec.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-800">{sec.title}</h3>
                    <ChevronDown
                      className={cn(
                        "text-slate-400 transition-transform duration-300",
                        openId === sec.id && "rotate-180",
                      )}
                    />
                  </div>
                  <p className="text-slate-500 mt-1">{sec.subtitle}</p>
                </div>
              </div>

              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  openId === sec.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 grid gap-4 sm:grid-cols-2">
                    {sec.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white/40 p-4 rounded-xl border border-white/50 hover:bg-white/60 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{item.emoji}</span>
                          <div>
                            <h4 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h4>
                            <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
