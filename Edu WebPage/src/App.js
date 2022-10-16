import React from "react";
// import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Course from "./Component/Course";
import About from "./Component/About";
import Team from "./Component/Team";
import Price from "./Component/Price";
import Journal from "./Component/Journal";
import Contact from "./Component/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

function App() {
  return (
 <div className="App">
<BrowserRouter>
<Routes>
  
  {/* <Route path="/" element={<Navbar/>}> */}
      
  <Route index element={<Home />} />
     <Route path="course"  element={<Course/>}/>
     <Route path="about"  element={<About/>} />
     <Route path="team"  element={<Team/>}/>
     <Route path="price"  element= {<Price/>}/>
     <Route path="journal"  element={<Journal/>}/>
     <Route path="contact"  element={ <Contact/>}/>
       {/* </Route> */}
      </Routes>
    </BrowserRouter>
 </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;

