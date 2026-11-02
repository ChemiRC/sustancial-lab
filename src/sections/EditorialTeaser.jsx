import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Clock, Terminal, X } from 'lucide-react';
import { ArticleCard } from '../components/ui/ArticleCard';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TechTag } from '../components/ui/TechTag';

/**
 * Archivo Editorial ([03. ENTREVISTAS] y [04. ENSAYOS]):
 * Cuadrícula arquitectónica de tarjetas reutilizables desacopladas de datos,
 * con panel interactivo de previsualización de Fase 1 preparado para escalar
 * a rutas dinámicas completas en la Fase 2.
 */
export function EditorialTeaser({ editorial }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const { interviewsSection, essaysSection } = editorial;

  return (
    <div className="relative z-20 bg-[#1D1E22]">
      {/* =========================================================
          BLOQUE [03. ENTREVISTAS]
         ========================================================= */}
      <section
        id={interviewsSection.id}
        className="border-b border-white/15"
      >
        <div className="mx-auto max-w-[1440px] border-x border-white/15">
          <SectionHeader
            index={interviewsSection.index}
            headerTag={interviewsSection.headerTag}
            cyrillicTag={interviewsSection.cyrillicTag}
            title={interviewsSection.title}
            subtitle={interviewsSection.subtitle}
            countLabel={`ARCHIVO // 0${interviewsSection.items.length} DIÁLOGOS`}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {interviewsSection.items.map((item, idx) => (
              <ArticleCard
                key={item.id}
                item={item}
                actionLabel={editorial.readPreviewLabel}
                onSelect={setSelectedArticle}
                indexOffset={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BLOQUE [04. ENSAYOS]
         ========================================================= */}
      <section id={essaysSection.id} className="border-b border-white/15">
        <div className="mx-auto max-w-[1440px] border-x border-white/15">
          <SectionHeader
            index={essaysSection.index}
            headerTag={essaysSection.headerTag}
            cyrillicTag={essaysSection.cyrillicTag}
            title={essaysSection.title}
            subtitle={essaysSection.subtitle}
            countLabel={`CUADERNOS // 0${essaysSection.items.length} ENSAYOS`}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {essaysSection.items.map((item, idx) => (
              <ArticleCard
                key={item.id}
                item={item}
                actionLabel={editorial.readPreviewLabel}
                onSelect={setSelectedArticle}
                indexOffset={idx}
              />
            ))}
          </div>

          {/* Banda técnica inferior de estado Fase 1 -> Fase 2 */}
          <div className="px-6 py-4 border-t border-white/15 bg-[#16171A]/75 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#F4F4F0]/70">
              <Terminal size={13} strokeWidth={1.5} className="text-[#800028]" />
              {editorial.previewBadge}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#F4F4F0]/40">
              SCHEMA: SITECONTENT.EDITORIAL // CMS-READY
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          MODAL / FICHA DE PREVISUALIZACIÓN EDITORIAL (FASE 1)
         ========================================================= */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full border border-white/20 bg-[#1D1E22] shadow-2xl overflow-hidden"
            >
              {/* Barra superior de expediente */}
              <div className="px-6 py-4 border-b border-white/15 bg-[#16171A] flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <TechTag variant="crimson">{selectedArticle.code}</TechTag>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#F4F4F0]/60">
                    {selectedArticle.category}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-[#F4F4F0]/75 hover:text-[#800028] transition-colors cursor-pointer"
                >
                  <span>{editorial.closePreviewLabel}</span>
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>

              {/* Contenido del avance */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[78vh] overflow-y-auto">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/15 font-mono text-[11px] uppercase tracking-[0.15em] text-[#F4F4F0]/55">
                  <span>
                    {selectedArticle.subject} — {selectedArticle.role}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={12} strokeWidth={1.5} className="text-[#800028]" />
                    {selectedArticle.date} · {selectedArticle.readingTime}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl leading-snug text-[#F4F4F0]">
                  {selectedArticle.title}
                </h3>

                <p className="font-serif text-base sm:text-lg leading-relaxed text-[#F4F4F0]/85">
                  {selectedArticle.excerpt}
                </p>

                <div className="border-l-2 border-[#800028] pl-5 py-1">
                  <p className="font-sans text-sm sm:text-base leading-relaxed text-[#F4F4F0]/72">
                    {selectedArticle.extendedPreview}
                  </p>
                </div>

                <div className="p-4 border border-white/15 bg-[#16171A] space-y-2">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#800028] font-bold">
                    <BookOpen size={13} strokeWidth={1.5} />
                    <span>RUTA PREPARADA: /{selectedArticle.slug}</span>
                  </div>
                  <p className="font-mono text-[11px] leading-relaxed text-[#F4F4F0]/60">
                    {editorial.phase2Notice}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
