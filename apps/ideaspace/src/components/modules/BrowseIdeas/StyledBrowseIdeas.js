import styled from 'styled-components';

export const PageWrapper = styled.section`
  background-color: #ffffff;
  padding: 0rem calc((100% - 75.5rem) / 2) 3.5rem calc((100% - 75.5rem) / 2);

  @media (max-width: 1278px) {
    padding: 0rem calc((100% - 70.5rem) / 2) 3.5rem calc((100% - 70.5rem) / 2);
  }
  @media (max-width: 1192px) {
    padding: 0rem calc((100% - 46.5rem) / 2) 3.5rem calc((100% - 46.5rem) / 2);
  }
  @media (max-width: 810px) {
    padding: 0rem 2rem 5rem 2rem;
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
  column-gap: 1rem;
  row-gap: 1rem;
  margin: 1.5rem auto;

  @media (max-width: 1278px) {
    column-gap: 1.2rem;
  }
`;

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 0.5rem;
`;
