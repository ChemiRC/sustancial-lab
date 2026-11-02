import React from 'react';
import { ArrowUpRight, Compass, Mail } from 'lucide-react';

/**
 * Colofón Técnico Brutalista (Footer) con celdas expuestas de 1px.
 */
export function Footer({ footer, navigation, meta }) {
  return (
    <footer className="relative z-20 border-t border-white/15 bg-[#16171A]">
      <div className="mx-auto max-w-[1440px] border-x border-white/15">
        {/* Fila principal del colofón */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/15">
          {/* Bloque monumental de identidad */}
          <div className="lg:col-span-5 p-6 sm:p-10 lg:border-r border-white/15 flex flex-col justify-between gap-8">
            <div className="space-y-3">
              <p className="font-mono text-xs tracking-[0.22em] text-[#800028] font-bold">
                {footer.cyrillicMark} // {meta.catalogCode}
              </p>
              <div className="wordmark-monumental text-6xl sm:text-7xl text-[#800028] select-none">
                {footer.wordmark}
              </div>
            </div>

            <p className="font-serif text-base leading-relaxed text-[#F4F4F0]/70 max-w-md">
              {footer.statement}
            </p>
          </div>

          {/* Directorio interno */}
          <div className="lg:col-span-3 p-6 sm:p-10 border-t lg:border-t-0 lg:border-r border-white/15 space-y-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#F4F4F0]/45">
              [ÍNDICE DE SECCIONES]
            </p>
            <ul className="space-y-3">
              {navigation.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-[#F4F4F0]/80 hover:text-[#800028] transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="opacity-50 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
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
                  <a
                    key={social.label}
                    href={social.href}
                    className="inline-flex items-center justify-between font-mono text-xs tracking-[0.12em] text-[#F4F4F0]/75 hover:text-[#F4F4F0] transition-colors"
                  >
                    <span>{social.label}</span>
                    <span className="text-[#800028]">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior técnica */}
        <div className="px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-[10px] tracking-[0.15em] text-[#F4F4F0]/45">
          <span>{footer.copyright}</span>
          <div className="flex items-center gap-6">
            <span className="hidden xl:inline text-[#F4F4F0]/35">
              {footer.architectureNote}
            </span>
            <a
              href="#top"
              className="text-[#F4F4F0]/80 hover:text-[#800028] transition-colors"
            >
              {footer.backToTopLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
