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
    date: "Jun 2026 — Present",
    role: "Artificial Intelligence Engineer",
    company: "Punjab Information Technology Board (PITB)",
    desc: "Developing AI-powered solutions and intelligent systems using Python, LLMs, and machine learning frameworks. Building and deploying chatbots and NLP pipelines for government-scale digital services.",
  },
  {
    current: false,
    date: "Jan 2026 — May 2026",
    role: "WordPress Developer",
    company: "Marshmallow Advertising Pvt Ltd",
    desc: "Developed and customized WordPress themes and plugins for client projects. Delivered responsive, brand-aligned websites and collaborated with design and marketing teams.",
  },
  {
    current: false,
    date: "Jun 2025 — Aug 2025",
    role: "MERN Stack Developer — Intern",
    company: "Zayyan Soft Tech (Remote)",
    desc: "Built full-stack web applications using MongoDB, Express.js, React, and Node.js. Gained hands-on experience with REST API development, state management, and modern JavaScript patterns.",
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
              key={job.role}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={i}
            >
              {job.badge && <span className="timeline-badge">{job.badge}</span>}
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
