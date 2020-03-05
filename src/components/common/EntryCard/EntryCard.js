import React from "react";
import style from "./EntryCard.module.css";
import cx from "classnames";

export default function EntryCard(props) {
  return (
    <div
      className={cx(style.entry, {
        [style.entryLarge]: props.size == "large"
      })}
      key={props.i}
    >
      <div className={style.entryHeading}>
        <a className={style.entryTitle} href={props.entry.href} target="_blank">
          {props.entry.title}
        </a>
      </div>
      <div
        className={cx(style.entryContent, {
          [style.entryContentLarge]: props.size == "large"
        })}
      >
        <div className={style.entryImageHolder}>
          <a href={props.entry.href} target="_blank">
            <img src={props.entry.imageSrc} className={style.entryImage} />
          </a>
        </div>
        <div className={style.entryDescription}>{props.entry.description}</div>
      </div>
    </div>
  );
}
