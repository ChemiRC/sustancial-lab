import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { EditorialButton } from '../components/ui/EditorialButton';

/**
 * Portada Principal (Hero) de Sustancial Lab:
 * Composición visual fija, limpia y equilibrada con el título monumental SUSTANCIAL (#800028),
 * la ilustración del colibrí integrada sobre la cuadrícula de 1px, introducción editorial
 * y acceso directo a las secciones del archivo.
 */
export function Hero({ hero, meta, navigation, onNavigate }) {
  return (
    <section className="relative editorial-grain overflow-hidden">
      <div className="mx-auto max-w-[1440px] border-x border-white/15 overflow-hidden">
        {/* Cinta editorial superior */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/15 bg-[#16171A]/80">
          <div className="md:col-span-8 px-4 sm:px-8 lg:px-12 py-3 border-b md:border-b-0 md:border-r border-white/15 flex items-center">
            <span className="font-mono text-[11px] tracking-[0.16em] text-[#800028] font-bold uppercase">
              {hero.kicker}
            </span>
          </div>
          <div className="md:col-span-4 px-4 sm:px-8 lg:px-12 py-3 flex items-center md:justify-end">
            <span className="font-mono text-[11px] tracking-[0.14em] text-[#F4F4F0]/60 uppercase">
              {meta.city} · {meta.editionLabel}
            </span>
          </div>
        </div>

        {/* Lienzo central constructivo con título monumental y colibrí */}
        <div className="relative py-12 px-4 sm:py-16 sm:px-8 md:py-24 lg:px-12 overflow-hidden">
          {/* Líneas constructivas verticales de cartel */}
          <div
            aria-hidden="true"
            className="pointer-events-none hidden sm:block absolute inset-y-0 left-8 lg:left-16 w-px bg-white/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none hidden md:block absolute inset-y-0 right-8 lg:right-16 w-px bg-white/15"
          />

          {/* Marco horizontal de doble línea con SUSTANCIAL y grabado del colibrí */}
          <div className="relative border-y border-white/15 py-8 sm:py-12 md:py-16 flex items-center justify-center overflow-hidden">
            {/* Línea guía central sutil */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-white/10"
            />

            {/* Título monumental responsivo sin desbordamiento */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="wordmark-monumental w-full text-center text-[#800028] select-none px-2 text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10.5rem]"
              style={{
                fontSize: 'clamp(2.85rem, 13.8vw, 13.5rem)',
              }}
            >
              {hero.wordmark}
            </motion.h1>

            {/* Ilustración fija del colibrí integrada sobre la cuadrícula */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
            >
              <img
                src={hero.illustration.src}
                alt={hero.illustration.alt}
                className="w-[155px] sm:w-[240px] md:w-[320px] lg:w-[390px] max-w-[58vw] h-auto object-contain drop-shadow-[0_18px_36px_rgba(0,0,0,0.72)]"
              />
            </motion.div>
          </div>

          {/* Bloque introductorio y llamadas a la acción */}
          <div className="relative z-30 mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
            <div className="lg:col-span-7 space-y-3">
              <p className="font-serif text-xl sm:text-2xl md:text-[26px] leading-snug text-[#F4F4F0] max-w-2xl">
                {hero.tagline}
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#F4F4F0]/55 italic">
                {hero.placeholderNote}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
              <EditorialButton
                onClick={() => onNavigate(hero.primaryCta.targetScreen)}
                variant="primary"
                className="w-full sm:w-auto"
              >
                {hero.primaryCta.label}
              </EditorialButton>
              <EditorialButton
                onClick={() => onNavigate(hero.secondaryCta.targetScreen)}
                variant="outline"
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta.label}
              </EditorialButton>
            </div>
          </div>
        </div>

        {/* Directorio de secciones del sitio */}
        <div className="border-t border-white/15 bg-[#16171A]">
          <div className="px-4 sm:px-8 py-3.5 border-b border-white/15 flex flex-wrap items-center justify-between gap-2 bg-[#141518]">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#800028] font-bold">
              Índice Editorial
            </span>
            <span className="font-mono text-[11px] text-[#F4F4F0]/50">
              Selecciona un apartado para explorar el contenido
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {navigation.items.map((item, idx) => (
              <div
                key={item.id}
                className={`p-6 sm:p-8 flex flex-col justify-between gap-5 hover:bg-white/[0.025] transition-colors ${
                  idx >= 2 ? 'md:border-t border-white/15' : ''
                }`}
              >
                <div className="space-y-2.5">
                  <span className="font-mono text-xs font-bold text-[#800028] tracking-[0.16em] uppercase">
                    {item.index} · {item.label}
                  </span>

                  <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[#F4F4F0]">
                    {item.title}
                  </h2>

                  <p className="font-serif text-sm sm:text-base leading-relaxed text-[#F4F4F0]/70">
                    {item.description}
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="w-full sm:w-auto px-5 py-3 border border-white/20 hover:border-[#800028] bg-[#1D1E22] hover:bg-[#800028] text-[#F4F4F0] font-mono text-xs uppercase tracking-[0.14em] transition-colors inline-flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <span>Explorar {item.label}</span>
                    <ArrowRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Franja inferior de síntesis del colectivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/15 bg-[#16171A]/70">
          {hero.highlights.map((item, idx) => (
            <div
              key={item.label}
              className={`px-4 sm:px-6 py-4 border-white/15 ${
                idx < hero.highlights.length - 1 ? 'border-b lg:border-b-0 lg:border-r' : ''
              } ${idx % 2 === 0 ? 'sm:border-r' : ''}`}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#F4F4F0]/45">
                {item.label}
              </p>
              <p className="mt-1 font-serif text-sm text-[#F4F4F0]/90">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
