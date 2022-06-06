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
      <Route path="/" element={<About />}/>
    </div>
  );
}

export default App;
