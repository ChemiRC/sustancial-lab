import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronRight,
  Film,
  MapPin,
  Maximize2,
  Play,
  Square,
  Users,
  X,
} from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TechTag } from '../components/ui/TechTag';

/**
 * Sección [02. EXPOSICIONES] — Directorio Curatorial Interactivo:
 * Al pasar el cursor o hacer clic sobre una exposición de la lista índice,
 * despliega su ficha técnica completa, galería rápida B&N → Color con zoom sutil
 * y módulo dedicado para video documental de sala.
 */
export function ExhibitionsDirectory({ exhibitions }) {
  const [selectedId, setSelectedId] = useState(exhibitions.items[0]?.id);
  const [videoPreviewActive, setVideoPreviewActive] = useState(false);
  const [lightboxPlate, setLightboxPlate] = useState(null);

  const activeExhibition =
    exhibitions.items.find((item) => item.id === selectedId) ||
    exhibitions.items[0];

  const handleSelectExhibition = (id) => {
    if (id !== selectedId) {
      setSelectedId(id);
      setVideoPreviewActive(false);
    }
  };

  return (
    <section
      id="exposiciones"
      className="relative z-20 border-b border-white/15 bg-[#1D1E22]"
    >
      <div className="mx-auto max-w-[1440px] border-x border-white/15">
        <SectionHeader
          index={exhibitions.index}
          headerTag={exhibitions.headerTag}
          cyrillicTag={exhibitions.cyrillicTag}
          title={exhibitions.title}
          subtitle={exhibitions.subtitle}
          countLabel={`REGISTROS // 0${exhibitions.items.length} MONTAJES`}
        />

        {/* Estructura Maestro-Detalle dividida por cuadrícula de 1px */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Columna Índice Curatorial (5 columnas) */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/15 bg-[#16171A]/45">
            {/* Encabezado de tabla */}
            <div className="px-6 py-3 border-b border-white/15 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[#F4F4F0]/45 bg-[#16171A]">
              <span>{exhibitions.labels.indexColumn}</span>
              <span>{exhibitions.labels.venueColumn}</span>
            </div>

            {/* Filas interactivas del índice */}
            <div role="listbox" aria-label={exhibitions.title} className="divide-y divide-white/15">
              {exhibitions.items.map((item) => {
                const isActive = item.id === activeExhibition.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    onMouseEnter={() => handleSelectExhibition(item.id)}
                    onFocus={() => handleSelectExhibition(item.id)}
                    onClick={() => handleSelectExhibition(item.id)}
                    className={`w-full text-left p-6 sm:p-7 transition-colors duration-200 relative group cursor-pointer ${
                      isActive
                        ? 'bg-[#800028]/16 text-[#F4F4F0]'
                        : 'hover:bg-white/[0.03] text-[#F4F4F0]/75'
                    }`}
                  >
                    {/* Barra vertical activa en carmesí */}
                    <span
                      className={`absolute inset-y-0 left-0 w-1 bg-[#800028] transition-transform duration-200 origin-top ${
                        isActive ? 'scale-y-100' : 'scale-y-0'
                      }`}
                    />

                    <div className="flex items-center justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`font-mono text-xs font-bold tracking-[0.16em] ${
                            isActive ? 'text-[#800028]' : 'text-[#F4F4F0]/50'
                          }`}
                        >
                          [{item.code}]
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] px-2 py-0.5 border border-white/15 text-[#F4F4F0]/60">
                          {item.status}
                        </span>
                      </div>

                      <span className="font-mono text-xs tracking-[0.15em] text-[#F4F4F0]/55">
                        {item.year}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="font-display text-2xl sm:text-[28px] uppercase leading-[0.98] tracking-wide text-[#F4F4F0]">
                          {item.title}
                        </h3>
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#F4F4F0]/55">
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

          {/* Panel Derecho de Inspección Curatorial (7 columnas) */}
          <div className="lg:col-span-7 bg-[#1D1E22]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExhibition.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col"
              >
                {/* 1. Cabecera del expediente + Sinopsis curatorial */}
                <div className="p-6 sm:p-8 lg:p-10 border-b border-white/15 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <TechTag variant="crimson">{activeExhibition.code}</TechTag>
                      <TechTag variant="default">{activeExhibition.format}</TechTag>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.14em] text-[#F4F4F0]/55">
                      <MapPin size={12} strokeWidth={1.5} className="text-[#800028]" />
                      {activeExhibition.coordinates}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-[0.95] text-[#F4F4F0]">
                    {activeExhibition.title}
                  </h3>

                  <p className="font-serif text-base sm:text-lg leading-relaxed text-[#F4F4F0]/80">
                    {activeExhibition.synopsis}
                  </p>
                </div>

                {/* 2. Ficha Técnica Estructurada */}
                <div className="border-b border-white/15">
                  <div className="px-6 sm:px-8 py-2.5 border-b border-white/15 bg-[#16171A] font-mono text-[10px] uppercase tracking-[0.18em] text-[#800028] font-bold">
                    [{exhibitions.labels.technicalSheetTitle}]
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-white/15">
                    <div className="p-5 sm:border-r border-b sm:border-b-0 border-white/15">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#F4F4F0]/45">
                        {exhibitions.labels.venueLabel}
                      </p>
                      <p className="mt-1 font-mono text-xs text-[#F4F4F0]">
                        {activeExhibition.venue}
                      </p>
                    </div>

                    <div className="p-5 sm:border-r border-b sm:border-b-0 border-white/15">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#F4F4F0]/45">
                        {exhibitions.labels.datesLabel}
                      </p>
                      <p className="mt-1 font-mono text-xs text-[#F4F4F0]">
                        {activeExhibition.dates}
                      </p>
                    </div>

                    <div className="p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#F4F4F0]/45">
                        {exhibitions.labels.curatorshipLabel}
                      </p>
                      <p className="mt-1 font-mono text-xs text-[#F4F4F0]">
                        {activeExhibition.curatorship}
                      </p>
                    </div>
                  </div>

                  {/* Artistas participantes */}
                  <div className="px-6 sm:px-8 py-4 bg-[#16171A]/35 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#F4F4F0]/50 mr-2">
                      <Users size={12} strokeWidth={1.5} className="text-[#800028]" />
                      {exhibitions.labels.artistsLabel}:
                    </span>
                    {activeExhibition.artists.map((artist) => (
                      <span
                        key={artist}
                        className="px-2.5 py-1 border border-white/15 bg-[#1D1E22] font-mono text-[11px] text-[#F4F4F0]/85"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. Galería Rápida B&N → Color + Zoom Sutil en Hover */}
                <div className="border-b border-white/15">
                  <div className="px-6 sm:px-8 py-2.5 border-b border-white/15 bg-[#16171A] flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em]">
                    <span className="text-[#F4F4F0]/75">
                      [{exhibitions.labels.galleryTitle}]
                    </span>
                    <span className="hidden sm:inline text-[#F4F4F0]/40">
                      {exhibitions.labels.zoomHint}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
                    {activeExhibition.gallery.map((plate) => (
                      <figure
                        key={plate.id}
                        onClick={() => setLightboxPlate(plate)}
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
                            <span className="px-2 py-0.5 bg-[#1D1E22]/90 border border-white/15 font-mono text-[10px] tracking-[0.14em] text-[#F4F4F0]">
                              {plate.code}
                            </span>
                            <span className="p-1.5 bg-[#1D1E22]/85 border border-white/15 text-[#F4F4F0] opacity-0 group-hover:opacity-100 transition-opacity">
                              <Maximize2 size={12} strokeWidth={1.5} />
                            </span>
                          </div>
                        </div>

                        <figcaption className="p-3.5 border-t border-white/15 font-sans text-xs leading-snug text-[#F4F4F0]/68 group-hover:text-[#F4F4F0] transition-colors">
                          {plate.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>

                {/* 4. Espacio para Video Documental de Sala */}
                <div className="p-6 sm:p-8 bg-[#16171A]/60">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F4F4F0]/80">
                      <Film size={14} strokeWidth={1.5} className="text-[#800028]" />
                      [{exhibitions.labels.videoTitle}]
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.16em] text-[#F4F4F0]/45">
                      {activeExhibition.video.code} // {activeExhibition.video.resolution}
                    </span>
                  </div>

                  <div className="relative aspect-video border border-white/15 bg-[#111215] overflow-hidden group">
                    {activeExhibition.video.videoUrl && videoPreviewActive ? (
                      <video
                        src={activeExhibition.video.videoUrl}
                        controls
                        autoPlay
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <>
                        <img
                          src={activeExhibition.video.poster}
                          alt={activeExhibition.video.title}
                          loading="lazy"
                          className={`h-full w-full object-cover transition-all duration-700 ${
                            videoPreviewActive
                              ? 'grayscale-0 scale-105 brightness-90'
                              : 'grayscale contrast-125 brightness-50 group-hover:brightness-65'
                          }`}
                        />

                        {/* Retícula técnica del visor audiovisual */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-4 border border-white/15 flex flex-col justify-between p-3 sm:p-4"
                        >
                          <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-[#F4F4F0]/75">
                            <span className="inline-flex items-center gap-2">
                              <span
                                className={`h-2 w-2 rounded-full ${
                                  videoPreviewActive
                                    ? 'bg-[#800028] animate-ping'
                                    : 'bg-[#800028]'
                                }`}
                              />
                              {videoPreviewActive ? 'SIGNAL // ACTIVE REEL' : 'STANDBY // ARCHIVE VTR'}
                            </span>
                            <span>TC 00:00 — {activeExhibition.video.duration}</span>
                          </div>

                          <div className="flex items-end justify-between gap-4">
                            <div className="max-w-md">
                              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#F4F4F0] font-bold">
                                {activeExhibition.video.title}
                              </p>
                              <p className="mt-1 font-mono text-[10px] leading-relaxed text-[#F4F4F0]/65">
                                {activeExhibition.video.note}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Control central de activación de espacio de video */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button
                            type="button"
                            onClick={() =>
                              setVideoPreviewActive((prev) => !prev)
                            }
                            className="inline-flex items-center gap-3 px-5 py-3 border border-[#800028] bg-[#1D1E22]/90 hover:bg-[#800028] text-[#F4F4F0] font-mono text-xs uppercase tracking-[0.16em] transition-colors cursor-pointer shadow-lg"
                          >
                            {videoPreviewActive ? (
                              <>
                                <Square size={13} strokeWidth={1.75} />
                                {exhibitions.labels.videoCloseLabel}
                              </>
                            ) : (
                              <>
                                <Play size={14} strokeWidth={1.75} className="fill-current" />
                                {exhibitions.labels.videoActionLabel}
                              </>
                            )}
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Lightbox de inspección de lámina fotográfica */}
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
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full border border-white/20 bg-[#1D1E22]"
            >
              <div className="px-5 py-3 border-b border-white/15 flex items-center justify-between font-mono text-xs tracking-[0.15em]">
                <span className="text-[#800028] font-bold">
                  [{lightboxPlate.code}] — {activeExhibition.title}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxPlate(null)}
                  className="inline-flex items-center gap-1.5 text-[#F4F4F0]/75 hover:text-[#F4F4F0] cursor-pointer"
                >
                  <span>[CERRAR]</span>
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
              <div className="px-5 py-3.5 border-t border-white/15 font-serif text-sm text-[#F4F4F0]/80">
                {lightboxPlate.caption}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
