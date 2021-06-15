import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Row = styled.div`
  display: flex;
  margin-top: -5px;
  margin-bottom: 5px;
`;

export const Col = styled.div`
  font-family: "Nunito Sans";
  flex: ${props => props.size};
  color: ${props => props.theme.colors.NEUTRAL_1};
  background-color: ${props => props.theme.colors.ACCENT_4};
  transition: 0.5s;
  border: 5px solid ${props => props.theme.colors.NEUTRAL_1};
  margin: 0 auto;
  padding: 10px;
  text-align: center;

  #userEmail {
    border: 0;
    background: transparent;
    outline: none;
    font-weight: bold;
    width: 96%;
    text-align: center;
    border-right: none;
    box-shadow: 0px 0px 0px -7px ${props => props.theme.colors.NEUTRAL_1},
      0px 0px 0px -7px ${props => props.theme.colors.NEUTRAL_1};
    -webkit-transition: box-shadow 0.5s;
    transition: box-shadow 0.5s ease-in-out;
  }

  #userEmail::placeholder {
    color: ${props => props.theme.colors.NEUTRAL_1};
    transition: opacity 1s;
    opacity: 1;
  }

  #userEmail:hover::placeholder {
    color: ${props => props.theme.colors.NEUTRAL_1};
    opacity: 0.5;
  }

  #userEmail:focus::placeholder {
    color: ${props => props.theme.colors.NEUTRAL_1};
    opacity: 0.5;
  }

  #userEmail:hover {
    box-shadow: 0px 10px 0px -7px ${props => props.theme.colors.NEUTRAL_1},
      0px 10px 0px -7px ${props => props.theme.colors.NEUTRAL_1};
  }

  #userEmail:focus {
    box-shadow: 0px 10px 0px -7px ${props => props.theme.colors.NEUTRAL_1},
      0px 10px 0px -7px ${props => props.theme.colors.NEUTRAL_1};
  }

  #submitButton {
    background: transparent;
    transition: 0.3s;
    text-decoration: none;
    text-align: center;
    border: none;
    outline: none;
    font-weight: bolder;
    height: 1.75rem;
    width: 100%;
    box-sizing: border-box;
    display: block;
    cursor: pointer;
    letter-spacing: 0.025em;
  }

  :hover #submitButton {
    text-shadow: black 0px 0px 1px;
    color: ${props => props.theme.colors.ACCENT_4};
  }

  :hover {
    background-color: ${props => props.theme.colors.ACCENT_3};
  }
`;

export const ThankYouMessage = styled.div`
  font-family: "Nunito Sans";
  margin-top: -10px;
  margin-bottom: -10px;
  text-align: center;
  animation: float 3s infinite;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  #thankYou {
    display: inline;
    font-size: 3.5rem;
    font-weight: bolder;
    background: linear-gradient(
      to right,
      hsl(28, 100%, 53%),
      hsl(45, 100%, 53%),
      hsl(194, 52%, 67%),
      hsl(203, 48%, 44%)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #message {
    margin-top: 15px;
    font-size: 1.75rem;
    font-weight: bolder;
    background: linear-gradient(
      to right,
      hsl(28, 100%, 53%),
      hsl(45, 100%, 53%),
      hsl(194, 52%, 67%),
      hsl(203, 48%, 44%)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-family: "Nunito Sans";
  font-weight: bolder;
  font-size: 1.25rem;
  margin-top: 10px;
  margin-bottom: -10px;
  animation: ${fadeIn} 0.5s linear;
`;
