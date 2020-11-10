import React from "react";
import Card from "../Card/Card";
import style from "./CardGroup.module.css";

export default function CardGroup(props) {
  // Converts font alignment to flexbox alignment
  let cardAlignment = props.cardAlignment;
  let titleAlignment = props.titleAlignment;
  cardAlignment = cardAlignment ? cardAlignment : "flex-start"; // Is cardAlignment undefined?
  cardAlignment = cardAlignment == "right" ? "flex-end" : cardAlignment; // Is cardAlignment right?
  cardAlignment = cardAlignment == "left" ? "flex-start" : cardAlignment; // Is cardAlignment left?

  titleAlignment = props.titleAlignment ? props.titleAlignment : "left";
  return (
    <div>
      {props.title ? (
        <h3
          className={style.collectionTitle}
          style={{ textAlign: titleAlignment }}
        >
          {props.title}
        </h3>
      ) : (
        <span />
      )}
      <div
        className={style.collection}
        style={{ justifyContent: cardAlignment }}
      >
        {Object.keys(props.data).length !== 0 &&
          props.data.map((items, i) => {
            return (
              <Card
                data={items}
                key={i}
                size={props.size}
                attachment={props.attachment}
              />
            );
          })}
      </div>
    </div>
  );
}
