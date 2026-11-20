import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-ink/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="font-serif text-lg md:text-xl font-medium text-white hover:text-accent transition-colors">
            Tharika Vikas Srinivasa
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium tracking-wide text-neutral-400 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <a
              href="Tharika_Vikas_Srinivasa_Resume.pdf"
              download
              className="text-sm font-medium tracking-wide text-accent hover:text-accent-soft transition-colors"
            >
              Résumé
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-ink/95 backdrop-blur-md">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 text-base font-medium rounded text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="Tharika_Vikas_Srinivasa_Resume.pdf"
              download
              className="block py-3 px-4 text-base font-medium rounded text-accent hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Résumé
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
