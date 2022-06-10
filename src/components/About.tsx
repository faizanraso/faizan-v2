import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="mx-5 my-10 sm:w-6/12 sm:mx-auto white-text">
      <p className="">
        Hey, my name's Faizan Rasool. I'm an Electrical Engineering Student at
        McMaster University (Hamilton, ON). I currently work at Hydro One
        (Mississauaga, ON) as an AMI Network Analyst (Co-op). <br />
        <br /> During my co-op I have had the oppurtunity to work on a variety
        of projects, including designing and creating an employee performance
        tracker, used by the leadership team (VBA). I also designed a tool which
        detected the over/under usage of several thousands meters for which
        customers were billed inaccurately (VBA + SQL). <br /> <br /> Outside of
        work, I have utilized my skills and passion for programming and have
        created various projects. Some of technologies I have used include:
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
      <p>
        Upon completing my work term, I intend on returning to school to finish
        the final year of my undergraduate degree. During this time, I will be
        actively looking for full-time oppurtunities in which I can use my
        skills, experiences and passion to solve challenging problems and
        continue to learn and grow in the engineering industry.
      </p>
    </div>
  );
}

export default About;
