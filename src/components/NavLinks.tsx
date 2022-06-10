import React from "react";
import { Link } from "react-router-dom";
import faizan_resume from '../resume/Faizan_Rasool_Resume.pdf'
import '../styles/NavLinks.css'

function NavLinks(){


    return(
        <div className="flex mx-5 my-10 sm:w-6/12 sm:mx-auto text-gray-500">
            <ul>
                <Link to="/"><a className="inline-block mr-4 underline-animation-links" href="/"><li>About</li></a></Link>
                <Link to="/experiences"><a className="inline-block mr-4 underline-animation-links" href="/experiences"><li>Experiences</li></a></Link>
                <Link to="/projects"><a className="inline-block mr-4 underline-animation-links" href="/projects"><li>Projects</li></a></Link>
                <a className="inline-block mr-4 underline-animation-links" href={faizan_resume}><li>Resume</li></a>
            </ul>
        </div>
    )
}

export default NavLinks;