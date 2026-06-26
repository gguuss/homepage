import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, Star, GitFork } from 'lucide-react';
const projects = [
{
  name: 'Google Cloud IoT Arduino',
  description:
  'An Open Source Arduino library for Google Cloud IoT Core that supports ESP32, ESP8266, and Arduino MKR1000 boards.',
  language: 'TypeScript',
  stars: 1240,
  forks: 89,
  color: 'bg-blue-500'
},
{
  name: 'MiiLights',
  description:
  'Reverse engineered control system for the MiiLights smart lighting system.',
  language: 'C#',
  stars: 856,
  forks: 42,
  color: 'bg-blue-500'
},
{
  name: 'Google Cloud SDK Samples',
  description:
  'Google Cloud SDK samples in various programming languages for domains like Vision, Speech, and Video.',
  language: 'JavaScript, Node, C#, Java, Python, Java, Go, Ruby, PHP',
  stars: 432,
  forks: 28,
  color: 'bg-yellow-400'
},
{
  name: 'Rainbow Smale',
  description:
  'Embedded LED Server with One-button interface, device-to-device mesh using AP-AP networks, and mobile phone sensor / GPS bridge.',
  language: 'C, Arduino, ESP32',
  stars: 112,
  forks: 15,
  color: 'bg-green-500'
}];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-white">
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
              <Code2 size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif m-0">
              Open Source Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) =>
            <motion.a
              href="#"
              key={index}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="block p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group">
              
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-slate-900 font-medium group-hover:text-blue-600 transition-colors">
                    <Github size={20} />
                    <span>{project.name}</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-6 min-h-[40px]">
                  {project.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <span
                    className={`w-3 h-3 rounded-full ${project.color}`}>
                  </span>
                    <span>{project.language}</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                    <Star size={16} />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                    <GitFork size={16} />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </motion.a>
            )}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://github.com/gguuss?tab=repositories"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-full transition-colors">
              
              <Github size={18} />
              View all on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}