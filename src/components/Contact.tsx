import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, FileDown } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section ref={ref} id="contact" className="py-24 md:py-32 bg-ink-900 border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent text-xs font-medium tracking-[0.3em] uppercase mb-4">Contact</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-6">Get in touch</h2>

          <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
            I'm always happy to talk about AI systems, agents, and reliable engineering.
            Reach out, or take a look at my résumé.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:tharikavsrinivasa@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-ink text-sm font-semibold hover:bg-accent-soft transition-colors"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/tharika-vikas-srinivasa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/tharika01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="Tharika_Vikas_Srinivasa_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <FileDown size={18} />
              Résumé
            </a>
          </div>

          <p className="mt-16 text-sm text-neutral-600">
            © {new Date().getFullYear()} Tharika Vikas Srinivasa · Software Engineer · AI Systems
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
