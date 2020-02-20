import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="entry" key={props.i}>
      <div className="entry-heading">
        <a className="entry-title" href={props.entry.devUrl} target="_blank">
          {props.entry.name}
        </a>
        <a
          style={{
            display: "block",
            float: "right",
            fontSize: ".85rem",
            marginRight: "1%"
          }}
          href={props.entry.repoUrl}
          target="_blank"
        >
          GitHub Repo
        </a>
      </div>
      <div className="entry-content">
        <div className="entry-image-holder">
          <a href={props.entry.sandboxUrl} target="_blank">
            <div src={props.entry.imageSrc} className="entry-image" />
          </a>
        </div>
        <div className="entry-description">{props.entry.description}</div>
      </div>
    </div>
  );
}
