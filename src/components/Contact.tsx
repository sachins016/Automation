import { motion } from 'motion/react';
import { Mail, MessageSquare, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    object.access_key = import.meta.env.VITE_WEB3FORMS_KEY || '';
    
    const json = JSON.stringify(object);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">Contact</h2>
            <h3 className="text-4xl md:text-7xl font-display font-bold tracking-tight mb-8">
              Let's find your first <span className="text-neutral-400">automation win</span>.
            </h3>
            <p className="text-xl text-neutral-500 leading-relaxed mb-12">
              Not sure where to start? I'm offering a <strong>free 30-minute automation audit</strong> for my first 5 clients. We'll look at your business and find exactly what can be automated.
            </p>

            <div className="flex flex-col gap-8">
              <a href="mailto:sachinsunilofficial@gmail.com" className="group flex items-center gap-6 p-6 rounded-3xl border border-neutral-100 hover:border-neutral-200 hover:bg-neutral-50 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-neutral-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-neutral-400 font-bold uppercase tracking-wider mb-1">Email Me</div>
                  <div className="text-xl font-display font-bold">sachinaiautomation@gmail.com</div>
                </div>
              </a>

              <a href="tel:+919591219877" className="group flex items-center gap-6 p-6 rounded-3xl border border-neutral-100 hover:border-neutral-200 hover:bg-neutral-50 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="text-sm text-neutral-400 font-bold uppercase tracking-wider mb-1">Call / WhatsApp</div>
                  <div className="text-xl font-display font-bold">+91-9591219877</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 md:p-12 rounded-[40px] bg-neutral-900 text-white relative overflow-hidden"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-3xl font-display font-bold mb-4">Message Sent!</h4>
                <p className="text-neutral-400 text-lg mb-8">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-white text-neutral-900 rounded-xl font-bold hover:bg-neutral-100 transition-all"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <input type="hidden" name="subject" value="New Portfolio Inquiry" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                
                <div className="space-y-4">
                  <label className="text-sm font-bold uppercase tracking-widest text-neutral-500">Full Name</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    placeholder="" 
                    className="w-full bg-transparent border-b border-neutral-800 py-4 focus:outline-none focus:border-white transition-colors text-xl"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-bold uppercase tracking-widest text-neutral-500">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    placeholder="" 
                    className="w-full bg-transparent border-b border-neutral-800 py-4 focus:outline-none focus:border-white transition-colors text-xl"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-bold uppercase tracking-widest text-neutral-500">Project Details</label>
                  <textarea 
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your automation needs..." 
                    className="w-full bg-transparent border-b border-neutral-800 py-4 focus:outline-none focus:border-white transition-colors text-xl resize-none"
                  />
                </div>
                
                {status === 'error' && (
                  <p className="text-red-400 text-sm font-medium">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button 
                  disabled={status === 'loading'}
                  className="group w-full py-6 bg-white text-neutral-900 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-neutral-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
