import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { heroContent } from '../constants/siteContent';

const jumpTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker">
              <Sparkles size={16} />
              {heroContent.kicker}
            </div>

            <h1 className="hero-title">
              {heroContent.title.map((line) => (
                <span key={line} className={line.includes('custom orders') ? 'accent' : ''}>
                  {line}
                </span>
              ))}
            </h1>

            <p className="hero-text">{heroContent.description}</p>

            <p className="hero-trust">Same-day pickup available for popular items.</p>

            <div className="hero-actions">
              <Button variant="primary" size="lg" onClick={() => jumpTo('products')}>
                {heroContent.primaryCta} <ArrowRight size={18} />
              </Button>
              <Button variant="secondary" size="lg" onClick={() => jumpTo('contact')}>
                {heroContent.secondaryCta}
              </Button>
            </div>

            <div className="hero-note-grid">
              {heroContent.highlights.map((item) => (
                <div key={item.title} className="mini-stat glass">
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-media">
                <img
                  src={heroContent.image}
                  alt={heroContent.imageAlt}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            <div className="hero-visual-panel glass">
              <h3>{heroContent.sidebarTitle}</h3>
              <p>{heroContent.sidebarCopy}</p>
              <div className="hero-visual-strip" aria-hidden="true">
                <div className="hero-thumb thumb-one" />
                <div className="hero-thumb thumb-two" />
                <div className="hero-thumb thumb-three" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}