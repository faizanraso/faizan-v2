import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      projectName: "J.A.R.V.I.S Writes",
      description:
        "J.A.R.V.I.S (Just A Rather Very Intelligent System) Writes is a web-app that takes a user entered prompt and returns a AI generated response. Some of the technologies used in this project include React, TypeScript, Axios, react-query and localStorage",
      githubLink: "https://github.com/faizanraso/J.A.R.V.I.S-Writes",
      projectLink: "jarvis-writes.faizanraso.repl.co/",
    },
    {
      projectName: "Code-Bytes",
      description:
        "Code Bytes is a web-based code editor which allows for collaborative editing in real-time. The video in this projects ReadMe shows a demonstration of this project's features as well as how to use it.",
      githubLink: "https://github.com/faizanraso/code-bytes",
      projectLink: "",
    },
    {
      projectName: "Perosnal Blog",
      description:
        "A personal blog website created using HTML, CSS and JavaScript (Express, Lodash, EJS and Body Parser). Blog entries are stored on a local mongoose database.",
      githubLink: "https://github.com/faizanraso/Personal-Blog",
      projectLink: "https://github.com/faizanraso/faizan-v2",
    },
    {
      projectName: "Portfolio",
      description:
        "Developed a responsive portfolio website using various technologies, including: React, Typescript and Tailwind CSS",
      githubLink: "",
      projectLink: "",
    },
    {
      projectName: "Speech Search",
      description:
        "Speech Search is a voice operated Python dictionary. This project uses the SpeechRecognition library and its equipped Google Web Speech API to recognize audio input and search it through the PyDictionary Module.",
      githubLink: "https://github.com/faizanraso/SpeechSearch",
      projectLink: "",
    },
    {
      projectName: "Sudoku Solver",
      description:
        "Sudoku Solver is a Python program which is able to solve any 9x9 sudoku board. It uses a backtracking algorithm which iterates through the various positions on the board and finds the correct values.",
      githubLink: "https://github.com/faizanraso/Sudoku-Solver",
      projectLink: "",
    },
  ];

  return (
    <div className="mx-5 my-10 sm:w-6/12 sm:mx-auto">
      <div className="flex-col sm:flex sm:flex-row">
        <div className="mx-5 my-5 p-5 w-10/12 project-card rounded-xl">
          <h1 className="flex float-left text-gray-100">
            {projects[0].projectName}
          </h1>
          <a className="flex float-right" href={projects[0].githubLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <p className="mt-10 text-gray-300">{projects[0].description}</p>
        </div>
        <div className="mx-5 my-5 p-5 w-10/12 project-card rounded-xl">
          <h1 className="flex float-left text-gray-100">
            {projects[1].projectName}
          </h1>
          <a
            className="flex float-right text-gray-100"
            href={projects[1].githubLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <p className="mt-10 text-gray-300">{projects[1].description}</p>
        </div>
      </div>
      <div className="flex-col sm:flex sm:flex-row">
        <div className="mx-5 my-5 p-5 w-10/12 project-card rounded-xl">
          <h1 className="flex float-left text-gray-100">
            {projects[2].projectName}
          </h1>
          <a className="flex float-right" href={projects[2].githubLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <p className="mt-10 text-gray-300">{projects[2].description}</p>
        </div>
        <div className="mx-5 my-5 p-5 w-10/12 project-card rounded-xl">
          <h1 className="flex float-left text-gray-100">
            {projects[3].projectName}
          </h1>
          <a
            className="flex float-right text-gray-100"
            href={projects[3].githubLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <p className="mt-10 text-gray-300">{projects[3].description}</p>
        </div>
      </div>
      <div className="flex-col sm:flex sm:flex-row">
        <div className="mx-5 my-5 p-5 w-10/12 project-card rounded-xl">
          <h1 className="flex float-left text-gray-100">
            {projects[4].projectName}
          </h1>
          <a className="flex float-right" href={projects[4].githubLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <p className="mt-10 text-gray-300">{projects[4].description}</p>
        </div>
        <div className="mx-5 my-5 p-5 w-10/12 project-card rounded-xl">
          <h1 className="flex float-left text-gray-100">
            {projects[5].projectName}
          </h1>
          <a
            className="flex float-right text-gray-100"
            href={projects[5].githubLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <p className="mt-10 text-gray-300">{projects[5].description}</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
