import React from "react";
import "../styles/Experiences.css";

function Experiences() {
  const jobs = [
    {
      title: "AMI Network Analyst (Co-op) @ Hydro One",
      duration: "May 2021 - Present",
      description: [
        "Designed and programmed tools which reduce the amount of time taken to complete weekly tasks/reports by up to 85% using VBA",
        "Designed and created an employee performance tracker used by the leadership team for employee reviews",
        "Detected the over/under usage of several thousand meters in which customers were billed inaccurately",
      ],
    },
    {
      title: "STEM Tutor @ Paper",
      duration: "Sep 2021 - Present",
      description: [
        "Managing tutoring sessions with students from K-12 (simultaneously) for mathematics and programming",
        "Create an engaging learning environment and enhance student confidence and interest in learning",
      ],
    },
    {
      title: "Undergraduate Teaching Assistant @ McMaster University",
      duration: "Jan 2021 - Apr 2021",
      description: [
        "Overseeing laboratories for the first-year engineering course, ENG 1P13 (Integrated Cornerstone Design Projects in Engineering)",
        "Assisting instructors in the evaluation of course assignments and development of feedback",
      ],
    },
  ];

  return (
    <div className="mx-5 my-10 sm:w-6/12 sm:mx-auto">
      <div className="experience-card rounded-xl text-sm my-10">
        <div className="p-5">
          <div className="flex flew-row justify-between w-full pb-4">
            <h1 className="text-gray-100">{jobs[0].title}</h1>
            <p className="text-gray-100 float-right">{jobs[0].duration}</p>
          </div>
          <ul>
            {jobs[0].description.map((item) => {
              return (
                <li className="text-gray-300 p-1 experience-description">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="experience-card rounded-xl text-sm my-10">
        <div className="p-5">
          <div className="flex flew-row justify-between w-full pb-4">
            <h1 className="text-gray-100">{jobs[1].title}</h1>
            <p className="text-gray-100 float-right">{jobs[1].duration}</p>
          </div>
          <ul>
            {jobs[1].description.map((item) => {
              return (
                <li className="text-gray-300 p-1 experience-description">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="experience-card rounded-xl text-sm my-10">
        <div className="p-5">
          <div className="flex flew-row justify-between w-full pb-4">
            <h1 className="text-gray-100">{jobs[2].title}</h1>
            <p className="text-gray-100 float-right">{jobs[2].duration}</p>
          </div>
          <ul>
            {jobs[2].description.map((item) => {
              return (
                <li className="text-gray-300 p-1 experience-description">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
