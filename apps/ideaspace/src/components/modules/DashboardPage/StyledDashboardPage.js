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
  padding: 0rem calc((100% - 1208px)/2) 5rem calc((100% - 1208px)/2);

  @media (max-width: 1278px) {
    padding: 0rem calc((100% - 1128px)/2) 5rem calc((100% - 1128px)/2);
  }
  @media (max-width: 1192px) {
    padding: 0rem calc((100% - 746px)/2) 5rem calc((100% - 746px)/2);
  }
  @media (max-width: 810px) {
    padding: 0rem 2rem 5rem 2rem;
  }
`;

export const IdeaCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  column-gap: 64px;
  row-gap: 32px;

  @media (max-width: 1278px) {
    column-gap: 24px;
  }
  @media (max-width: 360px) {
    row-gap: 40px;
  }
`;

export const SubmitButton = styled.button`
width: 100%;
height: 100%;
position: relative;
flex-direction: column;
overflow: hidden;
border: 0 none;
padding: 0;
background-color: #FFFFFF;

@media (max-width: 424px) {
  width: 92%;
  height: 92%;
}
`;
