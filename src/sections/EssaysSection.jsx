import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Clock, FileText, X } from 'lucide-react';
import { ArticleCard } from '../components/ui/ArticleCard';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TechTag } from '../components/ui/TechTag';

/**
 * Sección [04 · Ensayos]:
 * Textos de investigación historiográfica, análisis visual y crítica curatorial.
 */
export function EssaysSection({ essays }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section className="relative z-20 bg-[#1D1E22] overflow-hidden">
      <div className="mx-auto max-w-[1440px] border-x border-white/15">
        <SectionHeader
          index={essays.index}
          headerTag={essays.headerTag}
          categoryTag={essays.categoryTag}
          title={essays.title}
          subtitle={essays.subtitle}
          countLabel={`${essays.items.length} Ensayos publicados`}
        />

        <div className="py-12 px-4 md:py-20 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {essays.items.map((item, idx) => (
              <ArticleCard
                key={item.id}
                item={item}
                actionLabel={essays.readPreviewLabel}
                onSelect={setSelectedArticle}
                indexOffset={idx}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal de lectura del ensayo */}
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
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full border border-white/20 bg-[#1D1E22] shadow-2xl overflow-hidden"
            >
              {/* Barra superior */}
              <div className="px-5 sm:px-6 py-4 border-b border-white/15 bg-[#16171A] flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <TechTag variant="crimson">Ensayo {selectedArticle.number}</TechTag>
                  <span className="font-mono text-xs text-[#F4F4F0]/65">
                    {selectedArticle.date}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/15 font-mono text-xs uppercase tracking-[0.12em] text-[#F4F4F0]/80 hover:bg-[#800028] hover:text-[#F4F4F0] hover:border-[#800028] transition-colors cursor-pointer"
                >
                  <span>{essays.closePreviewLabel}</span>
                  <X size={15} strokeWidth={1.5} />
                </button>
              </div>

              {/* Contenido del ensayo */}
              <div className="p-5 sm:p-8 space-y-5 max-h-[78vh] overflow-y-auto">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/15 font-mono text-xs text-[#F4F4F0]/60">
                  <span>
                    <strong className="text-[#800028]">{selectedArticle.subject}</strong> —{' '}
                    {selectedArticle.role}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={12} strokeWidth={1.5} className="text-[#800028]" />
                    {selectedArticle.readingTime}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl leading-snug text-[#F4F4F0]">
                  {selectedArticle.title}
                </h3>

                <p className="font-serif text-base sm:text-lg leading-relaxed text-[#F4F4F0]/85">
                  {selectedArticle.excerpt}
                </p>

                <div className="border-l-2 border-[#800028] pl-4 sm:pl-5 py-1">
                  <p className="font-sans text-sm sm:text-base leading-relaxed text-[#F4F4F0]/75 italic">
                    {selectedArticle.extendedPreview}
                  </p>
                </div>

                <div className="p-4 border border-white/15 bg-[#16171A] flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#F4F4F0]/65">
                  <span className="inline-flex items-center gap-2">
                    <FileText size={13} strokeWidth={1.5} className="text-[#800028]" />
                    {selectedArticle.author}
                  </span>
                  <span>Cuadernos de Investigación · Sustancial Lab</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
