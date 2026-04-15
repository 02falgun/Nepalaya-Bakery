import React from 'react';
import { MessageCircle } from 'lucide-react';
import { contactContent } from '../constants/siteContent';

export function StickyWhatsAppButton() {
  return (
    <a
      href={contactContent.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="sticky-wa"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle size={18} />
      <span>WhatsApp Order</span>
    </a>
  );
}