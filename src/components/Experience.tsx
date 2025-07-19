import React, { useState } from 'react';
import { Calendar, MapPin, Building, Users, Award, TrendingUp, Code, Palette, Database, Cloud } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      id: 1,
      title: 'Web Developer (Kontrak)',
      company: 'Freelance - Work From Home (WFH)',
      location: 'Bandar Lampung',
      period: 'Januari – Sekarang 2024',
      duration: 'Saat ini',
      type: 'Kontrak',
      logo: '💻',
      description: 'Terampil dalam merancang dan mengembangkan situs web responsif menggunakan HTML, CSS, JavaScript, dan framework modern. Mahir mengubah desain Figma menjadi halaman web fungsional. Fokus pada kinerja, keamanan, dan pengalaman pengguna (UX) yang optimal.',
      achievements: [
        'Merancang dan mengembangkan website responsif dengan HTML, CSS, JavaScript, dan framework modern.',
        'Mengubah desain Figma menjadi halaman web fungsional.',
        'Fokus pada kinerja, keamanan, dan UX optimal.'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Figma'],
      projects: ['Landing Page', 'Company Profile', 'Portfolio Website'],
      teamSize: 'Individu',
      budget: '-',
      color: 'cyan'
    },
    {
      id: 2,
      title: 'Full Stack Developer (Magang)',
      company: 'PT.Winnicode Garuda Indonesia - WFH',
      location: 'Bandar Lampung',
      period: 'Agustus – September 2024',
      duration: '2 bulan',
      type: 'Magang',
      logo: '🌐',
      description: 'Spesialis dalam merancang dan membangun situs portal berita menggunakan Next.js dan PostgreSQL. Bertanggung jawab atas pengembangan front-end dan back-end untuk pengalaman pengguna yang mulus dan menarik.',
      achievements: [
        'Merancang dan membangun portal berita dengan Next.js dan PostgreSQL.',
        'Mengelola data dengan PostgreSQL, memastikan keamanan dan kecepatan pengambilan konten.',
        'Mengembangkan front-end dan back-end secara terintegrasi.'
      ],
      technologies: ['Next.js', 'PostgreSQL', 'ReactJS', 'Node.js'],
      projects: ['Portal Berita'],
      teamSize: '3 orang',
      budget: '-',
      color: 'green'
    },
    {
      id: 3,
      title: 'Asisten Praktikum Pengenalan Komputer dan Software 1',
      company: 'Institut Teknologi Sumatera',
      location: 'Bandar Lampung',
      period: 'Agustus – Desember 2024',
      duration: '5 bulan',
      type: 'Kontrak',
      logo: '🎓',
      description: 'Membantu dosen dalam proses pengajaran, rekap nilai, membuat soal kuis, dan mengajarkan keterampilan praktis Excel dan Word.',
      achievements: [
        'Membantu dosen dalam pengajaran dan evaluasi mahasiswa.',
        'Membuat soal kuis dan rekap nilai.',
        'Mengajarkan penggunaan Excel dan Word.'
      ],
      technologies: ['Excel', 'Word'],
      projects: ['Praktikum Komputer dan Software 1'],
      teamSize: '2 orang',
      budget: '-',
      color: 'purple'
    },
    {
      id: 4,
      title: 'Co-Head Division FrontEnd Developer (Magang)',
      company: 'Candidate College - WFH',
      location: 'Bandar Lampung',
      period: 'Oktober – Maret 2025',
      duration: '6 bulan',
      type: 'Magang',
      logo: '🧑‍💻',
      description: 'Memimpin divisi FrontEnd Developer, review dan optimisasi kode, debugging, pengujian unit hingga 90% coverage, dan pembagian tugas tim.',
      achievements: [
        'Review dan optimisasi kode serta debugging.',
        'Pengujian unit hingga 90% coverage.',
        'Mengarahkan tim dan pembagian tugas efektif.'
      ],
      technologies: ['ReactJS', 'JavaScript', 'Unit Testing'],
      projects: ['Sistem Informasi Kampus'],
      teamSize: '5 orang',
      budget: '-',
      color: 'yellow'
    },
    {
      id: 5,
      title: 'Asisten Praktikum Pengenalan Komputer dan Software 2',
      company: 'Institut Teknologi Sumatera',
      location: 'Bandar Lampung',
      period: 'Maret – Juni 2025',
      duration: '4 bulan',
      type: 'Kontrak',
      logo: '🎓',
      description: 'Mendampingi dosen mengajar dasar pemrograman C++ dan Flowgorithm, menyusun soal latihan, dan rekap nilai praktikum.',
      achievements: [
        'Mengajar dasar pemrograman C++ dan Flowgorithm.',
        'Menyusun soal latihan dan kuis.',
        'Rekap nilai praktikum mahasiswa.'
      ],
      technologies: ['C++', 'Flowgorithm'],
      projects: ['Praktikum Komputer dan Software 2'],
      teamSize: '2 orang',
      budget: '-',
      color: 'cyan'
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
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${activeExperience === index
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
                    className={`transition-all duration-500 ${activeExperience === index ? 'opacity-100 block' : 'opacity-0 hidden'
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