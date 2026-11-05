import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const target = getScreenFromHash();
      setCurrentScreen(target);
      setIsMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (screenId) => {
    const valid = VALID_SCREENS.includes(screenId) ? screenId : 'inicio';
    setCurrentScreen(valid);
    setIsMenuOpen(false);
    window.location.hash = valid === 'inicio' ? '#/' : `#/${valid}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      y: -6,
      transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#1D1E22] text-[#F4F4F0] selection:bg-[#800028] selection:text-[#F4F4F0]">
      {/* Cuadrícula arquitectónica continua de 1px */}
      <GridLines />

      {/* Navegación superior única y minimalista */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={navigateTo}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        navigation={siteContent.navigation}
      />

      {/* Menú desplegable fluido (IndexDrawer) */}
      <IndexDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentScreen={currentScreen}
        onNavigate={navigateTo}
        navigation={siteContent.navigation}
        meta={siteContent.meta}
      />

      {/* Contenedor principal de pantallas */}
      <main className="relative z-20 pt-[60px]">
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
              <Manifesto manifesto={siteContent.manifesto} />
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
              <ExhibitionsDirectory exhibitions={siteContent.exhibitions} />
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
              <InterviewsSection interviews={siteContent.interviews} />
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
              <EssaysSection essays={siteContent.essays} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Pie de página editorial */}
      <Footer
        footer={siteContent.footer}
        navigation={siteContent.navigation}
        meta={siteContent.meta}
        onNavigate={navigateTo}
      />
    </div>
  );
}
