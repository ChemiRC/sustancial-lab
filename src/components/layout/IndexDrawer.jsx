import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Home, X } from 'lucide-react';

/**
 * Menú desplegable de navegación (IndexDrawer).
 * Permite cambiar entre secciones o volver a la portada de forma fluida en móvil y escritorio.
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
        <div className="fixed inset-0 z-40 pt-[60px] flex flex-col">
          {/* Fondo translúcido */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 top-[60px] bg-black/80 backdrop-blur-sm"
          />

          {/* Panel desplegable */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full mx-auto max-w-[1440px] border-x border-b border-white/15 bg-[#1D1E22] shadow-2xl max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            {/* Cabecera del menú */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/15 bg-[#16171A]">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#F4F4F0]/80">
                {navigation.indexDrawerTitle}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/15 font-mono text-xs tracking-[0.12em] uppercase text-[#F4F4F0]/80 hover:bg-[#800028] hover:text-[#F4F4F0] hover:border-[#800028] transition-colors cursor-pointer"
              >
                <span>{navigation.menuCloseLabel}</span>
                <X size={14} strokeWidth={1.5} />
              </button>
            </div>

            {/* Opción de Portada / Inicio */}
            <div className="p-4 sm:p-6 border-b border-white/15 bg-[#18191E]">
              <button
                type="button"
                onClick={() => handleSelect('inicio')}
                className={`w-full p-4 border transition-colors flex items-center justify-between gap-4 cursor-pointer text-left ${
                  currentScreen === 'inicio'
                    ? 'border-[#800028] bg-[#800028]/20 text-[#F4F4F0]'
                    : 'border-white/15 bg-[#141518] hover:border-[#800028] text-[#F4F4F0]/90'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className="p-2.5 border border-white/15 bg-[#1D1E22] text-[#800028] shrink-0">
                    <Home size={16} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] font-bold">
                      Portada Principal
                    </p>
                    <p className="font-sans text-xs text-[#F4F4F0]/65 mt-0.5">
                      Presentación de Sustancial Lab e introducción general
                    </p>
                  </div>
                </div>

                <span className="font-mono text-xs tracking-[0.12em] uppercase text-[#800028] font-bold shrink-0">
                  {currentScreen === 'inicio' ? 'Actual' : 'Ir →'}
                </span>
              </button>
            </div>

            {/* Lista de secciones principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {navigation.items.map((item, idx) => {
                const isActive = currentScreen === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item.id)}
                    className={`w-full p-5 sm:p-6 text-left transition-colors flex flex-col justify-between gap-4 cursor-pointer group ${
                      idx >= 2 ? 'md:border-t border-white/15' : ''
                    } ${
                      isActive
                        ? 'bg-[#800028]/20 text-[#F4F4F0]'
                        : 'hover:bg-white/[0.03] text-[#F4F4F0]/85'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs font-bold text-[#800028] tracking-[0.16em]">
                          {item.index} · {item.label.toUpperCase()}
                        </span>
                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.5}
                          className="text-[#F4F4F0]/50 group-hover:text-[#800028] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl text-[#F4F4F0]">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm leading-relaxed text-[#F4F4F0]/65">
                        {item.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Pie del menú */}
            <div className="px-4 sm:px-6 py-3 border-t border-white/15 bg-[#16171A] flex items-center justify-between font-mono text-[11px] text-[#F4F4F0]/50">
              <span>{meta.subtitle}</span>
              <span>{meta.city}</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
