import React from 'react';
import './Mission.css';

const Mission = () => {
  return (
    <section id="mission" className="mission">
      <div className="section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-subtitle">We advocate for humane standards and responsible policies that balance public safety with compassionate animal treatment, holding institutions accountable through research-driven advocacy.</p>
        
        <div className="mission-content">
          <div className="mission-text">
            <h3>Evidence-Based Advocacy</h3>
            <p>Dog Welfare Watch conducts thorough research to guide policy decisions and advocate for responsible practices in animal welfare. We hold councils, shelters, and governments accountable through systematic monitoring, data analysis, and evidence-based recommendations.</p>
            <p>Our approach recognizes that effective animal welfare policies must balance public safety concerns with compassionate treatment. Through transparency initiatives and policy research, we work to ensure that institutions operate with accountability while serving both community safety and animal welfare goals.</p>
            
            <div className="mission-stats">
              <div className="stat">
                <span className="stat-number">100+</span>
                <div className="stat-label">Reports Reviewed</div>
              </div>
              <div className="stat">
                <span className="stat-number">25+</span>
                <div className="stat-label">Councils Monitored</div>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <div className="stat-label">Cases Documented</div>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <div className="stat-label">Advocacy Support</div>
              </div>
            </div>
          </div>
          <div className="mission-image">
            <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=500&fit=crop" alt="Dogs in shelter receiving care" />
            <div className="mission-overlay">🐾</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;