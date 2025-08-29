'use client';

import { Code2, Users, Trophy, Zap, Coffee, Rocket, Brain, Star } from 'lucide-react';
import AnimatedElement from '@/components/AnimatedElement';
import { useAnimationContext } from '@/components/AnimationProvider';
import Image from 'next/image';

const skills = [
  { 
    category: 'Frontend Development', 
    techs: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    icon: Code2,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    category: 'Backend Development', 
    techs: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'GraphQL', 'JWT'],
    icon: Rocket,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    category: 'DevOps & Tools', 
    techs: ['Docker', 'AWS', 'Git', 'CI/CD', 'Vercel', 'Webpack', 'Jest'],
    icon: Zap,
    color: 'from-orange-500 to-red-500'
  }
];

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Starlight Music',
    period: '2021 - Present',
    description: 'Architecting and deploying multiple customer-facing platforms in the JavaScript ecosystem. Specializing in performance optimization, secure API development, and scalable database design.',
    achievements: ['Improved page load times by 40%', 'Built APIs handling 1,000+ daily requests', 'Reduced query latency by 60%', 'Achieved 95%+ test coverage', 'Mastered React/Node.js stack']
  }
];

export default function About() {
  const { isPageLoaded } = useAnimationContext();
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
          <AnimatedElement
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
              Innovative Full Stack Developer with 3+ years of experience at Starlight Music, 
              architecting scalable applications and optimizing performance. Passionate about clean code and continuous learning.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Profile Image Section */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Floating Image Container */}
            <AnimatedElement
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={isPageLoaded ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center relative"
            >
              {/* Background Effects */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-60 h-60 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              </div>
              
              {/* Main Image Container */}
              <div className="relative z-10 group">
                {/* Rotating Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full p-1 animate-spin-slow">
                  <div className="w-full h-full bg-slate-900 rounded-full"></div>
                </div>
                
                {/* Image */}
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl group-hover:scale-105 transition-all duration-500">
                  <Image src={"/photo.jpg"} alt='Silambarasu' width={256} height={256} className="object-cover w-full h-full" />
                  
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div className="absolute top-4 -left-8 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Coffee className="w-3 h-3 text-white" />
                </div>
              </div>
            </AnimatedElement>

            {/* Floating Text Elements */}
            <AnimatedElement
              initial={{ opacity: 0, x: -100 }}
              animate={isPageLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-purple-400" />
                  <span className="text-white font-semibold">3+ Years Experience</span>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement
              initial={{ opacity: 0, x: 100 }}
              animate={isPageLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute right-0 top-1/3 transform -translate-y-1/2 hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  <span className="text-white font-semibold">Full Stack Expert</span>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement
              initial={{ opacity: 0, y: 100 }}
              animate={isPageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute right-8 bottom-0 hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-blue-400" />
                  <span className="text-white font-semibold">99.9% Uptime</span>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Story */}
            <AnimatedElement
              initial={{ opacity: 0, x: -30 }}
              animate={isPageLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                My 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Journey</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  My journey as a Full Stack Developer at Starlight Music has been marked by 
                  architecting and deploying multiple customer-facing platforms in the JavaScript ecosystem. 
                  I&apos;ve improved average page load times by 40% through advanced caching, code-splitting, and CDN optimization.
                </p>
                <p>
                  I specialize in building secure RESTful APIs with Node.js + Express that handle 1,000+ daily requests 
                  with 99.9% uptime. My expertise in MongoDB optimization includes indexing and aggregation strategies 
                  that reduced critical query latency by 60%, enabling smooth scaling during a 10× user growth period.
                </p>
                <p>
                  I champion DevOps culture by containerizing services with Docker and automating CI/CD pipelines, 
                  reducing deployment time from hours to minutes. I also mentor junior developers and enforce 
                  engineering best practices, achieving 95%+ unit-test coverage.
                </p>
              </div>
            </AnimatedElement>

            {/* Right Column - Visual Stats */}
            <AnimatedElement
              initial={{ opacity: 0, x: 30 }}
              animate={isPageLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Code2, number: "10+", label: "Projects", color: "from-purple-500 to-pink-500" },
                { icon: Users, number: "15+", label: "Clients", color: "from-blue-500 to-cyan-500" },
                { icon: Trophy, number: "3+", label: "Years", color: "from-orange-500 to-red-500" },
                { icon: Coffee, number: "800+", label: "Coffees", color: "from-yellow-500 to-orange-500" }
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
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Technical
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Arsenal</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The technologies and tools I use to build exceptional digital experiences.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              return (
                <AnimatedElement
                  key={skillGroup.category}
                  delay={index * 0.2}
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
                </AnimatedElement>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones and achievements in my development career.
            </p>
          </AnimatedElement>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedElement
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isPageLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
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
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}