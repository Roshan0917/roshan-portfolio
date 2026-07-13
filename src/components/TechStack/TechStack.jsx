import "./TechStack.css";
import techStack from "../../data/TechStack";
import TechCard from "./TechCard";

function TechStack() {
  return (
    <section className="tech-section" id="skills">

      <div className="container">

        <span className="section-tag">
          TECH ARSENAL
        </span>

       <h2 className="section-title">

My

<span>
Technology Arsenal
</span>

</h2>


<p className="section-subtitle">

A collection of technologies I use to design,
build and deploy scalable full-stack applications.

</p>

        <div className="tech-grid">

          {techStack.map((tech, index) => (

            <TechCard
              key={tech.title}
              tech={tech}
              index={index}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default TechStack;