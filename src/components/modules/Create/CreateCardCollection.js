import React from "react";
import CreateCard from "./SpendCard/SpendCard.js";

// Get content data
let projectTemplates = require("../content/collections/projectTemplates.json")
  .data;

export default function CreateCardCollection() {
  return (
    <div className="collection collection--small-cards">
      {projectTemplates.games.map((entry, i) => {
        return (
          <div className="entry" key={i}>
            <div className="entry-heading">
              <a
                className="entry-title"
                href={entry.sandboxUrl}
                target="_blank"
              >
                {entry.title}
              </a>
            </div>
            <div className="entry-content">
              <div className="entry-image-holder">
                <a href={entry.sandboxUrl} target="_blank">
                  <img src={entry.imageSrc} className="entry-image" />
                </a>
              </div>
              <div className="entry-description">{entry.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
