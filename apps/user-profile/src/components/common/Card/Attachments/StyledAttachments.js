import styled from "styled-components";

export const AttachmentLink = styled.a.attrs(() => ({
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  color: lightslategray;
  font-size: medium;
  margin: 0.2em;
`;

export const AttachmentLinkContainer = styled.div`
  /*   
    margin-right: 1em;
    margin-left: 1em;
  */
  margin-bottom: 0.5em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const AttachmentImg = styled.img.attrs(() => ({
  src: "images/Attachment.png?webp",
  alt: "attachment-icon",
}))`
  width: 5vh;
  height: 5vh;
  cursor: pointer;
`;
export const AttachmentImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-top: 1px solid lightgrey;
  margin-top: 2%;
  padding-top: 2%;
`;
