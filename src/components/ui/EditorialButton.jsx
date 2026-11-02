import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Botón / enlace técnico brutalista con borde arquitectónico de 1px
 * e inversión cromática al carmesí de marca (#800028).
 */
export function EditorialButton({
  children,
  href,
  onClick,
  index,
  variant = 'primary',
  icon = true,
  className = '',
  type = 'button',
}) {
  const variants = {
    primary:
      'border border-[#800028] bg-[#800028] text-[#F4F4F0] hover:bg-[#F4F4F0] hover:text-[#1D1E22] hover:border-[#F4F4F0]',
    outline:
      'border border-white/15 bg-transparent text-[#F4F4F0] hover:border-[#800028] hover:bg-[#800028] hover:text-[#F4F4F0]',
    subtle:
      'border border-white/15 bg-[#16171A]/80 text-[#F4F4F0]/85 hover:border-white/40 hover:text-[#F4F4F0]',
  };

  const sharedClasses = `group relative inline-flex items-center justify-between gap-4 px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-200 cursor-pointer ${
    variants[variant] || variants.primary
  } ${className}`;

  const content = (
    <>
      <span className="inline-flex items-center gap-2.5">
        {index && (
          <span className="opacity-65 group-hover:opacity-100">[{index}]</span>
        )}
        <span>{children}</span>
      </span>
      {icon && (
        <ArrowUpRight
          size={15}
          strokeWidth={1.5}
          className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={sharedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={sharedClasses}>
      {content}
    </button>
  );
}
