import styled from 'styled-components';

export const ResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  padding: 2rem;
  gap: 1rem; /* Add some gap between items */
  justify-content: center; /* Center items horizontally */
  align-items: flex-start; /* Align items at the start vertically */
  @media not all and (min-width: 640px) {
    padding: .5rem;
  }
`;

export const FilterConatiner = styled.div`
  background-color: white;
  width: 21%;
  height: 46.875rem;
  border-radius: 0.5rem;
  box-shadow: 0.125rem 0.125rem 0.5rem 0 #7f7e7f;
  @media not all and (min-width: 640px) {
    width: 100%;
  }
`;

export const RolesContainer = styled.div`
  width: 65%;
  margin-left: 2.5rem;
  @media not all and (min-width: 640px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const SearchResult = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 700;
  margin-top: 5rem;
  font-size: 2rem;
  font-family: 'Inter', sans-serif;
`;
