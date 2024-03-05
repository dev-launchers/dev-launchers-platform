import styled from 'styled-components';

export const OpenRolesText = styled.div`
  margin-left: 4.25rem;
  font-size: 1.25rem;
  font-family: 'Nunito Sans', sans-serif;
`;

export const RolesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

export const EmptyRolesContainer = styled.div`
  /* margin-left: 4.25rem; */
  display: flex;
  justify-content: center;
  width: 75%;
  /* margin-top: 3rem;
  margin-bottom: 3rem; */
  margin: 3rem 4.25rem 3rem 0;
  background-color: white;
  padding: 2.5rem;
  border-radius: 0.9375rem;
  font-family: 'Nunito Sans', sans-serif;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  @media not all and (min-width: 640px) {
    margin: 2rem auto;
    padding: 1.5rem;
    width: 100%;
  }
`;
