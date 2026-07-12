import { motion } from "framer-motion";
import { techStack } from "../../data/TechStack";
import "./TechStack.css";


function TechStack() {


return (

<section className="tech-section" id="skills">


<motion.h2

className="section-title"

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

>

My <span>Tech Stack</span>

</motion.h2>




<p className="section-subtitle">

Technologies and tools I use to build modern applications

</p>





<div className="skills-grid">


{

techStack.map((skill,index)=>{


const Icon = skill.icon;


return (


<motion.div


className="skill-card"


key={skill.name}


initial={{

opacity:0,

y:50

}}


whileInView={{

opacity:1,

y:0

}}


transition={{

duration:.5,

delay:index*.08

}}



whileHover={{

y:-12,

scale:1.05

}}



>



<div className="icon-box">


<Icon/>


</div>



<h3>

{skill.name}

</h3>


</motion.div>



)


})


}



</div>




</section>

)

}


export default TechStack;