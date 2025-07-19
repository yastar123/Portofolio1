import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Services', href: '#services' },
        { label: 'Blog', href: '#blog' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Web Development', href: '#services' },
        { label: 'Mobile Apps', href: '#services' },
        { label: 'UI/UX Design', href: '#services' },
        { label: 'Consulting', href: '#services' },
        { label: 'Maintenance', href: '#services' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog Articles', href: '#blog' },
        { label: 'Case Studies', href: '#portfolio' },
        { label: 'Free Tools', href: '#' },
        { label: 'Templates', href: '#' },
        { label: 'Newsletter', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/edujuandapratama', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/edujuandapratama', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/edujuandapratama', label: 'Twitter' },
    { icon: Mail, href: 'mailto:edu@edujuandapratama.dev', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black/50 backdrop-blur-xl border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Edu Juanda Pratama
                </h3>
                <p className="text-gray-400 mt-2">Full-Stack Developer & Designer</p>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Passionate about creating digital experiences that blend functionality
                with stunning aesthetics. Let's build something amazing together.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-cyan-300 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-xl font-bold text-white mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-gray-700/50">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay in the Loop</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest updates on web development trends, tutorials, and project insights
              delivered directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none transition-colors duration-200"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl font-semibold text-black hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>&copy; {currentYear} Edu Juanda Pratama. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Made with</span>
              <Heart className="w-4 h-4 text-red-400 hidden md:inline" />
              <span className="hidden md:inline">in Bandar Lampung</span>
            </div>

            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300">
                Terms of Service
              </a>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="p-3 bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5 text-gray-300 group-hover:text-cyan-300 transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;