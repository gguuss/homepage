import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function Hero() {
  return (
    <section className="pt-40 pb-20 md:pt-52 md:pb-32 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.7,
          ease: 'easeOut'
        }}
        className="max-w-3xl">
        
        <h1 className="text-5xl md:text-7xl font-serif font-medium text-slate-900 leading-tight mb-6">
          Developer, technologist, <br className="hidden md:block" />
          <span className="text-slate-500 italic">and public speaker.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
          I'm Gus Class. I build software, write about technology, and explore
          how digital tools adapt to and shape society.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors">
            
            View my work
            <ArrowRight size={18} />
          </a>
          <a
            href="#bio"
            className="inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-full font-medium hover:bg-slate-50 transition-colors">
            
            Read bio
          </a>
        </div>
      </motion.div>
    </section>);

}