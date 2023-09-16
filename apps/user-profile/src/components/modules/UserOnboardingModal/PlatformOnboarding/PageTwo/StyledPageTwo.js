import styled from "styled-components";
import projectImage from "../../../../../images/onboarding/onboarding-project.png";
import networkImage from "../../../../../images/onboarding/onboarding-network.png";
import levelUpImage from "../../../../../images/onboarding/onboarding-level-up.png";

export const PageTwoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ImageGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 4.7%
`;

export const ProjectImage = styled.img.attrs(() => ({
  src: projectImage,
  alt: "project image",
}))`
    width: 5rem;
  `;

export const NetworkImage = styled.img.attrs(() => ({
  src: networkImage,
  alt: "network image",
}))`
    width: 5rem;
  `;

export const LevelUpImage = styled.img.attrs(() => ({
  src: levelUpImage,
  alt: "level up image",
}))`
    width: 5rem;
  `;