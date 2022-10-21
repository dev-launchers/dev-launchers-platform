import styled from "styled-components";
import Link from 'next/link';

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

export const Question = styled.div`
  margin-left: 10px;

  & p {
    display: inline-block;
    color: #ffffff;
    font-size: 15px;
    text-align: left;
    float: left;
    width: 90%;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
  }
  & input {
    display: inline-block;
    float: left;
    width: 70%;
    height: 30px;
    background-color: white;
    border: none;
    border-radius: 20px;
  }
`;

export const Question2 = styled.div`
  & p {
    display: inline-block;
    color: #ffffff;
    font-size: 15px;
    text-align: left;
    float: left;
    width: 90%;
    margin-top: 30px;
    margin-bottom: 5px;
    margin-left: 20px;
  }
  & input {
    display: inline-block;
    float: left;
    width: 90%;
    height: 100px;
    background-color: white;
    border: none;
    border-radius: 20px;
    margin-left: 10px;
  }
`;

export const LastQuestion = styled.div`
  clear: both;

  & p {
    display: inline-block;
    color: #ffffff;
    font-size: 20px;
    text-align: left;
    float: right;
  }
  & input {
    display: inline-block;
    float: left;
    width: 235px;
    height: 30px;
    background-color: #c4c4c4;
    border: none;
    border-radius: 20px;
  }
`;

export const Submit = styled.button`
  width: 130px;
  background: ${({ theme }) => theme.colors.ACCENT_3};
  color: white;
  font-weight: bold;
  border: 0 none;
  border-radius: 15px;
  cursor: pointer;
  padding: 7px 5px;
  margin-top: 80px;
  margin-bottom: 20px;
  margin-right: 20px;
  font-size: 20px;
  float: right;
`;

export const Container = styled.div`
  width: 535px;
  margin: 0 auto;
  padding-top: 30px;
`;

export const SubmitWrapper = styled.div`
  background-color: #c9cacc;
  height: auto;
  border-radius: 30px;
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;

  & p {
    font-size: 2.2rem;
    font-weight: bold;
    padding: 0 15% 0 15%;

    @media screen and (max-width: 600px) {
      font-size: 1.6rem;
    }
  }
  
  & button {
    width: 200px;
    margin: 0 auto;
    background: #89969f;
    font-weight: bold;
    color: #000000;
    border: 0 none;
    border-radius: 30px;
    cursor: pointer;
    padding: 10px 5px;
    font-size: 20px;
  }
`;
