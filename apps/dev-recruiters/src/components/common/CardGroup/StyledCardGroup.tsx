import styled from "styled-components";

interface StyledProps {
  cardGroupFlexDirection?: string,
  groupTitleAlignment?: string
}

export const Collection = styled.div <StyledProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: ${({ cardGroupFlexDirection }) =>
    cardGroupFlexDirection || "flex-start"};
`;

export const CollectionTitle = styled.h3<StyledProps>`
  text-align: ${({ groupTitleAlignment }) => groupTitleAlignment || "left"};
  padding: 1%;
  margin-bottom: 0;
`;
