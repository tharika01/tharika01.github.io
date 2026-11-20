import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section ref={ref} id="about" className="py-24 md:py-32 bg-ink scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-accent text-xs font-medium tracking-[0.3em] uppercase mb-4">About</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
            Engineering AI that people can rely on
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-neutral-300">
            I'm a Software Engineer at A.P. Moller-Maersk, where I build production AI and backend
            systems. My work has evolved from APIs, messaging, and platform engineering into agentic
            workflows that help resolve <span className="text-white">18,000–20,000 customer cases</span> each
            day across 30+ countries.
          </p>

          <p className="text-lg leading-relaxed text-neutral-300">
            I led engineering of an AI documentation assistant used across <span className="text-white">25+
            internal products</span>, owning retrieval, backend APIs, Docker, CI/CD, and a full
            evaluation pipeline. Today I focus on making large LLM agent systems dependable: raising
            accuracy, cutting tool errors, and constraining execution so agents behave predictably
            around real enterprise processes.
          </p>

          <p className="text-lg leading-relaxed text-neutral-300">
            I'm especially interested in the engineering behind reliable LLM systems — retrieval
            quality, evaluation, context control, structured execution, tool reliability, and
            production debugging. I care as much about understanding <span className="text-white">why a
            system fails</span> as about building it, and I often work closely with domain experts to
            capture knowledge that was never written down.
          </p>

          <p className="text-lg leading-relaxed text-neutral-300">
            This work has been recognized with Maersk's <span className="text-white">Star Award</span> and
            two <span className="text-white">Spot Awards</span>. I love learning, and I ramp up quickly on
            new technologies and unfamiliar codebases — motivated by AI that makes a real difference to
            the people who use it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
