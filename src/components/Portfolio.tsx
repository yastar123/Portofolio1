import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Search } from 'lucide-react';
import portofolio1 from '../image/portofolio1.png';
import portofolio2 from '../image/portofolio2.png';
import portofolio3 from '../image/portofolio3.png';
import portofolio4 from '../image/portofolio4.png';
import portofolio5 from '../image/portofolio5.png';
import portofolio6 from '../image/portofolio6.png';
import portofolio7 from '../image/portofolio7.png';
import portofolio8 from '../image/portofolio8.png';
import desain1 from '../image/desain1.png';
import desain2 from '../image/desain2.png';
import desain3 from '../image/desain3.png';
import desain4 from '../image/desain4.png';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(3);

  const projects = [
    {
      id: 1,
      title: 'company profile (PromptCreator)',
      description: 'Website company profile modern yang menampilkan informasi perusahaan, layanan, dan kontak secara profesional serta responsif.',
      image: portofolio1,
      category: 'web',
      technologies: ['NextJS', 'Tailwindcss', 'Typescript', 'Stripe'],
      liveUrl: 'https://prompt-creator-beige.vercel.app/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'PPLK ITERA 2024',
      description: 'Platform digital untuk kegiatan PPLK ITERA 2024, memudahkan peserta dan panitia dalam akses informasi, jadwal, serta interaksi daring.',
      image: portofolio2,
      category: 'web',
      technologies: ['Laravel', 'ReactJS', 'MySQL', 'Tailwindcss'],
      liveUrl: 'https://pplk-2024-fe-only.vercel.app/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Portofolio',
      description: 'Website portofolio pribadi untuk menampilkan karya, pengalaman, dan keahlian secara interaktif dan menarik.',
      image: portofolio3,
      category: 'mobile',
      technologies: ['ReactJS', 'Tailwindcss', 'Javascript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'AgroMonitoring',
      description: 'Aplikasi monitoring pertanian berbasis web untuk memantau kondisi lahan, cuaca, dan hasil panen secara real-time.',
      image: portofolio4,
      category: 'web',
      technologies: ['ExpressJS', 'Firebase', 'Tailwindcss'],
      liveUrl: 'https://agromonitoring.onrender.com/',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Company profile (WebCipta)',
      description: 'Website company profile modern yang menampilkan informasi perusahaan, layanan, dan kontak secara profesional serta responsif.',
      image: portofolio5,
      category: 'web',
      technologies: ['ReactJS', 'Tailwindcss'],
      liveUrl: 'https://web-cipta.vercel.app/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'PPLK ITERA 2025',
      description: 'Platform digital untuk kegiatan PPLK ITERA 2024, memudahkan peserta dan panitia dalam akses informasi, jadwal, serta interaksi daring.',
      image: portofolio6,
      category: 'mobile',
      technologies: ['Laravel', 'ReactJS', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 7,
      title: 'KomikKuy',
      description: 'Platform baca komik digital dengan koleksi komik terbaru, fitur bookmark, dan tampilan ramah pengguna.',
      image: portofolio7,
      category: 'web',
      technologies: ['ReactJS', 'Firebase', 'Tailwindcss'],
      liveUrl: 'https://www.komikkuy.my.id/',
      githubUrl: '#',
      featured: false
    },
    {
      id: 8,
      title: 'Moninoring Kualitas Udara (SiPoljar)',
      description: 'Aplikasi monitoring kualitas udara berbasis web untuk menampilkan data polusi dan kualitas udara secara real-time.',
      image: portofolio8,
      category: 'web',
      technologies: ['ExpressJS', 'Firebase', 'Tailwindcss'],
      liveUrl: 'https://monitoring-kualitas-udara.onrender.com/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 9,
      title: 'Desain PPLK ITERA 2025',
      description: 'Desain visual untuk branding dan publikasi kegiatan PPLK ITERA 2025, meliputi poster, feed, dan materi promosi digital.',
      image: desain1,
      category: 'design',
      technologies: ['Figma'],
      featured: true
    },
    {
      id: 10,
      title: 'Desain KM ITERA (Keluarga Mahasiswa) 2025',
      description: 'Desain grafis untuk website dan media sosial KM ITERA, mendukung identitas visual organisasi mahasiswa.',
      image: desain2,
      category: 'design',
      technologies: ['Figma'],
      featured: true
    },
    {
      id: 11,
      title: 'Desain PPLK ITERA 2024',
      description: 'Kumpulan desain digital untuk kebutuhan promosi dan dokumentasi acara PPLK ITERA 2024.',
      image: desain3,
      category: 'design',
      technologies: ['Figma'],
      featured: true
    },
    {
      id: 12,
      title: 'Desain Weekly Report (CandidateCollage)',
      description: 'Desain laporan mingguan untuk CandidateCollage, menampilkan data dan progres tim secara visual dan informatif.',
      image: desain4,
      category: 'design',
      technologies: ['Figma'],
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'web', label: 'Aplikasi Web' },
    { id: 'mobile', label: 'Aplikasi Mobile' },
    { id: 'design', label: 'Desain UI/UX' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  // Untuk fitur load more
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-6">
            Portofolio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Jelajahi proyek-proyek terbaru saya yang menunjukkan inovasi, kreativitas, dan keunggulan teknis
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
            <span>✨</span>
            <span>Proyek Unggulan</span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="group bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        className="flex items-center space-x-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 rounded-lg text-black font-medium transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Lihat Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium transition-colors duration-200"
                      >
                        <Github className="w-4 h-4" />
                        <span>Kode</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari proyek..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none transition-colors duration-200"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${activeFilter === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-black'
                      : 'bg-black/30 backdrop-blur-xl border border-gray-700/50 text-gray-300 hover:border-cyan-500/50'
                      }`}
                  >
                    {category.label === 'Semua Proyek' ? 'Semua Proyek' : category.label === 'Aplikasi Web' ? 'Aplikasi Web' : category.label === 'Aplikasi Mobile' ? 'Aplikasi Mobile' : category.label === 'Desain UI/UX' ? 'Desain UI/UX' : category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-cyan-500 hover:bg-cyan-400 rounded-lg text-black transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs">
                      +{project.technologies.length - 3} lainnya
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl font-semibold text-black hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
            >
              Tampilkan Lebih Banyak
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">Tidak ada proyek ditemukan</h3>
            <p className="text-gray-400">Coba ubah kata kunci pencarian atau filter kategori</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Tertarik dengan karya saya?</h3>
            <p className="text-gray-300 mb-6">
              Mari diskusikan proyek Anda berikutnya dan wujudkan ide Anda dengan teknologi dan desain terkini.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl font-semibold text-black hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30">
              Mulai Proyek
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;