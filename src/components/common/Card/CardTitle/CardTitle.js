import React from "react";

import style from "./CardTitle.module.css";

export default function Card(props) {
  return (
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
  );
}
