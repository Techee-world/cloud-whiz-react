import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./homepage/Home";
import Learning from "./homepage/Learning";
import "./App.css";
import About from "./homepage/About";
import Contact from "./homepage/Contact";
import Course from "./homepage/Course";
import Coursol from "./Coursol";
import Nav from "./component/Nav";
import Whatsapp from "./homepage/Whatsapp";
import NavBar from "./component/NavBarNew";

function App() {
  const screenWidth = window.innerWidth;
  return (
    <>
    <BrowserRouter>
      {/* <Navbar /> */}
      {/* <Nav /> */}
      <NavBar />
     {screenWidth > 768 ?'':<Whatsapp />}
    <Routes>
    <Route  exact path="/" element={<Home/>} />
    <Route  exact path="/learning" element={<Learning/>} />
    <Route  exact path="/about" element={<About/>} />
    <Route  exact path="/contact" element={<Contact/>} />
    <Route  exact path="/careers" element={<Course/>} />
    </Routes >
    <div className='p-2'>

      <Footer />
    </div>
      {/* <Coursol /> */}
    </BrowserRouter>
    </>
  );
}

export default App;
