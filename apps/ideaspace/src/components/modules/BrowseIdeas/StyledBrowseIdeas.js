import styled from 'styled-components';

export const PageWrapper = styled.section`
  background-color: #ffffff;
  padding: 0rem 11.5rem 3.5rem;

  @media (max-width: 1536px) {
    padding: 0rem 3rem 3.5rem;
  }
  @media (max-width: 1192px) {
    padding: 0rem 2rem 3.5rem;
  }
  @media (max-width: 1024px) {
    padding: 0rem 1.5rem 5rem;
  }
  @media (max-width: 640px) {
    padding: 0rem 1.25rem 5rem;
  }
`;

export const StyledRanbow = styled.div`
  margin: 1.3rem auto 0 auto;
  max-width: 21rem;
  height: 5px;
`;

export const IdeaCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 2rem;
  row-gap: 2rem;
  margin: 1.5rem 0rem;

  // Default screen: 3 cards per row
  & > div {
    flex: 1 1 calc(33.333% - 2rem); // Dynamic width for 3 cards per row
    max-width: calc(33.333% - 2rem); // Max width for each card
  }

  @media (max-width: 1192px) {
    column-gap: 1.5rem;
    row-gap: 1.5rem;
  }

  // Breakpoint for screens up to 1024px (2 cards per row)
  @media (max-width: 1024px) {
    & > div {
      flex: 1 1 calc(50% - 2rem); // Dynamic width for 2 cards per row
      max-width: calc(50% - 2rem);
    }
  }

  // Breakpoint for screens up to 768px: Single card per row, height increases
  @media (max-width: 768px) {
    & > div {
      flex: 1 1 calc(100% - 2rem); // Full width for a single card per row
      max-width: calc(100% - 2rem);
    }
  }

  // Breakpoint for screens up to 640px (1 card per row)
  @media (max-width: 640px) {
    column-gap: 1.25rem;
    row-gap: 32px;

    & > div {
      flex: 1 1 calc(100% - 1.25rem); // Full width for a single card per row
      max-width: calc(100% - 1.25rem);
    }
  }
`;

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 0.5rem;
`;
