import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a
            href="https://github.com/ibtahaj-nadeem"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ibtahaj-nadeem"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:ibtahaj.nadeem20@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Muhammad Ibtahaj Nadeem. All rights reserved.</p>
      </div>
    </footer>
  );
}
