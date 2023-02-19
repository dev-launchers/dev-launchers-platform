import styled from 'styled-components';

export const CardBackground = styled.div`
  display: flex;
  border-radius: 30px;
  align-content: center;
  overflow: initial;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  width: 350px;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  color: ${({ theme }) => theme.colors.NEUTRAL_2};
  border: 0 none;
  border-radius: 30px;
  cursor: pointer;
  padding: 2rem;
  margin: 10px 5px;
  font-size: 2rem;
  font-family: 'Abel';
  background-color: ${({ theme }) => theme.colors.NEUTRAL_1};
  font-color: 'white';
  @media (orientation: portrait) {
    width: 100%;
    font-size: 1.5rem;
    flex-direction: column;
    opacity: 0.2;
  }

  @media (max-width: 575px) {
    width: 75%;
    align-items: start;
  }
`;

export const CardTitleDiv = styled.div`
  color: white;
  width: '100%';
  border: solid;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  text-align: start;
  padding-bottom: 25px;
`;

export const CardText = styled.div`
text-align: start;
margin-top: 25px;
`;

export const CardContinueDiv = styled.div`
  text-align: right;
  position: relative;
  padding-right: 2%;
  padding-top: 1%;
  align-self: end;
`;
