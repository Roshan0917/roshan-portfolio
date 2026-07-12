import "./Hero.css";

import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaBriefcase,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {

  return (

    <section className="hero" id="home">

      {/* Background Blur */}

      <div className="hero-blur blur1"></div>
      <div className="hero-blur blur2"></div>

      {/* ================= LEFT ================= */}

      <motion.div

        className="hero-left"

        initial={{ opacity: 0, x: -70 }}

        animate={{ opacity: 1, x: 0 }}

        transition={{ duration: .9 }}

      >

        <p className="hero-tag">

          👋 Hi, I'm

        </p>



        <h1>

          Roshan <span>Kumar</span>

        </h1>



        <TypeAnimation

          sequence={[

            "Full Stack MERN Developer",
            2200,

            "Frontend Developer",
            2200,

            "Backend Developer",
            2200,

            "React Developer",
            2200,

            "Node.js Developer",
            2200,

            "DSA Enthusiast",
            2200,

          ]}

          wrapper="h2"

          speed={45}

          repeat={Infinity}

        />



        <p className="hero-desc">

          Passionate Full Stack MERN Developer focused on building
          modern, scalable and high-performance web applications.

          I love transforming ideas into real-world products with
          beautiful user interfaces, efficient backend architecture
          and clean, maintainable code.

        </p>



        {/* Buttons */}

        <div className="hero-btns">

          <a

            href="#projects"

            className="primary-btn"

          >

            Explore My Projects

            <FaArrowRight />

          </a>

        </div>



        {/* Social Icons */}

        <div className="socials">

          <a

            href="https://github.com/Roshan0917"

            target="_blank"

            rel="noopener noreferrer"

            title="GitHub"

          >

            <FaGithub />

          </a>



          <a

            href="https://www.linkedin.com/in/roshan-kumar-770180395/"

            target="_blank"

            rel="noopener noreferrer"

            title="LinkedIn"

          >

            <FaLinkedin />

          </a>
                    {/* Hidden LeetCode */}

          {/* Uncomment when your profile is ready */}

          {/*
          <a
            href="https://leetcode.com/u/YOUR_USERNAME/"
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode"
          >
            <SiLeetcode />
          </a>
          */}

        </div>


        {/* Stats */}

        <div className="hero-stats">

          <motion.div
            className="stat-card"
            whileHover={{
              y: -10,
              scale: 1.03
            }}
          >

            <FaBriefcase />

            <h3>2</h3>

            <p>Major Projects</p>

          </motion.div>



          <motion.div
            className="stat-card"
            whileHover={{
              y: -10,
              scale: 1.03
            }}
          >

            <FaLaptopCode />

            <h3>8+</h3>

            <p>Technologies</p>

          </motion.div>



          
        </div>

      </motion.div>

            {/* ================= RIGHT ================= */}

      <motion.div

        className="hero-right"

        initial={{
          opacity:0,
          scale:.8
        }}

        animate={{
          opacity:1,
          scale:1
        }}

        transition={{
          duration:1
        }}

      >

        <div className="profile-wrapper">

          <div className="profile-glow"></div>

          <div className="profile-circle">

            <div className="ring ring1"></div>

            <div className="ring ring2"></div>

            <img
              src="/images/profile/profile.webp"
              alt="Roshan Kumar"
            />

          </div>

        </div>

      </motion.div>

    </section>

  );

}

export default Hero;