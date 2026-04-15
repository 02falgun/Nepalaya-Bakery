import React from 'react';

export function Button({ variant = 'primary', size = 'md', className = '', children, style, ...props }) {
  const classes = ['btn', variant === 'secondary' ? 'btn-secondary' : 'btn-primary', className]
    .filter(Boolean)
    .join(' ');

  const inlineStyle =
    size === 'lg'
      ? { ...style, padding: '1.1rem 1.45rem' }
      : style;

  return (
    <button type={props.type || 'button'} className={classes} style={inlineStyle} {...props}>
      {children}
    </button>
  );
}