import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';
import AutomationVisual from './AutomationVisual';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-8 border border-emerald-100"
            >
              <Zap size={14} />
              Available for new projects
            </motion.div>
            
            <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
  className="text-5xl md:text-7xl xl:text-8xl font-display font-bold tracking-tight leading-[0.9] mb-8"
>
  I build <span className="text-neutral-400">AI-powered</span> automations that scale with you.
</motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-neutral-500 leading-relaxed max-w-2xl mb-12"
            >
              Hi, I'm Sachin. I specialize in building intelligent n8n workflows and AI agents 
              that eliminate manual work and drive business efficiency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group px-8 py-4 bg-neutral-900 text-white rounded-full font-medium flex items-center gap-2 hover:bg-neutral-800 transition-all"
              >
                View My Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white border border-neutral-200 text-neutral-900 rounded-full font-medium hover:bg-neutral-50 transition-all"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <AutomationVisual />
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-50 rounded-full -z-10 blur-3xl opacity-60" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-neutral-200 rounded-full -z-10 blur-3xl opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
