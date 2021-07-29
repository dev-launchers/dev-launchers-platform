import styled from "styled-components";

export const Wrapper = styled.div``;

export const OpenRolesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const OpenRoleListing = styled.div`
  width: 50%;

  @media (orientation: portrait) {
    width: 100%;
  }
`;
