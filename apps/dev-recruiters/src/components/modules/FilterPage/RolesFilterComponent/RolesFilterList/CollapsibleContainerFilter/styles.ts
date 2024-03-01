import styled from 'styled-components';

export const ContainerMain = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 0.5rem;
  display: inline-block;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ContainerHead = styled.div`
  height: 3.125rem;
  /* height: 50px; */
  width: 100%;
  background-color: black;
  border-radius: 0.5rem;
  color: white;
  display: flex;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  /* padding-right: 7.5rem; */
  padding: 0 auto ;
`;

export const ContainerBody = styled.div`
  height: 40.625rem;
  /* height: 650px; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 1.25rem;
`;

export const ContainerRoles = styled.div`
  height: auto;
  background-color: white;
  padding: 0 1.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const ContainerCommitment = styled.div`
  height: 15.625rem;
  /* height: 250px; */
  display: flex;
  align-items: center;
`;

export const CommitmentText = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.625rem;
`;

// export const RoleContainerBody = styled.div`
//   width: 100%;
//   display: flex;
//   gap: 32px;
//   justify-content: flex-start;
//   flex-wrap: wrap;
//   padding: 36px;
//   margin-bottom: 50px;
// `;

// export const RoleContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;
