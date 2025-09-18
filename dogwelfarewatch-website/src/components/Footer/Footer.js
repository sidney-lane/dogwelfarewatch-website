import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Dog Welfare Watch</h4>
          <p>We advocate for humane standards and responsible policies that balance public safety with compassionate animal treatment.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Information</h4>
          <p><strong>Sidney Lane</strong></p>
          <p>Media & Transparency Desk</p>
          <a href="mailto:press@dogwelfarewatch.org">press@dogwelfarewatch.org</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Dog Welfare Watch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;