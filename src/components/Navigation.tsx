import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const navItems = [
{
  name: 'Bio',
  href: '#bio'
},
{
  name: 'Blog',
  href: '#blog'
},
{
  name: 'Portfolio',
  href: '#portfolio'
},
{
  name: 'Projects',
  href: '#projects'
},
{
  name: 'Resume',
  href: '#resume'
}];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-serif font-semibold tracking-tight text-slate-900">
          
          Gus Class
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            
              {item.name}
            </a>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu">
          
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-white border-b border-slate-200 overflow-hidden">
          
            <nav className="flex flex-col px-6 py-4 space-y-4">
              {navItems.map((item) =>
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors block">
              
                  {item.name}
                </a>
            )}
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}