import styled from 'styled-components';

export const NavButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 2rem;
`;

export const ButtonArea = styled.aside`
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  margin-bottom: 10vh;
  @media (orientation: portrait) {
    min-height: 60vh;
  }

  @media (max-width: 1000px) {
    row-gap: 2rem;
    flex-direction: column;
  }
`;

export const Subheader = styled.div`
  font-family: 'Nunito Sans';
  color: #474747;
  margin: 0.5rem auto;
`;

export const RocketImage = styled.img`
  width: 25px;
  height: 25px;
  padding-left: 5px;
`;

export const HeadWapper = styled.div`
  padding: 6rem 1rem 4rem 1rem;

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
  color: #1C1C1C;
`;

export const StyledRanbow = styled.div`
  margin: 1.3rem auto 0 auto;
  max-width: 28rem;
  height: 5px;
`;