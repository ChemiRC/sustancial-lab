import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { ScreenNav } from '../components/layout/ScreenNav';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TechTag } from '../components/ui/TechTag';

/**
 * Pantalla [01. MANIFIESTO]:
 * Diseño editorial asimétrico de dos columnas con bordes expuestos de 1px,
 * tipografía expresiva, espécimen gráfico del frasco carmesí (recorte limpio),
 * fotografía B&N del colectivo y barra de navegación de retorno/índice.
 */
export function Manifesto({
  manifesto,
  onNavigate,
  onOpenIndexDrawer,
  navigation,
}) {
  return (
    <section className="relative z-20 bg-[#1D1E22]">
      <div className="mx-auto max-w-[1440px] border-x border-white/15">
        <SectionHeader
          index={manifesto.index}
          headerTag={manifesto.headerTag}
          categoryTag={manifesto.categoryTag}
          title={manifesto.title}
          countLabel="DOCUMENTO // SL-M01"
        />

        {/* Cuerpo asimétrico de 2 columnas principales (5 / 7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Columna izquierda (5 cols): Espécimen alquímico + Ejes de investigación */}
          <aside className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/15 flex flex-col justify-between">
            {/* Celda del frasco/vial xilográfico de marca */}
            <div className="relative p-6 sm:p-10 border-b border-white/15 bg-[#16171A]/55">
              <div className="flex items-center justify-between mb-6">
                <TechTag variant="default">{manifesto.specimen.code}</TechTag>
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#800028] font-bold">
                  COLOR // #800028
                </span>
              </div>

              {/* Guías cruzadas detrás del vial con suficiente espacio vertical para que respire */}
              <div className="relative py-10 sm:py-14 flex items-center justify-center min-h-[360px]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-white/15"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-white/15"
                />

                <motion.img
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  src={manifesto.specimen.image}
                  alt={manifesto.specimen.alt}
                  loading="eager"
                  className="relative z-10 w-48 sm:w-56 lg:w-60 max-h-[420px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-baseline justify-between gap-4">
                <span className="font-display text-2xl tracking-wide text-[#F4F4F0] uppercase">
                  {manifesto.specimen.title}
                </span>
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#800028] font-bold">
                  {manifesto.specimen.subtitle}
                </span>
              </div>
            </div>

            {/* Nota metodológica */}
            <div className="p-6 sm:p-8 border-b border-white/15 bg-[#1D1E22]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#800028] mb-2.5 font-bold">
                {manifesto.secondaryQuote.code}
              </p>
              <blockquote className="font-serif italic text-lg leading-relaxed text-[#F4F4F0]/85">
                {manifesto.secondaryQuote.text}
              </blockquote>
            </div>

            {/* Ejes programáticos del colectivo */}
            <div className="divide-y divide-white/15">
              {manifesto.pillars.map((pillar) => (
                <div
                  key={pillar.code}
                  className="p-6 sm:p-8 hover:bg-white/[0.025] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs font-bold text-[#800028] tracking-[0.16em]">
                      {pillar.code}
                    </span>
                    <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#F4F4F0]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm leading-relaxed text-[#F4F4F0]/68">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </aside>

          {/* Columna derecha (7 cols): Tesis + Cita destacada + Registro Colectivo */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Declaración principal */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-10 lg:p-12 border-b border-white/15 space-y-8"
            >
              <p className="font-serif text-2xl sm:text-3xl lg:text-[32px] leading-[1.28] text-[#F4F4F0] font-normal">
                {manifesto.lead}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 border-t border-white/15">
                {manifesto.paragraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="font-serif text-base sm:text-[17px] leading-[1.75] text-[#F4F4F0]/78"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Cita destacada con filete carmesí */}
            <div className="p-6 sm:p-10 lg:p-12 border-b border-white/15 bg-[#16171A]/80">
              <div className="border-l-4 border-[#800028] pl-6 sm:pl-8 space-y-4">
                <div className="flex items-center gap-2.5">
                  <Quote size={16} strokeWidth={1.5} className="text-[#800028]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#800028] font-bold">
                    {manifesto.featuredQuote.code}
                  </span>
                </div>

                <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-[26px] leading-snug text-[#F4F4F0]">
                  {manifesto.featuredQuote.text}
                </blockquote>

                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#F4F4F0]/55">
                  — {manifesto.featuredQuote.attribution}
                </p>
              </div>
            </div>

            {/* Registro fotográfico B&N del colectivo */}
            <div className="p-6 sm:p-10 lg:p-12 bg-[#1D1E22]">
              <div className="border border-white/15 bg-[#16171A] overflow-hidden group">
                <div className="px-4 py-2.5 border-b border-white/15 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] tracking-[0.16em] text-[#F4F4F0]/60">
                  <span>{manifesto.collectivePhoto.code}</span>
                  <span className="text-[#800028] font-bold">
                    {manifesto.collectivePhoto.location}
                  </span>
                </div>

                <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={manifesto.collectivePhoto.image}
                    alt={manifesto.collectivePhoto.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center contrast-125 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="px-4 py-3 border-t border-white/15 font-mono text-[11px] tracking-[0.12em] text-[#F4F4F0]/70">
                  {manifesto.collectivePhoto.caption}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de navegación técnica para volver al inicio o seleccionar otra sección */}
      <ScreenNav
        currentScreen="manifiesto"
        onNavigate={onNavigate}
        onOpenIndexDrawer={onOpenIndexDrawer}
        navigation={navigation}
      />
    </section>
  );
}
