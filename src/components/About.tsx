import React, { useState } from 'react';
import { Calendar, MapPin, Award, Users, Coffee, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('bio');

  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Lead development of enterprise applications using React, Node.js, and cloud technologies. Mentor junior developers and architect scalable solutions.',
      color: 'cyan'
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      location: 'Remote',
      description: 'Built and maintained multiple web applications from concept to deployment. Collaborated with design teams to create intuitive user experiences.',
      color: 'green'
    },
    {
      title: 'Frontend Developer',
      company: 'DesignStudio',
      period: '2019 - 2020',
      location: 'New York, NY',
      description: 'Specialized in creating responsive, accessible web interfaces. Worked closely with UX designers to implement pixel-perfect designs.',
      color: 'purple'
    },
    {
      title: 'Junior Developer',
      company: 'WebAgency',
      period: '2018 - 2019',
      location: 'Boston, MA',
      description: 'Started career building client websites and learning modern web development practices. Gained experience in multiple programming languages.',
      color: 'yellow'
    }
  ];

  const skills = [
    { name: 'React', level: 95, color: 'cyan' },
    { name: 'Node.js', level: 90, color: 'green' },
    { name: 'TypeScript', level: 88, color: 'purple' },
    { name: 'Next.js', level: 85, color: 'yellow' },
    { name: 'Vue.js', level: 90, color: 'cyan' },
    { name: 'Python', level: 85, color: 'green' },
    { name: 'Figma', level: 95, color: 'purple' },
    { name: 'MongoDB', level: 90, color: 'yellow' }
  ];

  const stats = [
    { label: 'Projects Completed', value: 150, icon: Rocket, color: 'cyan' },
    { label: 'Happy Clients', value: 80, icon: Users, color: 'green' },
    { label: 'Awards Won', value: 12, icon: Award, color: 'purple' },
    { label: 'Coffee Consumed', value: 9999, icon: Coffee, color: 'yellow' }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'from-cyan-500 to-cyan-400 border-cyan-500/20 shadow-cyan-500/20',
      green: 'from-green-500 to-green-400 border-green-500/20 shadow-green-500/20',
      purple: 'from-purple-500 to-purple-400 border-purple-500/20 shadow-purple-500/20',
      yellow: 'from-yellow-500 to-yellow-400 border-yellow-500/20 shadow-yellow-500/20'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(stat.color)} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                <stat.icon className="w-6 h-6 text-black" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}+</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['bio', 'experience', 'skills'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-black shadow-lg shadow-cyan-500/20'
                  : 'bg-black/30 backdrop-blur-xl border border-gray-700/50 text-gray-300 hover:border-cyan-500/50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative">
          {activeTab === 'bio' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">Hello, I'm Alex Rivera</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate full-stack developer with over 5 years of experience creating 
                  digital solutions that combine beautiful design with powerful functionality. 
                  My journey in tech started with a curiosity about how things work and evolved 
                  into a career dedicated to building applications that make people's lives easier.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or enjoying a good cup of coffee while brainstorming the 
                  next big idea. I believe in continuous learning and staying ahead of the curve 
                  in this ever-evolving tech landscape.
                </p>
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Available for projects</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-2xl flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <div className={`inline-block px-3 py-1 bg-gradient-to-r ${getColorClasses(exp.color)} rounded-lg text-black text-sm font-medium mb-2`}>
                        {exp.period}
                      </div>
                      <div className="text-gray-400 flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="lg:col-span-3">
                      <h4 className="text-2xl font-bold text-white mb-2">{exp.title}</h4>
                      <h5 className="text-xl text-cyan-300 mb-4">{exp.company}</h5>
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className={`h-2 bg-gradient-to-r ${getColorClasses(skill.color)} rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Expertise Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Frontend Development',
                    'Backend Development',
                    'UI/UX Design',
                    'Database Design',
                    'Cloud Architecture',
                    'DevOps',
                    'Mobile Development',
                    'API Development'
                  ].map((area, index) => (
                    <div
                      key={index}
                      className="bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 text-center hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                    >
                      <span className="text-gray-300">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;