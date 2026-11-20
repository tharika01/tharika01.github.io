import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown } from 'lucide-react';

const scrollToWork = () => {
  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-nebula" aria-hidden="true" />

      <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-accent text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-6"
        >
          Software Engineer · Applied AI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-tight text-balance"
        >
          Tharika Vikas<br className="hidden sm:block" /> Srinivasa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-8 text-lg md:text-xl text-neutral-300 font-light max-w-2xl mx-auto text-balance"
        >
          I build reliable agentic and backend AI systems — turning messy,
          real-world problems into systems people can depend on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={scrollToWork}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-ink text-sm font-semibold hover:bg-accent-soft transition-colors"
          >
            View my work
          </button>
          <a
            href="Tharika_Vikas_Srinivasa_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-colors"
          >
            <FileDown size={16} />
            Résumé
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400"
      >
        <ArrowDown className="animate-bounce" size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
