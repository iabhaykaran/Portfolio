import React from "react";
import "./Portfolio.css";

const projects = [
  {
    name: "Youtube Clone",
    link: "https://youtube-clone-eight-cyan.vercel.app/",
    thumbnail: "yt.avif",
  },
  {
    name: "Project Two",
    link: "https://project-two.vercel.app",
    thumbnail:
      "https://image.thum.io/get/width/600/https://project-two.vercel.app",
  },
  {
    name: "Project Three",
    link: "https://project-three.vercel.app",
    thumbnail:
      "https://image.thum.io/get/width/600/https://project-three.vercel.app",
  },
];

function Portfolio() {
  return (
    <div className="portfolio-container">
      {projects.map((project, index) => (
        <div
          key={index}
          className="project-card"
          onClick={() => window.open(project.link, "_blank")}
        >
          <img
            src={project.thumbnail}
            alt={project.name}
            className="project-image"
          />
          <div className="project-details">
            <h3>{project.name}</h3>
            <button className="open-button">Open Project</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
