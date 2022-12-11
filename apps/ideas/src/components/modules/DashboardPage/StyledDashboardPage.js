import styled from "styled-components";

export const PageWrapper = styled.section`
  background: #FFFFFF;
  padding: 128px calc((100% - 1208px)/2) 128px calc((100% - 1208px)/2);

  @media (max-width: 1278px) {
    padding: 128px calc((100% - 1128px)/2) 128px calc((100% - 1128px)/2);
  }
  @media (max-width: 1192px) {
    padding: 128px calc((100% - 746px)/2) 128px calc((100% - 746px)/2);
  }
  @media (max-width: 810px) {
    padding: 64px 11px 72px 16px;
  }
`;

export const Title = styled.div`
  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 68px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #1C1C1C;
`;

export const RainbowArea = styled.div`
  align-items: center; 
  display: flex; 
  flex-direction: column; 
`;

export const StyledRanbow = styled.div`
  margin-top: 46.84px;
  width: 32rem;
  @media (max-width: 560px) {
    width: 20rem;
  }
`;

export const Slogan = styled.div`
  margin-top: 33.18px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  color: #000000;
`;

export const SectionTitle = styled.div`
text-align: left;
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 38px;
color: #000000;
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
    row-gap: 80px;
  }
`;

export const SorterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  float: right;
`;

export const Button = styled.button`
cursor: pointer;
width: 100%;
height: 100%;
position: relative;
flex-direction: column;
overflow: hidden;
border: 0 none;
padding: 0;
background: #FFFFFF;

@media (max-width: 424px) {
  width: 92%;
  height: 92%;
}
`;

export const CardWapper = styled.div`
  display: flex;
  flex-direction: column;
`;


export const Headline = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.NEUTRAL_1};
  padding-top: 2rem;
`;

export const Description = styled.p`
  /* color: #F1F4F5; */
  color: black;
  text-align: center;
`;

export const Container = styled.div`
  width: 70%;
  max-width: 700px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.NEUTRAL_1};
  border-radius: 40px;
  width: 70%;
  max-width: 700px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  border: 0.3rem solid ${({ theme }) => theme.colors.ACCENT_2};
  padding: 2rem;
`;