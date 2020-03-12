import React from "react";
import style from "./Card.module.css";
import cx from "classnames";
import Attachments from "./Attachments";

export default function Card(props) {
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
        {props.attachment && (
          <a
            className={style.attachment}
            href={props.data.repoUrl}
            target="_blank"
          >
            <img
              className={style.attachmentImage}
              src={"images/GitHub-Mark-Light-32px.png"}
            />
          </a>
        )}
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

      {props.data.attachments && <Attachments data={props.data.attachments} />}
    </div>
  );
}
