import React from 'react';
import { ArrowLeft, ArrowRight, Compass, Home } from 'lucide-react';

/**
 * Barra técnica de navegación entre pantallas:
 * Permite volver al inicio, abrir el selector del índice,
 * o avanzar/retroceder secuencialmente entre secciones.
 */
export function ScreenNav({
  currentScreen,
  onNavigate,
  onOpenIndexDrawer,
  navigation,
}) {
  const currentIndex = navigation.items.findIndex(
    (item) => item.id === currentScreen
  );

  const prevItem = currentIndex > 0 ? navigation.items[currentIndex - 1] : null;
  const nextItem =
    currentIndex >= 0 && currentIndex < navigation.items.length - 1
      ? navigation.items[currentIndex + 1]
      : null;

  return (
    <div className="border-t border-white/15 bg-[#16171A]">
      <div className="mx-auto max-w-[1440px] border-x border-white/15">
        <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {/* Botón principal: Volver al inicio */}
          <div className="md:col-span-4 p-4 sm:p-5 flex items-center">
            <button
              type="button"
              onClick={() => onNavigate('inicio')}
              className="w-full px-5 py-3 border border-white/20 bg-[#1D1E22] hover:bg-[#800028] hover:border-[#800028] text-[#F4F4F0] font-mono text-xs uppercase tracking-[0.16em] transition-colors flex items-center justify-between cursor-pointer group"
            >
              <span className="inline-flex items-center gap-2">
                <ArrowLeft
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:-translate-x-1"
                />
                <Home size={14} strokeWidth={1.5} />
                <span>VOLVER AL INICIO</span>
              </span>
              <span className="font-mono text-[10px] text-[#F4F4F0]/40 group-hover:text-white">
                [00]
              </span>
            </button>
          </div>

          {/* Botón central: Seleccionar otro punto del índice */}
          <div className="md:col-span-4 p-4 sm:p-5 flex items-center">
            <button
              type="button"
              onClick={onOpenIndexDrawer}
              className="w-full px-5 py-3 border border-[#800028]/80 bg-[#800028]/15 hover:bg-[#800028] text-[#F4F4F0] font-mono text-xs uppercase tracking-[0.16em] transition-colors flex items-center justify-between cursor-pointer group"
            >
              <span className="inline-flex items-center gap-2">
                <Compass size={15} strokeWidth={1.5} className="text-[#800028] group-hover:text-white" />
                <span>SELECCIONAR OTRO PUNTO DEL ÍNDICE</span>
              </span>
              <span className="text-[#800028] group-hover:text-white">▾</span>
            </button>
          </div>

          {/* Botón derecho: Siguiente sección o ciclo */}
          <div className="md:col-span-4 p-4 sm:p-5 flex items-center">
            {nextItem ? (
              <button
                type="button"
                onClick={() => onNavigate(nextItem.id)}
                className="w-full px-5 py-3 border border-white/20 bg-[#1D1E22] hover:bg-[#800028] hover:border-[#800028] text-[#F4F4F0] font-mono text-xs uppercase tracking-[0.16em] transition-colors flex items-center justify-between cursor-pointer group"
              >
                <span className="truncate">
                  SIGUIENTE: {nextItem.shortLabel}
                </span>
                <ArrowRight
                  size={15}
                  strokeWidth={1.5}
                  className="shrink-0 transition-transform group-hover:translate-x-1 ml-2"
                />
              </button>
            ) : prevItem ? (
              <button
                type="button"
                onClick={() => onNavigate('manifiesto')}
                className="w-full px-5 py-3 border border-white/20 bg-[#1D1E22] hover:bg-[#800028] hover:border-[#800028] text-[#F4F4F0] font-mono text-xs uppercase tracking-[0.16em] transition-colors flex items-center justify-between cursor-pointer group"
              >
                <span>VOLVER A: [01. MANIFIESTO]</span>
                <ArrowRight
                  size={15}
                  strokeWidth={1.5}
                  className="shrink-0 transition-transform group-hover:translate-x-1 ml-2"
                />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
