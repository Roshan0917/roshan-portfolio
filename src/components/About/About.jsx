import "./About.css";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaCode,
} from "react-icons/fa";

function About() {
  return (
    <section className="about section" id="about">

      <div className="container about-container">

        {/* LEFT */}

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h5>ABOUT ME</h5>

          <h2>
            Building Digital Experiences,
            <span> One Project at a Time.</span>
          </h2>

          <p>
            I'm <strong>Roshan</strong>, a third-year Electronics &
            Communication Engineering student at
            <strong> BIT Mesra</strong>.
            I enjoy building modern full-stack web applications using the
            MERN Stack while continuously improving my
            problem solving skills through Data Structures &
            Algorithms.
          </p>

          <p>
            Beyond development, I enjoy exploring emerging
            technologies, creating content, watching cricket,
            listening to music and building products that combine
            clean design with real world functionality.
          </p>

          <div className="about-grid">

            <div className="info-card">

              <FaGraduationCap />

              <div>

                <h4>Education</h4>

                <span>BIT Mesra</span>

              </div>

            </div>

            <div className="info-card">

              <FaMapMarkerAlt />

              <div>

                <h4>Location</h4>

                <span>Gorakhpur • Ranchi</span>

              </div>

            </div>

            <div className="info-card">

              <FaLaptopCode />

              <div>

                <h4>Specialization</h4>

                <span>MERN Stack</span>

              </div>

            </div>

            <div className="info-card">

              <FaCode />

              <div>

                <h4>Focus</h4>

                <span>Problem Solving</span>

              </div>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <div className="stats-grid">

            <div className="stat-card">

              <h1>2+</h1>

              <p>Major Projects</p>

            </div>

            <div className="stat-card">

              <h1>3+</h1>

              <p>Core Technologies</p>

            </div>

            <div className="stat-card">

              <h1>ECE</h1>

              <p>3rd Year Student</p>

            </div>

            <div className="stat-card">

              <h1>∞</h1>

              <p>Always Learning</p>

            </div>

          </div>

          <div className="focus-card">

            <h3>Current Focus</h3>

            <div className="progress-item">

              <span>MERN Development</span>

              <div className="progress">
                <div
                  className="progress-fill"
                  style={{ width: "95%" }}
                ></div>
              </div>

            </div>

            <div className="progress-item">

              <span>DSA & Problem Solving</span>

              <div className="progress">
                <div
                  className="progress-fill"
                  style={{ width: "65%" }}
                ></div>
              </div>

            </div>

            <div className="progress-item">

              <span>AI / ML</span>

              <div className="progress">
                <div
                  className="progress-fill"
                  style={{ width: "1%" }}
                ></div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;