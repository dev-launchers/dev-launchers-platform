import styled from "styled-components";
import projectImage from "../../../../../images/onboarding-project.png";
import networkImage from "../../../../../images/onboarding-network.png";
import levelUpImage from "../../../../../images/onboarding-level-up.png";

export const PageTwoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
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