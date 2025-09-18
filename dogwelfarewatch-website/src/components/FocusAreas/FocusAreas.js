import React from 'react';
import { focusAreas } from '../../data/focusAreas';
import './FocusAreas.css';

const FocusCard = ({ area }) => (
  <div className="focus-card">
    <div className="focus-icon">{area.icon}</div>
    <h3>{area.title}</h3>
    <p>{area.description}</p>
    <ul>
      {area.points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const FocusAreas = () => {
  return (
    <section id="focus" className="focus-areas">
      <div className="section">
        <h2 className="section-title">Our Focus Areas</h2>
        <p className="section-subtitle">We work across multiple areas to ensure comprehensive animal welfare advocacy and transparency.</p>
        
        <div className="focus-areas-grid">
          {focusAreas.map((area, index) => (
            <FocusCard key={index} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;