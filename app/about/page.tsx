'use client';

import { motion } from 'framer-motion';
import { Code2, Users, Trophy, BookOpen, Zap, Target, Coffee, Rocket, Brain, Star } from 'lucide-react';

const skills = [
  { 
    category: 'Frontend Mastery', 
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    icon: Code2,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    category: 'Backend Excellence', 
    techs: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'REST APIs'],
    icon: Rocket,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    category: 'Tools & Workflow', 
    techs: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'],
    icon: Zap,
    color: 'from-orange-500 to-red-500'
  }
];

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: 'Leading development of modern web applications using React, Next.js, and Node.js. Mentoring junior developers and architecting scalable solutions.',
    achievements: ['Led team of 5 developers', 'Increased performance by 40%', 'Shipped 15+ features']
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects, focusing on responsive design and performance optimization.',
    achievements: ['Delivered 20+ projects', 'Improved code quality', 'Client satisfaction: 98%']
  },
  {
    title: 'Junior Developer',
    company: 'Startup',
    period: '2019 - 2020',
    description: 'Started my journey in web development, learning modern frameworks and building foundational skills.',
    achievements: ['Built first full-stack app', 'Learned 5+ technologies', 'Contributed to open source']
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/90 text-sm font-medium mb-8">
              <Star className="w-4 h-4 text-yellow-400" />
              About Me
              <Brain className="w-4 h-4 text-purple-400" />
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="text-white">The Mind Behind </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                The Code
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Passionate full-stack developer with 4+ years of experience creating 
              digital experiences that users love. Always learning, always building.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                My 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Journey</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  My journey into web development started with curiosity and grew into a passion 
                  for creating digital experiences that make a difference. What began as tinkering 
                  with HTML and CSS has evolved into architecting full-stack applications that 
                  serve thousands of users.
                </p>
                <p>
                  I specialize in the MERN stack and have extensive experience with Next.js for 
                  building modern, performant applications. I believe in writing clean, maintainable 
                  code and staying ahead of the curve with the latest technologies and best practices.
                </p>
                <p>
                  When I&apos;m not coding, you can find me contributing to open-source projects, 
                  mentoring aspiring developers, or exploring the latest trends in web development 
                  over a good cup of coffee.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Visual Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Code2, number: "50+", label: "Projects", color: "from-purple-500 to-pink-500" },
                { icon: Users, number: "30+", label: "Clients", color: "from-blue-500 to-cyan-500" },
                { icon: Trophy, number: "4+", label: "Years", color: "from-orange-500 to-red-500" },
                { icon: Coffee, number: "1000+", label: "Coffees", color: "from-yellow-500 to-orange-500" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Technical
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Arsenal</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The technologies and tools I use to build exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              return (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 transform group-hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-r ${skillGroup.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones and achievements in my development career.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-purple-400 font-semibold text-lg mb-4">{exp.company}</p>
                      <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>
                      
                      {/* Achievements */}
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <span
                            key={achievementIndex}
                            className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:text-right mt-4 lg:mt-0 lg:ml-8">
                      <span className="inline-flex px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium text-sm">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}