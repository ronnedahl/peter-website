// src/components/Footer.js
import React from 'react';
import './footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Peter Andersson</p>
      <div className="footer__social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {/* Add more social links as needed */}
      </div>
    </footer>
  );
}

export default Footer;
