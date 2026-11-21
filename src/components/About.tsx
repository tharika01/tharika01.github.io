import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section ref={ref} id="about" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-accent text-xs font-medium tracking-[0.3em] uppercase mb-4">About</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
            A little about me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-neutral-300">
            I'm a software engineer based in Bengaluru who enjoys turning messy, real-world problems
            into <span className="text-white">systems people can genuinely rely on</span>. I started out
            in backend and platform engineering, and over time found myself drawn deeper into AI,
            building software that retrieves, reasons, and makes decisions.
          </p>

          <p className="text-lg leading-relaxed text-neutral-300">
            What fascinates me most is the engineering that makes intelligent systems trustworthy. I'm
            endlessly curious about how large language models can be made dependable: how thoughtful
            retrieval, evaluation, and design turn a promising demo into something that behaves
            predictably in the real world. I care as much about understanding <span className="text-white">why
            a system fails</span> as about building it.
          </p>

          <p className="text-lg leading-relaxed text-neutral-300">
            I pick up new technologies and unfamiliar codebases quickly, and I like working closely with
            the people a system is actually for, asking questions and capturing the knowledge that never
            made it into the docs. To me, good software is as much about <span className="text-white">curiosity,
            empathy, and clarity</span> as it is about code.
          </p>

          <p className="text-lg leading-relaxed text-neutral-300">
            Outside of my day-to-day work, I like following where AI is heading, from agents and
            evaluation to developer tooling, and experimenting with new ideas. Ultimately, I'm motivated
            by technology that makes a real difference to the people who use it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
