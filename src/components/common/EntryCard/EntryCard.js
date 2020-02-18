import React from "react";
import style from "./EntryCard.module.css";

export default function EntryCard(props) {
  return (
    <div className={style.entry} key={props.i}>
      <div className={style.entryHeading}>
        <a
          className={style.entryTitle}
          href={props.entry.sandboxUrl}
          target="_blank"
        >
          {props.entry.title}
        </a>
      </div>
      <div className={style.entryContent}>
        <div className={style.entryImageHolder}>
          <a href={props.entry.sandboxUrl} target="_blank">
            <img src={props.entry.imageSrc} className={style.entryImage} />
          </a>
        </div>
        <div className={style.entryDescription}>{props.entry.description}</div>
      </div>
    </div>
  );
}
