
import { Routes, Link, Route, } from "react-router-dom";
import Contact from "./Component/Contact/Contact";
import Navbar from './Component/Navbar/Navbar';
import './GlobelStyle.scss'
import Home from "./Home";



function App() {
  return (
    <div className="App">


      <Navbar/>

       
    <Routes>

 
        <Route exect path="/" element={<Home />} />    
        <Route exect path="/contact" element={<Contact/>} />    
 
    </Routes>
                            
    
    </div>
  );
}

export default App;
