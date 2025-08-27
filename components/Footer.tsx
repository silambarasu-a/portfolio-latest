"use client";

import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { href: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/silambarasu', icon: Github, label: 'GitHub', color: 'hover:text-gray-300' },
    { href: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/silambarasu', icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
    { href: 'https://twitter.com/silambarasu', icon: Twitter, label: 'Twitter', color: 'hover:text-cyan-400' },
    { href: 'mailto:silambarasu@icloud.com', icon: Mail, label: 'Email', color: 'hover:text-purple-400' }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-slate-900 via-purple-900/20 to-transparent border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <Logo 
              variant="icon" 
              width={44} 
              color="white"
            />
            <span className="font-black text-2xl text-white">
              Silambarasu
            </span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-white/70 ${link.color} transition-all duration-300 transform hover:scale-110 hover:bg-white/10 hover:shadow-lg`}
                  aria-label={link.label}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>

          {/* Quote/Tagline */}
          <div className="text-center max-w-md">
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting digital experiences that inspire and engage. 
              Let&apos;s build something amazing together.
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              © {currentYear} Silambarasu. Made with 
              <Heart className="w-4 h-4 text-red-400 mx-1" fill="currentColor" />
              and lots of ☕
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;