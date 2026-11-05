import React from 'react';
import { ArrowLeft, ArrowUpRight, Compass, Mail } from 'lucide-react';

/**
 * Colofón Técnico Brutalista (Footer) con celdas expuestas de 1px.
 */
export function Footer({ footer, navigation, meta, onNavigate }) {
  return (
    <footer className="relative z-20 border-t border-white/15 bg-[#16171A]">
      <div className="mx-auto max-w-[1440px] border-x border-white/15">
        {/* Fila principal del colofón */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/15">
          {/* Bloque monumental de identidad */}
          <div className="lg:col-span-5 p-6 sm:p-10 lg:border-r border-white/15 flex flex-col justify-between gap-8">
            <div className="space-y-3">
              <p className="font-mono text-xs tracking-[0.2em] text-[#800028] font-bold uppercase">
                {meta.discipline} // {meta.catalogCode}
              </p>
              <button
                type="button"
                onClick={() => onNavigate('inicio')}
                className="wordmark-monumental text-left text-6xl sm:text-7xl text-[#800028] hover:text-white transition-colors select-none cursor-pointer"
              >
                {footer.wordmark}
              </button>
            </div>

            <p className="font-serif text-base leading-relaxed text-[#F4F4F0]/70 max-w-md">
              {footer.statement}
            </p>
          </div>

          {/* Directorio de pantallas */}
          <div className="lg:col-span-3 p-6 sm:p-10 border-t lg:border-t-0 lg:border-r border-white/15 space-y-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#F4F4F0]/45">
              [PANTALLAS DEL ÍNDICE]
            </p>
            <ul className="space-y-3">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('inicio')}
                  className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-[#F4F4F0]/80 hover:text-[#800028] transition-colors cursor-pointer"
                >
                  <span>[00. PORTADA / INICIO]</span>
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
                    className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-[#F4F4F0]/80 hover:text-[#800028] transition-colors cursor-pointer"
                  >
                    <span>{item.label}</span>
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

          {/* Contacto & canales */}
          <div className="lg:col-span-4 p-6 sm:p-10 border-t lg:border-t-0 border-white/15 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#F4F4F0]/45">
                [{footer.contactTitle}]
              </p>
              <a
                href={`mailto:${footer.email}`}
                className="inline-flex items-center gap-2.5 font-mono text-sm text-[#F4F4F0] hover:text-[#800028] transition-colors break-all"
              >
                <Mail size={15} strokeWidth={1.5} className="text-[#800028] shrink-0" />
                {footer.email}
              </a>
              <p className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.13em] text-[#F4F4F0]/55">
                <Compass size={14} strokeWidth={1.5} className="text-[#800028] shrink-0" />
                {footer.location}
              </p>
            </div>

            <div className="space-y-2.5 pt-5 border-t border-white/15">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#F4F4F0]/45">
                [{footer.socialsTitle}]
              </p>
              <div className="flex flex-col gap-2">
                {footer.socials.map((social) => (
                  <span
                    key={social.label}
                    className="font-mono text-xs tracking-[0.12em] text-[#F4F4F0]/75"
                  >
                    {social.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior técnica */}
        <div className="px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-[10px] tracking-[0.15em] text-[#F4F4F0]/45">
          <span>{footer.copyright}</span>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onNavigate('inicio')}
              className="text-[#F4F4F0]/80 hover:text-[#800028] transition-colors cursor-pointer"
            >
              {footer.backToTopLabel}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
