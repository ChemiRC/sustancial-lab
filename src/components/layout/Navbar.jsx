import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/**
 * Directorio Superior Fijo (Navbar) con estética de tabla técnica de 1px.
 * Enlaces indexados: [01. MANIFIESTO], [02. EXPOSICIONES], [03. ENTREVISTAS], [04. ENSAYOS].
 */
export function Navbar({ navigation, meta }) {
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navigation.items.map((item) => item.sectionId);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navigation.items]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/15 bg-[#1D1E22]/92 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] border-x border-white/15">
        <nav
          aria-label="Directorio principal"
          className="grid grid-cols-12 items-stretch min-h-[60px]"
        >
          {/* Celda de marca + guiño cirílico */}
          <a
            href="#top"
            className="col-span-8 sm:col-span-6 lg:col-span-3 px-4 sm:px-6 py-2.5 border-r border-white/15 flex items-center justify-between gap-3 group hover:bg-[#23252B]/70 transition-colors"
          >
            <div className="flex items-baseline gap-2.5">
              <span className="font-display text-2xl tracking-tight text-[#800028] group-hover:text-[#F4F4F0] transition-colors">
                {navigation.brandShort}
              </span>
              <span className="font-mono text-[10px] tracking-[0.16em] text-[#F4F4F0]/60 uppercase">
                {navigation.brandSub}
              </span>
            </div>
            <span className="hidden xl:inline-block font-mono text-[9px] tracking-[0.14em] text-[#F4F4F0]/35">
              [{meta.foundedYear}]
            </span>
          </a>

          {/* Tabla técnica de enlaces de anclaje (Desktop) */}
          <div className="hidden lg:grid lg:col-span-7 grid-cols-4">
            {navigation.items.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-3 border-r border-white/15 flex items-center justify-center font-mono text-[11px] xl:text-xs tracking-[0.12em] uppercase transition-colors ${
                    isActive
                      ? 'bg-[#800028]/20 text-[#F4F4F0]'
                      : 'text-[#F4F4F0]/75 hover:bg-white/[0.04] hover:text-[#F4F4F0]'
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Indicador inferior carmesí */}
                  <span
                    className={`absolute bottom-0 inset-x-0 h-[2px] bg-[#800028] transition-transform duration-200 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Celda de estado técnico / coordenadas (Desktop) */}
          <div className="hidden lg:flex lg:col-span-2 px-4 py-2.5 items-center justify-between font-mono text-[10px] tracking-[0.16em] text-[#F4F4F0]/60">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 bg-[#800028] animate-pulse" />
              {navigation.statusTag}
            </span>
            <span className="text-[#F4F4F0]/35">01</span>
          </div>

          {/* Botón de índice técnico (Mobile / Tablet) */}
          <div className="col-span-4 sm:col-span-6 lg:hidden flex items-stretch justify-end">
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:border-l border-white/15 flex items-center justify-end gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-[#F4F4F0] hover:bg-[#800028] transition-colors cursor-pointer"
            >
              <span>
                {mobileOpen
                  ? navigation.mobileMenuCloseLabel
                  : navigation.mobileMenuOpenLabel}
              </span>
              {mobileOpen ? (
                <X size={16} strokeWidth={1.5} />
              ) : (
                <Menu size={16} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </nav>

        {/* Menú desplegable móvil en cuadrícula expuesta */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.24, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-white/15 bg-[#16171A]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {navigation.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-6 py-4 border-b sm:odd:border-r border-white/15 flex items-center justify-between font-mono text-xs tracking-[0.14em] text-[#F4F4F0] hover:bg-[#800028] transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-[#F4F4F0]/40">→</span>
                  </a>
                ))}
              </div>
              <div className="px-6 py-3 flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-[#F4F4F0]/50">
                <span>{meta.catalogCode}</span>
                <span>{meta.coordinates}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
