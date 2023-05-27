import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  /* flex-direction: column;
  align-items: center; */
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme?.colors?.White};
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1};
  text-align: center;
  margin: 0;
  row-gap: 1rem;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  border-width: 0.75px;
  border-color: ${({ theme }) => theme?.colors?.AntiFlashWhiteT40};
  margin-bottom: 1rem;
  //min-width: 30.46875rem;
  margin-inline: auto;
  margin: 0;
`;

export const FeaturedProductsSection = styled.div`
  position: relative;
  margin-top: 1rem;
  padding-block: 1.2rem;

  .cards {
    .slick-arrow {
      display: none !important;
    }
    .slick-dots li button {
      :before {
        font-size: 0.5rem;
      }
    }
  }
`;

export const FeaturedProducts = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  transform: translateY(-20%);
  margin: auto;
  width: auto;
  color: ${({ theme }) => theme?.colors?.LightGray};
  background-color: ${({ theme }) => theme?.colors?.Black};
  padding: 1.4rem 2rem;
  border-radius: 1.875rem;

  h2 {
    text-align: center;
    margin: 0;
    letter-spacing: 0.16px;
    line-height: 11.3px;
  }

  @media (orientation: portrait) {
    position: relative;
    width: initial;
    background-color: transparent;
  }

  @media (max-width: 768px) {
    position: relative;
    transform: translateY(0);
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  & > * {
    flex: 1;
  }
`;
