import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const jobs = [
  {
    current: true,
    badge: "Current",
    date: "Sept 2026 — Present",
    role: "Web Developer",
    company: "Malta Marketing Agency",
    desc: "Developing and maintaining modern, responsive websites using WordPress and Shopify. Working with custom themes, plugins, website customization, and e-commerce functionality while creating user-friendly and client-focused web solutions.",
  },
  {
    current: false,
    date: "Jun 2026 — Sept 2026",
    role: "Artificial Intelligence Engineer — Intern",
    company: "Punjab Information Technology Board (PITB)",
    desc: "Worked on AI-powered solutions and intelligent systems using Python, LLMs, and machine learning technologies. Contributed to chatbot development, NLP workflows, and practical AI solutions for digital services.",
  },
  {
    current: false,
    date: "Jan 2026 — May 2026",
    role: "WordPress Developer",
    company: "Marshmallow Advertising Pvt Ltd",
    desc: "Developed and customized WordPress websites for client projects. Worked with themes, plugins, responsive layouts, and website customization while delivering brand-aligned web solutions.",
  },
  {
    current: false,
    date: "Jun 2025 — Aug 2025",
    role: "MERN Stack Developer — Intern",
    company: "Zayyan Soft Tech (Remote)",
    desc: "Built full-stack web applications using MongoDB, Express.js, React, and Node.js. Gained hands-on experience with REST API development, state management, responsive interfaces, and modern JavaScript patterns.",
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.p
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Career
        </motion.p>

        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Work Experience
        </motion.h2>

        <div className="timeline">
          {jobs.map((job, i) => (
            <motion.div
              className={`timeline-item${job.current ? " current" : ""}`}
              key={`${job.role}-${job.company}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={i}
            >
              {job.badge && (
                <span className="timeline-badge">{job.badge}</span>
              )}

              <p className="timeline-date">{job.date}</p>

              <h3 className="timeline-role">{job.role}</h3>

              <p className="timeline-company">{job.company}</p>

              <p className="timeline-desc">{job.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}