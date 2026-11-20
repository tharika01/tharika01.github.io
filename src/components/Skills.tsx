import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Bot, Database, Cloud } from 'lucide-react';

interface Skill {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: Skill[] = [
  {
    category: "AI / LLM Systems",
    icon: <Bot size={24} />,
    skills: ["Agentic Workflows", "Tool Design & Orchestration", "RAG, Reranking & Retrieval", "LangChain & Context Engineering", "LLM Evaluation"]
  },
  {
    category: "Backend",
    icon: <Database size={24} />,
    skills: ["Python & FastAPI", "Java & Spring Boot", "REST APIs", "PostgreSQL", "Apache Camel & ActiveMQ"]
  },
  {
    category: "Cloud & Infrastructure",
    icon: <Cloud size={24} />,
    skills: ["Docker & Kubernetes", "GitHub Actions", "Terraform", "Azure & GCP", "BigQuery & GCS"]
  },
  {
    category: "Operations & Tooling",
    icon: <Code size={24} />,
    skills: ["Grafana & Prometheus", "CI/CD", "Production Debugging", "Vault & Keycloak", "Git, pyproject.toml & uv"]
  },
];

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-accent text-xs font-medium tracking-[0.3em] uppercase mb-4">Toolkit</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white">Skills &amp; Expertise</h2>
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
                <div className="text-accent mr-3">
                  {skillGroup.icon}
                </div>
                <h3 className="text-base font-semibold text-white">{skillGroup.category}</h3>
              </div>

              <ul className="space-y-2.5">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-neutral-400 text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
