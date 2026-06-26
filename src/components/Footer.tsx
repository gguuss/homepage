import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Rss, Mail } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-2xl font-serif text-white mb-4">Gus Class</h2>
            <p className="text-slate-400 max-w-md">
              Developer, technologist, and public speaker passionate about
              computing and the adaptation of technology to society.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 md:justify-end">
            <a
              href="#"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-colors"
              aria-label="GitHub">
              
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-colors"
              aria-label="Twitter">
              
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-colors"
              aria-label="LinkedIn">
              
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-colors"
              aria-label="RSS Feed">
              
              <Rss size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-colors"
              aria-label="Email">
              
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {currentYear} Gus Class. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#bio" className="hover:text-slate-300 transition-colors">
              Bio
            </a>
            <a href="#blog" className="hover:text-slate-300 transition-colors">
              Blog
            </a>
            <a
              href="#portfolio"
              className="hover:text-slate-300 transition-colors">
              
              Portfolio
            </a>
            <a
              href="#projects"
              className="hover:text-slate-300 transition-colors">
              
              Projects
            </a>
            <a
              href="#resume"
              className="hover:text-slate-300 transition-colors">
              
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>);

}