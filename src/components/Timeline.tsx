import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  type: 'work' | 'project';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Customer Email Automation using Agentic AI",
    company: "A.P Moller Maersk",
    location: "Bangalore, India",
    period: "Feb 2026 - Present",
    description: "Building an AI-driven customer-support automation platform for high-volume global logistics workflows.",
    highlights: [
      "Implemented SOP-driven agent workflows across about 30 country-specific process variations.",
      "Orchestrated 30+ internal tools and APIs spanning multiple enterprise products.",
      "Improved reliability by addressing context bloat, looping, invalid tool arguments, non-deterministic execution, and downstream failures.",
      "Introduced composite tools and structured workflows to reduce agent steps and constrain execution paths."
    ],
    type: "project"
  },
  {
    id: 2,
    title: "Multi-Product AI Documentation Assistant",
    company: "A.P Moller Maersk",
    location: "Bangalore, India",
    period: "Jul 2025 - Jan 2026",
    description: "Independently built an end-to-end AI knowledge assistant supporting users across 15+ internal products.",
    highlights: [
      "Designed semantic-tag-based classification and retrieval for product documentation.",
      "Owned backend APIs, database operations, retrieval, testing, evaluation, Dockerization, and CI/CD.",
      "Created a reviewed golden dataset and evaluated faithfulness, helpfulness, recall, F1, and accuracy.",
      "Built a packaged Python CLI with pyproject.toml and uv and deployed through an existing Kubernetes platform."
    ],
    type: "project"
  },
  {
    id: 3,
    title: "Associate Software Engineer - Backend & Platform",
    company: "A.P. Moller-Maersk",
    location: "Bangalore, India",
    period: "Jul 2024 - Jun 2025",
    description: "Developed and operated enterprise backend and integration services across cloud-native environments.",
    highlights: [
      "Built REST APIs with Python, FastAPI, Java, and Spring Boot and Apache Camel email/ActiveMQ routes.",
      "Worked across PostgreSQL, Keycloak, Vault, GitHub Actions, Helm, Docker, Kubernetes, Azure, and GCP.",
      "Reduced a Docker image from about 1.2 GB to 360 MB - an approximately 70% reduction.",
      "Supported production observability and debugging with Grafana and Prometheus."
    ],
    type: "work"
  },
  {
    id: 4,
    title: "Software Engineering Intern",
    company: "A.P. Moller-Maersk",
    location: "Bangalore, India",
    period: "Jul 2023 - Jun 2024",
    description: "Built an enterprise software foundation across backend, platform, and early conversational AI work.",
    highlights: [
      "Proactively built a LangChain-based RAG assistant over internal team documentation.",
      "Created a Rasa conversational prototype that invoked internal APIs to provision platform resources.",
      "Contributed across APIs, messaging, authentication, containers, Kubernetes, secrets, monitoring, and deployment."
    ],
    type: "work"
  },
];

const Timeline: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-8">Experience & Projects</h2>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-0.5"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-black rounded-full transform -translate-x-1/2 z-10">
                <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                      item.type === 'work' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
                    }`}>
                      {item.type === 'work' ? 'Work' : 'Project'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-800 font-medium mb-2">{item.company}</p>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {item.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {item.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>
                  <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="leading-relaxed">{highlight}</li>
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
