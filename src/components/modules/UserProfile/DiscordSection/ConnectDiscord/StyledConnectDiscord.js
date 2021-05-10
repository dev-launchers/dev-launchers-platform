import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border: 1px solid black;
`;

export const DiscordLogo = styled.img.attrs(() => ({
  alt: "Discord Logo"
}))`
  width: 10vw;
  margin: 10%;
`;
