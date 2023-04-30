import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.NEUTRAL_2};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 25px;
  min-height: 100%;
  width: 100%;
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ParaWrapper = styled.div`
  display: flex;
  margin: 40px;
  align-items: center;
  justify-content: center;
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
  margin: 1rem auto 1rem  auto;
  max-width: 21rem;
  height: 5px;
`;

export const HeadWapper = styled.div`
  background-color: #FFFFFF;
  padding: 6rem 1rem 4rem 1rem;
  @media (max-width: 1712px) {
    padding: 3rem 1rem 2rem 1rem;
  }

  @media (max-width: 529px) {
    padding: 5rem 1rem 1rem 1rem;
  }
`;
