import React from "react";

import style from "./CardTitle.module.css";

import cx from "classnames";
import { SymbolDisplayPartKind } from "typescript";

export default function Card(props) {
  let cardTitleAlignment = props.data.titleAlignment;
  cardTitleAlignment = props.data.titleAlignment
    ? props.data.titleAlignment
    : "left";

  let cardTitleSize = props.data.titleSize;
  cardTitleSize = props.data.titleSize ? props.data.titleSize : "1.4rem";

  let cardTitleUnderlineColor = props.data.titleUnderlineColor;
  cardTitleUnderlineColor = props.data.titleUnderlineColor
    ? props.data.titleUnderlineColor
    : "#00000000";

  let cardTitleUnderlineThickness = props.data.titleUnderlineThickness;
  cardTitleUnderlineThickness = props.data.titleUnderlineThickness
    ? props.data.titleUnderlineThickness
    : "0.15rem";

  let cardTitleUnderlineType = props.data.titleUnderlineType;
  cardTitleUnderlineType = props.data.titleUnderlineType
    ? props.data.titleUnderlineType
    : "solid";

  let cardTitleUnderline =
    cardTitleUnderlineThickness +
    " " +
    cardTitleUnderlineType +
    " " +
    cardTitleUnderlineColor;

  return (
    <div
      className={style.heading}
      style={{
        textAlign: cardTitleAlignment,
        fontSize: cardTitleSize,
        borderBottom: cardTitleUnderline
      }}
    >
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
