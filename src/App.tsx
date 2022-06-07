import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavLinks from "./components/NavLinks";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <NavLinks />
      <Routes>
        <Route path="/" element={<About />}/>
        {/* <Route path="/experiences" element={<Experiences/>}/> */}
        {/* <Route path="/projects" element={<Experiences/>}/> */}
        {/* <Route path="/socials" element={<Experiences/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
