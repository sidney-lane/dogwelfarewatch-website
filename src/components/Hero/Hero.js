import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Transparency & Accountability in Animal Welfare</h1>
        <p>
          Dog Welfare Watch advocates for humane standards and responsible
          policies that balance public safety with compassionate animal
          treatment. We hold councils, shelters, and governments accountable
          for their practices and perform research to guide policy decisions.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Our Mission</button>
          <button className="secondary-btn">Get Involved</button>
        </div>
      </div>
    </section>
  );
}
