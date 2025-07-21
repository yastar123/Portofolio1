import React, { useState } from 'react';
import { Code, Palette, Smartphone, Cloud, Zap, Shield, CheckCircle, Star } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [visibleServiceCount, setVisibleServiceCount] = useState(3);

  const services = [
    {
      icon: Code,
      title: 'Pengembangan Web Full-Stack',
      description: 'Pengembangan aplikasi web end-to-end menggunakan teknologi modern seperti React, Node.js, dan layanan cloud.',
      features: ['Aplikasi Web Kustom', 'Pengembangan API', 'Desain Database', 'Optimasi Performa'],
      color: 'cyan'
    },
    {
      icon: Palette,
      title: 'Desain UI/UX',
      description: 'Menciptakan antarmuka pengguna yang intuitif dan indah untuk pengalaman pengguna yang luar biasa.',
      features: ['Riset Pengguna', 'Wireframing & Prototyping', 'Desain Visual', 'Uji Kegunaan'],
      color: 'green'
    },
    {
      icon: Smartphone,
      title: 'Pengembangan Mobile',
      description: 'Aplikasi mobile native dan lintas platform untuk iOS dan Android menggunakan React Native.',
      features: ['Aplikasi Lintas Platform', 'Performa Native', 'Deploy ke App Store', 'Pemeliharaan & Update'],
      color: 'purple'
    },
    {
      icon: Cloud,
      title: 'Arsitektur Cloud',
      description: 'Solusi cloud yang skalabel dan setup infrastruktur untuk aplikasi yang andal dan efisien.',
      features: ['Setup AWS/Azure', 'DevOps & CI/CD', 'Auto-scaling', 'Monitoring & Analitik'],
      color: 'yellow'
    },
    {
      icon: Zap,
      title: 'Optimasi Performa',
      description: 'Meningkatkan kecepatan aplikasi dan pengalaman pengguna dengan teknik optimasi lanjutan.',
      features: ['Optimasi Kode', 'Tuning Database', 'Strategi Caching', 'Peningkatan SEO'],
      color: 'cyan'
    },
    {
      icon: Shield,
      title: 'Keamanan & Pemeliharaan',
      description: 'Audit keamanan menyeluruh dan pemeliharaan rutin untuk menjaga aplikasi tetap aman dan up-to-date.',
      features: ['Audit Keamanan', 'Update Berkala', 'Solusi Backup', 'Monitoring 24/7'],
      color: 'green'
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Pemula',
      price: 2500,
      period: 'proyek',
      description: 'Cocok untuk bisnis kecil dan startup',
      features: [
        'Single Page Application',
        'Desain Responsif',
        'Optimasi SEO Dasar',
        'Dukungan 30 Hari',
        'Source Code Disertakan'
      ],
      color: 'gray',
      popular: false
    },
    {
      id: 'professional',
      name: 'Profesional',
      price: 5000,
      period: 'proyek',
      description: 'Ideal untuk bisnis yang sedang berkembang',
      features: [
        'Multi-Page Application',
        'Sistem Desain Kustom',
        'Animasi Lanjutan',
        'Integrasi Database',
        'Pengembangan API',
        'Dukungan 90 Hari',
        'Optimasi Performa'
      ],
      color: 'cyan',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 10000,
      period: 'proyek',
      description: 'Untuk aplikasi skala besar',
      features: [
        'Platform Web Kompleks',
        'Arsitektur Microservices',
        'Infrastruktur Cloud',
        'Keamanan Lanjutan',
        'Load Balancing',
        'DevOps & CI/CD',
        'Dukungan 6 Bulan',
        'Pelatihan & Dokumentasi'
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
            Layanan
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Solusi digital lengkap untuk mewujudkan ide Anda
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
              Tampilkan Lebih Banyak
            </button>
          </div>
        )}

        {/* FAQ Section */}
        <div className="text-center">
          <div className="bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Siap Memulai Proyek Anda?</h3>
            <p className="text-gray-300 text-lg mb-8">
              Mari diskusikan kebutuhan Anda dan ciptakan sesuatu yang luar biasa bersama. Dapatkan konsultasi dan estimasi proyek gratis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl font-semibold text-black hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30">
                Jadwalkan Konsultasi
              </button>
              <button className="px-8 py-4 bg-black/50 border border-gray-700/50 rounded-xl font-semibold text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300">
                Lihat Portofolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;