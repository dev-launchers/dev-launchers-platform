import styled from "styled-components";

interface StyledProps {
  cardTitleAlignment?: string;
  cardTitleSize?: string,
  cardTitleUnderline?: { color: string, thickness: string, type: string }
}

export const Heading = styled.div<StyledProps>`
  display: flex;
  align-items: flex-start;
  width: 100%;
  font-size: 1.4rem;
  text-align: ${({ cardTitleAlignment }) => cardTitleAlignment || "left"};
  font-size: ${({ cardTitleSize }) => cardTitleSize || "1.4rem"};

  ${({ cardTitleUnderline }) => {
    const { color, thickness, type } = cardTitleUnderline;
    return `border-bottom: ${color || "#00000000"} ${thickness || "0.15rem"} ${type || "solid"
      };`;
  }}
`;

export const Title = styled.a`
  font-family: "Abel", sans-serif;
  color: black;
  font-weight: bold;
  flex: 1;
`;
