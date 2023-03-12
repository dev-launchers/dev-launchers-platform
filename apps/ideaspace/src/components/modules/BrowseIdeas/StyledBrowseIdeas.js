import styled from 'styled-components';

export const PageWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.NEUTRAL_2};
  padding: 58px 0 21px 0;
`;

export const CardsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  max-width: 1900px;
  padding: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
