import styled from "styled-components";

export const HeadWapper = styled.div`
  background-color: #FFFFFF;
  padding: 7.37rem 1rem 4rem 1rem;

  @media (max-width: 1712px) {
    padding: 4.37rem 1rem 2rem 1rem;
  }

  @media (max-width: 529px) {
    padding: 6.37rem 1rem 1rem 1rem;
  }
`;

export const Headline = styled.div`
  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  line-height: 68px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #1C1C1C;
`;

export const StyledRanbow = styled.div`
  margin: 1.3rem auto 0 auto;
  max-width: 34rem;
  height: 5px;
  @media (max-width: 398px) {
    width: 17rem;
  }
`;

export const PageWrapper = styled.section`
  background-color: #FFFFFF;
  padding: 0rem calc((100% - 75.5rem)/2) 5rem calc((100% - 75.5rem)/2);

  @media (max-width: 1278px) {
    padding: 0rem calc((100% - 70.5rem)/2) 5rem calc((100% - 70.5rem)/2);
  }
  @media (max-width: 1192px) {
    padding: 0rem calc((100% - 46.5rem)/2) 5rem calc((100% - 46.5rem)/2);
  }
  @media (max-width: 810px) {
    padding: 0rem 2rem 5rem 2rem;
  }
`;

