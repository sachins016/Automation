import { motion } from 'motion/react';
import { Database, Cpu, MessageSquare, Mail, Zap, Globe, Layers, Settings, ShieldCheck } from 'lucide-react';

export default function AutomationVisual() {
  const columns = [
    {
      title: 'Sources',
      nodes: [
        { icon: <Globe size={18} />, label: 'Webhooks' },
        { icon: <Mail size={18} />, label: 'Email' },
        { icon: <Database size={18} />, label: 'Database' },
      ]
    },
    {
      title: 'Intelligence',
      nodes: [
        { icon: <Cpu size={24} />, label: 'AI Engine', isMain: true },
        { icon: <Settings size={18} />, label: 'Logic' },
      ]
    },
    {
      title: 'Actions',
      nodes: [
        { icon: <MessageSquare size={18} />, label: 'Discord' },
        { icon: <ShieldCheck size={18} />, label: 'Security' },
        { icon: <Layers size={18} />, label: 'CRM' },
      ]
    }
  ];

  return (
    <div className="relative w-full aspect-[4/5] bg-white rounded-[40px] overflow-hidden border border-neutral-200 shadow-2xl p-12 flex items-center justify-between">
      {/* Background Grid - Subtle and systematic for light theme */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Connecting Lines Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        {/* Systematic horizontal lines */}
        <motion.line x1="25%" y1="30%" x2="45%" y2="45%" stroke="#d4d4d4" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
        <motion.line x1="25%" y1="50%" x2="45%" y2="45%" stroke="#d4d4d4" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} />
        <motion.line x1="25%" y1="70%" x2="45%" y2="45%" stroke="#d4d4d4" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.7 }} />
        
        <motion.line x1="55%" y1="45%" x2="75%" y2="30%" stroke="#d4d4d4" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 }} />
        <motion.line x1="55%" y1="45%" x2="75%" y2="50%" stroke="#d4d4d4" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.9 }} />
        <motion.line x1="55%" y1="45%" x2="75%" y2="70%" stroke="#d4d4d4" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.0 }} />
      </svg>

      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-12 items-center z-10 relative">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4">
            {column.title}
          </span>
          <div className="flex flex-col gap-8">
            {column.nodes.map((node, nodeIndex) => (
              <motion.div
                key={nodeIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (colIndex * 0.2) + (nodeIndex * 0.1) }}
                className="flex flex-col items-center gap-3"
              >
                <div className={`
                  ${node.isMain ? 'bg-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.2)]' : 'bg-white text-neutral-400 border border-neutral-100 shadow-sm'} 
                  w-14 h-14 ${node.isMain ? 'w-20 h-20' : ''} rounded-2xl flex items-center justify-center transition-all duration-300 hover:border-neutral-300
                `}>
                  {node.icon}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">
                  {node.label}
                </span>
                {node.isMain && (
                  <motion.div 
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute inset-0 bg-emerald-500 rounded-2xl -z-10 blur-2xl"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Systematic Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 bg-white border border-neutral-200 rounded-lg shadow-sm"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-[0.2em]">System Active</span>
      </motion.div>
    </div>
  );
}
