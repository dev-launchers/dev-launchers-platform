import styled from "styled-components";

export const GoBack = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  float: left;
  margin-top: -5.5rem;
  margin-left: 8rem;

  width: 82px;
  height: 40px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: 0 none;

  font-weight: 400;
  font-size: 1rem;
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
    margin-top: -11rem;
  }
`;
