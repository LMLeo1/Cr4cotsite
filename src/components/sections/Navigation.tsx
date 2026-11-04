import { useState, useEffect } from 'react';
import { navItems } from '../../data/site';
import { IconMenu, IconClose } from '../ui/Icons';
import { useScrollPosition } from '../../hooks';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollY = useScrollPosition();

  useEffect(() => {
    setScrolled(scrollY > 20);
  }, [scrollY]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong bg-bg/95 shadow-lg' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="container" aria-label="Navigation principale">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            className="font-display text-2xl md:text-3xl font-bold text-text text-gradient-primary"
            aria-label="Cr4cot - Accueil"
          >
            Cr4cot
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-text-muted hover:text-text transition-colors duration-200 rounded-lg hover:bg-bg-elevated"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:block btn btn-secondary"
            >
              Contact
            </a>

            <button
              className="md:hidden p-2 rounded-lg text-text-muted hover:text-text hover:bg-bg-elevated transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 visible pb-6' : 'max-h-0 opacity-0 invisible'
          }`}
          role="navigation"
          aria-label="Menu mobile"
        >
          <div className="flex flex-col gap-2 pt-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={handleLinkClick}
                className="px-4 py-3 text-base font-medium text-text-muted hover:text-text transition-colors duration-200 rounded-lg hover:bg-bg-elevated border border-border"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="btn btn-primary mt-2"
            >
              Me contacter
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}