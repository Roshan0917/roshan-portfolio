import "./Hero.css";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaMouse,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">

      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <p className="hero-tag">👋 Hello, I'm</p>

        <h1>
          Roshan <span>.</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack MERN Developer",
            2000,
            "Frontend Developer",
            2000,
            "Backend Developer",
            2000,
            "Problem Solver",
            2000,
          ]}
          wrapper="h2"
          speed={45}
          repeat={Infinity}
        />

        <p className="hero-desc">
          I design and build modern web applications with a strong focus
          on performance, clean UI and great user experience.
        </p>

        <div className="hero-btns">

          <button className="primary-btn">
            View Projects
            <FaArrowRight />
          </button>

          <button className="secondary-btn">
            Download Resume
          </button>

        </div>

        <div className="socials">

          <a
            href="https://github.com/Roshan0917"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >

        <div className="profile-circle">

          <div className="ring ring1"></div>
          <div className="ring ring2"></div>

          <img
            src="/images/profile/profile.webp"
            alt="Roshan"
          />

        </div>

      </motion.div>

      <div className="scroll-down">
        <FaMouse />
        <span>Scroll</span>
      </div>

    </section>
  );
}

export default Hero;