import React from "react";
import {
  Container,
  Content,
  ImageHolder,
  DataHolder,
  Image,
  Description,
  AttachmentsContainer
} from "./StyledCard";
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
 *  - textAlignment: changes text-alignment if passed otherwise it defaults to left text-alignment
 *  - imageHolderBackgroundColor: changes bgColor if passed otherwise it defaults to black bgColor
 *  - cardFlexDirection: changes flex-direction if existed otherwise delete flex-direction
 */
export default function Card(props) {
  React.useEffect(() => {
    console.log(props.cardData.flexDirection);
  }, []);

  return (
    <Container size={props.size} key={props.i} onClick={props.cardData.onClick}>
      <Content
        size={props.size}
        textAlignment={props.cardData.textAlignment}
        flexDirection={props.cardData.flexDirection}
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
            <Image src={props.cardData.imageSrc} alt="content" />
          </a>
        </ImageHolder>
        <DataHolder size={props.size}>
          <CardTitle data={props.cardData} />
          <Description>{props.cardData.description}</Description>
        </DataHolder>
      </Content>
      <AttachmentsContainer>
        {props.cardData.attachments && (
          <Attachments data={props.cardData.attachments} />
        )}
      </AttachmentsContainer>
    </Container>
  );
}
