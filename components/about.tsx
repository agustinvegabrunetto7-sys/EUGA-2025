import { GlassCard } from "./ui/glass-card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl group-hover:scale-110 transition-transform duration-500">
              🚀
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="text-3xl">🚀</span> Nuestra Misión
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Representar a cada estudiante con transparencia y compromiso, creando espacios de diálogo y acción donde
              todas las voces sean escuchadas. Buscamos soluciones reales a los problemas cotidianos y fomentar un
              sentido de pertenencia en nuestra comunidad educativa.
            </p>
          </GlassCard>

          <GlassCard className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl group-hover:scale-110 transition-transform duration-500">
              👁️
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="text-3xl">👁️</span> Nuestra Visión
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Una escuela más inclusiva, participativa y moderna. Queremos que el Centro de Estudiantes sea una
              herramienta útil para todos, impulsando proyectos académicos, culturales, deportivos y sociales que
              enriquezcan nuestra formación y convivencia.
            </p>
          </GlassCard>
        </div>

        {/* Events Section embedded */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-celeste-500 to-blue-600">
              PRÓXIMOS EVENTOS
            </span>
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            <GlassCard hoverEffect className="text-center">
              <div className="text-4xl mb-4">🃏</div>
              <h4 className="font-bold text-lg mb-2">Torneo de Truco</h4>
              <p className="text-sm text-slate-500 mb-2">Patio Central</p>
              <span className="inline-block px-3 py-1 bg-celeste-100 text-celeste-700 rounded-full text-xs font-semibold">
                Viernes 14:00hs
              </span>
            </GlassCard>

            <GlassCard hoverEffect className="text-center">
              <div className="text-4xl mb-4">🗣️</div>
              <h4 className="font-bold text-lg mb-2">Debate de Listas</h4>
              <p className="text-sm text-slate-500 mb-2">Auditorio</p>
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                Lunes 10:00hs
              </span>
            </GlassCard>

            <GlassCard hoverEffect className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h4 className="font-bold text-lg mb-2">Cierre de Campaña</h4>
              <p className="text-sm text-slate-500 mb-2">Entrada Principal</p>
              <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold">
                Miércoles 12:00hs
              </span>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
