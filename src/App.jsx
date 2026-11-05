import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BreadcrumbBar } from './components/layout/BreadcrumbBar';
import { Footer } from './components/layout/Footer';
import { GridLines } from './components/layout/GridLines';
import { IndexDrawer } from './components/layout/IndexDrawer';
import { Navbar } from './components/layout/Navbar';
import { siteContent } from './data/siteContent';
import { EssaysSection } from './sections/EssaysSection';
import { ExhibitionsDirectory } from './sections/ExhibitionsDirectory';
import { Hero } from './sections/Hero';
import { InterviewsSection } from './sections/InterviewsSection';
import { Manifesto } from './sections/Manifesto';

const VALID_SCREENS = ['inicio', 'manifiesto', 'exposiciones', 'entrevistas', 'ensayos'];

function getScreenFromHash() {
  const raw = window.location.hash.replace(/^#\/?/, '').toLowerCase().trim();
  if (VALID_SCREENS.includes(raw)) {
    return raw;
  }
  return 'inicio';
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(getScreenFromHash);
  const [isIndexDrawerOpen, setIsIndexDrawerOpen] = useState(false);

  // Sincronización con el botón Atrás / Adelante del navegador
  useEffect(() => {
    const handleHashChange = () => {
      const target = getScreenFromHash();
      setCurrentScreen(target);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (screenId) => {
    const valid = VALID_SCREENS.includes(screenId) ? screenId : 'inicio';
    setCurrentScreen(valid);
    window.location.hash = valid === 'inicio' ? '#/' : `#/${valid}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="relative min-h-screen bg-[#1D1E22] text-[#F4F4F0] selection:bg-[#800028] selection:text-[#F4F4F0]">
      {/* Cuadrícula arquitectónica continua de 1px */}
      <GridLines />

      {/* Directorio superior fijo con navegación por pantallas */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={navigateTo}
        onOpenIndexDrawer={() => setIsIndexDrawerOpen(true)}
        navigation={siteContent.navigation}
        meta={siteContent.meta}
      />

      {/* Barra de migas de pan y cambio de sección (visible en pantallas interiores) */}
      <BreadcrumbBar
        currentScreen={currentScreen}
        onNavigate={navigateTo}
        onOpenIndexDrawer={() => setIsIndexDrawerOpen(true)}
        navigation={siteContent.navigation}
      />

      {/* Panel / Drawer de selección rápida de secciones */}
      <IndexDrawer
        isOpen={isIndexDrawerOpen}
        onClose={() => setIsIndexDrawerOpen(false)}
        currentScreen={currentScreen}
        onNavigate={navigateTo}
        navigation={siteContent.navigation}
        meta={siteContent.meta}
      />

      {/* Contenedor dinámico de pantallas */}
      <main className="relative z-20">
        <AnimatePresence mode="wait">
          {currentScreen === 'inicio' && (
            <motion.div
              key="screen-inicio"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Hero
                hero={siteContent.hero}
                meta={siteContent.meta}
                navigation={siteContent.navigation}
                onNavigate={navigateTo}
              />
            </motion.div>
          )}

          {currentScreen === 'manifiesto' && (
            <motion.div
              key="screen-manifiesto"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Manifesto
                manifesto={siteContent.manifesto}
                onNavigate={navigateTo}
                onOpenIndexDrawer={() => setIsIndexDrawerOpen(true)}
                navigation={siteContent.navigation}
              />
            </motion.div>
          )}

          {currentScreen === 'exposiciones' && (
            <motion.div
              key="screen-exposiciones"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ExhibitionsDirectory
                exhibitions={siteContent.exhibitions}
                onNavigate={navigateTo}
                onOpenIndexDrawer={() => setIsIndexDrawerOpen(true)}
                navigation={siteContent.navigation}
              />
            </motion.div>
          )}

          {currentScreen === 'entrevistas' && (
            <motion.div
              key="screen-entrevistas"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <InterviewsSection
                interviews={siteContent.interviews}
                onNavigate={navigateTo}
                onOpenIndexDrawer={() => setIsIndexDrawerOpen(true)}
                navigation={siteContent.navigation}
              />
            </motion.div>
          )}

          {currentScreen === 'ensayos' && (
            <motion.div
              key="screen-ensayos"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <EssaysSection
                essays={siteContent.essays}
                onNavigate={navigateTo}
                onOpenIndexDrawer={() => setIsIndexDrawerOpen(true)}
                navigation={siteContent.navigation}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Colofón técnico brutalista con navegación directa */}
      <Footer
        footer={siteContent.footer}
        navigation={siteContent.navigation}
        meta={siteContent.meta}
        onNavigate={navigateTo}
      />
    </div>
  );
}
