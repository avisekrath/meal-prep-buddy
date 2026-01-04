import { navItems } from '../data/mealData';
import './Footer.css';

import logo from '../assets/logo.png';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/avisekrath/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    )
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/avisekrath',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/thearlabs',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    )
  }
];

export function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="MealPrepBuddy" className="footer-logo-image" />
            </div>
            <p className="footer-tagline">
              Your friendly meal prep companion for high-protein fitness goals.
            </p>
            <div className="footer-socials">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-nav">
            <h4>Quick Links</h4>
            <ul>
              {navItems.slice(0, 5).map(item => (
                <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-nav">
            <h4>More</h4>
            <ul>
              {navItems.slice(5).map(item => (
                <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Stay Connected</h4>
            <p>Follow along for more recipes, tips, and fitness content.</p>
            <a
              href="https://www.instagram.com/thearlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta"
            >
              Follow on Instagram
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Avisek Rath</p>
        </div>
      </div>
    </footer>
  );
}
