import React, { useState } from 'react';
import { Code, Palette, Smartphone, Cloud, Zap, Shield, CheckCircle, Star } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [visibleServiceCount, setVisibleServiceCount] = useState(3);

  const services = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using modern technologies like React, Node.js, and cloud services.',
      features: ['Custom Web Applications', 'API Development', 'Database Design', 'Performance Optimization'],
      color: 'cyan'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces that provide exceptional user experiences.',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
      color: 'green'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android using React Native.',
      features: ['Cross-Platform Apps', 'Native Performance', 'App Store Deployment', 'Maintenance & Updates'],
      color: 'purple'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions and infrastructure setup for reliable and efficient applications.',
      features: ['AWS/Azure Setup', 'DevOps & CI/CD', 'Auto-scaling', 'Monitoring & Analytics'],
      color: 'yellow'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your applications and improve user experience with advanced optimization techniques.',
      features: ['Code Optimization', 'Database Tuning', 'Caching Strategies', 'SEO Enhancement'],
      color: 'cyan'
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Comprehensive security audits and ongoing maintenance to keep your applications safe and updated.',
      features: ['Security Audits', 'Regular Updates', 'Backup Solutions', '24/7 Monitoring'],
      color: 'green'
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 2500,
      period: 'project',
      description: 'Perfect for small businesses and startups',
      features: [
        'Single Page Application',
        'Responsive Design',
        'Basic SEO Optimization',
        '30 Days Support',
        'Source Code Included'
      ],
      color: 'gray',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 5000,
      period: 'project',
      description: 'Ideal for growing businesses',
      features: [
        'Multi-Page Application',
        'Custom Design System',
        'Advanced Animations',
        'Database Integration',
        'API Development',
        '90 Days Support',
        'Performance Optimization'
      ],
      color: 'cyan',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 10000,
      period: 'project',
      description: 'For large-scale applications',
      features: [
        'Complex Web Platform',
        'Microservices Architecture',
        'Cloud Infrastructure',
        'Advanced Security',
        'Load Balancing',
        'DevOps & CI/CD',
        '6 Months Support',
        'Training & Documentation'
      ],
      color: 'green',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart',
      content: 'Alex delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and technical expertise is outstanding.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      position: 'Product Manager, InnovateCorp',
      content: 'Working with Alex was a game-changer for our product. The UI/UX design and development quality is top-notch.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Founder, DesignStudio',
      content: 'Alex transformed our vision into a beautiful, functional website. Highly recommended for any web development project.',
      rating: 5,
      avatar: '👩‍🎨'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'from-cyan-500 to-cyan-400 border-cyan-500/20 shadow-cyan-500/20 text-black',
      green: 'from-green-500 to-green-400 border-green-500/20 shadow-green-500/20 text-black',
      purple: 'from-purple-500 to-purple-400 border-purple-500/20 shadow-purple-500/20 text-black',
      yellow: 'from-yellow-500 to-yellow-400 border-yellow-500/20 shadow-yellow-500/20 text-black',
      gray: 'from-gray-600 to-gray-500 border-gray-500/20 shadow-gray-500/20 text-white'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  // Untuk fitur load more services
  const displayedServices = services.slice(0, visibleServiceCount);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-6">
            Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions to bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {displayedServices.map((service, index) => (
            <div
              key={index}
              className="group bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(service.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Load More Button for Services */}
        {visibleServiceCount < services.length && (
          <div className="flex justify-center mt-8 mb-20">
            <button
              onClick={() => setVisibleServiceCount((prev) => prev + 3)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl font-semibold text-black hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
            >
              Load More
            </button>
          </div>
        )}

        {/* FAQ Section */}
        <div className="text-center">
          <div className="bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h3>
            <p className="text-gray-300 text-lg mb-8">
              Let's discuss your requirements and create something amazing together.
              Get a free consultation and project estimate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl font-semibold text-black hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 bg-black/50 border border-gray-700/50 rounded-xl font-semibold text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;