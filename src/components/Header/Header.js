import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          <img
            src="/dogwelfarewatch_logo_256.png"
            alt="Dog Welfare Watch Logo"
            className="logo-image"
          />
          <span>Dog Welfare Watch</span>
        </Link>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><button onClick={() => scrollToSection('mission')} className="nav-link">Mission</button></li>
          <li><button onClick={() => scrollToSection('focus')} className="nav-link">Focus Areas</button></li>
          <li><button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button></li>
          <li><button onClick={() => scrollToSection('blog')} className="nav-link">Blog</button></li>
          <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>

        <div
          className="menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
