import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function ProjectCardGroup(props) {
  return (
    <div className="projects-area">
      <h2>{props.title}</h2>
      <div className="collection collection--large-cards">
        {props.data.map((entry, i) => {
          return <ProjectCard entry={entry} key={i} />;
        })}
      </div>
    </div>
  );
}
