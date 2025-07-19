import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-black/20 backdrop-blur-xl border-b border-cyan-500/20'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              Edu Juanda Pratama
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === item.id
                    ? 'bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/20'
                    : 'text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a
                href="https://github.com/yastar123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <Github className="w-4 h-4 text-gray-300 hover:text-cyan-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/edu-juanda-pratama-861249297/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 text-gray-300 hover:text-cyan-300" />
              </a>
              <a
                href="https://wa.me/6285366195381"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-gray-300 hover:text-cyan-300" />
              </a>
            </div>

            <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg font-medium hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30">
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-cyan-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20">
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === item.id
                    ? 'bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/20'
                    : 'text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10'
                    }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-gray-700/50">
                <div className="flex items-center space-x-3 mb-4">
                  <a href="https://github.com/yastar123" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-900/50 border border-gray-700/50">
                    <Github className="w-5 h-5 text-gray-300" />
                  </a>
                  <a href="https://www.linkedin.com/in/edu-juanda-pratama-861249297/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-900/50 border border-gray-700/50">
                    <Linkedin className="w-5 h-5 text-gray-300" />
                  </a>
                  <a href="https://wa.me/6285366195381" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-900/50 border border-gray-700/50">
                    <Mail className="w-5 h-5 text-gray-300" />
                  </a>
                </div>

                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg font-medium">
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;