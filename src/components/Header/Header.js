import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = '/#' + sectionId; // fallback if not on homepage
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(''); // ✅ reset when leaving homepage
      return;
    }

    const handleScroll = () => {
      const sections = ['mission', 'focus', 'gallery', 'blog', 'about'];
      let current = 'home';

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) current = id;
        }
      }

      setActiveSection((prev) => (prev !== current ? current : prev));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src="/dogwelfarewatch_logo_256.png" alt="Logo" className="logo-image" />
          <span>Dog Welfare Watch</span>
        </NavLink>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className={`nav-link ${location.pathname === '/' && activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('mission')}
              className={`nav-link ${location.pathname === '/' && activeSection === 'mission' ? 'active' : ''}`}
            >
              Mission
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('focus')}
              className={`nav-link ${location.pathname === '/' && activeSection === 'focus' ? 'active' : ''}`}
            >
              Focus Areas
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('gallery')}
              className={`nav-link ${location.pathname === '/' && activeSection === 'gallery' ? 'active' : ''}`}
            >
              Gallery
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('blog')}
              className={`nav-link ${location.pathname === '/' && activeSection === 'blog' ? 'active' : ''}`}
            >
              Blog
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className={`nav-link ${location.pathname === '/' && activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </button>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
