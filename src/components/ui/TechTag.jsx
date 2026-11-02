import React from 'react';

/**
 * Etiqueta técnica monoespaciada reutilizable para índices ([01]),
 * coordenadas, fechas de archivo y metadatos curatoriales.
 */
export function TechTag({
  children,
  variant = 'default',
  dot = false,
  className = '',
}) {
  const variants = {
    default:
      'border border-white/15 bg-[#1D1E22]/85 text-[#F4F4F0]/80',
    crimson:
      'border border-[#800028] bg-[#800028] text-[#F4F4F0]',
    crimsonOutline:
      'border border-[#800028]/80 bg-[#800028]/15 text-[#F4F4F0]',
    ghost:
      'text-[#F4F4F0]/60',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] leading-none select-none ${
        variants[variant] || variants.default
      } ${className}`}
    >
      {dot && (
        <span
          className={`inline-block h-1.5 w-1.5 shrink-0 ${
            variant === 'crimson' ? 'bg-[#F4F4F0]' : 'bg-[#800028]'
          }`}
        />
      )}
      {children}
    </span>
  );
}
