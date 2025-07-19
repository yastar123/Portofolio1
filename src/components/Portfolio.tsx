import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Search } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(3);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform with advanced features including AI-powered recommendations, real-time analytics, and seamless payment integration.',
      image: 'https://images.pexels.com/photos/7414282/pexels-photo-7414282.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'AI-Powered Dashboard',
      description: 'Intelligent analytics dashboard with machine learning insights, predictive modeling, and real-time data visualization.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['Next.js', 'Python', 'TensorFlow', 'D3.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management.',
      image: 'https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Biometrics'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      description: 'Comprehensive real estate platform with virtual tours, mortgage calculators, and advanced property search capabilities.',
      image: 'https://images.pexels.com/photos/7578927/pexels-photo-7578927.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['Vue.js', 'Laravel', 'MySQL', '360° Views'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'Advanced social media analytics tool with sentiment analysis, engagement tracking, and competitor insights.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['React', 'D3.js', 'APIs', 'ML'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Cryptocurrency Tracker',
      description: 'Real-time cryptocurrency tracking app with portfolio management, price alerts, and market analysis tools.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mobile',
      technologies: ['Angular', 'WebSocket', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 7,
      title: 'Restaurant Management',
      description: 'Complete restaurant management system with inventory tracking, order management, and customer analytics.',
      image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['MERN Stack', 'POS Integration', 'Analytics'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 8,
      title: 'Educational Platform',
      description: 'Interactive learning platform with video streaming, progress tracking, and collaborative tools for online education.',
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['Next.js', 'Prisma', 'Video.js', 'WebRTC'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' }
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
            Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Explore my latest projects showcasing innovation, creativity, and technical excellence
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
            <span>✨</span>
            <span>Featured Projects</span>
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
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium transition-colors duration-200"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
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
                placeholder="Search projects..."
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
                    {category.label}
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
                      +{project.technologies.length - 3} more
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
              Load More
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Like what you see?</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss your next project and bring your ideas to life with cutting-edge technology and design.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl font-semibold text-black hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;