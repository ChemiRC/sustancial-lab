import React from 'react';
import { Footer } from './components/layout/Footer';
import { GridLines } from './components/layout/GridLines';
import { Navbar } from './components/layout/Navbar';
import { siteContent } from './data/siteContent';
import { EditorialTeaser } from './sections/EditorialTeaser';
import { ExhibitionsDirectory } from './sections/ExhibitionsDirectory';
import { Hero } from './sections/Hero';
import { Manifesto } from './sections/Manifesto';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#1D1E22] text-[#F4F4F0] selection:bg-[#800028] selection:text-[#F4F4F0]">
      {/* Cuadrícula arquitectónica continua de 1px */}
      <GridLines />

      {/* Directorio superior fijo con estética de tabla técnica */}
      <Navbar navigation={siteContent.navigation} meta={siteContent.meta} />

      {/* Secciones modulares de la Fase 1 */}
      <main className="relative z-20">
        <Hero hero={siteContent.hero} meta={siteContent.meta} />
        <Manifesto manifesto={siteContent.manifesto} />
        <ExhibitionsDirectory exhibitions={siteContent.exhibitions} />
        <EditorialTeaser editorial={siteContent.editorial} />
      </main>

      {/* Colofón técnico brutalista */}
      <Footer
        footer={siteContent.footer}
        navigation={siteContent.navigation}
        meta={siteContent.meta}
      />
    </div>
  );
}
