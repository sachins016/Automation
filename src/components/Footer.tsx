import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-12 md:py-20 px-6 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-2xl font-display font-bold tracking-tight">
            SACHIN<span className="text-neutral-400">.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
