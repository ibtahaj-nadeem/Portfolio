import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stats = [
  { number: "1+", label: "Years Experience" },
  { number: "3", label: "Roles Held" },
  { number: "BS CS", label: "COMSATS WAH" },
  { number: "3", label: "Tech Domains" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Building digital
              <br />
              experiences.
            </h2>
            <div className="about-text">
              <p>
                I'm a versatile developer and AI engineer with a strong
                foundation in computer science. I specialize in building
                full-stack web applications using the MERN stack, developing
                AI-powered solutions with Python and large language models, and
                delivering professional WordPress websites.
              </p>
              <p>
                With hands-on experience across internships and professional
                roles, I bring a practical, results-driven mindset to every
                project — whether it's a scalable backend, an intelligent
                chatbot, or a pixel-perfect frontend.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="stats"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
