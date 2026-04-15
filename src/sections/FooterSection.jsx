import React from 'react';
import { Croissant, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { footerContent, navItems } from '../constants/siteContent';

const jumpTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand" style={{ color: 'inherit' }}>
              <span className="brand-mark">
                <Croissant size={18} />
              </span>
              <span className="brand-name">
                <strong>Nepalaya Bakery</strong>
                <span>Fresh cakes and pastries in Kathmandu</span>
              </span>
            </div>

            <p>{footerContent.summary}</p>

            <div className="footer-socials">
              <a className="social-link" href="#" aria-label="Facebook page">
                <Facebook size={18} />
              </a>
              <a className="social-link" href="#" aria-label="Instagram page">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Quick links</h4>
            <ul className="footer-list">
              {navItems.map((link) => (
                <li key={link.label}>
                  <button type="button" onClick={() => jumpTo(link.target)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Popular items</h4>
            <ul className="footer-list">
              {footerContent.popularItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-list">
              <li>
                <a href="tel:+9779851154435">
                  <Phone size={16} style={{ verticalAlign: '-3px', marginRight: '0.5rem' }} />
                  +977 985-1154435
                </a>
              </li>
              <li>
                <a href="mailto:cheeseworldnepalaya@gmail.com">
                  <Mail size={16} style={{ verticalAlign: '-3px', marginRight: '0.5rem' }} />
                  cheeseworldnepalaya@gmail.com
                </a>
              </li>
              <li>
                <span>
                  <MapPin size={16} style={{ verticalAlign: '-3px', marginRight: '0.5rem' }} />
                  Kathmandu, Nepal 44600
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Nepalaya Bakery. All rights reserved.</span>
          <span>{footerContent.copyright}</span>
        </div>
      </div>
    </footer>
  );
}