import React from 'react';
import { motion } from 'framer-motion';
import { TechTag } from './TechTag';

/**
 * Cabecera editorial de sección con cuadrícula expuesta de 1px.
 */
export function SectionHeader({
  index,
  headerTag,
  categoryTag,
  title,
  subtitle,
  countLabel,
}) {
  return (
    <div className="border-b border-white/15">
      {/* Cinta superior de sección */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/15 bg-[#16171A]/70">
        <div className="md:col-span-4 px-4 sm:px-6 py-3 border-b md:border-b-0 md:border-r border-white/15 flex items-center justify-between">
          <TechTag variant="crimsonOutline" dot>
            {headerTag}
          </TechTag>
        </div>

        <div className="md:col-span-5 px-4 sm:px-6 py-3 border-b md:border-b-0 md:border-r border-white/15 flex items-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#800028] font-bold">
            {categoryTag}
          </span>
        </div>

        <div className="md:col-span-3 px-4 sm:px-6 py-3 flex items-center justify-between md:justify-end">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#F4F4F0]/55">
            {countLabel || `Sección ${index}`}
          </span>
        </div>
      </div>

      {/* Título y descripción de la sección */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 py-8 px-4 sm:py-10 sm:px-6 md:py-14 md:px-8 lg:border-r border-white/15 flex flex-col justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#800028] tracking-[0.18em] font-bold">
              {index}
            </span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.96] text-[#F4F4F0] break-words">
            {title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 py-6 px-4 sm:py-8 sm:px-6 md:py-14 md:px-8 border-t lg:border-t-0 border-white/15 flex items-end bg-[#18191D]/40"
        >
          {subtitle && (
            <p className="font-serif text-base sm:text-lg leading-relaxed text-[#F4F4F0]/78">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
