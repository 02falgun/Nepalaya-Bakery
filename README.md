# Nepalaya Bakery Website

A production-ready React + Vite website for Nepalaya Bakery, built with real bakery photos and conversion-focused sections for menu browsing and WhatsApp ordering.

## Tech Stack

- React 19
- Vite 7
- lucide-react
- Plain CSS (componentized structure)

## Features

- Responsive hero, about, menu, contact, and footer sections
- Menu filtering by category (Cakes, Pastries, Desserts)
- Product preview modal
- Sticky WhatsApp order CTA
- Real local-business copy and product content

## Project Structure

```text
src/
  components/
    ui/
    Header.jsx
    Section.jsx
    StickyWhatsAppButton.jsx
  constants/
    siteContent.js
  sections/
    HeroSection.jsx
    AboutSection.jsx
    ProductsSection.jsx
    ContactSection.jsx
    FooterSection.jsx
  App.jsx
  main.jsx
  styles.css
public/
  bakery-images/
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Deployment

This project is ready for deployment on Vercel or Netlify.

- Build command: `npm run build`
- Output directory: `dist`

## Contact Channel

Primary conversion path is WhatsApp ordering from the sticky action button and contact section.
