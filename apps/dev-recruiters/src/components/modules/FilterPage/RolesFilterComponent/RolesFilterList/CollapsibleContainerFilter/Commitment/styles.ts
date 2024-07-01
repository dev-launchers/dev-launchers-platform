import styled from 'styled-components';

export const CommitmentMain = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const CommitmentTimeContainer = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;

export const CommitmentTitle = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  font-family: 'Nunito Sans', sans-serif;
`;

export const CommitmentText = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  font-family: 'Nunito Sans', sans-serif;
`;

export const TimeCommitment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const IconImage = styled.img`
  margin: 2%;
  width: 10%;
`;
