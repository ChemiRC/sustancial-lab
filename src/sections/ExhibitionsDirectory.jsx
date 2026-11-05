import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDown,
  ChevronRight,
  Film,
  Maximize2,
  Play,
  Square,
  Users,
  X,
} from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TechTag } from '../components/ui/TechTag';

/**
 * Contenido detallado de una exposición (ficha, galería y video),
 * reutilizado tanto en el acordeón móvil (< 1024px) como en el panel derecho de escritorio (lg+).
 */
function ExhibitionDetailPanel({
  exhibition,
  labels,
  videoPreviewActive,
  onToggleVideo,
  onOpenLightbox,
}) {
  return (
    <div className="flex flex-col bg-[#1D1E22]">
      {/* 1. Cabecera y texto curatorial */}
      <div className="py-6 px-4 sm:p-8 lg:p-10 border-b border-white/15 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <TechTag variant="crimson">Exposición {exhibition.number}</TechTag>
            <TechTag variant="default">{exhibition.format}</TechTag>
          </div>
          <span className="font-mono text-xs tracking-[0.12em] text-[#F4F4F0]/60">
            {exhibition.year}
          </span>
        </div>

        <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl uppercase leading-[0.96] text-[#F4F4F0]">
          {exhibition.title}
        </h3>

        <p className="font-serif text-base sm:text-lg leading-relaxed text-[#F4F4F0]/82">
          {exhibition.synopsis}
        </p>
      </div>

      {/* 2. Ficha de datos de la exposición */}
      <div className="border-b border-white/15">
        <div className="px-4 sm:px-8 py-2.5 border-b border-white/15 bg-[#16171A] font-mono text-[11px] uppercase tracking-[0.16em] text-[#800028] font-bold">
          {labels.technicalSheetTitle}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-white/15">
          <div className="p-4 sm:p-5 sm:border-r border-b sm:border-b-0 border-white/15">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#F4F4F0]/45">
              {labels.venueLabel}
            </p>
            <p className="mt-1 font-serif text-sm text-[#F4F4F0]">
              {exhibition.venue}
            </p>
          </div>

          <div className="p-4 sm:p-5 sm:border-r border-b sm:border-b-0 border-white/15">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#F4F4F0]/45">
              {labels.datesLabel}
            </p>
            <p className="mt-1 font-serif text-sm text-[#F4F4F0]">
              {exhibition.dates}
            </p>
          </div>

          <div className="p-4 sm:p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#F4F4F0]/45">
              {labels.curatorshipLabel}
            </p>
            <p className="mt-1 font-serif text-sm text-[#F4F4F0]">
              {exhibition.curatorship}
            </p>
          </div>
        </div>

        {/* Artistas participantes */}
        <div className="px-4 sm:px-8 py-4 bg-[#16171A]/35 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#F4F4F0]/55 mr-1">
            <Users size={13} strokeWidth={1.5} className="text-[#800028]" />
            {labels.artistsLabel}:
          </span>
          {exhibition.artists.map((artist) => (
            <span
              key={artist}
              className="px-2.5 py-1 border border-white/15 bg-[#1D1E22] font-sans text-xs text-[#F4F4F0]/85"
            >
              {artist}
            </span>
          ))}
        </div>
      </div>

      {/* 3. Galería de fotos de sala */}
      <div className="border-b border-white/15">
        <div className="px-4 sm:px-8 py-2.5 border-b border-white/15 bg-[#16171A] flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em]">
          <span className="text-[#F4F4F0]/80">{labels.galleryTitle}</span>
          <span className="hidden sm:inline text-[#F4F4F0]/45 text-[10px]">
            {labels.zoomHint}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
          {exhibition.gallery.map((plate) => (
            <figure
              key={plate.id}
              onClick={() => onOpenLightbox({ ...plate, exhibitionTitle: exhibition.title })}
              className="group relative bg-[#141518] overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={plate.src}
                  alt={plate.caption}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale contrast-125 brightness-90 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
                />
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-[#1D1E22]/90 border border-white/15 font-mono text-[10px] tracking-[0.12em] text-[#F4F4F0]">
                    {plate.label}
                  </span>
                  <span className="p-1.5 bg-[#1D1E22]/85 border border-white/15 text-[#F4F4F0] opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={12} strokeWidth={1.5} />
                  </span>
                </div>
              </div>

              <figcaption className="p-3.5 border-t border-white/15 font-sans text-xs leading-relaxed text-[#F4F4F0]/70 group-hover:text-[#F4F4F0] transition-colors">
                {plate.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* 4. Espacio para video documental */}
      <div className="py-6 px-4 sm:p-8 bg-[#16171A]/60">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#F4F4F0]/85">
            <Film size={14} strokeWidth={1.5} className="text-[#800028]" />
            {labels.videoTitle}
          </span>
          <span className="font-mono text-[11px] text-[#F4F4F0]/55">
            Duración: {exhibition.video.duration}
          </span>
        </div>

        <div className="relative aspect-video border border-white/15 bg-[#111215] overflow-hidden group">
          <img
            src={exhibition.video.poster}
            alt={exhibition.video.title}
            loading="lazy"
            className={`h-full w-full object-cover transition-all duration-700 ${
              videoPreviewActive
                ? 'grayscale-0 scale-105 brightness-90'
                : 'grayscale contrast-125 brightness-50 group-hover:brightness-65'
            }`}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 sm:inset-4 border border-white/15 flex flex-col justify-between p-3 sm:p-4"
          >
            <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.14em] text-[#F4F4F0]/80">
              <span className="inline-flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${
                    videoPreviewActive ? 'bg-[#800028] animate-ping' : 'bg-[#800028]'
                  }`}
                />
                {videoPreviewActive ? 'Reproduciendo vista previa' : 'Video de sala'}
              </span>
              <span>{exhibition.video.duration}</span>
            </div>

            <div className="max-w-md hidden sm:block">
              <p className="font-serif text-sm sm:text-base text-[#F4F4F0] font-medium">
                {exhibition.video.title}
              </p>
              <p className="mt-0.5 font-sans text-xs text-[#F4F4F0]/70">
                {exhibition.video.note}
              </p>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <button
              type="button"
              onClick={onToggleVideo}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 border border-[#800028] bg-[#1D1E22]/90 hover:bg-[#800028] text-[#F4F4F0] font-mono text-xs uppercase tracking-[0.14em] transition-colors cursor-pointer shadow-lg"
            >
              {videoPreviewActive ? (
                <>
                  <Square size={13} strokeWidth={1.75} />
                  <span>{labels.videoCloseLabel}</span>
                </>
              ) : (
                <>
                  <Play size={14} strokeWidth={1.75} className="fill-current" />
                  <span>{labels.videoActionLabel}</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-3 sm:hidden">
          <p className="font-serif text-sm text-[#F4F4F0] font-medium">
            {exhibition.video.title}
          </p>
          <p className="mt-0.5 font-sans text-xs text-[#F4F4F0]/65">
            {exhibition.video.note}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Sección [02 · Exposiciones] — Archivo Curatorial:
 * - En móvil (< 1024px): Acordeón interactivo donde cada exposición despliega su contenido in-situ.
 * - En escritorio (lg:grid-cols-12): Vista de dos columnas con listado a la izquierda y detalle a la derecha.
 */
export function ExhibitionsDirectory({ exhibitions }) {
  const [selectedId, setSelectedId] = useState(exhibitions.items[0]?.id);
  const [mobileOpenId, setMobileOpenId] = useState(exhibitions.items[0]?.id);
  const [videoPreviewActive, setVideoPreviewActive] = useState(false);
  const [lightboxPlate, setLightboxPlate] = useState(null);

  const activeExhibition =
    exhibitions.items.find((item) => item.id === selectedId) ||
    exhibitions.items[0];

  const handleSelectDesktop = (id) => {
    if (id !== selectedId) {
      setSelectedId(id);
      setVideoPreviewActive(false);
    }
  };

  const handleToggleMobileAccordion = (id) => {
    setVideoPreviewActive(false);
    setSelectedId(id);
    setMobileOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative z-20 bg-[#1D1E22] overflow-hidden">
      <div className="mx-auto max-w-[1440px] border-x border-white/15">
        <SectionHeader
          index={exhibitions.index}
          headerTag={exhibitions.headerTag}
          categoryTag={exhibitions.categoryTag}
          title={exhibitions.title}
          subtitle={exhibitions.subtitle}
          countLabel={`${exhibitions.items.length} Exposiciones en archivo`}
        />

        {/* ===============================================================
            VISTA MÓVIL Y TABLET (< 1024px): ACORDEÓN DE TARJETAS APILADAS
           =============================================================== */}
        <div className="lg:hidden divide-y divide-white/15">
          {exhibitions.items.map((item) => {
            const isExpanded = mobileOpenId === item.id;
            return (
              <div key={item.id} className="bg-[#1D1E22]">
                <button
                  type="button"
                  onClick={() => handleToggleMobileAccordion(item.id)}
                  aria-expanded={isExpanded}
                  className={`w-full text-left py-5 px-4 sm:px-6 transition-colors relative flex items-center justify-between gap-4 cursor-pointer ${
                    isExpanded
                      ? 'bg-[#800028]/20 text-[#F4F4F0]'
                      : 'bg-[#16171A]/60 hover:bg-white/[0.03] text-[#F4F4F0]/85'
                  }`}
                >
                  <span
                    className={`absolute inset-y-0 left-0 w-1 bg-[#800028] transition-transform duration-200 ${
                      isExpanded ? 'scale-y-100' : 'scale-y-0'
                    }`}
                  />

                  <div className="space-y-1.5 pr-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#800028] tracking-[0.14em]">
                        {item.number}.
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] px-2 py-0.5 border border-white/15 text-[#F4F4F0]/70">
                        {item.status}
                      </span>
                      <span className="font-mono text-xs text-[#F4F4F0]/55">
                        · {item.year}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl uppercase leading-tight tracking-wide text-[#F4F4F0]">
                      {item.title}
                    </h2>

                    <p className="font-sans text-xs text-[#F4F4F0]/60">
                      {item.venue} — {item.dates}
                    </p>
                  </div>

                  <div className="shrink-0 p-2 border border-white/15 bg-[#1D1E22] text-[#F4F4F0]">
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      className={`transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#800028]' : ''
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden border-t border-white/15"
                    >
                      <ExhibitionDetailPanel
                        exhibition={item}
                        labels={exhibitions.labels}
                        videoPreviewActive={videoPreviewActive}
                        onToggleVideo={() => setVideoPreviewActive((prev) => !prev)}
                        onOpenLightbox={setLightboxPlate}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ===============================================================
            VISTA DE ESCRITORIO (lg:grid-cols-12): DOS COLUMNAS MAESTRO-DETALLE
           =============================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12">
          {/* Columna izquierda: Lista de exposiciones (5 cols) */}
          <div className="lg:col-span-5 border-r border-white/15 bg-[#16171A]/45">
            <div className="px-6 py-3 border-b border-white/15 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-[#F4F4F0]/50 bg-[#16171A]">
              <span>{exhibitions.labels.listHeader}</span>
              <span>{exhibitions.labels.yearHeader}</span>
            </div>

            <div role="listbox" aria-label={exhibitions.title} className="divide-y divide-white/15">
              {exhibitions.items.map((item) => {
                const isActive = item.id === activeExhibition.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    onClick={() => handleSelectDesktop(item.id)}
                    className={`w-full text-left p-6 xl:p-7 transition-colors duration-200 relative group cursor-pointer ${
                      isActive
                        ? 'bg-[#800028]/20 text-[#F4F4F0]'
                        : 'hover:bg-white/[0.03] text-[#F4F4F0]/75'
                    }`}
                  >
                    <span
                      className={`absolute inset-y-0 left-0 w-1 bg-[#800028] transition-transform duration-200 origin-top ${
                        isActive ? 'scale-y-100' : 'scale-y-0'
                      }`}
                    />

                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`font-mono text-xs font-bold tracking-[0.14em] ${
                            isActive ? 'text-[#800028]' : 'text-[#F4F4F0]/50'
                          }`}
                        >
                          {item.number}.
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.12em] px-2 py-0.5 border border-white/15 text-[#F4F4F0]/65">
                          {item.status}
                        </span>
                      </div>

                      <span className="font-mono text-xs tracking-[0.12em] text-[#F4F4F0]/55">
                        {item.year}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <h2 className="font-display text-2xl xl:text-[28px] uppercase leading-[0.98] tracking-wide text-[#F4F4F0]">
                          {item.title}
                        </h2>
                        <p className="font-sans text-xs text-[#F4F4F0]/60">
                          {item.venue} — {item.dates}
                        </p>
                      </div>

                      <ChevronRight
                        size={18}
                        strokeWidth={1.5}
                        className={`shrink-0 mt-1 transition-transform duration-200 ${
                          isActive
                            ? 'translate-x-1 text-[#800028]'
                            : 'text-[#F4F4F0]/30 group-hover:translate-x-0.5'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Columna derecha: Detalle de exposición seleccionada (7 cols) */}
          <div className="lg:col-span-7 bg-[#1D1E22]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExhibition.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              >
                <ExhibitionDetailPanel
                  exhibition={activeExhibition}
                  labels={exhibitions.labels}
                  videoPreviewActive={videoPreviewActive}
                  onToggleVideo={() => setVideoPreviewActive((prev) => !prev)}
                  onOpenLightbox={setLightboxPlate}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Visor ampliado (Lightbox) para fotografías de sala */}
      <AnimatePresence>
        {lightboxPlate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxPlate(null)}
            className="fixed inset-0 z-50 bg-black/88 backdrop-blur-sm p-4 sm:p-10 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full border border-white/20 bg-[#1D1E22]"
            >
              <div className="px-4 sm:px-6 py-3.5 border-b border-white/15 flex items-center justify-between gap-4 font-mono text-xs">
                <span className="text-[#F4F4F0] truncate">
                  <strong className="text-[#800028]">{lightboxPlate.label}</strong> —{' '}
                  {lightboxPlate.exhibitionTitle}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxPlate(null)}
                  className="inline-flex items-center gap-1.5 text-[#F4F4F0]/75 hover:text-[#F4F4F0] cursor-pointer shrink-0"
                >
                  <span>Cerrar</span>
                  <X size={15} strokeWidth={1.5} />
                </button>
              </div>
              <div className="bg-black max-h-[75vh] overflow-hidden flex items-center justify-center">
                <img
                  src={lightboxPlate.src}
                  alt={lightboxPlate.caption}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>
              <div className="px-4 sm:px-6 py-3.5 border-t border-white/15 font-serif text-sm text-[#F4F4F0]/80">
                {lightboxPlate.caption}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
