import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProductsSection } from './sections/ProductsSection';
import { ContactSection } from './sections/ContactSection';
import { FooterSection } from './sections/FooterSection';
import { StickyWhatsAppButton } from './components/StickyWhatsAppButton';

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <FooterSection />
      <StickyWhatsAppButton />
    </div>
  );
}