import styled from "styled-components";
import Link from 'next/link';

export const GoBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  float: left;
  margin-top: -5.5rem;
  margin-left: 8rem;

  width: 82px;
  height: 54px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: 0 none;

  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #000000;

  @media (max-width: 1024px) {
    margin-left: 4rem;
  }

  @media (max-width: 768px) {
    margin-left: 0rem;
  }

  @media (max-width: 529px) {
    margin-top: -13rem;
  }
`;

export const HeadWapper = styled.div`
  background-color: #FFFFFF;
  padding: 8rem 1rem 6rem 1rem;

  @media (max-width: 1712px) {
    padding: 6rem 1rem 4rem 1rem;
  }

  @media (max-width: 529px) {
    padding: 8rem 1rem 6rem 1rem;
  }
`;

export const Headline1 = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.NEUTRAL_1};
  padding-top: 2rem;
`;

export const Headline = styled.h3`
  font-weight: 400;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: -0.02em;
`;

export const Description = styled.p`
  color: black;
  text-align: center;
  font-size: 28px;
  line-height: 38px;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.NEUTRAL_1};
  border-radius: 40px;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  border: 0.3rem solid ${({ theme }) => theme.colors.ACCENT_2};
  padding: 2rem;
`;

export const FormWrapper = styled.div`
  width: 36rem;
  margin: 0 auto;
  padding-top: 4rem;
  padding-bottom: 2rem;
  text-align: left;

  @media (max-width: 667px) {
    width: 48rem;
  }

  @media (max-width: 624px) {
    width: calc(100% - 4rem);
    padding: 3rem 2rem;
  }
`;

export const SectionName = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: #000000;
`;

export const Line = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 0.2rem;
  background: #000000;
`;

export const Form = styled.form`
  & p {
    margin-top: 2rem;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 0.5rem;
    margin-bottom: 0.5rem;

    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    color: #1C1C1C;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  & span {
    color: #F03D3E;
  }

  & input {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    width: 20rem;
    height: 3.5rem;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 8px;
    
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;

    @media (max-width: 667px) {
      height: 4.4rem;
    }
  }

  & textarea {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 1rem;
    width: 100%;
    height: 10rem;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 16px;
    resize: none;
    overflow: hidden;
    
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;

    @media (max-width: 667px) {
      height: 13.5rem;
    }
  }
`;

export const Notice = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  margin-top: 2rem;
`;

export const SubmitArea = styled.div`
  margin-top: 2rem;

  @media (min-width: 551px) {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & input {
    box-sizing: border-box;
    padding: 10px;
    width: 24px;
    height: 24px;
    background: #FFFFFF;
    border: 1px solid #1C1C1C;
    border-radius: 2.5px;
  }

  & input:checked {
    accent-color: #1C1C1C;
  }

  & span {
    margin-left: 16px;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #1C1C1C;
  }

  & a {
    color: #3959FF;
    cursor: pointer;
  }
`;

export const Submit = styled.button`
  width: 118px;
  height: 42px;
  background: #295774;
  color: #FFFFFF;
  border: 0 none;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 27px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  line-height: 22px;

  @media (max-width: 551px) {
    margin-top: 2rem;
    margin-bottom: 3rem;
    float: right;
  }
`;