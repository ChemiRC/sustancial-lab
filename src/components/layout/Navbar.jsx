import React from 'react';
import { ArrowLeft, Menu, X } from 'lucide-react';

/**
 * Barra de navegación superior minimalista y editorial.
 * Conecta con las secciones principales en escritorio y despliega IndexDrawer en móvil.
 */
export function Navbar({
  currentScreen,
  onNavigate,
  isMenuOpen,
  onToggleMenu,
  navigation,
}) {
  const handleNavClick = (screenId) => {
    onNavigate(screenId);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/15 bg-[#1D1E22]/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] border-x border-white/15">
        <nav
          aria-label="Navegación principal"
          className="grid grid-cols-12 items-stretch min-h-[60px]"
        >
          {/* Identidad de marca + retorno rápido a Inicio */}
          <div className="col-span-7 sm:col-span-6 lg:col-span-4 px-4 sm:px-6 py-2.5 border-r border-white/15 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => handleNavClick('inicio')}
              className="text-left group flex items-baseline gap-2.5 cursor-pointer"
            >
              <span className="font-display text-2xl tracking-tight text-[#800028] group-hover:text-[#F4F4F0] transition-colors">
                {navigation.brandShort}
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] tracking-[0.14em] text-[#F4F4F0]/55 uppercase">
                {navigation.brandSub}
              </span>
            </button>

            {currentScreen !== 'inicio' && (
              <button
                type="button"
                onClick={() => handleNavClick('inicio')}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-white/15 hover:border-[#800028] bg-[#16171A] hover:bg-[#800028] text-[#F4F4F0] font-mono text-[10px] tracking-[0.12em] uppercase transition-colors cursor-pointer shrink-0"
                title="Volver a la portada principal"
              >
                <ArrowLeft size={11} strokeWidth={1.5} />
                <span>{navigation.homeLabel}</span>
              </button>
            )}
          </div>

          {/* Enlaces principales en escritorio */}
          <div className="hidden lg:grid lg:col-span-8 grid-cols-4">
            {navigation.items.map((item, idx) => {
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-3 ${
                    idx < navigation.items.length - 1 ? 'border-r border-white/15' : ''
                  } flex items-center justify-center gap-2 font-mono text-xs tracking-[0.14em] uppercase transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#800028] text-[#F4F4F0] font-bold'
                      : 'text-[#F4F4F0]/75 hover:bg-white/[0.04] hover:text-[#F4F4F0]'
                  }`}
                >
                  <span
                    className={`text-[10px] ${
                      isActive ? 'text-[#F4F4F0]/90' : 'text-[#800028]'
                    }`}
                  >
                    {item.index}.
                  </span>
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-0 inset-x-0 h-[2px] bg-[#F4F4F0] transition-transform duration-200 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Botón claro de Menú / Cerrar en móvil y tablet (< lg) */}
          <div className="col-span-5 sm:col-span-6 lg:hidden flex items-stretch justify-end">
            <button
              type="button"
              onClick={onToggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              className={`px-4 sm:px-6 py-3 border-l border-white/15 flex items-center justify-center gap-2 font-mono text-xs tracking-[0.14em] uppercase transition-colors cursor-pointer ${
                isMenuOpen
                  ? 'bg-[#800028] text-[#F4F4F0]'
                  : 'text-[#F4F4F0] hover:bg-[#800028]/80'
              }`}
            >
              <span>
                {isMenuOpen ? navigation.menuCloseLabel : navigation.menuOpenLabel}
              </span>
              {isMenuOpen ? (
                <X size={16} strokeWidth={1.5} />
              ) : (
                <Menu size={16} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
