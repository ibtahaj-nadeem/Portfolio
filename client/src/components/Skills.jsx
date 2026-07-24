import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const categories = [
  {
    title: "MERN Stack / Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    title: "Artificial Intelligence & ML",
    skills: [
      "Python",
      "Machine Learning",
      "Large Language Models",
      "Chatbot Development",
      "NLP",
      "Data Science",
    ],
  },
  {
    title: "WordPress",
    skills: [
      "Theme Customization",
      "Plugin Configuration",
      "Elementor",
      "WooCommerce",
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      "CI/CD Pipelines",
      "AWS",
      "Azure",
      "Git & GitHub",
      "Linux",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <motion.p
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Tech Stack
        </motion.p>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Skills & Technologies
        </motion.h2>

        <div className="skills-categories">
          {categories.map((cat, i) => (
            <motion.div
              className="skill-category"
              key={cat.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i}
            >
              <h3>
                <span className="bar" />
                {cat.title}
              </h3>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
