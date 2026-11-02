import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, FileText } from 'lucide-react';
import { TechTag } from './TechTag';

/**
 * Tarjeta editorial reutilizable para Entrevistas ([03]) y Ensayos ([04]).
 * Preparada para conectar con rutas dinámicas (/entrevistas/:slug, /ensayos/:slug) en Fase 2.
 */
export function ArticleCard({
  item,
  actionLabel,
  onSelect,
  indexOffset = 0,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: indexOffset * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onSelect?.(item)}
      className="group relative flex flex-col justify-between bg-[#1D1E22] hover:bg-[#22242A]/90 transition-colors duration-300 cursor-pointer"
    >
      {/* Acento superior carmesí animado en hover */}
      <div className="h-[2px] w-0 bg-[#800028] transition-all duration-300 group-hover:w-full" />

      <div>
        {/* Barra superior de metadatos técnicos */}
        <div className="flex items-center justify-between gap-2 px-6 py-3.5 border-b border-white/15 bg-[#16171A]/50">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold text-[#800028] tracking-[0.14em]">
              [{item.code}]
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#F4F4F0]/55">
              {item.date}
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#F4F4F0]/55">
            <Clock size={11} strokeWidth={1.5} />
            {item.readingTime}
          </span>
        </div>

        {/* Miniatura documental B&N con transición a color sutil */}
        {item.image && (
          <div className="relative h-48 overflow-hidden border-b border-white/15 bg-[#141518]">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover grayscale contrast-125 brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1E22] via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <TechTag variant="default">{item.category}</TechTag>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#F4F4F0]/70 bg-[#1D1E22]/85 px-2 py-0.5 border border-white/15">
                /{item.slug.slice(0, 18)}…
              </span>
            </div>
          </div>
        )}

        {/* Cuerpo editorial */}
        <div className="p-6 space-y-4">
          <div className="space-y-1">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#800028] font-bold">
              {item.subject}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#F4F4F0]/50">
              {item.role}
            </p>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl leading-snug text-[#F4F4F0] group-hover:text-white transition-colors">
            {item.title}
          </h3>

          <p className="font-sans text-sm leading-relaxed text-[#F4F4F0]/70">
            {item.excerpt}
          </p>
        </div>
      </div>

      {/* Pie técnico de tarjeta */}
      <div className="px-6 pt-3 pb-5 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {item.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 border border-white/15 font-mono text-[10px] uppercase tracking-[0.12em] text-[#F4F4F0]/55"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="pt-3 border-t border-white/15 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#F4F4F0]/60">
            <FileText size={12} strokeWidth={1.5} className="text-[#800028]" />
            {item.author}
          </span>

          <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.15em] text-[#F4F4F0] group-hover:text-[#800028] transition-colors">
            {actionLabel}
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
