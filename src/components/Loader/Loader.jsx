import "./Loader.css";
import { motion } from "framer-motion";
import { useEffect } from "react";


function Loader({setLoading}) {


useEffect(()=>{

const timer = setTimeout(()=>{

setLoading(false);

},1200);


return ()=>clearTimeout(timer);


},[setLoading]);



return (

<div className="loader">

<motion.div

className="loader-content"

initial={{opacity:0,scale:.8}}

animate={{opacity:1,scale:1}}

transition={{duration:.6}}

>


<h1>
Roshan<span>.</span>
</h1>


<p>
Building Digital Experiences 🚀
</p>


<div className="loader-bar">

<div className="loader-progress"></div>

</div>


<span className="loading-text">
Loading Portfolio...
</span>


</motion.div>


</div>

);

}


export default Loader;