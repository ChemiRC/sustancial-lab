import React from 'react';

/**
 * Cuadrícula Arquitectónica Expuesta (Brutalismo Editorial):
 * Líneas constructivas continuas de 1px en rgba(255, 255, 255, 0.14)
 * inspiradas directamente en la geometría de los carteles de Sustancial Lab
 * (doble guía vertical izquierda y eje estructural derecho).
 */
export function GridLines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
    >
      <div className="relative mx-auto h-full max-w-[1440px] border-x border-white/15">
        {/* Doble línea constructiva izquierda característica de los carteles */}
        <div className="hidden sm:block absolute inset-y-0 left-10 lg:left-14 w-px bg-white/[0.11]" />

        {/* Ejes internos sutiles de retícula de 12 columnas */}
        <div className="hidden lg:block absolute inset-y-0 left-[25%] w-px bg-white/[0.05]" />
        <div className="hidden lg:block absolute inset-y-0 left-[58.333%] w-px bg-white/[0.05]" />

        {/* Eje vertical derecho de cartel */}
        <div className="hidden sm:block absolute inset-y-0 right-10 lg:right-20 w-px bg-white/[0.11]" />

        {/* Marcas de registro técnico (+) en esquinas superiores */}
        <span className="hidden sm:block absolute top-[57px] left-[36px] lg:left-[52px] font-mono text-[10px] leading-none text-white/25 select-none">
          +
        </span>
        <span className="hidden sm:block absolute top-[57px] right-[36px] lg:right-[76px] font-mono text-[10px] leading-none text-white/25 select-none">
          +
        </span>
      </div>
    </div>
  );
}
