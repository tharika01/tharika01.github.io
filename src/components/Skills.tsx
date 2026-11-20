import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Bot, Database, Cloud } from 'lucide-react';

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  tags: string[];
}

const skillsData: SkillGroup[] = [
  {
    category: 'Applied AI',
    icon: <Bot size={24} />,
    tags: [
      'RAG',
      'LangChain',
      'Evals',
      'Agentic AI',
      'Context Engineering',
      'Prompt Engineering',
    ],
  },
  {
    category: 'Backend',
    icon: <Database size={24} />,
    tags: [
      'Python',
      'FastAPI',
      'Java',
      'Spring Boot',
      'REST APIs',
      'PostgreSQL',
      'Apache Camel',
      'ActiveMQ',
    ],
  },
  {
    category: 'Cloud / Infrastructure',
    icon: <Cloud size={24} />,
    tags: [
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'Terraform',
      'Azure',
      'GCP',
      'BigQuery',
    ],
  },
  {
    category: 'Observability / Security',
    icon: <Code size={24} />,
    tags: ['Grafana', 'Prometheus', 'Vault', 'Keycloak'],
  },
];

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} id="skills" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white">Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl hover:border-accent/40 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="flex items-center mb-5">
                <div className="text-accent mr-3">{skillGroup.icon}</div>
                <h3 className="text-base font-semibold text-white">{skillGroup.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-neutral-300 bg-white/[0.06] border border-white/10 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
