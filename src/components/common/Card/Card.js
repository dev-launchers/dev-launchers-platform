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
  const imageHolderBackgroundColor = props.data.imageHolderBackgroundColor
    ? props.data.imageHolderBackgroundColor
    : "black";
  const textAlignment = props.data.textAlignment
    ? props.data.textAlignment
    : "left";
  const cardFlexDirection = props.data.flexDirection
    ? props.data.flexDirection
    : "";

  React.useEffect(() => {
    console.log(props.data.flexDirection);
  }, []);

  return (
    <div
      className={cx(style.container, {
        [style.containerLarge]: props.size === "large"
      })}
      key={props.i}
      onClick={props.data.onClick}
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
          <a href={props.data.href} target="_blank" rel="noopener noreferrer">
            <img
              src={props.data.imageSrc}
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
          <CardTitle data={props.data} />
          <div className={style.description}>{props.data.description}</div>
        </div>
      </div>
      <div className={style.attachments}>
        {props.data.attachments && (
          <Attachments data={props.data.attachments} />
        )}
      </div>
    </div>
  );
}
