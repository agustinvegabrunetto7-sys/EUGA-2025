"use client"

import { useEffect, useRef, useState } from "react"

export function Values() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="valores"
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-sky-600 mb-2">Nuestros Pilares</p>
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-900 to-sky-900 bg-clip-text text-transparent">
            Lo que nos define como EUGA
          </h2>
        </div>

        <div className="relative">
          {/* SVG Container for animated lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 1200 400"
            style={{ filter: "drop-shadow(0 0 20px rgba(14, 165, 233, 0.3))" }}
          >
            {isVisible && (
              <>
                <defs>
                  <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="1" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Left line */}
                <line
                  x1="600"
                  y1="80"
                  x2="250"
                  y2="350"
                  stroke="url(#glowGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  style={{
                    animation: "drawLine 1.5s ease-out forwards",
                  }}
                />

                {/* Right line */}
                <line
                  x1="600"
                  y1="80"
                  x2="950"
                  y2="350"
                  stroke="url(#glowGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  style={{
                    animation: "drawLine 1.5s ease-out forwards 0.2s",
                  }}
                />

                {/* Center line */}
                <line
                  x1="600"
                  y1="80"
                  x2="600"
                  y2="350"
                  stroke="url(#glowGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  style={{
                    animation: "drawLine 1.5s ease-out forwards 0.4s",
                  }}
                />
              </>
            )}
          </svg>

          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-3 gap-4 md:gap-8 pt-24">
            {/* Defender Card */}
            <div
              className={`transition-all duration-700 transform ${
                isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
              style={{ transitionDelay: "0.8s" }}
            >
              <div className="group relative">
                {/* Card Background with border glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-sky-600/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

                {/* Card */}
                <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/80 to-sky-50/50 border-2 border-sky-300/40 rounded-xl p-6 hover:border-sky-400/80 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-sky-200/50">
                  {/* Decorative corner lines */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-sky-400 rounded-tl-lg" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-sky-400 rounded-br-lg" />

                  <div className="text-4xl md:text-5xl mb-4 scale-100 group-hover:scale-110 transition-transform duration-300">
                    🛡️
                  </div>
                  <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent">
                    Defender
                  </h3>
                  <p className="text-sm text-slate-600 mt-2">Proteger los derechos de todos</p>
                </div>
              </div>
            </div>

            {/* Gestionar Card */}
            <div
              className={`transition-all duration-700 transform ${
                isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
              style={{ transitionDelay: "1s" }}
            >
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-sky-700/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

                <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/80 to-sky-50/50 border-2 border-sky-300/40 rounded-xl p-6 hover:border-sky-400/80 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-sky-300/50">
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-sky-400 rounded-tl-lg" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-sky-400 rounded-br-lg" />

                  <div className="text-4xl md:text-5xl mb-4 scale-100 group-hover:scale-110 transition-transform duration-300">
                    ⚙️
                  </div>
                  <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent">
                    Gestionar
                  </h3>
                  <p className="text-sm text-slate-600 mt-2">Administrar con responsabilidad</p>
                </div>
              </div>
            </div>

            {/* Representar Card */}
            <div
              className={`transition-all duration-700 transform ${
                isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
              style={{ transitionDelay: "1.2s" }}
            >
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-sky-600/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

                <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/80 to-sky-50/50 border-2 border-sky-300/40 rounded-xl p-6 hover:border-sky-400/80 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-sky-200/50">
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-sky-400 rounded-tl-lg" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-sky-400 rounded-br-lg" />

                  <div className="text-4xl md:text-5xl mb-4 scale-100 group-hover:scale-110 transition-transform duration-300">
                    🎤
                  </div>
                  <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent">
                    Representar
                  </h3>
                  <p className="text-sm text-slate-600 mt-2">Ser voz de toda la comunidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes drawLine {
          from {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            opacity: 0;
          }
          to {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
