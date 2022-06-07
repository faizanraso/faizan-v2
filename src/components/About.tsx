import React from "react";
import '../styles/About.css'

function About() {
  return (
    <div className="mx-5 my-10 sm:w-6/12 sm:mx-auto white-text">
      <p className="">
        Hey, my name's Faizan Rasool. I'm a Electrical Engineering Student at McMaster
        University (Hamilton, ON). I currently work over at Hydro One
        (Mississauaga, ON) as a AMI Network Analyst (Co-op). During my co-op I
        have worked on a variety of projects in which I have designed and
        programmed scripts/tools which improve task efficency by upto 85%. Upon
        completing my work term, I intend on gaining more experience, by
        completing another internship. I have also gained experience through
        several personal projects, created with technologies including:
      </p>
      <div className="mx-5 my-7 sm:w-6/12 grid-cols-2 skills-list">
        <ul className="list-disc">
          <li>JavaScript ES6+</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>Matlab</li>
          <li>HTML + CSS</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
