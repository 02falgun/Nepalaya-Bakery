import React, { useState } from 'react';
import { Clock3, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Section } from '../components/Section';
import { contactContent } from '../constants/siteContent';

const contactItems = [
  { icon: Phone, title: 'Phone', value: contactContent.phone, href: contactContent.phoneHref },
  { icon: Mail, title: 'Email', value: contactContent.email, href: contactContent.emailHref },
  { icon: MapPin, title: 'Location', value: contactContent.location, href: contactContent.mapHref },
  { icon: Clock3, title: 'Hours', value: contactContent.hours },
];

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in your name, email, and message.' });
      return;
    }

    setStatus({ type: 'success', message: 'Thanks. Your enquiry is ready. We will reply by phone or WhatsApp shortly.' });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Section id="contact" eyebrow="Contact and orders" title={contactContent.title} description={contactContent.description}>
      <div className="contact-grid">
        <div className="contact-list info-card">
          <h3 className="contact-title">Contact information</h3>
          <p>Call or WhatsApp for the fastest response. We reply quickly during shop hours.</p>

          <div className="menu-detail-list">
            <div className="menu-detail">
              <strong>Phone:</strong> <a href={contactContent.phoneHref} className="highlight-link">{contactContent.phone}</a>
            </div>
            <div className="menu-detail">
              <strong>WhatsApp:</strong> <a href={contactContent.whatsappHref} target="_blank" rel="noreferrer" className="highlight-link">Message on WhatsApp</a>
            </div>
          </div>

          <div className="contact-items">
            {contactItems.map((item) => (
              <div key={item.title} className="contact-item">
                <div className="contact-icon">
                  <item.icon size={18} />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="menu-cta menu-cta-left">
            <Button variant="primary" onClick={() => window.open(contactContent.whatsappHref, '_blank', 'noreferrer')}>
              <MessageCircle size={18} />
              WhatsApp Order
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
              Browse Fresh Items
            </Button>
          </div>

          <div className="map-frame">
            <iframe
              title="Nepalaya Bakery location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27689446931!2d85.28493!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1234567890"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="contact-form form-card">
          <h3>Send a message</h3>
          <p>Tell us the item, date, and size. We will get back to you by phone or WhatsApp.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Your name *</label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" autoComplete="name" />
              </div>

              <div className="field">
                <label htmlFor="phone">Phone *</label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+977 ..." autoComplete="tel" />
              </div>
            </div>

            <div className="field" style={{ marginTop: '1rem' }}>
              <label htmlFor="message">Message *</label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us the cake size, date, and flavor you need." rows={5} />
            </div>

            <Button type="submit" variant="primary" size="lg" style={{ width: '100%', marginTop: '1rem' }}>
              <Send size={18} />
              Place Your Order
            </Button>

            {status && (
              <div className={`form-status ${status.type}`} role="status" aria-live="polite">
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}