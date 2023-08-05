import styled from 'styled-components';

export const ResultTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  padding: 10px 0px 30px 0px;
`;

export const ResultProjects = styled.div`
  width: 100%;
  padding-left: 15px;
  font-size: 30px;
  font-weight: 500;
`;

export const ResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  padding: 2rem;
  gap: 1rem; /* Add some gap between items */
  justify-content: center; /* Center items horizontally */
  align-items: flex-start; /* Align items at the start vertically */
`;

export const FilterConatiner = styled.div`
  background-color: white;
  width: 20%;
  height: 600px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px 0 #7f7e7f;
`;

export const RolesContainer = styled.div`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
`;
