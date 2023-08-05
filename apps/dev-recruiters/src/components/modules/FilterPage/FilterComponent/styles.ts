import styled from 'styled-components';

export const ContainerMain = styled.div`
  width: 100%;
  background-color: white;

  border-radius: 8px;
  display: inline-block;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ContainerHead = styled.div`
  height: 50px;
  width: 100%;
  background-color: black;
  border-radius: 8px;

  color: white;
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  padding-right: 120px;
`;

export const ContainerBody = styled.div`
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ContainerRoles = styled.div`
  height: auto;
  background-color: white;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ContainerCommitment = styled.div`
  height: 140px;
  padding: 0 20px;
`;

export const CommitmentText = styled.div`
  margin-bottom: 10px;
`;
