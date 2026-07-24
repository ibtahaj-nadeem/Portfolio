import { motion } from "framer-motion";
import { FiMail, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-inner">
          {/* Left — text */}
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1>
              Muhammad Ibtahaj
              <br />
              Nadeem
            </h1>
            <p className="hero-roles">
              <span className="gradient">MERN Stack Developer</span> · AI
              Engineer · WordPress Developer
            </p>
            <p className="hero-desc">
              I build full-stack web applications, craft intelligent AI
              solutions, and create polished WordPress experiences — turning
              ideas into products that make an impact.
            </p>
            <div className="hero-buttons">
              <Link to="contact" smooth duration={500} offset={-64}>
                <button className="btn btn-primary">
                  <FiMail size={16} />
                  Get in Touch
                </button>
              </Link>
              <a href="/cv.pdf" download="Ibtahaj_Nadeem_CV.pdf">
                <button className="btn btn-outline">
                  <FiDownload size={16} />
                  Download CV
                </button>
              </a>
              <a
                href="https://linkedin.com/in/ibtahaj-nadeem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline">
                  <FaLinkedin size={16} />
                  LinkedIn
                </button>
              </a>
              <a
                href="https://github.com/ibtahaj-nadeem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline">
                  <FaGithub size={16} />
                  GitHub
                </button>
              </a>
            </div>
          </motion.div>

          {/* Right — profile picture */}
          <motion.div
            className="hero-image-wrap"
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
          >
            <div className="hero-image-ring">
              <img
                src="my_image.jpg"
                alt="Muhammad Ibtahaj Nadeem"
                className="hero-image"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hero-image-placeholder">
                <span>IN</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
