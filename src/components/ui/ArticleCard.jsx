import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, FileText } from 'lucide-react';
import { TechTag } from './TechTag';

/**
 * Tarjeta editorial reutilizable para Entrevistas y Ensayos.
 * Diseñada con áreas táctiles amplias y lectura clara en móvil y escritorio.
 */
export function ArticleCard({
  item,
  actionLabel,
  onSelect,
  indexOffset = 0,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.45,
        delay: indexOffset * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onSelect?.(item)}
      className="group relative flex flex-col justify-between border border-white/15 bg-[#1D1E22] hover:bg-[#22242A]/90 transition-colors duration-300 cursor-pointer"
    >
      {/* Línea superior carmesí en hover */}
      <div className="h-[2px] w-0 bg-[#800028] transition-all duration-300 group-hover:w-full" />

      <div>
        {/* Cabecera de fecha y tiempo de lectura */}
        <div className="flex items-center justify-between gap-2 px-5 py-3.5 border-b border-white/15 bg-[#16171A]/50">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#800028]">
              {item.number}.
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#F4F4F0]/60">
              {item.date}
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#F4F4F0]/55">
            <Clock size={12} strokeWidth={1.5} />
            {item.readingTime}
          </span>
        </div>

        {/* Imagen documental */}
        {item.image && (
          <div className="relative h-52 overflow-hidden border-b border-white/15 bg-[#141518]">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover grayscale contrast-125 brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1E22] via-transparent to-transparent opacity-65" />
            <div className="absolute bottom-3 left-4">
              <TechTag variant="default">{item.category}</TechTag>
            </div>
          </div>
        )}

        {/* Cuerpo del artículo */}
        <div className="p-5 sm:p-6 space-y-3.5">
          <div className="space-y-0.5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#800028] font-bold">
              {item.subject}
            </p>
            <p className="font-mono text-[11px] text-[#F4F4F0]/55">
              {item.role}
            </p>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl leading-snug text-[#F4F4F0] group-hover:text-white transition-colors">
            {item.title}
          </h2>

          <p className="font-sans text-sm leading-relaxed text-[#F4F4F0]/72">
            {item.excerpt}
          </p>
        </div>
      </div>

      {/* Pie de tarjeta con etiquetas y botón de lectura */}
      <div className="px-5 sm:px-6 pt-2 pb-5 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {item.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 border border-white/15 font-mono text-[10px] uppercase tracking-[0.12em] text-[#F4F4F0]/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-3.5 border-t border-white/15 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#F4F4F0]/65">
            <FileText size={13} strokeWidth={1.5} className="text-[#800028]" />
            {item.author}
          </span>

          <span className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.12em] text-[#F4F4F0] group-hover:text-[#800028] font-bold transition-colors py-1">
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
