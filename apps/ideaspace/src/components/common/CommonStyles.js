import styled from 'styled-components';

export const HeadWapper = styled.div`
  background-color: #000000;
  padding: 6rem 1rem 4rem 1rem;
  text-align: center;
  color: #ffffff;

  @media (max-width: 1712px) {
    padding: 3rem 1rem 2rem 1rem;
  }

  @media (max-width: 529px) {
    padding: 5rem 1rem 1rem 1rem;
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
  color: #1c1c1c;
`;
