import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-8">About Me</h2>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              I'm an Associate Software Engineer and AI Systems Engineer at A.P. Moller-Maersk,
              where I build production AI and backend systems. My work has
              evolved from APIs, messaging, and platform engineering into agentic workflows that
              support customer-service operations handling roughly 18,000-20,000 cases each day.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              I independently built an AI documentation assistant used across 15+ internal products,
              taking it from semantic retrieval and backend APIs through Docker, Kubernetes, CI/CD,
              and evaluation. Today, I orchestrate 30+ enterprise tools and APIs in SOP-driven agent
              workflows spanning about 30 country-specific process variations.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              I'm especially interested in the engineering that makes LLM systems dependable:
              retrieval quality, evaluation, context control, structured execution, tool reliability,
              and production debugging. I enjoy turning promising prototypes into systems that behave
              predictably around real enterprise processes.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Outside engineering, you'll often find me painting and exploring color and form on
              canvas. That creative practice shapes how I approach problem-solving: with curiosity,
              patience, and attention to the experience behind the system.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black/10 rounded-lg -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
