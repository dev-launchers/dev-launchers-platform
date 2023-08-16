import styled from 'styled-components';

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
  width: 21%;
  height: 800px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px 0 #7f7e7f;
`;

export const RolesContainer = styled.div`
  width: 65%;
  margin-left: 2.5rem;
`;

export const SearchResult = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 700;
  margin-top: 5rem;
`;
