import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';

interface TimelineItem {
  id: number;
  role: string;
  project?: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  type: 'role' | 'project';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    role: "Software Engineer",
    project: "Customer Email Automation with Agentic AI",
    company: "A.P. Moller-Maersk",
    location: "Bangalore, India",
    period: "Feb 2026 - Present",
    description: "Improving the reliability of an LLM agent that resolves 18,000-20,000 customer cases a day across 30+ countries, including amendments to live bookings.",
    highlights: [
      "Helped raise response accuracy from ~30% to ~50% by translating undocumented expert knowledge into SOP logic, tool specs, and agent instructions.",
      "Built purpose-based response filtering that cut tool-output payloads by up to 97% (169K -> 4.7K characters, ~40K tokens saved per call).",
      "Designed composite tools that bundle multi-step backend reads into single deterministic calls, cutting tool calls per session by 44-52%.",
      "Led migration of agent data reads to a new API gateway: ~450K calls at 98.6% success with 83% lower p95 latency (1.8s -> 0.3s).",
      "Added structured error handling (85% drop in tool errors, 9.3% -> 1.4%) and fixed an amendment-cancellation bug (90% fewer failures)."
    ],
    type: "project"
  },
  {
    id: 2,
    role: "Software Engineer",
    project: "Multi-Product AI Documentation Assistant",
    company: "A.P. Moller-Maersk",
    location: "Bangalore, India",
    period: "Jul 2025 - Jan 2026",
    description: "Led engineering of an end-to-end RAG assistant answering questions across the documentation of 25+ internal products.",
    highlights: [
      "Designed tag-taxonomy indexing instead of vector search: an LLM tagged each document against a per-product taxonomy, with routing, reranking, and full-text fallback.",
      "Owned the backend APIs, retrieval, evaluation, Docker, and CI/CD, with GitHub Actions automating product onboarding and document re-tagging.",
      "Built an evaluation pipeline that generated a synthetic golden dataset (GPT-4.1 mini) and scored retrieval (precision, recall, F1) and answers (LLM-as-judge).",
      "Reached 4.5+/5 average answer scores on faithfulness, relevance, helpfulness, and completeness across pilot products (up to 4.9/5 faithfulness)."
    ],
    type: "project"
  },
  {
    id: 3,
    role: "Software Engineer",
    project: "Backend, platform engineering",
    company: "A.P. Moller-Maersk",
    location: "Bangalore, India",
    period: "Jul 2024 - Jun 2025",
    description: "Developed and operated enterprise backend and integration services across cloud-native environments.",
    highlights: [
      "Built REST APIs with Python and Spring Boot, plus Apache Camel routes for email and ActiveMQ workflows.",
      "Shrank a Docker image from ~1.2 GB to 360 MB (~70%) by restructuring its layers and dependencies.",
      "Worked across PostgreSQL, Keycloak, Vault, GitHub Actions, Docker, Kubernetes, GCP, and Azure.",
      "Supported production observability and debugging with Grafana and Prometheus."
    ],
    type: "project"
  },
  {
    id: 4,
    role: "Software Engineering Intern",
    company: "A.P. Moller-Maersk",
    location: "Bangalore, India",
    period: "Jul 2023 - Jun 2024",
    description: "Built an enterprise software foundation across backend, platform, and early conversational AI work.",
    highlights: [
      "Proactively built a LangChain-based RAG assistant over internal team documentation.",
      "Created a Rasa conversational prototype that invoked internal APIs to provision platform resources."
    ],
    type: "role"
  },
];

const Timeline: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} id="work" className="relative py-24 md:py-32 scroll-mt-20 bg-ink-900/45">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-accent text-xs font-medium tracking-[0.3em] uppercase mb-4">Experience</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white">Work</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/15 transform md:-translate-x-0.5"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`relative flex items-stretch mb-10 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 top-7 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-ink-900 transform -translate-x-1/2 z-10"></div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'
              }`}>
                <div className="bg-white/[0.03] border border-white/10 p-7 rounded-2xl hover:border-accent/40 hover:bg-white/[0.05] transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <span className={`inline-block px-3 py-1 text-[11px] font-medium tracking-wide rounded-full ${
                      item.type === 'role'
                        ? 'bg-accent/15 text-accent border border-accent/30'
                        : 'bg-white/10 text-neutral-300 border border-white/10'
                    }`}>
                      {item.type === 'role' ? 'Role' : 'Project'}
                    </span>
                  </div>

                  {item.project ? (
                    <>
                      <p className="text-accent text-sm font-medium mb-1">{item.role}</p>
                      <h3 className="font-serif text-xl md:text-2xl font-medium text-white mb-1.5">{item.project}</h3>
                      <p className="text-neutral-400 font-medium mb-3">{item.company}</p>
                    </>
                  ) : (
                    <>
                      <h3 className="font-serif text-xl md:text-2xl font-medium text-white mb-1.5">{item.role}</h3>
                      <p className="text-neutral-400 font-medium mb-3">{item.company}</p>
                    </>
                  )}

                  <div className="flex flex-wrap items-center text-xs text-neutral-500 mb-5 gap-x-4 gap-y-1">
                    <div className="flex items-center">
                      <Calendar size={13} className="mr-1.5" />
                      {item.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={13} className="mr-1.5" />
                      {item.location}
                    </div>
                  </div>

                  <p className="text-neutral-400 leading-relaxed mb-5 text-sm">{item.description}</p>
                  <ul className="space-y-2.5 text-sm text-neutral-300">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="leading-relaxed pl-5 relative">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-accent/60"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
