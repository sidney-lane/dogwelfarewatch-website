import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section">
        <h2 className="section-title">About Our Team</h2>
        <p className="section-subtitle">Led by experienced advocates committed to transparent and humane animal welfare practices.</p>
        
        <div className="team-member">
          <div className="member-photo">SL</div>
          <h3>Sidney Lane</h3>
          <div className="role">Media & Transparency Desk</div>
          <p>Sidney leads our transparency initiatives and media engagement, working with councils, shelters, and government agencies to promote accountability in animal welfare practices. With extensive experience in advocacy and policy analysis, Sidney focuses on ensuring that public institutions operate with transparency and that animal welfare policies serve both community safety and humane treatment goals.</p>
          <p><strong>Contact:</strong> <a href="mailto:press@dogwelfarewatch.org" style={{ color: 'var(--primary-light)' }}>press@dogwelfarewatch.org</a></p>
        </div>
      </div>
    </section>
  );
};

export default About;