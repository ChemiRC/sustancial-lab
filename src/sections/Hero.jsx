import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Compass, Layers } from 'lucide-react';
import { EditorialButton } from '../components/ui/EditorialButton';
import { TechTag } from '../components/ui/TechTag';

/**
 * Hero Monumental & Directorio Rector de Sustancial Lab (Pantalla de Inicio):
 * Replica la geometría constructiva exacta de los carteles de la marca,
 * con tipografía monumental SUSTANCIAL (#800028), el grabado ornitológico
 * y el Directorio de Acceso Directo a las 4 pantallas del laboratorio.
 */
export function Hero({ hero, meta, navigation, onNavigate }) {
  const [activeLayerId, setActiveLayerId] = useState(hero.layers[0].id);
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 });

  const activeLayer =
    hero.layers.find((layer) => layer.id === activeLayerId) || hero.layers[0];

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const normX = (event.clientX - rect.left) / rect.width - 0.5;
    const normY = (event.clientY - rect.top) / rect.height - 0.5;
    setPointerOffset({
      x: normX * 16,
      y: normY * 12,
    });
  };

  const handleMouseLeave = () => {
    setPointerOffset({ x: 0, y: 0 });
  };

  return (
    <div className="relative pt-[60px] editorial-grain overflow-hidden">
      <div className="mx-auto max-w-[1440px] border-x border-white/15">
        {/* Fila técnica superior de catalogación */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/15 bg-[#16171A]/75">
          <div className="md:col-span-5 px-5 sm:px-8 lg:px-12 py-3 border-b md:border-b-0 md:border-r border-white/15 flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-[0.16em] text-[#F4F4F0]/70 uppercase">
              {meta.discipline}
            </span>
          </div>

          <div className="md:col-span-4 px-5 sm:px-8 py-3 border-b md:border-b-0 md:border-r border-white/15 flex items-center justify-between md:justify-center gap-3">
            <span className="font-mono text-xs tracking-[0.18em] text-[#800028] font-bold uppercase">
              {hero.categorySubtitle}
            </span>
          </div>

          <div className="md:col-span-3 px-5 sm:px-8 lg:px-12 py-3 flex items-center justify-between md:justify-end gap-3">
            <TechTag variant="default" dot>
              {meta.statusLabel}
            </TechTag>
          </div>
        </div>

        {/* Lienzo central constructivo */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative py-8 sm:py-14 lg:py-16"
        >
          {/* Ejes verticales constructivos internos */}
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
          <div className="relative z-30 px-6 sm:px-12 lg:px-32 mb-6 sm:mb-10 flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-[11px] tracking-[0.18em] text-[#F4F4F0]/65 uppercase">
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
            {/* Línea constructiva superior */}
            <div className="h-7 sm:h-8 border-y border-white/15 px-6 sm:px-12 lg:px-32 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-[#F4F4F0]/40 select-none">
              <span>RETÍCULA CONSTRUCTIVA</span>
              <span className="hidden sm:inline">{activeLayer.caption}</span>
              <span>SL // ARCHIVO</span>
            </div>

            {/* Franja central: SUSTANCIAL encajado entre las líneas de cuadrícula */}
            <div className="relative px-5 sm:px-10 lg:px-28 py-2 sm:py-3 flex items-center justify-center overflow-visible">
              <motion.h1
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="wordmark-monumental w-full text-center text-[#800028] select-none"
                style={{
                  fontSize: 'clamp(3.9rem, 16.4vw, 15.2rem)',
                }}
              >
                {hero.wordmark}
              </motion.h1>

              {/* Superposición gráfica */}
              <AnimatePresence mode="wait">
                {activeLayer.id === 'engraving' && activeLayer.image && (
                  <motion.div
                    key="layer-engraving"
                    initial={{ opacity: 0, scale: 0.92 }}
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
                          COLECTIVO SUSTANCIAL
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Línea constructiva inferior */}
            <div className="h-8 sm:h-10 border-y border-white/15 px-6 sm:px-12 lg:px-32 flex items-center justify-between font-mono text-[11px] tracking-[0.18em]">
              <span className="text-[#F4F4F0]/40 text-[10px]">
                LABORATORIO DE INVESTIGACIÓN VISUAL
              </span>
              <span className="text-[#800028] font-bold tracking-[0.24em] text-xs">
                HISTORIA DEL ARTE & CRÍTICA
              </span>
              <span className="text-[#F4F4F0]/40 text-[10px]">
                {meta.catalogCode}
              </span>
            </div>
          </div>

          {/* Subtítulo editorial y botones directos */}
          <div className="relative z-30 mt-8 sm:mt-12 px-6 sm:px-12 lg:px-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#F4F4F0]/55">
                {meta.city} — {meta.coordinates}
              </p>
              <p className="font-serif text-xl sm:text-2xl lg:text-[25px] leading-snug text-[#F4F4F0]/90 max-w-2xl">
                {hero.tagline}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
              <EditorialButton
                onClick={() => onNavigate(hero.primaryCta.targetScreen)}
                index={hero.primaryCta.index}
                variant="primary"
              >
                {hero.primaryCta.label}
              </EditorialButton>
              <EditorialButton
                onClick={() => onNavigate(hero.secondaryCta.targetScreen)}
                index={hero.secondaryCta.index}
                variant="outline"
              >
                {hero.secondaryCta.label}
              </EditorialButton>
            </div>
          </div>
        </div>

        {/* =================================================================
            DIRECTORIO RECTOR: LAS 4 PANTALLAS DEL ÍNDICE CON ACCESO DIRECTO
           ================================================================= */}
        <div className="border-t border-white/15 bg-[#16171A]">
          <div className="px-6 sm:px-10 py-4 border-b border-white/15 flex flex-wrap items-center justify-between gap-3 bg-[#131417]">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#800028] font-bold">
              <Compass size={14} strokeWidth={1.5} />
              <span>DIRECTORIO GENERAL // PANTALLAS DEL LABORATORIO</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#F4F4F0]/45">
              SELECCIONA CUALQUIER SECCIÓN PARA NAVEGAR A SU PANTALLA
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {navigation.items.map((item, idx) => (
              <div
                key={item.id}
                className={`p-6 sm:p-8 flex flex-col justify-between gap-6 hover:bg-white/[0.025] transition-colors ${
                  idx >= 2 ? 'md:border-t border-white/15' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-[#800028] tracking-[0.2em]">
                      [{item.index}]
                    </span>
                    <TechTag variant="default">PANTALLA</TechTag>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[#F4F4F0]">
                    {item.title}
                  </h3>

                  <p className="font-serif text-sm sm:text-base leading-relaxed text-[#F4F4F0]/70">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="w-full sm:w-auto px-5 py-3 border border-white/20 hover:border-[#800028] bg-[#1D1E22] hover:bg-[#800028] text-[#F4F4F0] font-mono text-xs uppercase tracking-[0.16em] transition-colors flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <span>ENTRAR A {item.shortLabel}</span>
                    <ArrowRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            ))}
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
    </div>
  );
}
