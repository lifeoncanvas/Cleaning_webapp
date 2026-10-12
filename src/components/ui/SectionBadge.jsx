import React from 'react';
import './SectionBadge.css';

export const SectionBadge = ({ text, className = '' }) => {
  return (
    <div className={`section-badge ${className}`}>
      {text}
    </div>
  );
};
