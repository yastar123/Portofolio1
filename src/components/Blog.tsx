import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, ArrowRight, Search } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Exploring the latest trends in web development including AI integration, WebAssembly, and the evolution of frontend frameworks.',
      content: 'Full article content would go here...',
      author: 'Alex Rivera',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'Technology',
      tags: ['Web Development', 'AI', 'Trends', 'Future'],
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable React Applications: Best Practices',
      excerpt: 'Learn how to structure and organize your React applications for maximum scalability and maintainability.',
      content: 'Full article content would go here...',
      author: 'Alex Rivera',
      date: '2024-12-10',
      readTime: '12 min read',
      category: 'Development',
      tags: ['React', 'JavaScript', 'Best Practices', 'Architecture'],
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 3,
      title: 'Design Systems: Creating Consistency at Scale',
      excerpt: 'How to build and maintain design systems that ensure consistency across large-scale applications and teams.',
      content: 'Full article content would go here...',
      author: 'Alex Rivera',
      date: '2024-12-05',
      readTime: '10 min read',
      category: 'Design',
      tags: ['Design Systems', 'UI/UX', 'Consistency', 'Teams'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 4,
      title: 'Performance Optimization: Making Your Website Lightning Fast',
      excerpt: 'Advanced techniques for optimizing web performance, from code splitting to image optimization and caching strategies.',
      content: 'Full article content would go here...',
      author: 'Alex Rivera',
      date: '2024-11-28',
      readTime: '15 min read',
      category: 'Performance',
      tags: ['Performance', 'Optimization', 'Speed', 'User Experience'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 5,
      title: 'The Art of Clean Code: Writing Maintainable JavaScript',
      excerpt: 'Principles and practices for writing clean, readable, and maintainable JavaScript code that your team will love.',
      content: 'Full article content would go here...',
      author: 'Alex Rivera',
      date: '2024-11-20',
      readTime: '9 min read',
      category: 'Development',
      tags: ['Clean Code', 'JavaScript', 'Best Practices', 'Maintainability'],
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 6,
      title: 'Mobile-First Design: Crafting Experiences for Every Device',
      excerpt: 'Strategies for designing and developing mobile-first applications that provide exceptional user experiences across all devices.',
      content: 'Full article content would go here...',
      author: 'Alex Rivera',
      date: '2024-11-15',
      readTime: '11 min read',
      category: 'Design',
      tags: ['Mobile-First', 'Responsive Design', 'UX', 'Accessibility'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts', count: blogPosts.length },
    { id: 'Technology', label: 'Technology', count: blogPosts.filter(post => post.category === 'Technology').length },
    { id: 'Development', label: 'Development', count: blogPosts.filter(post => post.category === 'Development').length },
    { id: 'Design', label: 'Design', count: blogPosts.filter(post => post.category === 'Design').length },
    { id: 'Performance', label: 'Performance', count: blogPosts.filter(post => post.category === 'Performance').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-6">
            Blog & Insights
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights on web development, design, and technology
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
              <span>⭐</span>
              <span>Featured Articles</span>
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <article
                  key={post.id}
                  className="group bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Search and Categories */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none transition-colors duration-200"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-black'
                      : 'bg-black/30 backdrop-blur-xl border border-gray-700/50 text-gray-300 hover:border-cyan-500/50'
                  }`}
                >
                  <span>{category.label}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-2 py-1 bg-black/60 backdrop-blur-sm text-cyan-300 rounded text-xs">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center space-x-1 px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs"
                    >
                      <Tag className="w-3 h-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs">
                      +{post.tags.length - 2} more
                    </span>
                  )}
                </div>
                
                <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm group">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-gray-400">Try adjusting your search or category filter</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="text-center">
          <div className="bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-12 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-8">
              Subscribe to my newsletter and get the latest articles and insights delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none transition-colors duration-200"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl font-semibold text-black hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;