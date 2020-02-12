import React from "react";

export default function EntryCard(props) {
  return (
    <div className="entry" key={props.i}>
      <div className="entry-heading">
        <a
          className="entry-title"
          href={props.entry.sandboxUrl}
          target="_blank"
        >
          {props.entry.title}
        </a>
      </div>
      <div className="entry-content">
        <div className="entry-image-holder">
          <a href={props.entry.sandboxUrl} target="_blank">
            <img src={props.entry.imageSrc} className="entry-image" />
          </a>
        </div>
        <div className="entry-description">{props.entry.description}</div>
      </div>
    </div>
  );
}
