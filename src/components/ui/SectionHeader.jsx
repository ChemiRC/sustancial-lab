import React from 'react';
import { motion } from 'framer-motion';
import { TechTag } from './TechTag';

/**
 * Cabecera modular de sección con cuadrícula arquitectónica expuesta de 1px.
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
      {/* Banda técnica superior */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/15 bg-[#16171A]/70">
        <div className="md:col-span-4 px-5 py-3 border-b md:border-b-0 md:border-r border-white/15 flex items-center justify-between">
          <TechTag variant="crimsonOutline" dot>
            {headerTag}
          </TechTag>
          <span className="font-mono text-[10px] text-[#F4F4F0]/40 md:hidden">
            SEC. {index}
          </span>
        </div>

        <div className="md:col-span-5 px-5 py-3 border-b md:border-b-0 md:border-r border-white/15 flex items-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#800028] font-bold">
            {categoryTag}
          </span>
        </div>

        <div className="md:col-span-3 px-5 py-3 flex items-center justify-between md:justify-end">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#F4F4F0]/50">
            {countLabel || `ARCHIVO // SEC.${index}`}
          </span>
        </div>
      </div>

      {/* Bloque monumental de título + descripción */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 p-6 sm:p-8 lg:p-10 lg:border-r border-white/15 flex flex-col justify-between gap-4"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-[#800028] tracking-[0.2em] font-bold">
              [{index}]
            </span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.92] text-[#F4F4F0]">
            {title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 p-6 sm:p-8 lg:p-10 border-t lg:border-t-0 border-white/15 flex items-end bg-[#18191D]/40"
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
