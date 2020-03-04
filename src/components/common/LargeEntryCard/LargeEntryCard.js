import React from "react";
import style from "./LargeEntryCard.module.css";

export default function LargeEntryCard(props) {
  return (
    <div className={style.entry} key={props.i}>
      <div className={style.entryHeading}>
        <a className={style.entryTitle} href={props.entry.href} target="_blank">
          {props.entry.title}
        </a>
        <a
          className={style.entryGithubLink}
          href={props.entry.repoUrl}
          target="_blank"
        >
          GitHub Repo
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
