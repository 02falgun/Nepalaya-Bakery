import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Section } from '../components/Section';
import { productFilters, products } from '../constants/siteContent';

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts =
    activeFilter === 'All' ? products : products.filter((product) => product.category === activeFilter);

  return (
    <Section
      id="products"
      eyebrow="Menu and gallery"
      title="Fresh items, clear prices, and a layout that is easy to scan."
      description="Browse cakes, pastries, and desserts with the most popular items highlighted first."
    >
      <div className="filter-bar" aria-label="Product filters">
        {productFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-pill ${activeFilter === filter ? 'is-active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredProducts.map((product) => (
          <Card key={product.title} className="product-card" onClick={() => setSelectedProduct(product)}>
            <div className="product-media">
              <img src={product.image} alt={product.title} loading="lazy" decoding="async" />
              <div className="product-overlay">
                <strong>{product.title}</strong>
                <p>{product.price}</p>
              </div>
            </div>
            <div className="product-body">
              <span className="tag">
                <Sparkles size={14} />
                {product.badge}
              </span>
              <span className="product-category">{product.category}</span>
              <div className="product-meta">
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
                <div className="price">{product.price}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="menu-cta">
        <p className="menu-note">Same-day pickup available for popular items. Custom cakes need a little notice.</p>
        <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Place Your Order
        </Button>
      </div>

      {selectedProduct && (
        <div className="modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={selectedProduct.title}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-body">
              <div className="modal-image" style={{ backgroundImage: `url(${selectedProduct.image})` }} />
              <div className="modal-copy">
                <Button
                  className="modal-close"
                  variant="secondary"
                  onClick={() => setSelectedProduct(null)}
                  aria-label="Close product preview"
                >
                  <X size={16} />
                </Button>
                <span className="tag">
                  <ImageIcon size={14} />
                  Product preview
                </span>
                <h3>{selectedProduct.title}</h3>
                <p>{selectedProduct.description}</p>
                <div className="menu-detail-list">
                  <div className="menu-detail"><strong>Price:</strong> {selectedProduct.price}</div>
                  <div className="menu-detail"><strong>Best use:</strong> Birthday tray, custom cake order, or dessert plate.</div>
                  <div className="menu-detail"><strong>Style:</strong> Fresh shop display, photographed in-house.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}