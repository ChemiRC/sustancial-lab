import React from 'react';
import { ArrowLeft, Compass, Home } from 'lucide-react';

/**
 * Barra contextual de migas de pan y cambio rápido de sección.
 */
export function BreadcrumbBar({
  currentScreen,
  onNavigate,
  onOpenIndexDrawer,
  navigation,
}) {
  if (currentScreen === 'inicio') return null;

  const currentItem = navigation.items.find((item) => item.id === currentScreen);

  return (
    <div className="sticky top-[60px] z-40 border-b border-white/15 bg-[#16171A]/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] border-x border-white/15">
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-2.5 gap-3">
          {/* Botón directo volver al inicio */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('inicio')}
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#800028] bg-[#800028]/20 hover:bg-[#800028] text-[#F4F4F0] font-mono text-xs uppercase tracking-[0.14em] transition-colors cursor-pointer"
            >
              <ArrowLeft size={13} strokeWidth={1.5} />
              <Home size={13} strokeWidth={1.5} />
              <span>VOLVER AL INICIO</span>
            </button>

            <span className="text-white/20 hidden sm:inline">/</span>

            <span className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#F4F4F0]/80">
              <span className="text-[#800028] font-bold">[{currentItem?.index}]</span>
              <span>{currentItem?.shortLabel}</span>
            </span>
          </div>

          {/* Selector rápido directo de las 4 secciones + botón de índice */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center border border-white/15 bg-[#141518]">
              {navigation.items.map((item) => {
                const isActive = item.id === currentScreen;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className={`px-3 py-1 font-mono text-[11px] tracking-[0.14em] uppercase border-r last:border-r-0 border-white/15 transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#800028] text-white font-bold'
                        : 'text-[#F4F4F0]/65 hover:bg-white/[0.05] hover:text-white'
                    }`}
                  >
                    [{item.index}]
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={onOpenIndexDrawer}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/15 bg-[#1D1E22] hover:border-white/40 text-[#F4F4F0] font-mono text-[11px] uppercase tracking-[0.14em] transition-colors cursor-pointer"
            >
              <Compass size={13} strokeWidth={1.5} className="text-[#800028]" />
              <span className="hidden xs:inline">SELECCIONAR SECCIÓN</span>
              <span className="xs:hidden">ÍNDICE</span>
              <span className="text-[#800028]">▾</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
