import "./Navbar.css";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";


function Navbar() {


const [scrolled,setScrolled]=useState(false);
const [menuOpen,setMenuOpen]=useState(false);
const [active,setActive]=useState("home");



useEffect(()=>{


const handleScroll=()=>{


setScrolled(window.scrollY > 20);



const sections=[
"home",
"about",
"skills",
"projects",
"contact"
];


let current="home";


sections.forEach((id)=>{


const section=document.getElementById(id);


if(section){

const sectionTop = section.offsetTop - 200;


if(window.scrollY >= sectionTop){

current=id;

}

}


});


setActive(current);


};



window.addEventListener(
"scroll",
handleScroll
);


handleScroll();


return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};


},[]);





const closeMenu=()=>{

setMenuOpen(false);

};




const navItems=[

{
name:"Home",
id:"home"
},

{
name:"About",
id:"about"
},

{
name:"Tech Stack",
id:"skills"
},

{
name:"Projects",
id:"projects"
},

{
name:"Contact",
id:"contact"
}

];





return(

<header 
className={`navbar ${scrolled?"scrolled":""}`}
>


<div className="container nav-container">



<a 
href="#home"
className="logo"
onClick={closeMenu}
>

Roshan<span>.</span>

</a>





<nav 
className={
menuOpen
?
"nav-links active"
:
"nav-links"
}
>


{

navItems.map((item)=>(


<a

key={item.id}

href={`#${item.id}`}

className={
active===item.id
?
"active"
:
""
}

onClick={closeMenu}

>

{item.name}

</a>


))


}


</nav>






<button

className="menu-btn"

onClick={()=>setMenuOpen(!menuOpen)}

>


{
menuOpen
?
<HiOutlineX/>
:
<HiOutlineMenuAlt3/>
}


</button>





</div>


</header>


)


}


export default Navbar;