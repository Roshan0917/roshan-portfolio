import "./Timeline.css";
import { motion } from "framer-motion";

import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaBrain
} from "react-icons/fa";


const timelineData = [

{
year:"Learning Phase",
icon:<FaCode/>,
title:"Started Web Development",
description:
"Explored modern web technologies and built a strong foundation in frontend development, creating responsive and interactive user experiences."
},


{
year:"Full Stack Development",
icon:<FaLaptopCode/>,
title:"MERN Stack Developer",
description:
"Worked with React, Node.js, Express.js and MongoDB to develop scalable full-stack web applications with modern architecture."
},


{
year:"Project Building",
icon:<FaRocket/>,
title:"Building Real World Applications",
description:
"Created full-stack projects focused on authentication, database management, APIs, responsive design and user experience."
},


{
year:"Continuous Growth",
icon:<FaBrain/>,
title:"Improving Skills & Problem Solving",
description:
"Continuously improving development skills, exploring new technologies and solving real-world engineering problems."
}

];



function Timeline(){

return(

<section className="timeline-section" id="timeline">


<div className="container">


<span className="section-tag">
MY JOURNEY
</span>


<h2 className="section-title">

Developer 
<span>
Timeline
</span>

</h2>


<p className="section-subtitle">
A glimpse of my learning journey and milestones.
</p>



<div className="timeline">


<div className="timeline-line"></div>


{
timelineData.map((item,index)=>(


<motion.div

className={`timeline-item ${
index%2===0 ? "left":"right"
}`}

key={index}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.6,
delay:index*.15
}}

viewport={{
once:true
}}

>


<div className="timeline-dot">

{item.icon}

</div>



<div className="timeline-card">


<span className="timeline-year">
{item.year}
</span>


<h3>
{item.title}
</h3>


<p>
{item.description}
</p>


</div>


</motion.div>


))

}


</div>


</div>


</section>


)

}


export default Timeline;