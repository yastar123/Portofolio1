import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Twitter, Calendar, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        timeline: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex@alexrivera.dev',
      link: 'mailto:alex@alexrivera.dev'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/alexrivera',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/alexrivera',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: 'https://twitter.com/alexrivera',
      color: 'hover:text-blue-400'
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book a 30-minute consultation to discuss your project',
      action: 'Schedule Now',
      color: 'cyan'
    },
    {
      icon: MessageCircle,
      title: 'Quick Chat',
      description: 'Send me a message for quick questions or feedback',
      action: 'Start Chat',
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Project Inquiry',
      description: 'Get a detailed quote for your development project',
      action: 'Get Quote',
      color: 'purple'
    }
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

  const timelineOptions = [
    'ASAP (Rush)',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3+ months'
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="group bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-${action.color}-500 to-${action.color}-400 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
              <p className="text-gray-300 mb-4">{action.description}</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200">
                {action.action} →
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none transition-colors duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none transition-colors duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none transition-colors duration-200"
                    placeholder="Project inquiry / Collaboration / Question"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700/50 rounded-xl text-white focus:border-cyan-500/50 focus:outline-none transition-colors duration-200"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700/50 rounded-xl text-white focus:border-cyan-500/50 focus:outline-none transition-colors duration-200"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project, requirements, and any specific details..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-green-500 text-black'
                      : 'bg-gradient-to-r from-cyan-500 to-green-500 text-black hover:from-cyan-400 hover:to-green-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30'
                  } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-black/30 border border-gray-700/30 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-6 rounded-xl bg-black/30 border border-gray-700/30 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group ${social.color}`}
                  >
                    <social.icon className="w-8 h-8 text-gray-300 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm text-gray-400 mt-2">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Availability</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Current Status</span>
                  <span className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium">Available</span>
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Response Time</span>
                  <span className="text-cyan-400">Within 24 hours</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Time Zone</span>
                  <span className="text-cyan-400">PST (UTC-8)</span>
                </div>
                
                <div className="pt-4 border-t border-gray-700/50">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    I'm currently accepting new projects and collaborations. 
                    Looking forward to hearing about your ideas and how we can work together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;