import { motion } from 'motion/react';
import { Search, PenTool, Cpu, Rocket, Clock, Repeat, ArrowDown, ArrowUp, ShieldCheck, Brain } from 'lucide-react';

const steps = [
  {
    step: 'Step 1',
    title: 'Audit & Workflow Mapping',
    description: 'Deep dive into current processes to identify automation opportunities.',
    icon: <Search size={24} />,
  },
  {
    step: 'Step 2',
    title: 'Automation Architecture Design',
    description: 'Blueprint the optimal system architecture and integration points.',
    icon: <PenTool size={24} />,
  },
  {
    step: 'Step 3',
    title: 'AI Integration & Implementation',
    description: 'Build and connect AI models, APIs, and workflow automations.',
    icon: <Cpu size={24} />,
  },
  {
    step: 'Step 4',
    title: 'Deployment & Optimization',
    description: 'Launch, monitor, and continuously improve system performance.',
    icon: <Rocket size={24} />,
  },
];

const benefits = [
  {
    icon: <Clock className="text-neutral-600" />,
    value: '20–60%',
    label: 'Operational time saved',
  },
  {
    icon: <Repeat className="text-neutral-600" />,
    value: <ArrowDown size={20} className="text-neutral-900" />,
    label: 'Reduce repetitive manual work',
  },
  {
    icon: <ShieldCheck className="text-neutral-600" />,
    value: <ArrowUp size={20} className="text-neutral-900" />,
    label: 'Increase process reliability',
  },
  {
    icon: <Brain className="text-neutral-600" />,
    value: 'AI',
    label: 'Enhanced decision making',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 bg-neutral-50 text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Framework Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
            My Automation Framework
          </h2>
          <div className="w-24 h-1 bg-neutral-900/10 mx-auto rounded-full" />
        </motion.div>

        <div className="relative mb-32">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-neutral-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-8 inline-block">
                  <div className="w-24 h-24 rounded-3xl bg-white border border-neutral-200 flex items-center justify-center group-hover:scale-110 group-hover:border-neutral-900 group-hover:shadow-xl transition-all duration-500 shadow-sm">
                    <div className="text-neutral-900">
                      {step.icon}
                    </div>
                  </div>
                </div>
                
                <div className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-display font-bold mb-4 px-4">
                  {step.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Work With Me Section */}
        <div className="pt-24 border-t border-neutral-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
              Why Smart Businesses Choose Automation
            </h2>
            <div className="w-24 h-1 bg-neutral-900/10 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[32px] bg-white border border-neutral-100 flex flex-col items-center text-center hover:shadow-xl hover:shadow-neutral-200/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                
                <div className="mb-4 flex flex-col items-center gap-2">
                  {typeof benefit.value === 'string' ? (
                    <span className="text-4xl font-display font-bold tracking-tight">{benefit.value}</span>
                  ) : (
                    benefit.value
                  )}
                </div>

                <p className="text-neutral-500 font-medium leading-relaxed">
                  {benefit.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
