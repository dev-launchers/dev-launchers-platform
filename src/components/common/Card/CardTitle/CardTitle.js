import React from "react";

import style from "./CardTitle.module.css";

import cx from "classnames";

export default function Card(props) {
  let cardTitleAlignment = props.data.titleAlignment;
  cardTitleAlignment = props.data.titleAlignment
    ? props.data.titleAlignment
    : "left";

  let cardTitleSize = props.data.titleSize;
  cardTitleSize = props.data.titleSize ? props.data.titleSize : "1.4rem";

  return (
    <div
      className={style.heading}
      style={{ textAlign: cardTitleAlignment }}
      style={{ fontSize: cardTitleSize }}
    >
      <a
        className={cx(style.title, {
          [style.CenteredTitleUnderline]: props.data.titleStyling === "center"
        })}
        href={props.data.href}
        target="_blank"
      >
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
