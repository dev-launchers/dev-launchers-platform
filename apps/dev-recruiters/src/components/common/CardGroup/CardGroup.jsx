// eslint-disable-next-line no-use-before-define
import React from "react";
import Card from "../Card/Card";
import { Collection, CollectionTitle } from "./StyledCardGroup";
import { CardProps } from "../Card/Card"


export default function CardGroup(props) {
  return (
    <div>
      {props.title ? (
        <CollectionTitle groupTitleAlignment={props.titleAlignment}>
          {props.title}
        </CollectionTitle>
      ) : (
        <span />
      )}
      <Collection cardGroupFlexDirection={props.cardGroupFlexDirection}>
        {Object.keys(props.cards).length !== 0 &&
          props.cards.map((card, i) => (
            <Card
              cardData={ card.cardData }
              key={i}
              size={props.size}
              attachment={props.attachment}
            />
          ))}
      </Collection>
    </div>
  );
}
