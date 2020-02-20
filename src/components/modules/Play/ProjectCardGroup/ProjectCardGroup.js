import React from "react";

export default function ProjectCardGroup(props) {
  return (
    <div className="projects-area">
      <h2>{props.title}</h2>
      <div className="collection collection--large-cards">
        {props.data.map((entry, i) => {
          return (
            <div className="entry" key={i}>
              <div className="entry-heading">
                <a className="entry-title" href={entry.devUrl} target="_blank">
                  {entry.name}
                </a>
                <a
                  style={{
                    display: "block",
                    float: "right",
                    fontSize: ".85rem",
                    marginRight: "1%"
                  }}
                  href={entry.repoUrl}
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </div>
              <div className="entry-content">
                <div className="entry-image-holder">
                  <a href={entry.sandboxUrl} target="_blank">
                    <div src={entry.imageSrc} className="entry-image" />
                  </a>
                </div>
                <div className="entry-description">{entry.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
