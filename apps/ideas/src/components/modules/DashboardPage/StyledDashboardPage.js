import styled from "styled-components";

export const PageWrapper = styled.section`
  background-color: #FFFFFF;
  padding: 3vw 15vw 4vw 15vw;
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

export const SectionTitle = styled.div`
text-align: left;
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 38px;
color: #000000;
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
min-height: 16vw;
position: relative;
flex-direction: column;
overflow: hidden;
border: 0 none;
padding: 0;

  @media (orientation: portrait) {
    font-size: 1.5rem;
    flex-direction: column;
  }
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