import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src="/dogwelfarewatch_logo_256.png"
        alt="Dog Welfare Watch Logo"
        className="footer-logo"
      />
      <p>📧 <a href="mailto:contact@dogwelfarewatch.com">contact@dogwelfarewatch.com</a></p>
      <p>📍 Melbourne, AU</p>
      <p className="copyright">
        © {new Date().getFullYear()} Dog Welfare Watch. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
