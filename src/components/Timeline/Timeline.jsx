import "./Timeline.css";

import {
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaRocket
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

<section className="timeline" id="timeline">


<div className="container">


<span className="section-tag">
MY JOURNEY
</span>


<h2 className="section-title">

Learning

<span>
Timeline
</span>

</h2>



<div className="timeline-wrapper">


{
timelineData.map((item,index)=>(


<div 
className="timeline-item"
key={index}
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
{item.desc}
</p>


</div>


</div>


))
}



</div>


</div>


</section>

)

}


export default Timeline;