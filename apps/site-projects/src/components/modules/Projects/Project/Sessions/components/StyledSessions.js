import styled from "styled-components";
import arrow from "./images/arrow.svg";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.NEUTRAL_2};

  /* Rectangle 926 */
  width: 315px;
  /* height: 111px; */

  background: #494949;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TitleFlex = styled.div`
  display: flex;
  justify-content: flex-center;
  align-items: center;
  column-gap: 10%;
  height: 35%;
  padding-left: 10px;
  background-color: pink;
`;
export const Title = styled.h3`
  width: 220px;
  overflow: hidden;
  font-family: Abel;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 142.4%;
  /* or 34px */
  color: #fcfcfc;
  align-content: center;
`;

export const SubHeading = styled.h5`
  font-family: Abel;
  font-weight: normal;
  font-size: 22px;
  line-height: 142.4%;
  /* or 31px */

  color: #fcfcfc;

  margin: 0 0 0 0px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 29px;

  background: #fcfcfc;
  border-radius: 2px;
  margin: 0px auto;
`;
export const ButtonText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;

  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;

  color: #353535;

  margin: 0;
`;

export const Img = styled.img`
  background-image: url(${arrow});
  background-repeat: no-repeat;
  height: 16px;
  width: 16px;
`;

export const PercentageProgress = styled.progress`
  align-self: flex-end;
  width: 315px;
  height: 28px;

  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 142.4%;
  background: #ffab00;

  border-radius: 5px 0px 5px 5px;
  margin-top: 15px;

  text-align: center;
  :before {
    content: attr(data-text);
    position: relative;
    z-index: 2;
  }

  ::-webkit-progress-bar {
    position: relative;
    top: -28px;
    border: 0;
    border-radius: 20px;
    background: #ffab00;
    background: red;

    border-radius: 5px 0px 5px 5px;

    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 142.4%;
    background: #ffab00;
  }
  ::-webkit-progress-value {
    border: 0;
    background: #ff7f0e;
    border-radius: 0px 0px 0px 5px;

    font-family: Abel;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 142.4%;
    /* or 28px */

    text-align: center;
  }
  ::-moz-progress-bar {
    border: 0;
    border-radius: 5px 0px 5px 5px;
    background: #ffab00;
  }
`;
