import React from 'react';
import { motion } from 'framer-motion';
import { Mic2, ExternalLink } from 'lucide-react';
export function Speaking() {
  return (
    <section id="speaking" className="py-20 px-6 md:px-12 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.6
          }}>
          
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <Mic2 size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif m-0">
              Public Speaking
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Talk */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="flex justify-between items-start mb-6">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">
                  Featured Talk
                </span>
				<a href="https://www.youtube.com/watch?v=E5vv7_G4tcE/">
                <ExternalLink
                  size={20}
                  className="text-slate-400 group-hover:text-blue-600 transition-colors" 
                   /></a>
                
              </div>
              <h3 className="text-2xl font-serif mb-3">
                Best practices for Sign-in
              </h3>
              <p className="text-slate-500 mb-6 flex items-center gap-2">
                <span className="font-medium text-slate-700">Moscone Center, San Francisco</span>
                <span>•</span>
                <span>Dev Talk</span>
              </p>
              <p className="text-slate-600 leading-relaxed">
                Best practices talk for Google Sign-In focused on UX and user experience.
              </p>
            </div>

            {/* Placeholder for other talks */}
            <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 border-dashed flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-4">
                <Mic2 size={20} className="text-slate-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-700 mb-2">
                More Talks & Presentations
              </h3>
              <p className="text-slate-500 text-sm max-w-xs">
                I speak about software development, Developer
                Relations, programming, art, and technology trends.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}
