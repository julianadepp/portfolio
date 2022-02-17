import React from "react";
import crochet from "../media/crochetTrackerStandIn.jpeg";
import flashcards from "../media/flashcardsScreenshot.png";
import portfolio from "../media/portfolioScreenshot.png";

function ProjectTemplate(props) {
  const projects = [
    {
      title: "Flashcards",
      img: flashcards,
      frontendCode: "https://github.com/julianadepp/flashcards",
      backendCode: null,
      api: null,
      app: "https://julianadepp.github.io/flashcards/lib/",
      stack: "Vanilla Javascript, HTML5, CSS",
      description: "This is a matching game with words and their definitions.",
    },
    {
      title: "Crochet Tracker",
      img: crochet,
      frontendCode: "https://github.com/julianadepp/crochet-app-frontend",
      backendCode: 'https://github.com/julianadepp/crochet',
      api: 'https://knotnow-api.herokuapp.com/hooks/',
      app: "https://julianadepp.github.io/crochet-app-frontend/#/",
      stack: "Django, PostgreSQL, React, AWS S3",
      description:
        "This app is designed to help people track various aspects of their crochet projects. The backend is hosted on heroku, so the site takes some time to load up the first time. A big undertaking, this is currently a work in progress!",
    },
    {
      title: "Portfolio",
      img: portfolio,
      frontendCode: "https://github.com/julianadepp/crochet-app-frontend",
      backendCode: null,
      api: 'https://knotnow-api.herokuapp.com/hooks/',
      app: "https://julianadepp.github.io/crochet-app-frontend/#/",
      stack: "React, CSS",
      description:
        "This very site! Built from the bottom up with regard to both React and CSS, my portfolio site is a great way to see what I am all about.",
    },
  ];

  return (
    <div className="proj-parent">
      {projects.map((project) => (
        <div className="proj-child">
          <div className="circle">
            <img
              src={project.img}
              alt="screenshot of project"
              className="proj-img"
            />
          </div>
          <h3>{project.title}</h3>
          <div>
            <a href={project.app}>
              <button>app</button>
            </a>
            <a href={project.frontendCode}>
              <button>frontend</button>
            </a>
            {(project.backendCode!==null)?
              <div>
                  <a href={project.backendCode}>
                    <button>backend</button>
                  </a><a href={project.api}>
                    <button>api</button>
                  </a>
              </div>:null}

          </div>
          <p className="proj-stack">{project.stack}</p>
          <p className="proj-desc">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectTemplate;
