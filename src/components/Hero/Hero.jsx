import "./Hero.css";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <p className="hello">👋 Hello, I'm</p>

        <h1>
          Roshan <span>.</span>
        </h1>

        <h2>Full Stack MERN Developer</h2>

        <p className="hero-desc">
          I build modern, responsive and scalable web applications
          using React, Node.js, Express and MongoDB.
        </p>

        <div className="hero-btns">

          <button className="primary-btn">
            View Projects
            <FaArrowRight />
          </button>

          <button className="secondary-btn">
            Resume
          </button>

        </div>

        <div className="socials">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="profile-circle">

          <img
            src="/images/profile/profile.webp"
            alt="profile"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;