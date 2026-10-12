import React from 'react';
import './Sectors.css';
import { SectionBadge } from '../ui/SectionBadge';
import { sectorsBriefData } from '../../data/briefData';
import { 
  HomeIcon, 
  BuildingIcon, 
  ClipboardIcon, 
  LayersIcon, 
  SparklesIcon, 
  ArrowUpRight 
} from '../ui/Icons';

export const Sectors = () => {
  const getSectorIcon = (name) => {
    switch (name) {
      case 'Homes':
        return <HomeIcon size={24} />;
      case 'Offices':
        return <BuildingIcon size={24} />;
      case 'Care & Supported Living':
        return <ClipboardIcon size={24} />;
      case 'Commercial Premises':
        return <BuildingIcon size={24} />;
      case 'Property Management':
        return <LayersIcon size={24} />;
      default:
        return <SparklesIcon size={24} />;
    }
  };

  return (
    <section id="sectors" className="sectors-section">
      <div className="container">
        {/* Header */}
        <div className="sectors-header">
          <SectionBadge text="SECTORS WE SERVE" />
          <h2 className="sectors-heading">Cleaning Solutions for Different Environments</h2>
          <p className="sectors-sub-heading">
            Every environment has its own operational priorities, footfall patterns and regulatory demands. We provide specialized, sector-specific cleaning capabilities.
          </p>
        </div>

        {/* 8-Card Visual Grid */}
        <div className="sectors-brief-grid">
          {sectorsBriefData.map((sector, index) => (
            <div key={index} className="sector-brief-card">
              <div className="sector-brief-icon-wrap">
                {getSectorIcon(sector.name)}
              </div>
              <h3 className="sector-brief-name">{sector.name}</h3>
              <p className="sector-brief-desc">{sector.desc}</p>
              <a href="#quote" className="sector-brief-action">
                <span>Enquire</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
