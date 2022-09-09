import React from "react";
import Card from "../Card/Card";
import { Collection, CollectionTitle } from "./StyledCardGroup";

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
        {Object.keys(props.cards || {}).length !== 0 &&
          props.cards.map((items, i) => (
            <Card
              cardData={items}
              key={i}
              size={props.size}
              attachment={props.attachment}
            />
          ))}
      </Collection>
    </div>
  );
}
