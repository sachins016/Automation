import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-neutral-50 selection:bg-neutral-900 selection:text-white"
      >
        <Navbar />
        <main>
          <Hero />
          <Work />
          <Process />
          <About />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
