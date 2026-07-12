import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";

import "./Contact.css";


function Contact() {


const form = useRef();

const [status,setStatus] = useState("");



const sendEmail = (e)=>{

e.preventDefault();


emailjs
.sendForm(
"Roshan0917",
"template_sur70xl",
form.current,
"ZYyp7LPBJgI6F0Ssz"
)

.then(()=>{

setStatus("Message Sent Successfully 🚀");

form.current.reset();

})

.catch((error)=>{

console.log(error);

setStatus("Something went wrong ❌");

});


};



return (

<section className="contact-section" id="contact">


<motion.h2

className="contact-title"

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.7}}

>

Let's <span>Connect</span>

</motion.h2>




<div className="contact-container">



{/* LEFT */}


<motion.div

className="contact-info"

initial={{opacity:0,x:-50}}

whileInView={{opacity:1,x:0}}

>


<h2>

Let's Build Something Amazing 🚀

</h2>


<p>

Have an idea, project or opportunity?
Feel free to reach out. I would love
to connect and collaborate.

</p>



<div className="info-item">

<FaEnvelope/>

<a href="mailto:sroshan0917@gmail.com">

sroshan0917@gmail.com

</a>

</div>




<div className="socials">

  <a
    href="https://github.com/Roshan0917"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/roshan-kumar-770180395/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://www.instagram.com/roshan09_12/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

</div>


</motion.div>






{/* RIGHT FORM */}



<motion.form

ref={form}

onSubmit={sendEmail}

className="contact-form"


initial={{opacity:0,x:50}}

whileInView={{opacity:1,x:0}}

>


<input

type="text"

name="user_name"

placeholder="Your Name"

required

/>



<input

type="email"

name="user_email"

placeholder="Your Email"

required

/>



<input

type="text"

name="subject"

placeholder="Subject"

required

/>



<textarea

name="message"

placeholder="Your Message"

rows="5"

required

></textarea>




<button type="submit">

Send Message 🚀

</button>



<p className="status">

{status}

</p>



</motion.form>




</div>


</section>

)

}


export default Contact;