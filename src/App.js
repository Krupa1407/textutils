import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const[alert , setalert] = useState(null);
  const[mode , setmode] = useState('light');
  const[pmode , setpmode] = useState('pink');

  const showalert = (message , type) => {
    setalert({
      msg : message ,
      type : type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const removebodyclass=(cls)=>{
    document.body.classList.remove("bg-"+cls)
  }

  const togglemode = (cls) =>{
    removebodyclass(cls);
    document.body.classList.add("bg-"+cls)
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "#03275d";
      showalert("dark mode has been enbaled." , "success");
      document.title = "Textutils - Darkmode";
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode has been enbaled." , "success");
      document.title = "Textutils - Lightmode";
    }
  }

  //for different colors
  const togglecolor = () =>{
    if(pmode === "pink"){
      setpmode("pink");
      document.body.style.backgroundColor = "pink";
      showalert("pink mode has been enbaled." , "success");
      setpmode("light");
    }
    else{
      setpmode("light");
      document.body.style.backgroundColor = "white";
      showalert("pink mode has been disabled." , "success");
      setpmode("pink");
    }
  }
  return (
    <>
    <Router>
    {/* <Navbar title = "title2" about = "about textutils"/> */}
    {/* <Navbar/> */}
    <Navbar title = "Textutils"  about = "about"  mode = {mode} togglemode = {togglemode} pmode = {pmode} togglecolor = {togglecolor}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm heading = "enter the heading you want to show." showalert = {showalert} mode = {mode}/>}/>

          {/* note : the below one is throwing the error.
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading = "enter the heading you want to show." showalert = {showalert} mode = {mode}/> 
          </Route> */}
          
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;