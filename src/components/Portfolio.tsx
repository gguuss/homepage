import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Layout, Terminal, Book } from 'lucide-react';
const portfolioItems = [
{
  title: 'Cloud ML Samples',
  role: 'Developer Programs Engineer',
  description:
  'Shipped and maintained sample code and libraries in various programming languages for Google Cloud ML APIs.',
  icon: <Layout size={24} />,
  tags: ['.NET', 'C#', 'Speaking', "Node.js", 'Python', 'Java', 'Go', 'Ruby', 'PHP']  
},
{
  title: 'Cloud SDK Installer for Windows',
  role: 'Software Engineer',
  description:
  'Programmed the launch version of the Cloud SDK installer for Windows.',
  icon: <Terminal size={24} />,
  tags: ['NSIS', 'Google', 'Tooling']
},
{
  title: 'Tablet and Touch SDK Samples and Applications for Windows',
  role: 'Author',
  description:
  'Co-authored the Stocks app that shipped with Windows. Authored and maintained documentation for Windows Tablet and Touch such as the Surface SDK v2 and various MSDN articles.',
  icon: <Book size={24} />,
  tags: ['API Design', 'Launch App', 'Writing', 'C#', 'C++', 'WinJS', 'Windows', 'MSDN']
}];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 md:px-12 bg-slate-50">
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
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif m-0">Portfolio</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) =>
            <motion.div
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
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all group flex flex-col">
              
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-blue-600 mb-4">
                  {item.role}
                </p>
                <p className="text-slate-600 mb-6 flex-grow">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((tag) =>
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                  
                      {tag}
                    </span>
                )}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}
