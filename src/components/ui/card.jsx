import React from 'react';

export function Card({ className = '', children, ...props }) {
  return (
    <article className={`product-card ${className}`.trim()} {...props}>
      {children}
    </article>
  );
}