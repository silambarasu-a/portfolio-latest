'use client';

import React from 'react';
import { ExternalLink, Github, Rocket, Sparkles, Star, Zap, ChevronRight, Eye } from 'lucide-react';
import Link from 'next/link';
import AnimatedElement from '@/components/AnimatedElement';

const projects = [
  {
    id: 1,
    title: 'Starlight Music - Live Entertainment Platform',
    description: 'Premier live music entertainment platform for NYC tri-state area. Features online booking system, customizable band experiences, transparent pricing, and hundreds of live performance videos. Technology-driven solution for wedding and event entertainment.',
    technologies: ['Next.js', 'React', 'MongoDB', 'New Relic', 'AWS', 'SEO Optimization'],
    liveUrl: 'https://www.starlightmusic.com',
    githubUrl: '#',
    category: 'Full Stack',
    color: 'from-purple-500 to-pink-500',
    featured: true
  },
  {
    id: 2,
    title: 'StarBridge - CRM/CMS Platform',
    description: 'Administrative interface and content management system for Starlight Music. Handles artist management, booking operations, performance tracking, and business analytics with comprehensive dashboard functionality.',
    technologies: ['React', 'JavaScript', 'Webpack', 'New Relic', 'SPA Architecture'],
    liveUrl: 'https://starbridge.starlightmusic.com',
    githubUrl: '#',
    category: 'Full Stack',
    color: 'from-blue-500 to-cyan-500',
    featured: true
  },
  {
    id: 3,
    title: 'Clubhouse Central NY - Childcare Platform',
    description: 'Innovative after-school care and enrichment center website for K-6 students in Hartsdale, NY. Features flexible scheduling, shuttle services, activity programs, and integrated booking system with Calendly integration.',
    technologies: ['Next.js 15', 'Server-Side Rendering', 'Google Analytics', 'Calendly API', 'SEO Optimization'],
    liveUrl: 'https://clubhousecentralny.com',
    githubUrl: '#',
    category: 'Full Stack',
    color: 'from-orange-500 to-red-500',
    featured: true
  },
  {
    id: 4,
    title: 'Portfolio Website v1',
    description: 'Modern portfolio website showcasing 3+ years of full-stack development experience. Features performance optimizations (40% improvement) and 99.9% uptime achievement.',
    technologies: ['React.js', 'Netlify'],
    liveUrl: 'https://silambarasu.netlify.app',
    githubUrl: 'https://github.com/silambarasu-a/Portfolio_project',
    category: 'Frontend',
    color: 'from-indigo-500 to-purple-500',
    featured: false
  },
  {
    id: 5,
    title: 'Portfolio Website v2 (Current)',
    description: 'Latest iteration of portfolio with advanced animations, MongoDB contact form integration, email service, and comprehensive SEO optimization. Built with Next.js 15 and modern development practices.',
    technologies: ['Next.js 15', 'MongoDB', 'Framer Motion', 'TypeScript', 'Nodemailer'],
    liveUrl: 'https://silambarasu.vercel.app',
    githubUrl: 'https://github.com/silambarasu-a/portfolio-latest',
    category: 'Full Stack',
    color: 'from-green-500 to-teal-500',
    featured: false
  },
  // {
  //   id: 6,
  //   title: 'Music Analytics & Performance API',
  //   description: 'Backend infrastructure powering Starlight Music platforms. Handles secure API requests, performance monitoring, real-time analytics, and business intelligence with high-availability architecture.',
  //   technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'New Relic'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   category: 'Backend',
  //   color: 'from-yellow-500 to-orange-500',
  //   featured: false
  // }
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
              <Rocket className="w-4 h-4 text-purple-400" />
              Featured Work
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="text-white">My </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Projects
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A showcase of my recent work and passion projects. Each one represents 
              a unique challenge solved with modern technology and creative thinking.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement
            delay={0.2}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 backdrop-blur-md text-white/80 border border-white/20 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
                {selectedCategory === category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-50 -z-10"></div>
                )}
              </button>
            ))}
          </AnimatedElement>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedElement
                key={project.id}
                delay={index * 0.1}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105 h-full flex flex-col">
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white text-xs font-bold">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-black/30 backdrop-blur-sm border border-white/20 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Visual */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <Zap className="text-white" size={32} />
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <Eye size={20} />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs font-medium backdrop-blur-sm border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm font-medium transform hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                        <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 rounded-xl hover:bg-white/20 hover:text-white transition-all duration-300 text-sm font-medium"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Have a Project
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> in Mind?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I&apos;m always excited about new opportunities and challenging projects. 
              Let&apos;s collaborate and create something amazing together.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <Rocket className="w-5 h-5" />
              Let&apos;s Talk
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
}

