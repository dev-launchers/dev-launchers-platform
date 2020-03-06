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
        <a className={style.title} href={props.data.href} target="_blank">
          {props.data.title}
        </a>
      </div>
      <div
        className={cx(style.content, {
          [style.contentLarge]: props.size == "large"
        })}
      >
        <div className={style.imageHolder}>
          <a href={props.data.href} target="_blank">
            <img src={props.data.imageSrc} className={style.image} />
          </a>
        </div>
        <div className={style.description}>{props.data.description}</div>
      </div>
    </div>
  );
}
