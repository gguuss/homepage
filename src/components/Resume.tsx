import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, GraduationCap, Briefcase } from 'lucide-react';
const experience = [
{
  role: 'Software Division Lead',
  company: 'Stealth Startup',
  period: '2022-2024',
  description:
  'Lead design of system Cloud architecture, edge device orchestration, and embedded system integrations. Built and maintained CI/CD pipelines. Directed and integrated the work of the embedded, PCB, OS, and backend teams.'
},
  {
  role: 'Senior Developer Advocate',
  company: 'Google',
  period: '2012 - 2022',
  description:
  'Lead developer relations for Cloud IoT Core, Identity, and internal products. Created technical content, spoke at major conferences, and gathered developer feedback to influence product roadmaps. Lead an internal conference during Covid and emceed from my home studio. Mentored peers and participated in recruitment, hiring, and promotion activities cross-company.'
},
{
  role: 'Programming Writer',
  company: 'Microsoft',
  period: '2005 - 2018',
  description:
  'Documented, tested, and worked with partners on tools and APIs for Touch Computing, Media, and DRM. Contributed to core platform features and improved developer documentation architecture.'
},
{
  role: 'Software Engineer',
  company: 'Spam Arrest',
  period: '2003 - 2005',
  description:
  'Created webmail client, scaled out software infrastructure, and enhanced security measures for a growing email service.'
}];

const education = [
{
  degree: 'Master of Business Administration (MBA)',
  school: 'University of Washington',
  period: '2008',
  description:
  'Earned while working full-time at Microsoft to round out my education with business and strategic management skills.'
},
{
  degree: 'B.S. Computing and Software Systems',
  school: 'University of Washington',
  period: '2003',
  description:
  'Core focus on software architecture, algorithms, embedded systems, distributed systems, and systems design. Three capstone projects in Embedded programming and Distributed systems.'
}];

export function Resume() {
  return (
    <section id="resume" className="py-20 px-6 md:px-12 bg-slate-50">
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
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <FileText size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif m-0">Resume</h2>
            </div>
            <a
              href="resume_gus_class.docx.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 font-medium rounded-full transition-all shadow-sm">
              
              <Download size={18} />
              Download PDF
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8 text-slate-900">
                <Briefcase size={20} className="text-blue-600" />
                <h3 className="text-2xl font-serif">Experience</h3>
              </div>
              <div className="space-y-10 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {experience.map((item, index) =>
                <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-blue-500 shadow-sm z-10"></div>
                    <div className="mb-1">
                      <span className="text-sm font-medium text-blue-600">
                        {item.period}
                      </span>
                    </div>
                    <h4 className="text-xl font-medium text-slate-900">
                      {item.role}
                    </h4>
                    <p className="text-slate-500 font-medium mb-3">
                      {item.company}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8 text-slate-900">
                <GraduationCap size={20} className="text-blue-600" />
                <h3 className="text-2xl font-serif">Education</h3>
              </div>
              <div className="space-y-10 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {education.map((item, index) =>
                <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-slate-300 shadow-sm z-10"></div>
                    <div className="mb-1">
                      <span className="text-sm font-medium text-slate-500">
                        {item.period}
                      </span>
                    </div>
                    <h4 className="text-xl font-medium text-slate-900">
                      {item.degree}
                    </h4>
                    <p className="text-slate-500 font-medium mb-3">
                      {item.school}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}
