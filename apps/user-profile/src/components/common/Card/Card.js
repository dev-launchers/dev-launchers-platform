import React from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import {
  Container,
  Content,
  ImageHolder,
  DataHolder,
  Image,
  Description,
  SecondaryText,
  AttachmentsContainer,
  ActionsContainer,
  TagsContainer,
} from "./StyledCard";
import Tag from "../Tag";

import RainbowBar from "../RainbowBar";

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
  const router = useRouter();

  return (
    <Container
      style={props.style}
      size={props.size}
      key={props.i}
      onClick={props.cardData.onClick}
    >
      {props.noImage ? "" : 
        <ImageHolder
          size={props.size}
          bgColor={props.cardData.imageHolderBackgroundColor}
        >
          {props.cardData.tags && (
            <TagsContainer>
              {props.cardData.tags.map((tag, i) => (
                <Tag filled text={tag} key={i} />
              ))}
            </TagsContainer>
          )}
          {props.isLinkingInside ? (
            <Link href={`${router.pathname}/${props.cardData.href}`} passHref>
              <a rel="noopener noreferrer">
                <Image alt="" imageSrc={props.cardData.imageSrc} />
              </a>
            </Link>
          ) : (
            <a
              href={props.cardData.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image alt="" imageSrc={props.cardData.imageSrc} />
            </a>
          )}
        </ImageHolder>
      }

      {props.size === "large" ? "" : (<RainbowBar height=".3rem" />)}

      <Content
        size={props.size}
        textAlignment={props.cardData.textAlignment}
        flexDirection={props.cardData.flexDirection}
      >
        
        <DataHolder size={props.size}>
          <CardTitle
            data={props.cardData}
            isLinkingInside={props.isLinkingInside}
            pathname={router.pathname}
          />
          {props.cardData.secondaryText && (
            <SecondaryText>{props.cardData.secondaryText}</SecondaryText>
          )}
          <Description>{props.cardData.description}</Description>
        </DataHolder>
        {props.cardData.attachments && (
          <AttachmentsContainer>
            <Attachments data={props.cardData.attachments} />
          </AttachmentsContainer>
        )}
        {props.cardData.actions && (
          <ActionsContainer>{props.cardData.actions}</ActionsContainer>
        )}
      </Content>
    </Container>
  );
}
