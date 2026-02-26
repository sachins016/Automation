import { motion, AnimatePresence } from 'motion/react';
import { Layers, Database, Workflow, MessageSquare, X, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Intelligent Sales Reporting & Notification Automation System',
    description: 'Built an end-to-end sales automation system that consolidates multi-source data into structured regional and pricing reports while sending real-time order updates to Gmail and Discord for seamless operational visibility.',
    details: {
      problem: 'The client was manually consolidating sales data from multiple sources, leading to delays and errors in reporting.',
      solution: 'Developed a custom n8n workflow that automatically fetches data, processes it into regional reports, and pushes updates to communication channels.',
      results: [
        '100% elimination of manual data entry',
        'Real-time visibility for the sales team',
        'Reduced reporting time from hours to seconds'
      ]
    },
    icon: <Database className="text-indigo-500" />,
    tags: ['n8n', 'Data Consolidation', 'Gmail', 'Discord'],
    color: 'bg-indigo-50',
  },
  {
    title: 'AI Customer Support Bot (RAG)',
    description: 'A sophisticated support agent using Retrieval-Augmented Generation to provide accurate answers based on company documentation.',
    details: {
      problem: 'Support team was overwhelmed with repetitive questions that were already answered in the documentation.',
      solution: 'Implemented a RAG-based AI agent that indexes company docs in Pinecone and uses OpenAI to provide context-aware support.',
      results: [
        '70% reduction in support ticket volume',
        'Instant 24/7 response time',
        'High accuracy in technical answers'
      ]
    },
    icon: <MessageSquare className="text-blue-500" />,
    tags: ['n8n', 'OpenAI', 'Pinecone', 'RAG'],
    color: 'bg-blue-50',
  },
  {
    title: 'E-commerce Order Processor',
    description: 'End-to-end automation for order fulfillment, inventory updates, and customer notifications across multiple platforms.',
    details: {
      problem: 'Managing orders across Shopify and Stripe while syncing with a custom logistics API was a manual nightmare.',
      solution: 'Created a unified order processing engine that synchronizes all platforms and automates customer communication.',
      results: [
        'Zero missed orders in the first 3 months',
        'Automated inventory syncing across platforms',
        'Improved customer satisfaction scores'
      ]
    },
    icon: <Layers className="text-purple-500" />,
    tags: ['n8n', 'Shopify', 'Stripe', 'Logistics API'],
    color: 'bg-purple-50',
  },
  {
    title: 'AI Resume Reviewer',
    description: 'Automated tool that analyzes resumes against job descriptions, providing a percentage match and improvement suggestions.',
    details: {
      problem: 'HR teams were spending too much time manually screening resumes for technical roles.',
      solution: 'Built an AI-powered screening tool that parses PDFs and uses GPT-4 to rank candidates based on job requirements.',
      results: [
        '85% faster initial screening process',
        'Standardized candidate evaluation',
        'Actionable feedback for applicants'
      ]
    },
    icon: <Workflow className="text-emerald-500" />,
    tags: ['n8n', 'GPT-4', 'PDF Parsing', 'HR Tech'],
    color: 'bg-emerald-50',
  },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h3 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
              Intelligent workflows for <span className="text-neutral-400">modern</span> businesses.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative p-8 md:p-12 rounded-3xl border border-neutral-100 hover:border-neutral-200 hover:shadow-xl hover:shadow-neutral-100 transition-all bg-neutral-50/50 cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl ${project.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {project.icon}
              </div>
              
              <h4 className="text-2xl font-display font-bold mb-4">{project.title}</h4>
              <p className="text-neutral-500 text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white border border-neutral-100 rounded-full text-xs font-medium text-neutral-600">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-x-6 top-[10%] bottom-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[700px] bg-white rounded-[40px] shadow-2xl z-[101] overflow-hidden flex flex-col"
            >
              <div className="p-8 md:p-12 overflow-y-auto flex-1">
                <div className="flex items-start justify-between mb-12">
                  <div className={`w-20 h-20 rounded-3xl ${selectedProject.color} flex items-center justify-center`}>
                    {selectedProject.icon}
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-12">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-neutral-50 border border-neutral-100 rounded-full text-sm font-medium text-neutral-600">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-12">
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4">The Challenge</h5>
                    <p className="text-xl text-neutral-600 leading-relaxed">
                      {selectedProject.details.problem}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4">The Solution</h5>
                    <p className="text-xl text-neutral-600 leading-relaxed">
                      {selectedProject.details.solution}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4">Key Results</h5>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedProject.details.results.map((result, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                          <CheckCircle2 className="text-emerald-500" size={24} />
                          <span className="text-lg font-medium text-neutral-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-neutral-50 border-t border-neutral-100 flex justify-end">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-8 py-4 bg-neutral-900 text-white rounded-full font-bold hover:bg-neutral-800 transition-all"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

function ArrowUpRight({ size, className }: { size?: number; className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}
