import Styled from "styled-components";

export const Wrapper = Styled.div`
  display: flex;
  grid-area: FeaturedIdea;
  flex-direction: row;
  @media (orientation: portrait) {
    flex-direction: column;
  }
;`;
