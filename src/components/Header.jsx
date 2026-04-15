import React, { useEffect, useState } from 'react';
import { Menu, X, Croissant } from 'lucide-react';
import { Button } from './ui/button';
import { navItems } from '../constants/siteContent';

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileOpen(false);
  };

  return (
    <header className={`topbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container">
        <div className="topbar-inner">
          <button
            type="button"
            className="brand"
            onClick={() => handleNavigate('home')}
            aria-label="Go to top"
          >
            <span className="brand-mark">
              <Croissant size={18} />
            </span>
            <span className="brand-name">
              <strong>Nepalaya Bakery</strong>
              <span>Fresh cakes and pastries in Kathmandu</span>
            </span>
          </button>

          <nav className="nav" aria-label="Primary">
            {navItems.map((item) => (
              <button key={item.label} type="button" onClick={() => handleNavigate(item.target)}>
                {item.label}
              </button>
            ))}
            <Button onClick={() => handleNavigate('contact')} variant="primary">
              Order a Tray
            </Button>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsMobileOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMobileOpen && (
          <div className="mobile-drawer">
            <div className="mobile-panel glass">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="mobile-link"
                  onClick={() => handleNavigate(item.target)}
                >
                  {item.label}
                </button>
              ))}
              <Button onClick={() => handleNavigate('contact')} variant="primary">
                Order a Tray
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}