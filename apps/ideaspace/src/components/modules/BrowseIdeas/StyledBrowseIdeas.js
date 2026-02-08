import styled from 'styled-components';
import { radiusStyles } from '@devlaunchers/components/src/components/atoms';
import {
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@devlaunchers/components/src/components/molecules/DropdownMenu';

export const PageWrapper = styled.section`
  background-color: #000000;
  padding: 0rem 4rem 3.5rem;

  @media (max-width: 1440px) {
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
  margin: 1.3rem auto 1rem auto;
  max-width: 21rem;
  height: 5px;
`;

export const IdeaCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 2rem;
  row-gap: 2rem;
  margin: 1.5rem 0rem;
  color: #ffffff;

  // Default screen: 4 cards per row
  & > div {
    flex: 1 1 calc(25% - 1.5rem); // Dynamic width for 4 cards per row
    max-width: calc(25% - 1.5rem); // Max width for each card
    height: 380px;
  }

  // Breakpoint for screens up to 1440px (3 cards per row)
  @media (max-width: 1440px) {
    & > div {
      flex: 1 1 calc(33.333% - 1.34rem); // Dynamic width for 3 cards per row
      max-width: calc(33.333% - 1.34rem); // Max width for each card
    }
  }

  @media (max-width: 1192px) {
    column-gap: 1.5rem;
    row-gap: 1.5rem;
  }

  // Breakpoint for screens up to 1024px (2 cards per row)
  @media (max-width: 1024px) {
    & > div {
      flex: 1 1 calc(50% - 0.75rem); // Dynamic width for 2 cards per row
      max-width: calc(50% - 0.75rem);
    }
  }

  // Breakpoint for screens up to 640px (1 card per row)
  @media (max-width: 640px) {
    row-gap: 1.25rem;

    & > div {
      flex: 1 1 calc(100%); // Full width for a single card per row
      max-width: calc(100%);
    }
  }
`;

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 0.5rem;
`;

export const DropdownMenuTriggerStyled = styled(DropdownMenuTrigger)`
  cursor: pointer;
  pointer-events: auto;
`;

export const DropdownMenuRadioItemStyled = styled(DropdownMenuRadioItem)`
  ${radiusStyles['radius200']};
  &:hover {
    cursor: pointer;
  }
`;
