import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Compass, Home, X } from 'lucide-react';
import { TechTag } from '../ui/TechTag';

/**
 * Panel interactivo para seleccionar cualquier punto del índice
 * o volver al inicio en cualquier momento.
 */
export function IndexDrawer({
  isOpen,
  onClose,
  currentScreen,
  onNavigate,
  navigation,
  meta,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSelect = (screenId) => {
    onNavigate(screenId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Telón de fondo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
          />

          {/* Caja brutalista del índice */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-3xl border border-white/20 bg-[#1D1E22] shadow-[0_25px_60px_rgba(0,0,0,0.85)] my-auto overflow-hidden"
          >
            {/* Cabecera del panel */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/15 bg-[#16171A]">
              <div className="flex items-center gap-3">
                <Compass size={15} strokeWidth={1.5} className="text-[#800028]" />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#F4F4F0] font-bold">
                  {navigation.indexDrawerTitle}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/15 font-mono text-[11px] tracking-[0.14em] uppercase text-[#F4F4F0]/70 hover:bg-[#800028] hover:text-[#F4F4F0] hover:border-[#800028] transition-colors cursor-pointer"
              >
                <span>[CERRAR]</span>
                <X size={14} strokeWidth={1.5} />
              </button>
            </div>

            {/* Fila destacada: Volver al Inicio */}
            <div className="p-4 sm:p-5 border-b border-white/15 bg-[#18191E]">
              <button
                type="button"
                onClick={() => handleSelect('inicio')}
                className={`w-full p-4 border transition-colors flex items-center justify-between cursor-pointer ${
                  currentScreen === 'inicio'
                    ? 'border-[#800028] bg-[#800028]/20 text-[#F4F4F0]'
                    : 'border-white/15 bg-[#141518] hover:border-[#800028] hover:bg-[#800028]/10 text-[#F4F4F0]/90'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className="p-2 border border-white/15 bg-[#1D1E22] text-[#800028]">
                    <Home size={16} strokeWidth={1.5} />
                  </span>
                  <div className="text-left">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] font-bold">
                      [00. PORTADA PRINCIPAL / INICIO]
                    </p>
                    <p className="font-sans text-xs text-[#F4F4F0]/60 mt-0.5">
                      Volver a la portada monumental, retícula tipográfica y presentación
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 font-mono text-[11px] tracking-[0.14em] text-[#800028] font-bold">
                  {currentScreen === 'inicio' ? '[ACTUAL]' : 'IR A INICIO →'}
                </span>
              </button>
            </div>

            {/* Lista de las 4 secciones del índice */}
            <div className="p-4 sm:p-6 space-y-2.5 max-h-[62vh] overflow-y-auto">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F4F4F0]/45 px-1 mb-2">
                SELECCIONA UNA PANTALLA DEL ÍNDICE:
              </p>

              {navigation.items.map((item) => {
                const isActive = currentScreen === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item.id)}
                    className={`w-full p-4 border text-left transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer group ${
                      isActive
                        ? 'border-[#800028] bg-[#800028]/25 text-white'
                        : 'border-white/15 bg-[#16171A]/70 hover:border-white/35 hover:bg-[#1A1B20] text-[#F4F4F0]/80'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold text-[#800028] tracking-[0.16em]">
                          [{item.index}]
                        </span>
                        <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#F4F4F0]">
                          {item.title}
                        </h3>
                        {isActive && (
                          <TechTag variant="crimson">ACTIVA</TechTag>
                        )}
                      </div>
                      <p className="font-sans text-xs leading-relaxed text-[#F4F4F0]/65 sm:max-w-lg">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-end">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.14em] uppercase text-[#F4F4F0]/70 group-hover:text-[#800028] transition-colors">
                        <span>{isActive ? 'VIENDO' : 'ENTRAR'}</span>
                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.5}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Pie del modal */}
            <div className="px-6 py-3 border-t border-white/15 bg-[#16171A] flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] tracking-[0.15em] text-[#F4F4F0]/45">
              <span>{meta.catalogCode}</span>
              <span>ESC PARA CERRAR</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
