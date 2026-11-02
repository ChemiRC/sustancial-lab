import React from 'react';
import { motion } from 'framer-motion';
import { TechTag } from './TechTag';

/**
 * Cabecera modular de sección con cuadrícula arquitectónica expuesta de 1px.
 */
export function SectionHeader({
  index,
  headerTag,
  cyrillicTag,
  title,
  subtitle,
  countLabel,
}) {
  return (
    <div className="border-b border-white/15">
      {/* Banda técnica superior */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/15 bg-[#16171A]/65">
        <div className="md:col-span-3 px-5 py-3 border-b md:border-b-0 md:border-r border-white/15 flex items-center justify-between">
          <TechTag variant="crimsonOutline" dot>
            {headerTag}
          </TechTag>
          <span className="font-mono text-[10px] text-[#F4F4F0]/40 md:hidden">
            SL // {index}
          </span>
        </div>

        <div className="md:col-span-6 px-5 py-3 border-b md:border-b-0 md:border-r border-white/15 flex items-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#800028] font-bold">
            {cyrillicTag}
          </span>
        </div>

        <div className="md:col-span-3 px-5 py-3 flex items-center justify-between md:justify-end">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#F4F4F0]/50">
            {countLabel || `ÍNDICE // SEC.${index}`}
          </span>
        </div>
      </div>

      {/* Bloque monumental de título + descripción */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 p-6 sm:p-8 lg:p-10 lg:border-r border-white/15 flex flex-col justify-between gap-4"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-[#800028] tracking-[0.2em]">
              [{index}]
            </span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.92] text-[#F4F4F0]">
            {title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 p-6 sm:p-8 lg:p-10 border-t lg:border-t-0 border-white/15 flex items-end"
        >
          {subtitle && (
            <p className="font-serif text-base sm:text-lg leading-relaxed text-[#F4F4F0]/75">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
