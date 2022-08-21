import styled, { css } from "styled-components";
import React from 'react';

interface StyledProps {
  size?: number | string,
  flexDirection?: string,
  textAlignment?: string,
  style?: React.CSSProperties,
  bgColor?: string,
  imageSrc?: string,
  i?: number,
  alt?: string
}

export const Container = styled.div <StyledProps>`
  margin: 0.5%;
  width: ${({ size }) => (size === "large" ? "90%" : "24%")};
  background-color: white;
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
  display: flex;
  flex-direction: column;
  @media (orientation: portrait) {
    width: 100%;
    margin-bottom: 5%;
  }
`;



export const Content = styled.div<StyledProps>`
  display: flex;
  flex: 1;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  ${({ size }) =>
    size === "large" &&
    css`
      flex-direction: row;
      justify-content: space-between;
    `}
  && {
    flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  }
  align-items: center;
  text-align: ${({ textAlignment }) => textAlignment || "left"};
`;

export const ImageHolder = styled.div <StyledProps>`
  position: relative;
  width: 100%;
  height: 25vh;
  overflow: hidden;

  a {
    display: flex;
    width: 100%;
    /* height: 100%; */
    height: 26vh;
  }
`;
export const TagsContainer = styled.div <StyledProps>`
  text-align: center;
   top: 3%;
  right: 1%;
  //display: grid; 
  gap: 0.5rem;
  height: 24vh; 
  display:flex;
  flex-direction:column;
  position: absolute;
  overflow: auto;
  
`;
export const Image = styled.div <StyledProps>`
  background-color: lightgray;
  width: 100%;
  height: 100%;
   /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
  cursor: pointer;
  vertical-align: top;
  margin-left: auto;
  margin-right: auto;

  background-image: url(${(props) => props.imageSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* outline: 2px solid black; */
`;

export const DataHolder = styled.div <StyledProps>`
  margin-top: 0.5em;
  padding: 0.5rem;
  width: 95%;
  ${({ size }) =>
    size === "large" &&
    css`
      width: 70%;
      padding: 6.75%;
    `}
`;
export const SecondaryText = styled.div <StyledProps>`
  margin: 1% 0 2% 0;
  font-size: 1rem;
`;
export const Description = styled.div <StyledProps>`
  width: 100%;
  font-size: 1.2rem;
  padding-top: 1%;
`;

export const AttachmentsContainer = styled.div <StyledProps>`
  margin-top: auto;
`;
export const ActionsContainer = styled.div <StyledProps>`
  display: grid;
  grid-auto-flow: column;
  place-content: start;
  gap: 2rem;
  font-size: 1em;
  font-family: ${({ theme }) => theme.fonts.headline};
  margin: 1rem 0 1rem 1rem;
`;
