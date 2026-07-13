import { useEffect, useState } from "react";
import "./Cursor.css";


function Cursor(){

const [position,setPosition]=useState({
x:0,
y:0
});


const [hover,setHover]=useState(false);



useEffect(()=>{


const moveCursor=(e)=>{

setPosition({
x:e.clientX,
y:e.clientY
});

};



const handleHover=()=>{

setHover(true);

};



const handleLeave=()=>{

setHover(false);

};




window.addEventListener(
"mousemove",
moveCursor
);



const links=document.querySelectorAll(
"a,button,input,.tech-icon,.project-card,.more-btn,.brief-btn"
);



links.forEach((item)=>{

item.addEventListener(
"mouseenter",
handleHover
);


item.addEventListener(
"mouseleave",
handleLeave
);


});



return()=>{

window.removeEventListener(
"mousemove",
moveCursor
);


links.forEach((item)=>{

item.removeEventListener(
"mouseenter",
handleHover
);


item.removeEventListener(
"mouseleave",
handleLeave
);


});


};


},[]);




return(

<div

className={
`custom-cursor ${hover?"cursor-hover":""}`
}

style={{

left:`${position.x}px`,

top:`${position.y}px`

}}

/>

)

}


export default Cursor;