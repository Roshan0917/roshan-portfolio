import "./About.css";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-container">

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h5>ABOUT ME</h5>

          <h2>
            Passionate Developer <span>& Problem Solver</span>
          </h2>

          <p>
            I'm Roshan, a 3rd year Electronics & Communication Engineering
            student at <strong>BIT Mesra</strong>.
            I enjoy building modern full-stack web applications using the
            MERN Stack and continuously improving my problem-solving skills
            through Data Structures & Algorithms.
          </p>

          <p>
            Beyond coding, I enjoy creating content, exploring new
            technologies, watching cricket and listening to music.
            My goal is to build products that people genuinely enjoy using.
          </p>

          <div className="about-info">

            <div>
              <FaGraduationCap />
              <span>BIT Mesra</span>
            </div>

            <div>
              <FaMapMarkerAlt />
              <span>Gorakhpur → Ranchi</span>
            </div>

            <div>
              <FaLaptopCode />
              <span>MERN Stack</span>
            </div>

            <div>
              <FaCode />
              <span>Problem Solver</span>
            </div>

          </div>

        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <div className="stat-card">
            <h1>2+</h1>
            <p>Major Projects</p>
          </div>

          <div className="stat-card">
            <h1>3rd</h1>
            <p>Year Student</p>
          </div>

          <div className="stat-card">
            <h1>100%</h1>
            <p>Learning Mindset</p>
          </div>

          <div className="stat-card">
            <h1>MERN</h1>
            <p>Full Stack Development</p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;