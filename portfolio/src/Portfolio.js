import React from "react";
import "./Portfolio.css";

const projects = [
  {
    name: "Youtube Clone",
    link: "https://youtube-clone-eight-cyan.vercel.app/",
    thumbnail: "yt.avif",
  },
  {
    name: "Twitter(X) Clone",
    link: "  https://twitter-clone-red-ten.vercel.app/     ",
    thumbnail: "tw.png",
  },
  {
    name: "Corporate Site",
    link: "https://elysiumweb-iota.vercel.app/",
    thumbnail: "s.png",
  },
  {
    name: "Unstop Clone",
    link: "https://unstop-clone-landing-page.vercel.app/",
    thumbnail: "Unstop.webp",
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
