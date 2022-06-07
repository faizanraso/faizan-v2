import React from "react";
import "../styles/Header.css";
import faizan_image from "../images/faizan_image.jpeg";

function Header() {
  return (
    <div className="flex mx-5 my-10 items-center sm:w-6/12 sm:mx-auto">
      <img className="photo rounded-full" src={faizan_image} />
      <a href="/"><h1 className="text-2xl width-full ml-5 sm:width-60 text-white underline-animation-header white-text">Faizan Rasool</h1></a>
    </div>
  );
}

export default Header;
