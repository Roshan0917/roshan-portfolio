import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Loader from "./components/Loader/Loader";
import Cursor from "./components/Cursor/Cursor";


function App() {


const [loading,setLoading] = useState(true);



return (

<BrowserRouter>

{

loading ?

<Loader setLoading={setLoading}/>


:

<>

<Cursor />


<Routes>

<Route
path="/"
element={<Home />}
/>


</Routes>

</>


}


</BrowserRouter>

);


}


export default App;