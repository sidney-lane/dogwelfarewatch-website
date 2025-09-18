import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Transparency & Accountability in Animal Welfare</h1>
        <p>Dog Welfare Watch advocates for humane standards and responsible policies that balance public safety with compassionate animal treatment. We hold councils, shelters, and governments accountable for their practices and perform research to guide policy decisions.</p>
        <div className="cta-buttons">
          <button onClick={() => scrollToSection('mission')} className="btn btn-primary">
            Our Mission
          </button>
          <Link to="/contact" className="btn btn-secondary">
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;