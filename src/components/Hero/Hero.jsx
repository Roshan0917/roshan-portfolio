import "./Hero.css";
import profile from "../../../public/images/profile/profile.webp";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiGit,
} from "react-icons/si";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Glow */}

      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>

      <div className="container hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="hero-badge">

            👋 Welcome To My Portfolio

          </span>

          <h1>

            Hi, I'm

            <span> Roshan</span>

          </h1>

          <h2>

            <Typewriter
              words={[
                "Full Stack MERN Developer",
                "Problem Solver",
                "Frontend Enthusiast",
                "Backend Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={45}
            />

          </h2>

          <p>

            I build beautiful, scalable and modern web applications
            using React, Node.js, Express.js and MongoDB.

            Passionate about building products that solve
            real-world problems with clean code and elegant UI.

          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-btn"
            >

              View Projects

            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >

              Contact Me

            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/Roshan0917"
              target="_blank"
              rel="noreferrer"
            >

              <FaGithub />

            </a>

            <a
              href="https://www.linkedin.com/in/roshan-kumar-770180395/"
              target="_blank"
              rel="noreferrer"
            >

              <FaLinkedin />

            </a>

            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noreferrer"
            >

              <SiLeetcode />

            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
  className="hero-right"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>

  <div className="hero-profile">

    <div className="image-wrapper">

      <img
        src={profile}
        alt="Roshan"
        className="profile-image"
      />

    </div>

   <div className="status-card">

  <div className="status-top">

    <span className="status-dot"></span>

    <h4>Currently Building</h4>

  </div>

  <p>

    MERN Stack • DSA • AI / ML

  </p>

  <div className="progress">

    <div className="progress-fill"></div>

  </div>

  <small>

    Learning Never Stops 🚀

  </small>

</div>

  </div>

</motion.div>

      </div>


    </section>
  );
}

export default Hero;