import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
const posts = [
{
  title: 'Using Cloud Auto ML Vision for custom image classifications from IoT Devices',
  date: 'Jan 23, 2020',
  category: 'Developer Relations',
  excerpt:
  'Explains how to use Cloud Auto ML Vision for custom image classifications from IoT Devices based on the presentation I gave at Cloud Next, London.',
  link: 'https://medium.com/@gguuss/using-cloud-auto-ml-vision-for-custom-image-classifications-from-iot-devices-427caa4ca4ae'
},
{
  title: 'Why are so many Developer Advocates, Photographers?',
  date: 'April 4th, 2018',
  category: 'Software Architecture',
  excerpt:
  'My thoughts about a connection I noticed between Developer Relations and Photography.',
  link: 'https://medium.com/@gguuss/why-are-so-many-developer-advocates-photographers-d18148c9bc2'
},
{
  title: "Rainbow Snake",
  date: 'March 19, 2018',
  category: 'Tech & Society',
  excerpt:
  'Descibes an LED controller I created and gives examples of how to integrate them in projects.',
  link: 'https://medium.com/@gguuss/rainbow-snake-4c27ee4a329'
}];

export function Blog() {
  return (
    <section id="blog" className="py-20 px-6 md:px-12 bg-white">
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
              <BookOpen size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif m-0">
              Blog & Writing
            </h2>
          </div>

          <div className="space-y-12">
            {posts.map((post, index) =>
            <motion.article
              key={index}
              initial={{
                opacity: 0,
                y: 10
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
              className="group border-b border-slate-100 pb-12 last:border-0 last:pb-0">
              
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
                  <time className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                    {post.date}
                  </time>
                  <span className="hidden md:inline text-slate-300">•</span>
                  <span className="text-sm font-medium text-blue-600">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  <a href={post.link}>{post.title}</a>
                </h3>
                <p className="text-slate-600 text-lg mb-6 max-w-3xl">
                  {post.excerpt}
                </p>
                <a
                href={post.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
                
                  Read article <ArrowRight size={16} />
                </a>
              </motion.article>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <a
              href="https://medium.com/@gguuss/"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors">
              
              View all posts <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}