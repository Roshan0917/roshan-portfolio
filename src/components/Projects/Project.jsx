import React, { useState } from "react";
import "./Project.css";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiChartdotjs,
  SiCloudinary,
  SiBootstrap,
  SiJavascript,
  SiMui
} from "react-icons/si";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle
} from "react-icons/fa";


const projects = [

{
title:"Zerodha Clone",

status:"Completed",

image:"/images/projects/zerodha.png",

subtitle:
"Full Stack Trading Platform | MERN Stack",

description:
"Developed a full-stack trading platform inspired by Zerodha with secure authentication, portfolio management, live stock tracking and interactive analytics dashboards. Built REST APIs, integrated MongoDB database and created responsive trading interfaces.",


tech:[
{name:"React",icon:<SiReact/>},
{name:"Node.js",icon:<SiNodedotjs/>},
{name:"MongoDB",icon:<SiMongodb/>},
{name:"Express",icon:<SiExpress/>},
{name:"Chart.js",icon:<SiChartdotjs/>},
{name:"Material UI",icon:<SiMui/>}
],


features:[

"Secure user authentication",
"Live stock price tracking",
"Holdings & portfolio management",
"Interactive investment analytics",
"Fund management workflow",
"Responsive dashboard UI"

],


github:
"https://github.com/Roshan0917/ZerodhaClone",

live:
"https://zerodha-clone-frontend-sable.vercel.app/"

},



{


title:"Wanderlust",

status:"Completed",

image:"/images/projects/wanderlust.png",


subtitle:
"Airbnb Inspired Travel Platform | Full Stack",


description:
"Built a full-stack travel listing platform where users can explore destinations, create properties and share reviews. Implemented authentication, cloud image storage, location mapping and complete CRUD functionality.",



tech:[

{name:"Node.js",icon:<SiNodedotjs/>},

{name:"Express",icon:<SiExpress/>},

{name:"MongoDB",icon:<SiMongodb/>},

{name:"Bootstrap",icon:<SiBootstrap/>},

{name:"Cloudinary",icon:<SiCloudinary/>},

{name:"JavaScript",icon:<SiJavascript/>}

],



features:[

"Passport authentication",

"Create and manage listings",

"Cloudinary image upload",

"Review and rating system",

"Location based mapping",

"Wishlist functionality"

],



github:
"https://github.com/Roshan0917/Wanderlust",


live:
"https://wanderlust-xmox.onrender.com/listings"


}

];





function Project(){


const [selectedTech,setSelectedTech] = useState(null);

const [selectedProject,setSelectedProject] = useState(null);

const [activeOverlay,setActiveOverlay] = useState(null);



return(


<section className="projects" id="projects">


<h2 className="project-heading">

Featured <span>Projects</span>

</h2>





{
projects.map((project,index)=>(


<div 
className="project-card"
key={index}
>




<div

className={`project-image ${
activeOverlay === index ? "active" : ""
}`}


onClick={()=>{


if(window.innerWidth <= 600){

setActiveOverlay(

activeOverlay === index 
? null 
: index

);

}


}}


>


<img

src={project.image}

alt={project.title}

/>





<div className="image-overlay">



<a

href={project.github}

target="_blank"

rel="noreferrer"

onClick={(e)=>e.stopPropagation()}

>

<FaGithub/>

Github

</a>






<a

href={project.live}

target="_blank"

rel="noreferrer"

onClick={(e)=>e.stopPropagation()}

>

<FaExternalLinkAlt/>

Live

</a>





</div>



</div>







<div className="project-content">





<div className="project-status">


<FaCheckCircle/>


{project.status}


</div>






<h3>

{project.title}

</h3>






<h5>

{project.subtitle}

</h5>






<p>

{project.description}

</p>







<div className="tech-container">



{

project.tech
.slice(0,4)
.map((item,index)=>(


<div

className="tech-icon"

key={index}

>


{item.icon}


<span>

{item.name}

</span>


</div>



))


}




<button

className="more-btn"

onClick={()=>setSelectedTech(project.tech)}

>

+ More

</button>




</div>







<button

className="brief-btn"

onClick={()=>setSelectedProject(project)}

>

View Project Details →

</button>







</div>




</div>



))


}







{
selectedTech &&


<div className="modal">


<div className="modal-box">


<h2>

Technology Stack

</h2>




<div className="all-tech">


{

selectedTech.map((item,index)=>(


<div

className="all-tech-item"

key={index}

>


{item.icon}


<span>

{item.name}

</span>



</div>



))

}



</div>




<button

onClick={()=>setSelectedTech(null)}

>

Close

</button>




</div>


</div>



}









{
selectedProject &&


<div className="modal">


<div className="modal-box brief-box">


<h2>

{selectedProject.title}

</h2>




<p>

{selectedProject.description}

</p>





<h3>

Key Features

</h3>




<ul>


{

selectedProject.features.map((feature,index)=>(


<li key={index}>

✓ {feature}

</li>


))


}



</ul>







<div className="modal-buttons">





<a

href={selectedProject.github}

target="_blank"

rel="noreferrer"

>


<FaGithub/>

Github


</a>






<a

href={selectedProject.live}

target="_blank"

rel="noreferrer"

>


<FaExternalLinkAlt/>

Live Website


</a>





</div>








<button

onClick={()=>setSelectedProject(null)}

>

Close

</button>




</div>



</div>



}





</section>


)

}


export default Project;