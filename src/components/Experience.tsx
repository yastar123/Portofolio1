import React, { useState } from 'react';
import { Calendar, MapPin, Building, Users, Award, TrendingUp, Code, Palette, Database, Cloud } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      duration: '2+ years',
      type: 'Full-time',
      logo: '🏢',
      description: 'Leading development of enterprise-scale applications and mentoring junior developers. Architecting scalable solutions using modern technologies and best practices.',
      achievements: [
        'Led a team of 8 developers in building a microservices architecture that improved system performance by 40%',
        'Implemented CI/CD pipelines that reduced deployment time from 2 hours to 15 minutes',
        'Developed a real-time analytics dashboard serving 100K+ daily active users',
        'Mentored 5 junior developers, with 3 receiving promotions within 12 months',
        'Reduced technical debt by 60% through systematic refactoring and code reviews'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
      projects: [
        'Enterprise CRM System',
        'Real-time Analytics Platform',
        'Microservices Migration',
        'Developer Mentorship Program'
      ],
      teamSize: '8 developers',
      budget: '$2.5M annually',
      color: 'cyan'
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2020 - 2022',
      duration: '2 years',
      type: 'Full-time',
      logo: '🚀',
      description: 'Built and maintained multiple web applications from concept to deployment. Collaborated with cross-functional teams to deliver high-quality products.',
      achievements: [
        'Developed 3 full-stack applications that generated $500K+ in revenue',
        'Improved application load times by 65% through optimization techniques',
        'Built responsive designs that increased mobile user engagement by 80%',
        'Integrated payment systems processing $1M+ in transactions monthly',
        'Established testing practices that reduced bugs in production by 70%'
      ],
      technologies: ['React', 'Vue.js', 'Express.js', 'MongoDB', 'Stripe', 'Firebase', 'Tailwind CSS'],
      projects: [
        'E-commerce Platform',
        'SaaS Dashboard',
        'Mobile-first Web App',
        'Payment Integration System'
      ],
      teamSize: '5 developers',
      budget: '$800K annually',
      color: 'green'
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'DesignStudio Pro',
      location: 'New York, NY',
      period: '2019 - 2020',
      duration: '1 year',
      type: 'Full-time',
      logo: '🎨',
      description: 'Specialized in creating responsive, accessible web interfaces. Worked closely with UX designers to implement pixel-perfect designs.',
      achievements: [
        'Converted 15+ Figma designs into responsive React components',
        'Improved website accessibility scores from 60% to 95% WCAG compliance',
        'Reduced CSS bundle size by 45% through optimization and modular architecture',
        'Implemented design system used across 10+ client projects',
        'Achieved 98+ Google Lighthouse scores on all delivered projects'
      ],
      technologies: ['React', 'SCSS', 'JavaScript', 'Figma', 'Adobe XD', 'Webpack', 'Jest'],
      projects: [
        'Corporate Website Redesign',
        'Design System Implementation',
        'Accessibility Audit & Fixes',
        'Performance Optimization'
      ],
      teamSize: '3 developers',
      budget: '$400K annually',
      color: 'purple'
    },
    {
      id: 4,
      title: 'Junior Developer',
      company: 'WebAgency Digital',
      location: 'Boston, MA',
      period: '2018 - 2019',
      duration: '1 year',
      type: 'Full-time',
      logo: '💻',
      description: 'Started career building client websites and learning modern web development practices. Gained experience in multiple programming languages and frameworks.',
      achievements: [
        'Built 20+ client websites with 100% on-time delivery rate',
        'Learned 5 programming languages and 3 frameworks in first year',
        'Contributed to open-source projects with 500+ GitHub stars',
        'Received "Rookie of the Year" award for exceptional performance',
        'Maintained 99.9% uptime across all managed websites'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress', 'MySQL', 'Git'],
      projects: [
        'Client Portfolio Websites',
        'WordPress Custom Themes',
        'E-commerce Integrations',
        'SEO Optimization'
      ],
      teamSize: '2 developers',
      budget: '$200K annually',
      color: 'yellow'
    }
  ];

  const skills = [
    { name: 'Leadership', icon: Users, level: 90, color: 'cyan' },
    { name: 'Problem Solving', icon: Code, level: 95, color: 'green' },
    { name: 'System Design', icon: Database, level: 85, color: 'purple' },
    { name: 'Cloud Architecture', icon: Cloud, level: 88, color: 'yellow' },
    { name: 'UI/UX Design', icon: Palette, level: 92, color: 'cyan' },
    { name: 'Performance Optimization', icon: TrendingUp, level: 90, color: 'green' }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      badge: '☁️',
      color: 'cyan'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      badge: '🌐',
      color: 'green'
    },
    {
      name: 'React Advanced Certification',
      issuer: 'Meta',
      date: '2022',
      badge: '⚛️',
      color: 'purple'
    },
    {
      name: 'Certified Scrum Master',
      issuer: 'Scrum Alliance',
      date: '2021',
      badge: '🏃‍♂️',
      color: 'yellow'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'from-cyan-500 to-cyan-400 border-cyan-500/20 shadow-cyan-500/20 text-black',
      green: 'from-green-500 to-green-400 border-green-500/20 shadow-green-500/20 text-black',
      purple: 'from-purple-500 to-purple-400 border-purple-500/20 shadow-purple-500/20 text-black',
      yellow: 'from-yellow-500 to-yellow-400 border-yellow-500/20 shadow-yellow-500/20 text-black'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const getBorderColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'border-cyan-500/50 shadow-cyan-500/20',
      green: 'border-green-500/50 shadow-green-500/20',
      purple: 'border-purple-500/50 shadow-purple-500/20',
      yellow: 'border-yellow-500/50 shadow-yellow-500/20'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A journey of growth, innovation, and technical excellence across diverse projects and teams
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Timeline Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveExperience(index)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                      activeExperience === index
                        ? `bg-black/50 backdrop-blur-xl border ${getBorderColorClasses(exp.color)} shadow-lg`
                        : 'bg-black/20 backdrop-blur-xl border border-gray-700/50 hover:border-cyan-500/30'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-2xl">{exp.logo}</div>
                      <div>
                        <h3 className={`font-bold ${activeExperience === index ? 'text-white' : 'text-gray-300'}`}>
                          {exp.company}
                        </h3>
                        <p className="text-sm text-gray-400">{exp.period}</p>
                      </div>
                    </div>
                    <p className={`text-sm ${activeExperience === index ? 'text-gray-300' : 'text-gray-500'}`}>
                      {exp.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Details */}
            <div className="lg:col-span-3">
              <div className="bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`transition-all duration-500 ${
                      activeExperience === index ? 'opacity-100 block' : 'opacity-0 hidden'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                      <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                        <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(exp.color)} rounded-2xl flex items-center justify-center text-3xl`}>
                          {exp.logo}
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white">{exp.title}</h3>
                          <h4 className="text-xl text-cyan-300">{exp.company}</h4>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Building className="w-4 h-4" />
                          <span>{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">{exp.description}</p>

                    {/* Key Metrics */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-black/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6 text-center">
                        <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-white">{exp.teamSize}</p>
                        <p className="text-gray-400">Team Size</p>
                      </div>
                      <div className="bg-black/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6 text-center">
                        <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-white">{exp.budget}</p>
                        <p className="text-gray-400">Budget Managed</p>
                      </div>
                      <div className="bg-black/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6 text-center">
                        <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-white">{exp.duration}</p>
                        <p className="text-gray-400">Duration</p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-8">
                      <h4 className="text-2xl font-bold text-white mb-6">Key Achievements</h4>
                      <div className="space-y-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="flex items-start space-x-3 p-4 bg-black/20 backdrop-blur-xl border border-gray-700/30 rounded-xl hover:border-cyan-500/30 transition-all duration-300"
                          >
                            <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-black text-sm font-bold">✓</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-2xl font-bold text-white mb-6">Technologies Used</h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-xl text-gray-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-6">Notable Projects</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {exp.projects.map((project, projIndex) => (
                          <div
                            key={projIndex}
                            className="p-4 bg-black/20 backdrop-blur-xl border border-gray-700/30 rounded-xl hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                          >
                            <p className="text-white font-medium">{project}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Skills */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Professional Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(skill.color)} rounded-xl flex items-center justify-center`}>
                        <skill.icon className="w-6 h-6" />
                      </div>
                      <span className="text-white font-semibold text-lg">{skill.name}</span>
                    </div>
                    <span className="text-gray-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3">
                    <div
                      className={`h-3 bg-gradient-to-r ${getColorClasses(skill.color)} rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Certifications & Awards</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(cert.color)} rounded-2xl flex items-center justify-center text-2xl`}>
                      {cert.badge}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-1">{cert.name}</h4>
                      <p className="text-gray-300 mb-2">{cert.issuer}</p>
                      <p className="text-gray-400 text-sm">Earned in {cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 text-center">
              <h4 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h4>
              <p className="text-gray-300 mb-6">
                Let's discuss how my experience can help bring your project to life.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl font-semibold text-black hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;