import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaHeart
} from "react-icons/fa";

import {
  SiLeetcode
} from "react-icons/si";


function Footer(){

return(

<footer className="footer">


<div className="container footer-container">



<div className="footer-brand">


<h2>
Roshan<span>.</span>
</h2>


<p>
Full Stack MERN Developer crafting
modern web experiences with clean code
and creative solutions.
</p>



<div className="footer-socials">


<a
href="https://github.com/Roshan0917"
target="_blank"
rel="noreferrer"
>
<FaGithub/>
</a>



<a
href="https://www.linkedin.com/in/roshan-kumar-770180395/"
target="_blank"
rel="noreferrer"
>
<FaLinkedin/>
</a>



<a
href="https://leetcode.com"
target="_blank"
rel="noreferrer"
>
<SiLeetcode/>
</a>


</div>


</div>





<div className="footer-links">


<h3>
Quick Links
</h3>


<a href="#home">
Home
</a>


<a href="#about">
About
</a>


<a href="#skills">
Skills
</a>


<a href="#projects">
Projects
</a>


<a href="#contact">
Contact
</a>


</div>






<div className="footer-connect">


<h3>
Let's Connect
</h3>


<p>
Open for opportunities,
collaborations and interesting projects.
</p>


<a 
href="#contact"
className="footer-btn"
>

Contact Me

</a>


</div>




</div>





<div className="footer-bottom">


<p>

© {new Date().getFullYear()} Roshan Kumar.
Made with <FaHeart/> using React

</p>


</div>




</footer>


)

}


export default Footer;