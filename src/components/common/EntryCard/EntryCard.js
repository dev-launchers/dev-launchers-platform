import React from "react";
import style from "./EntryCard.module.css";
import cx from "classnames";

export default function EntryCard(props) {
  return (
    <div
      className={cx(style.container, {
        [style.containerLarge]: props.size == "large"
      })}
      key={props.i}
    >
      <div className={style.heading}>
        <a className={style.title} href={props.entry.href} target="_blank">
          {props.entry.title}
        </a>
      </div>
      <div
        className={cx(style.content, {
          [style.contentLarge]: props.size == "large"
        })}
      >
        <div className={style.imageHolder}>
          <a href={props.entry.href} target="_blank">
            <img src={props.entry.imageSrc} className={style.image} />
          </a>
        </div>
        <div className={style.description}>{props.entry.description}</div>
      </div>
    </div>
  );
}
