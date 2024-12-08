import styled from 'styled-components';

export const Container = styled.div`
  background: var(
    --static-effect-overlay-brand-nebula-muted,
    rgba(212, 194, 229, 0.25)
  );
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100%;
  padding-bottom: 50px;
  width: 100%; /* Adjust width as needed */

  // margin: 0 auto; /* Centers the component horizontally */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
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
  color: #1c1c1c;
`;

export const StyledRanbow = styled.div`
  margin: 1rem auto 1rem auto;
  max-width: 21rem;
  height: 5px;
`;

export const HeadWapper = styled.div`
  // background-color: #FFFFFF;
  padding: 6rem 1rem 4rem 1rem;
  @media (max-width: 1712px) {
    padding: 3rem 1rem 2rem 1rem;
  }

  @media (max-width: 529px) {
    padding: 5rem 1rem 1rem 1rem;
  }
`;
