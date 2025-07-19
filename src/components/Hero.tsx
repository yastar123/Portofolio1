import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Palette, Zap, ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    'Full-Stack Developer',
    'UI/UX Designer',
    'Digital Innovator',
    'Problem Solver'
  ];

  useEffect(() => {
    let currentText = '';
    let isDeleting = false;
    let index = 0;

    const type = () => {
      const current = phrases[currentPhrase];
      
      if (isDeleting) {
        currentText = current.substring(0, currentText.length - 1);
      } else {
        currentText = current.substring(0, currentText.length + 1);
      }
      
      setDisplayText(currentText);
      
      let delta = 100;
      
      if (isDeleting) {
        delta /= 2;
      }
      
      if (!isDeleting && currentText === current) {
        delta = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        delta = 500;
      }
      
      setTimeout(type, delta);
    };

    const timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, [currentPhrase]);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-16">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-10 w-48 h-48 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Main Content */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6">
            <span className="block text-white mb-2">Hey, I'm</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
              Alex Rivera
            </span>
          </h1>
          
          <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300 mb-8 h-12">
            <span className="text-cyan-400">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate developer with 5+ years creating digital experiences that blend functionality 
            with stunning aesthetics. Specialized in React, Node.js, and modern web technologies.
          </p>
        </div>

        {/* Skill Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="group">
            <div className="bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Code className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
              <p className="text-gray-400">React, Node.js, TypeScript, Next.js</p>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-black/30 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
              <p className="text-gray-400">UI/UX, Figma, Adobe XD, Prototyping</p>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-black/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-400 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400">AI Integration, Cloud Architecture</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={() => scrollToSection('experience')}
            className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl font-semibold hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-105"
          >
            <span>View Experience</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="flex items-center space-x-2 px-8 py-4 bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-xl font-semibold text-white hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
          >
            <span>Get In Touch</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-500">Scroll to explore</p>
          <div 
            className="animate-bounce cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="w-6 h-6 text-cyan-400" />
          </div>
        </div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 right-10 w-20 h-20 border border-cyan-500/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 border border-green-500/30 rotate-12 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;