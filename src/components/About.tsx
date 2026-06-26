import React from 'react';
import { motion } from 'framer-motion';
export function About() {
  return (
    <section id="bio" className="py-20 bg-white px-6 md:px-12">
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
          }}
          className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">About Me</h2>
            <div className="h-1 w-12 bg-blue-600 rounded-full mb-8"></div>
            <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden relative">
              {/* Placeholder for Gus's profile image */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                <img src="gusclass.png" alt="Gus Class" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-slate max-w-none text-slate-600">
            <p className="lead text-xl text-slate-800 font-medium mb-6">
              My name is Gus Class and I have been passionate about computers
              for my entire life.
            </p>
            <p className="mb-6">
              My first computer was an Apple IIgs and I begged my parents to get
              a PC (a 386!) around the time I had turned 7 or 8 which they
              begrudgingly caved in on. I came online for the first time in the
              early 90s through the Prodigy service which led me to the BBS
              scene and opened doors for learning the ins and outs of computing.
            </p>
            <p className="mb-6">
              I taught myself how to program in my teens, took vocational
              classes in high school on network administration through a magnet
              program, and earned a bachelor's degree in Computing and Software
              Systems through the University of Washington in 2003.
            </p>
            <p className="mb-6">
              In an effort to round out my education, I earned an MBA in 2008
              while working full time at Microsoft.
            </p>
            <p className="mb-6">
              I enjoy a plethora of hobbies including rock climbing, 
              DJing, electronic music production, recreational programming, 
              creating web sites, playing and creating video games, building robots, 
              and flying drones.
            </p>
            <p className="mb-6">
              If you're interested in the details of all the work I have done, check my 
              <a href="https://www.linkedin.com/in/gclassy/"> LinkedIn </a> 
              or grab my resume:
                    <a href="resume_gus_class.docx"> WORD</a> | <a href="resume_gus_class.docx.pdf">PDF</a>.
            </p>
            <p>
                  To learn more about what I have learned about social networks and apps, 
                  <a href="https://gusclass.com/gpbpdeck2013/template.html#1">check out this Google I/O presentation</a>.
            </p>
            
          </div>
        </motion.div>
      </div>
    </section>);

}