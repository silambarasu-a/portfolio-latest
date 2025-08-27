'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle, MessageCircle, Star, Sparkles, Zap, Heart, Coffee } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error });
      }
    } catch {
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again later.' 
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'silambarasu@icloud.com',
      link: 'mailto:silambarasu@icloud.com',
      color: 'from-purple-500 to-pink-500',
      description: 'Drop me a line anytime'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bangalore, India',
      link: null,
      color: 'from-orange-500 to-red-500',
      description: 'Open to remote work globally'
    },
    {
      icon: MessageCircle,
      title: 'Current Role',
      value: 'Full Stack Developer at Starlight Music',
      link: null,
      color: 'from-blue-500 to-cyan-500',
      description: 'Building scalable music platforms'
    }
  ];

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
              <MessageCircle className="w-4 h-4 text-purple-400" />
              Let&apos;s Connect
              <Heart className="w-4 h-4 text-pink-400" />
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="text-white">Get In </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Touch
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to build scalable web applications? Looking for a Full Stack Developer with proven experience in music industry platforms? 
              Let&apos;s discuss your project and create something exceptional together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Let&apos;s Start a
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Conversation</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  As a Full Stack Developer at Starlight Music with 3+ years of experience, I specialize in 
                  building high-performance web applications, optimizing database queries, and creating 
                  seamless user experiences. Let&apos;s discuss how I can help bring your vision to life.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <div className="group relative">
                      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-start space-x-4">
                          <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center shadow-lg`}>
                            <IconComponent className="text-white" size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-white text-lg mb-1">{info.title}</h3>
                            <p className="text-purple-300 font-medium mb-1">{info.value}</p>
                            <p className="text-gray-400 text-sm">{info.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );

                  if (info.link) {
                    return (
                      <motion.a
                        key={index}
                        href={info.link}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="block"
                      >
                        {content}
                      </motion.a>
                    );
                  }

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {content}
                    </motion.div>
                  );
                })}
              </div>

              {/* Fun Facts */}
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Coffee className="w-5 h-5 text-yellow-400" />
                  <h3 className="font-semibold text-white">Fun Fact</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  I typically respond within 24 hours and am always excited to discuss new projects, 
                  especially in the music, entertainment, or fintech industries! ☕
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                </div>

                {/* Status Messages */}
                {status.type === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center space-x-3 backdrop-blur-sm">
                    <CheckCircle className="text-green-400" size={20} />
                    <p className="text-green-300">{status.message}</p>
                  </div>
                )}

                {status.type === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center space-x-3 backdrop-blur-sm">
                    <AlertCircle className="text-red-400" size={20} />
                    <p className="text-red-300">{status.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-3">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-gray-400 resize-vertical"
                      placeholder="Tell me about your project, ideas, or just say hello..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="group w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl hover:shadow-lg hover:shadow-purple-500/25 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:-translate-y-1"
                  >
                    {status.type === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                        <Zap className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6">
              Let&apos;s build something amazing together. Whether you need a music streaming platform, 
              e-commerce solution, or custom web application, I bring proven expertise from Starlight Music.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-purple-400" />
                Quick Response
              </div>
              <div className="flex items-center gap-1">
                <Coffee className="w-4 h-4 text-yellow-400" />
                Free Consultation
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-red-400" />
                Passionate Work
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}