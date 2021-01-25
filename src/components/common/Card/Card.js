import React from "react";
import { Wrapper, Content, ImageHolder, DataHolder } from "./StyledCard";

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
  React.useEffect(() => {
    console.log(props.cardData);
  }, []);

  return (
    <Wrapper size={props.size} key={props.i} onClick={props.cardData.onClick}>
      <Content
        size={props.size}
        textAlign={props.cardData.textAlignment}
        cardFlexDirection={props.cardData.flexDirection}
      >
        <ImageHolder
          size={props.size}
          bgColor={props.cardData.imageHolderBackgroundColor}
        >
          <a
            href={props.cardData.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={props.cardData.imageSrc} alt="content" />
          </a>
        </ImageHolder>
        <DataHolder>
          <CardTitle data={props.cardData} />
          <div className="description">{props.cardData.description}</div>
        </DataHolder>
      </Content>
      <div className="attachments">
        {props.cardData.attachments && (
          <Attachments data={props.cardData.attachments} />
        )}
      </div>
    </Wrapper>
  );
}
