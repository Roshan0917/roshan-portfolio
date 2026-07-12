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


const projects = [
  {
    title: "Zerodha Clone",
    image: "/images/projects/zerodha.png",

    subtitle: "Full Stack Trading Platform",

    description:
      "A MERN stack based trading application inspired by Zerodha that allows users to manage portfolios, track stocks and analyze investments through interactive dashboards.",

    tech: [
      { name:"React", icon:<SiReact/> },
      { name:"Node.js", icon:<SiNodedotjs/> },
      { name:"MongoDB", icon:<SiMongodb/> },
      { name:"Chart.js", icon:<SiChartdotjs/> },
      { name:"Express", icon:<SiExpress/> },
      { name:"Material UI", icon:<SiMui/> }
    ],


    features:[
      "Secure User Authentication",
      "Real-time Stock Tracking",
      "Watchlist Management",
      "Holdings & Positions",
      "Portfolio Analytics",
      "Fund Management System"
    ],

    github:"https://github.com/Roshan0917/ZerodhaClone",
    live:"https://zerodha-clone-frontend-sable.vercel.app/"
  },


  {
    title:"Wanderlust",

    image:"/images/projects/wanderlust.png",

    subtitle:"Travel Listing Platform",

    description:
    "A full-stack travel platform inspired by Airbnb where users can explore destinations, create listings and share reviews.",


    tech:[
      {name:"Node.js",icon:<SiNodedotjs/>},
      {name:"Express",icon:<SiExpress/>},
      {name:"MongoDB",icon:<SiMongodb/>},
      {name:"Bootstrap",icon:<SiBootstrap/>},
      {name:"Cloudinary",icon:<SiCloudinary/>},
      {name:"JavaScript",icon:<SiJavascript/>}
    ],


    features:[
      "User Authentication",
      "Create & Manage Listings",
      "Cloud Image Upload",
      "Review System",
      "Location Mapping",
      "Wishlist Feature"
    ],


    github:"https://github.com/Roshan0917/Wanderlust",
    live:"https://wanderlust-xmox.onrender.com/listings"

  }
];



const Project =()=>{

const [selectedTech,setSelectedTech]=useState(null);
const [selectedProject,setSelectedProject]=useState(null);



return(

<section className="projects" id="projects">


<h2 className="project-heading">
Featured <span>Projects</span>
</h2>



{
projects.map((project,index)=>(

<div className="project-card" key={index}>


<div className="project-image">

<img src={project.image} alt={project.title}/>


<div className="project-overlay">

<a href={project.github} target="_blank">
Github
</a>


<a href={project.live} target="_blank">
Live Demo
</a>


</div>


</div>



<div className="project-content">


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
project.tech.slice(0,4).map((item,index)=>(

<div className="tech-icon" key={index}>

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
View Project Brief →
</button>



</div>



</div>


))
}




{/* Tech Modal */}

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

<div className="all-tech-item" key={index}>

{item.icon}

<span>
{item.name}
</span>


</div>

))
}


</div>


<button onClick={()=>setSelectedTech(null)}>
Close
</button>


</div>

</div>

}




{/* Project Brief */}

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

<a href={selectedProject.github} target="_blank">
Github
</a>


<a href={selectedProject.live} target="_blank">
Live Website
</a>


</div>



<button onClick={()=>setSelectedProject(null)}>
Close
</button>


</div>

</div>

}


</section>


)

}


export default Project;