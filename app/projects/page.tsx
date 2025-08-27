'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Rocket, Sparkles, Star, Zap, ChevronRight, Eye } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Music Streaming Platform',
    description: 'Full-stack music platform with user authentication, playlist management, and audio streaming. Built for Starlight Music with scalable architecture.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'AWS S3'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack',
    color: 'from-purple-500 to-pink-500',
    featured: true
  },
  {
    id: 2,
    title: 'Artist Dashboard',
    description: 'Comprehensive dashboard for artists to manage their releases, view analytics, and track revenue. Real-time data visualization and reporting.',
    technologies: ['React', 'Node.js', 'Chart.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack',
    color: 'from-blue-500 to-cyan-500',
    featured: true
  },
  {
    id: 3,
    title: 'Content Management System',
    description: 'Custom CMS for music label operations with metadata management, asset organization, and automated workflows for content delivery.',
    technologies: ['React', 'Express.js', 'MongoDB', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack',
    color: 'from-orange-500 to-red-500',
    featured: false
  },
  {
    id: 4,
    title: 'Music Analytics API',
    description: 'RESTful API for music analytics with streaming data aggregation, user behavior tracking, and performance metrics. Handles 1000+ daily requests.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Backend',
    color: 'from-green-500 to-teal-500',
    featured: true
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Modern portfolio website with animations, contact form, and project showcase. Built with performance optimization and SEO best practices.',
    technologies: ['Next.js', 'Framer Motion', 'TypeScript', 'Vercel'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Frontend',
    color: 'from-indigo-500 to-purple-500',
    featured: false
  },
  {
    id: 6,
    title: 'Event Management Platform',
    description: 'Platform for managing music events with ticket sales, venue booking, and artist coordination. Complete event lifecycle management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack',
    color: 'from-yellow-500 to-orange-500',
    featured: false
  }
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                  
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

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
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
                    <div className="flex gap-3">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}

