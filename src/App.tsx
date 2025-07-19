import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-zinc-900 text-white relative overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Header */}
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      {/* Main Content */}
      <main>
        <section id="home">
          <Hero scrollToSection={scrollToSection} />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;