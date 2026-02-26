import { motion } from 'motion/react';
import { CheckCircle2, Cpu, Globe, Zap } from 'lucide-react';

const skills = [
  'n8n Workflow Design',
  'API Integrations (REST/GraphQL)',
  'CRM Automation (HubSpot/Salesforce)',
  'E-commerce Automation (Shopify)',
  'AI Integration (OpenAI/Anthropic)',
  'Database Management (PostgreSQL/MongoDB)',
  'Webhooks & Event-driven Architecture',
  'Custom Scripting (Node.js/Python)',
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-12 bg-white rounded-[40px] shadow-xl border border-neutral-100">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Zap size={32} />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-neutral-900">Fast</div>
                  <div className="text-base text-neutral-400 font-medium tracking-wide uppercase">Turnaround</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Globe size={32} />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-neutral-900">n8n</div>
                  <div className="text-base text-neutral-400 font-medium tracking-wide uppercase">Specialist</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">About Me</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8">
              I design <span className="text-neutral-400">AI-powered</span> workflows that make businesses run smarter.
            </h3>
            <p className="text-xl text-neutral-500 leading-relaxed mb-12">
              I'm Sachin, a self-taught automation engineer. I discovered n8n and fell in love 
              with how it can turn hours of manual work into seconds of automated magic. 
              I'm currently looking for my first few clients to help them find their first 
              "automation win" at a special introductory rate.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                  <span className="text-neutral-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
