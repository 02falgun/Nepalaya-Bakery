import React from 'react';

export function Section({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="container">
        {(eyebrow || title || description) && (
          <header className="section-heading">
            {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
            {title ? <h2 className="section-title">{title}</h2> : null}
            {description ? <p className="section-copy">{description}</p> : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}