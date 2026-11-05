import React from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

/**
 * Pie de página (Footer) con cuadrícula expuesta de 1px.
 */
export function Footer({ footer, navigation, meta, onNavigate }) {
  return (
    <footer className="relative z-20 border-t border-white/15 bg-[#16171A] overflow-hidden">
      <div className="mx-auto max-w-[1440px] border-x border-white/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/15">
          {/* Bloque de identidad */}
          <div className="lg:col-span-5 py-8 px-4 sm:p-8 lg:p-10 lg:border-r border-white/15 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <p className="font-mono text-xs tracking-[0.16em] text-[#800028] font-bold uppercase">
                {meta.subtitle}
              </p>
              <button
                type="button"
                onClick={() => onNavigate('inicio')}
                className="wordmark-monumental text-left text-5xl sm:text-6xl md:text-7xl text-[#800028] hover:text-white transition-colors select-none cursor-pointer"
              >
                {footer.wordmark}
              </button>
            </div>

            <p className="font-serif text-base leading-relaxed text-[#F4F4F0]/75 max-w-md">
              {footer.statement}
            </p>
          </div>

          {/* Secciones del sitio */}
          <div className="lg:col-span-3 py-8 px-4 sm:p-8 lg:p-10 border-t lg:border-t-0 lg:border-r border-white/15 space-y-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#F4F4F0]/50">
              Navegación
            </p>
            <ul className="space-y-3">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('inicio')}
                  className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-[#F4F4F0]/80 hover:text-[#800028] transition-colors cursor-pointer"
                >
                  <span>Portada Principal</span>
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.5}
                    className="opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                </button>
              </li>
              {navigation.items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-[#F4F4F0]/80 hover:text-[#800028] transition-colors cursor-pointer"
                  >
                    <span>
                      {item.index} · {item.label}
                    </span>
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="opacity-50 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto y enlaces */}
          <div className="lg:col-span-4 py-8 px-4 sm:p-8 lg:p-10 border-t lg:border-t-0 border-white/15 flex flex-col justify-between gap-6">
            <div className="space-y-3.5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#F4F4F0]/50">
                {footer.contactTitle}
              </p>
              <a
                href={`mailto:${footer.email}`}
                className="inline-flex items-center gap-2.5 font-mono text-sm text-[#F4F4F0] hover:text-[#800028] transition-colors break-all"
              >
                <Mail size={15} strokeWidth={1.5} className="text-[#800028] shrink-0" />
                {footer.email}
              </a>
              <p className="flex items-center gap-2 font-mono text-xs text-[#F4F4F0]/60">
                <MapPin size={14} strokeWidth={1.5} className="text-[#800028] shrink-0" />
                {footer.location}
              </p>
            </div>

            <div className="space-y-2.5 pt-5 border-t border-white/15">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#F4F4F0]/50">
                {footer.socialsTitle}
              </p>
              <div className="flex flex-col gap-2">
                {footer.socials.map((social) => (
                  <button
                    key={social.label}
                    type="button"
                    onClick={() => onNavigate(social.screen)}
                    className="text-left font-mono text-xs text-[#F4F4F0]/75 hover:text-[#800028] transition-colors cursor-pointer"
                  >
                    {social.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior de derechos */}
        <div className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[11px] text-[#F4F4F0]/50">
          <span>{footer.copyright}</span>
          <button
            type="button"
            onClick={() => onNavigate('inicio')}
            className="text-[#F4F4F0]/80 hover:text-[#800028] transition-colors cursor-pointer"
          >
            {footer.backToTopLabel}
          </button>
        </div>
      </div>
    </footer>
  );
}
