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
//import { Cards } from "../../modules/Projects/Project/Role/RoleCards/StyledRoleCards";

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

export interface CardProps {
  size?: number;
  style?: React.CSSProperties;
  cardData?: {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    textAlignment?: string;
    flexDirection?: string;
    imageSrc?: string;
    imageHolderBackgroundColor?: string;
    tags?: string[];
    href?: string;
    secondaryText?: string;
    description?: string;
    actions?: boolean;
    attachments?: boolean;
    items?: {};
  };
  bgColor?: string;
  isLinkingInside?: boolean;
  attachment?: string;
}

const Card: React.FC<CardProps> = (props) => {
  const router = useRouter();

  return (
    <Container
      style={props.style}
      size={props.size}
      onClick={props.cardData.onClick}
    >
      <Content
        size={props.size}
        textAlignment={props.cardData.textAlignment}
        flexDirection={props.cardData.flexDirection}
      >
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
            (<Link
              href={`${router?.asPath}${props.cardData.href}`}
              passHref
              rel="noopener noreferrer">

              <Image alt="" imageSrc={props.cardData.imageSrc} />

            </Link>)
          ) : (
            <a
              title={props.cardData.description}
              href={props.cardData.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image alt="" imageSrc={props.cardData.imageSrc} />
            </a>
          )}
        </ImageHolder>
        <RainbowBar height=".3rem" />
        <DataHolder size={props.size}>
          <CardTitle
            data={props.cardData}
            isLinkingInside={props.isLinkingInside}
            pathname={router?.asPath}
          />
          {props.cardData.secondaryText && (
            <SecondaryText>{props.cardData.secondaryText}</SecondaryText>
          )}
          <Description>{props.cardData.description}</Description>
        </DataHolder>
      </Content>
      {props.cardData.attachments && (
        <AttachmentsContainer>
          <Attachments data={props.cardData.attachments} />
        </AttachmentsContainer>
      )}
      {props.cardData.actions && (
        <ActionsContainer>{props.cardData.actions}</ActionsContainer>
      )}
    </Container>
  );
};

export default Card;
