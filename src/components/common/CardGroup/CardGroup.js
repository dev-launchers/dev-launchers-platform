import React from "react";
import Card from "../Card/Card";
import style from "./CardGroup.module.css";

export default function CardGroup(props) {
  // Converts font alignment to flexbox alignment
  let cardGroupFlexDirection = props.cardGroupFlexDirection;
  let titleAlignment = props.titleAlignment;
  let imageHolderBackgroundColor = props.imageHolderBackgroundColor;

  cardGroupFlexDirection = cardGroupFlexDirection
    ? cardGroupFlexDirection
    : "flex-start"; // Is cardGroupFlexDirection undefined?
  cardGroupFlexDirection =
    cardGroupFlexDirection == "right" ? "flex-end" : cardGroupFlexDirection; // Is cardGroupFlexDirection right?
  cardGroupFlexDirection =
    cardGroupFlexDirection == "left" ? "flex-start" : cardGroupFlexDirection; // Is cardGroupFlexDirection left?

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
        style={{ justifyContent: cardGroupFlexDirection }}
      >
        {Object.keys(props.cards).length !== 0 &&
          props.cards.map((items, i) => {
            return (
              <Card
                cardData={items}
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
