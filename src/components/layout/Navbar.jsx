import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Compass, Home, Menu, X } from 'lucide-react';

/**
 * Directorio Superior Fijo (Navbar) con estética de tabla técnica de 1px.
 * Navegación por pantallas/rutas independientes con botón de retorno al inicio
 * y selector de índice integrado.
 */
export function Navbar({
  currentScreen,
  onNavigate,
  onOpenIndexDrawer,
  navigation,
  meta,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (screenId) => {
    onNavigate(screenId);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/15 bg-[#1D1E22]/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] border-x border-white/15">
        <nav
          aria-label="Directorio principal"
          className="grid grid-cols-12 items-stretch min-h-[60px]"
        >
          {/* Celda de marca y botón de inicio */}
          <div className="col-span-8 sm:col-span-5 lg:col-span-3 px-4 sm:px-6 py-2.5 border-r border-white/15 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => handleNavClick('inicio')}
              className="text-left group flex items-baseline gap-2.5 cursor-pointer"
            >
              <span className="font-display text-2xl tracking-tight text-[#800028] group-hover:text-[#F4F4F0] transition-colors">
                {navigation.brandShort}
              </span>
              <span className="hidden sm:inline-block font-mono text-[9px] tracking-[0.16em] text-[#F4F4F0]/50 uppercase">
                {navigation.brandSub}
              </span>
            </button>

            {/* Si no estamos en inicio, mostramos botón rápido de volver */}
            {currentScreen !== 'inicio' && (
              <button
                type="button"
                onClick={() => handleNavClick('inicio')}
                className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 border border-[#800028] bg-[#800028]/20 hover:bg-[#800028] text-[#F4F4F0] font-mono text-[10px] tracking-[0.14em] uppercase transition-colors cursor-pointer"
                title="Volver a la portada principal"
              >
                <ArrowLeft size={11} strokeWidth={1.5} />
                <span>INICIO</span>
              </button>
            )}
          </div>

          {/* Tabla técnica de enlaces a las 4 pantallas (Desktop) */}
          <div className="hidden lg:grid lg:col-span-7 grid-cols-4">
            {navigation.items.map((item) => {
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-3 border-r border-white/15 flex items-center justify-center font-mono text-[11px] xl:text-xs tracking-[0.12em] uppercase transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#800028] text-white font-bold'
                      : 'text-[#F4F4F0]/75 hover:bg-white/[0.04] hover:text-[#F4F4F0]'
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Línea inferior indicadora */}
                  <span
                    className={`absolute bottom-0 inset-x-0 h-[2px] bg-white transition-transform duration-200 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Celda de selector de índice y estado (Desktop) */}
          <div className="hidden lg:flex lg:col-span-2 px-3 py-2.5 items-center justify-between font-mono text-[10px] tracking-[0.16em] text-[#F4F4F0]/65">
            <button
              type="button"
              onClick={onOpenIndexDrawer}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-white/15 bg-[#16171A] hover:border-[#800028] text-[#F4F4F0] transition-colors cursor-pointer"
            >
              <Compass size={12} strokeWidth={1.5} className="text-[#800028]" />
              <span>ÍNDICE ▾</span>
            </button>

            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 bg-[#800028] animate-pulse" />
              <span>ACTIVO</span>
            </span>
          </div>

          {/* Botón de menú móvil */}
          <div className="col-span-4 sm:col-span-7 lg:hidden flex items-stretch justify-end">
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              className="px-4 sm:px-6 py-3 flex items-center justify-end gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-[#F4F4F0] hover:bg-[#800028] transition-colors cursor-pointer"
            >
              <span>{mobileOpen ? '[CERRAR]' : '[ÍNDICE]'}</span>
              {mobileOpen ? (
                <X size={16} strokeWidth={1.5} />
              ) : (
                <Menu size={16} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </nav>

        {/* Menú desplegable móvil */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-white/15 bg-[#16171A]"
            >
              <div className="p-3 border-b border-white/15 bg-[#121316]">
                <button
                  type="button"
                  onClick={() => handleNavClick('inicio')}
                  className={`w-full px-4 py-3 border font-mono text-xs uppercase tracking-[0.14em] flex items-center justify-between cursor-pointer ${
                    currentScreen === 'inicio'
                      ? 'border-[#800028] bg-[#800028] text-white'
                      : 'border-white/15 bg-[#1D1E22] text-[#F4F4F0] hover:border-[#800028]'
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Home size={14} strokeWidth={1.5} />
                    <span>[00. PORTADA / INICIO]</span>
                  </span>
                  <span>→</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2">
                {navigation.items.map((item) => {
                  const isActive = currentScreen === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      className={`px-6 py-4 border-b sm:odd:border-r border-white/15 text-left flex items-center justify-between font-mono text-xs tracking-[0.14em] cursor-pointer ${
                        isActive
                          ? 'bg-[#800028] text-white font-bold'
                          : 'text-[#F4F4F0] hover:bg-white/[0.04]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-[#F4F4F0]/40">→</span>
                    </button>
                  );
                })}
              </div>

              <div className="px-6 py-3 flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-[#F4F4F0]/50">
                <span>{meta.catalogCode}</span>
                <span>{meta.discipline}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
