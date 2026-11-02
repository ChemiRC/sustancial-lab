import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { EditorialButton } from '../components/ui/EditorialButton';
import { TechTag } from '../components/ui/TechTag';

/**
 * Hero Monumental de Sustancial Lab:
 * Replica la geometría constructiva exacta de los carteles de la marca:
 * dobles líneas horizontales de 1px que enmarcan la altura de mayúscula y línea base
 * de SUSTANCIAL (#800028), cruzadas por ejes verticales y superposición interactiva
 * de grabado en blanco y negro o fotografía analógica de alto contraste.
 */
export function Hero({ hero, meta }) {
  const [activeLayerId, setActiveLayerId] = useState(hero.layers[0].id);
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 });

  const activeLayer =
    hero.layers.find((layer) => layer.id === activeLayerId) || hero.layers[0];

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const normX = (event.clientX - rect.left) / rect.width - 0.5;
    const normY = (event.clientY - rect.top) / rect.height - 0.5;
    setPointerOffset({
      x: normX * 18,
      y: normY * 14,
    });
  };

  const handleMouseLeave = () => {
    setPointerOffset({ x: 0, y: 0 });
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-[60px] border-b border-white/15 editorial-grain overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] border-x border-white/15">
        {/* Fila técnica superior de catalogación */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/15 bg-[#16171A]/75">
          <div className="md:col-span-4 px-5 sm:px-8 lg:px-14 py-3 border-b md:border-b-0 md:border-r border-white/15 flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-[0.16em] text-[#F4F4F0]/70 uppercase">
              {meta.discipline}
            </span>
          </div>

          <div className="md:col-span-4 px-5 sm:px-8 py-3 border-b md:border-b-0 md:border-r border-white/15 flex items-center justify-between md:justify-center gap-3">
            <span className="font-mono text-xs tracking-[0.24em] text-[#800028] font-bold">
              {hero.cyrillicSubtitle}
            </span>
            <span className="font-mono text-[10px] tracking-[0.15em] text-[#F4F4F0]/40">
              // {meta.editionLabel}
            </span>
          </div>

          <div className="md:col-span-4 px-5 sm:px-8 lg:px-14 py-3 flex items-center justify-between md:justify-end gap-3">
            <TechTag variant="default" dot>
              {meta.statusLabel}
            </TechTag>
          </div>
        </div>

        {/* Lienzo central constructivo (inspirado en carteles oficiales) */}
        <div className="relative py-10 sm:py-16 lg:py-20">
          {/* Ejes verticales constructivos internos del cartel */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-6 sm:left-10 lg:left-14 w-px bg-white/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none hidden sm:block absolute inset-y-0 left-16 lg:left-28 w-px bg-white/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none hidden md:block absolute inset-y-0 right-16 lg:right-36 w-px bg-white/15"
          />

          {/* Selector técnico de capa superpuesta */}
          <div className="relative z-30 px-6 sm:px-12 lg:px-32 mb-8 sm:mb-12 flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-[11px] tracking-[0.18em] text-[#F4F4F0]/60 uppercase">
              {hero.technicalKicker}
            </span>

            <div className="inline-flex flex-wrap items-center border border-white/15 bg-[#16171A]/90">
              <span className="px-3 py-1.5 border-r border-white/15 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-[#F4F4F0]/50">
                <Layers size={12} strokeWidth={1.5} className="text-[#800028]" />
                {hero.layerControlsLabel}
              </span>
              {hero.layers.map((layer) => {
                const isSelected = layer.id === activeLayerId;
                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => setActiveLayerId(layer.id)}
                    className={`px-3 py-1.5 border-r last:border-r-0 border-white/15 font-mono text-[10px] tracking-[0.15em] uppercase transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#800028] text-[#F4F4F0]'
                        : 'text-[#F4F4F0]/65 hover:text-[#F4F4F0] hover:bg-white/[0.04]'
                    }`}
                  >
                    {layer.code} {layer.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Banda constructiva de doble línea horizontal + Título Monumental SUSTANCIAL */}
          <div className="relative">
            {/* Línea constructiva superior #1 + franja técnica */}
            <div className="h-7 sm:h-9 border-y border-white/15 px-6 sm:px-12 lg:px-32 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-[#F4F4F0]/40 select-none">
              <span>CAP-HEIGHT // Y:0.00</span>
              <span className="hidden sm:inline">{activeLayer.caption}</span>
              <span>AXIS // +19.43</span>
            </div>

            {/* Franja central: SUSTANCIAL encajado entre las líneas de cuadrícula */}
            <div className="relative px-5 sm:px-10 lg:px-28 py-2 sm:py-3 flex items-center justify-center overflow-visible">
              <motion.h1
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="wordmark-monumental w-full text-center text-[#800028] select-none"
                style={{
                  fontSize: 'clamp(3.9rem, 16.4vw, 15.2rem)',
                }}
              >
                {hero.wordmark}
              </motion.h1>

              {/* Superposición gráfica (Grabado B&N de alto contraste o Fotografía Colectivo) */}
              <AnimatePresence mode="wait">
                {activeLayer.id === 'engraving' && activeLayer.image && (
                  <motion.div
                    key="layer-engraving"
                    initial={{ opacity: 0, scale: 0.92, y: 12 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: pointerOffset.x,
                      y: pointerOffset.y,
                    }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{
                      opacity: { duration: 0.35 },
                      scale: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                      x: { type: 'spring', stiffness: 120, damping: 20 },
                      y: { type: 'spring', stiffness: 120, damping: 20 },
                    }}
                    className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
                  >
                    <img
                      src={activeLayer.image}
                      alt={activeLayer.alt}
                      className="w-[230px] sm:w-[330px] md:w-[410px] lg:w-[470px] max-w-[72vw] h-auto object-contain drop-shadow-[0_18px_36px_rgba(0,0,0,0.68)]"
                    />
                  </motion.div>
                )}

                {activeLayer.id === 'collective' && activeLayer.image && (
                  <motion.div
                    key="layer-collective"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{
                      opacity: 1,
                      x: pointerOffset.x * 0.6,
                      y: pointerOffset.y * 0.6,
                    }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
                  >
                    <div className="relative w-[210px] sm:w-[270px] md:w-[320px] border border-white/30 bg-[#16171A] p-2 shadow-[0_24px_50px_rgba(0,0,0,0.8)]">
                      <img
                        src={activeLayer.image}
                        alt={activeLayer.alt}
                        className="w-full h-[230px] sm:h-[300px] object-cover contrast-125"
                      />
                      <div className="pt-1.5 flex items-center justify-between font-mono text-[9px] tracking-[0.15em] text-[#F4F4F0]/70">
                        <span>SL // 35MM</span>
                        <span className="text-[#800028] font-bold">
                          {hero.cyrillicSubtitle}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Línea constructiva inferior #2 + subtítulo cirílico enmarcado */}
            <div className="h-9 sm:h-11 border-y border-white/15 px-6 sm:px-12 lg:px-32 flex items-center justify-between font-mono text-[11px] tracking-[0.2em]">
              <span className="text-[#F4F4F0]/40 text-[10px]">
                BASELINE // Y:1.00
              </span>
              <span className="text-[#800028] font-bold tracking-[0.28em]">
                {hero.cyrillicSubtitle}
              </span>
              <span className="text-[#F4F4F0]/40 text-[10px]">
                {meta.catalogCode}
              </span>
            </div>
          </div>

          {/* Subtítulo editorial y acciones bajo la retícula central */}
          <div className="relative z-30 mt-10 sm:mt-14 px-6 sm:px-12 lg:px-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="lg:col-span-7 space-y-3"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#F4F4F0]/55">
                {meta.city} — {meta.coordinates}
              </p>
              <p className="font-serif text-xl sm:text-2xl lg:text-[26px] leading-snug text-[#F4F4F0]/90 max-w-2xl">
                {hero.tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3"
            >
              <EditorialButton
                href={hero.primaryCta.href}
                index={hero.primaryCta.index}
                variant="primary"
              >
                {hero.primaryCta.label}
              </EditorialButton>
              <EditorialButton
                href={hero.secondaryCta.href}
                index={hero.secondaryCta.index}
                variant="outline"
              >
                {hero.secondaryCta.label}
              </EditorialButton>
            </motion.div>
          </div>
        </div>

        {/* Tabla inferior de especificaciones del laboratorio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/15 bg-[#16171A]/70">
          {hero.specs.map((spec, idx) => (
            <div
              key={spec.key}
              className={`px-6 py-4 border-white/15 ${
                idx < hero.specs.length - 1 ? 'border-b lg:border-b-0 lg:border-r' : ''
              } ${idx % 2 === 0 ? 'sm:border-r' : ''}`}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#F4F4F0]/45">
                {spec.key}
              </p>
              <p className="mt-1 font-mono text-xs tracking-[0.12em] text-[#F4F4F0]">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
