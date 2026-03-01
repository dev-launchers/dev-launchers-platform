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
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
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
  height: 250px;
  display: flex;
  align-items: center;
`;

export const CommitmentText = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const SectionHeading = styled.h2`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme?.colors?.White || '#ffffff'};
  margin-bottom: 1.5rem;
  font-family: 'Abel', sans-serif;
`;
