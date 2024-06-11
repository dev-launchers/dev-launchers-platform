import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  row-gap: 1rem;
  margin-top: 200px;
  padding-bottom: 5px;
  color: black;
  font-size: 44px;
  font-family: Abel;
  font-weight: 400;
  word-wrap: break-word;
  padding-bottom: 56px;
`;

export const BtnSignUp = styled.button`
  background-color: black;
  border-radius: 10px;
  color: white;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  font-family: 'Nunito Sans', sans-serif;
  background-color: #295774;
  text-decoration: none;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.64px;
  word-wrap: break-word;
  justify-content: center;
`;

export const SubHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  /* row-gap: 0.5rem; */
  height: auto;
  color: black;
  font-size: 20px;
  font-family: Nunito Sans;
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
  padding-bottom: 0;
`;

export const Wrapper = styled.div`
  background-color: #f0edee !important;
  /* height: 500px; */
`;
