import "./Navbar.css";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";


function Navbar() {


const [scrolled,setScrolled]=useState(false);

const [menuOpen,setMenuOpen]=useState(false);



useEffect(()=>{


const handleScroll=()=>{

setScrolled(window.scrollY > 20);

};


window.addEventListener(
"scroll",
handleScroll
);



return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};


},[]);





useEffect(()=>{


if(menuOpen){

document.body.style.overflow="hidden";

}

else{

document.body.style.overflow="auto";

}



return()=>{

document.body.style.overflow="auto";

};


},[menuOpen]);





const closeMenu=()=>{

setMenuOpen(false);

};





return(


<header 
className={`navbar ${scrolled ? "scrolled" : ""}`}
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


<a href="#home" onClick={closeMenu}>
Home
</a>


<a href="#about" onClick={closeMenu}>
About
</a>


<a href="#skills" onClick={closeMenu}>
Tech Stack
</a>


<a href="#projects" onClick={closeMenu}>
Projects
</a>


<a href="#contact" onClick={closeMenu}>
Contact
</a>


</nav>






<button

className="menu-btn"

onClick={()=>setMenuOpen(!menuOpen)}

aria-label="Menu"

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