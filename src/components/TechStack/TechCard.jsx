import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { HiArrowUpRight } from "react-icons/hi2";


function TechCard({ tech,index }) {


const Icon = tech.icon;


return(

<motion.div

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.6,
delay:index*.08
}}

>


<Tilt

tiltMaxAngleX={10}

tiltMaxAngleY={10}

perspective={1400}

scale={1.04}

transitionSpeed={1200}

glareEnable={true}

glareMaxOpacity={0.18}

>


<div className="tech-card">


<div className="tech-glow"></div>



<div className="tech-top">


<div
className="tech-icon"
style={{
color:tech.color
}}
>

<Icon/>

</div>



<div className="tech-category">

{tech.category}

</div>


</div>





<h3>
{tech.title}
</h3>



<p>
{tech.desc}
</p>





<div className="tech-footer">


<span className="badge">

{tech.usedIn}

</span>


<HiArrowUpRight className="arrow"/>


</div>




</div>



</Tilt>


</motion.div>

)

}


export default TechCard;