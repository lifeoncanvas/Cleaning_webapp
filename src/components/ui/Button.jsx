import React from 'react';
import './Button.css';
import { ArrowUpRight, ArrowRight } from './Icons';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'outline' | 'text' | 'link'
  href,
  onClick,
  icon = true,
  iconType = 'up-right', // 'up-right' | 'right' | 'none'
  className = '',
  type = 'button',
  ...props
}) => {
  const content = (
    <>
      <span>{children}</span>
      {icon && iconType === 'up-right' && <ArrowUpRight size={15} className="btn-icon" />}
      {icon && iconType === 'right' && <ArrowRight size={15} className="btn-icon" />}
    </>
  );

  const classes = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
};
