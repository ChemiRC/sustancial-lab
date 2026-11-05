import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TechTag } from '../components/ui/TechTag';

/**
 * Sección [01 · Manifiesto]:
 * Diseño editorial de dos columnas con bordes expuestos de 1px,
 * gráfica del frasco carmesí, fotografía del colectivo y ejes de trabajo.
 */
export function Manifesto({ manifesto }) {
  return (
    <section className="relative z-20 bg-[#1D1E22] overflow-hidden">
      <div className="mx-auto max-w-[1440px] border-x border-white/15">
        <SectionHeader
          index={manifesto.index}
          headerTag={manifesto.headerTag}
          categoryTag={manifesto.categoryTag}
          title={manifesto.title}
          subtitle={manifesto.subtitle}
          countLabel="Documento Fundacional"
        />

        {/* Cuerpo editorial de 2 columnas en escritorio y 1 columna en móvil */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Columna izquierda (5 cols): Gráfica de identidad + Ejes del colectivo */}
          <aside className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/15 flex flex-col justify-between">
            {/* Celda del frasco xilográfico */}
            <div className="relative py-8 px-4 sm:p-8 md:p-10 border-b border-white/15 bg-[#16171A]/55">
              <div className="flex items-center justify-between mb-4">
                <TechTag variant="default">{manifesto.specimen.label}</TechTag>
                <span className="font-mono text-[11px] tracking-[0.14em] text-[#800028] font-bold uppercase">
                  Carmesí
                </span>
              </div>

              {/* Guías cruzadas detrás del frasco con espacio amplio sin recorte */}
              <div className="relative py-8 sm:py-12 flex items-center justify-center min-h-[300px] sm:min-h-[340px]">
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
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  src={manifesto.specimen.image}
                  alt={manifesto.specimen.alt}
                  loading="eager"
                  className="relative z-10 w-44 sm:w-52 lg:w-56 max-h-[380px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)]"
                />
              </div>

              <div className="mt-4 pt-4 border-t border-white/15 flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-display text-2xl tracking-wide text-[#F4F4F0] uppercase">
                  {manifesto.specimen.title}
                </span>
                <span className="font-mono text-[11px] tracking-[0.12em] text-[#F4F4F0]/60 uppercase">
                  {manifesto.specimen.subtitle}
                </span>
              </div>
            </div>

            {/* Nota de vocación editorial */}
            <div className="py-6 px-4 sm:p-8 border-b border-white/15 bg-[#1D1E22]">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#800028] mb-2 font-bold">
                {manifesto.secondaryQuote.label}
              </p>
              <blockquote className="font-serif italic text-lg leading-relaxed text-[#F4F4F0]/85">
                {manifesto.secondaryQuote.text}
              </blockquote>
            </div>

            {/* Ejes de trabajo del colectivo */}
            <div className="divide-y divide-white/15">
              {manifesto.pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="py-6 px-4 sm:p-8 hover:bg-white/[0.025] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs font-bold text-[#800028] tracking-[0.16em]">
                      {pillar.number}.
                    </span>
                    <h2 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#F4F4F0]">
                      {pillar.title}
                    </h2>
                  </div>
                  <p className="font-sans text-sm leading-relaxed text-[#F4F4F0]/70">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </aside>

          {/* Columna derecha (7 cols): Texto del Manifiesto + Cita destacada + Fotografía del colectivo */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Declaración principal */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="py-8 px-4 sm:p-8 md:py-12 md:px-10 border-b border-white/15 space-y-6 sm:space-y-8"
            >
              <p className="font-serif text-xl sm:text-2xl lg:text-[28px] leading-[1.32] text-[#F4F4F0] font-normal">
                {manifesto.lead}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/15">
                {manifesto.paragraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="font-serif text-base sm:text-[17px] leading-[1.75] text-[#F4F4F0]/80"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Cita destacada */}
            <div className="py-8 px-4 sm:p-8 md:py-10 md:px-10 border-b border-white/15 bg-[#16171A]/80">
              <div className="border-l-4 border-[#800028] pl-5 sm:pl-7 space-y-3">
                <div className="flex items-center gap-2">
                  <Quote size={16} strokeWidth={1.5} className="text-[#800028]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#800028] font-bold">
                    {manifesto.featuredQuote.label}
                  </span>
                </div>

                <blockquote className="font-serif italic text-lg sm:text-2xl leading-snug text-[#F4F4F0]">
                  {manifesto.featuredQuote.text}
                </blockquote>

                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#F4F4F0]/55">
                  — {manifesto.featuredQuote.attribution}
                </p>
              </div>
            </div>

            {/* Fotografía del colectivo */}
            <div className="py-8 px-4 sm:p-8 md:p-10 bg-[#1D1E22]">
              <div className="border border-white/15 bg-[#16171A] overflow-hidden group">
                <div className="px-4 py-2.5 border-b border-white/15 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] tracking-[0.14em] text-[#F4F4F0]/65">
                  <span>{manifesto.collectivePhoto.label}</span>
                  <span className="text-[#800028] font-bold">
                    {manifesto.collectivePhoto.location}
                  </span>
                </div>

                <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={manifesto.collectivePhoto.image}
                    alt={manifesto.collectivePhoto.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center contrast-125 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="px-4 py-3 border-t border-white/15 font-serif text-sm text-[#F4F4F0]/75">
                  {manifesto.collectivePhoto.caption}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
