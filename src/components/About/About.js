import React from 'react';
import './About.css';
import { aboutTeam } from '../../data/about';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section">
        <h2 className="section-title">About Our Team</h2>
        <p className="section-subtitle">
          Led by experienced advocates committed to transparent and humane animal welfare practices.
        </p>

        <div className="team-grid">
          {aboutTeam.map((member, idx) => (
            <div key={idx} className="team-member">
              <div className="member-photo">{member.initials}</div>
              <h3>{member.name}</h3>
              <div className="role">{member.role}</div>
              <div className="description">{member.description}</div>
              {member.contact && (
                <div className="contact">
                  <strong>Contact: </strong>
                  <a href={`mailto:${member.contact}`} style={{ color: 'var(--primary-light)' }}>
                    {member.contact}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
