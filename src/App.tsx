import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SocialsBar from "./components/SocialsBar";
import Header from "./components/Header";
import NavLinks from "./components/NavLinks";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SocialsBar/>
      <Header />
      <NavLinks />
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/experiences" element={<Experiences/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
