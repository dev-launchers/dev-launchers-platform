import React from "react";
import style from "./Card.module.css";
import cx from "classnames";

import CardTitle from "./CardTitle";
import Attachments from "./Attachments";

/**
 * Props:
 *  - title:
 *  - description:
 *  - imageSrc:
 *  - size:
 *  - href:
 *  - onClick:
 *  - attachments:
 *  - textAlignment:
 *  - imageHolderBackgroundColor
 */
export default function Card(props) {
  const imageHolderBackgroundColor = props.cardData.imageHolderBackgroundColor
    ? props.cardData.imageHolderBackgroundColor
    : "black";
  const textAlignment = props.cardData.textAlignment
    ? props.cardData.textAlignment
    : "left";
  const cardFlexDirection = props.cardData.flexDirection
    ? props.cardData.flexDirection
    : "";

  React.useEffect(() => {
    console.log(props.cardData.flexDirection);
  }, []);

  return (
    <div
      className={cx(style.container, {
        [style.containerLarge]: props.size === "large"
      })}
      key={props.i}
      onClick={props.cardData.onClick}
    >
      <div
        className={cx(style.content, {
          [style.contentLarge]: props.size === "large"
        })}
        style={{ textAlign: textAlignment, flexDirection: cardFlexDirection }}
      >
        <div
          className={cx(style.imageHolder, {
            [style.imageHolderLarge]: props.size === "large"
          })}
          style={{ backgroundColor: imageHolderBackgroundColor }}
        >
          <a
            href={props.cardData.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={props.cardData.imageSrc}
              className={style.image}
              alt="content"
            />
          </a>
        </div>
        <div
          className={cx(style.dataHolder, {
            [style.dataHolderLarge]: props.size === "large"
          })}
        >
          <CardTitle data={props.cardData} />
          <div className={style.description}>{props.cardData.description}</div>
        </div>
      </div>
      <div className={style.attachments}>
        {props.cardData.attachments && (
          <Attachments data={props.cardData.attachments} />
        )}
      </div>
    </div>
  );
}
