import styled from 'styled-components';

const CommitmentMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CommitmentTitle = styled.span`
  color: ${({ theme }) => theme?.colors?.White || '#ffffff'};
  font-size: 14px;
  font-weight: 500;
  font-family: 'Nunito Sans', sans-serif;
`;

const CommitmentTimeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const TimeCommitment = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const CommitmentText = styled.span`
  color: ${({ theme }) => theme?.colors?.White || '#ffffff'};
  font-size: 14px;
  font-family: 'Nunito Sans', sans-serif;
`;

export {
  CommitmentMain,
  CommitmentTitle,
  CommitmentTimeContainer,
  TimeCommitment,
  CommitmentText,
};
