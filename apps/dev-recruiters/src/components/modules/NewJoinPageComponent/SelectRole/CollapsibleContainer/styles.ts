import styled from 'styled-components';

export const RoleContainerBody = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 36px;
  margin-bottom: 50px;
`;

export const RoleContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const SectionTitle = styled.h2`
  font-family: 'Abel', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
`;

export const SectionSubtitle = styled.p`
  font-family: 'Abel', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #b0b0b0;
  margin-bottom: 48px;
  max-width: 800px;
`;

export const RoleCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme?.colors?.White || '#ffffff'};
  margin-bottom: 0.5rem;
`;

export const RoleCardCount = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme?.colors?.Gray || '#9ca3af'};
  margin-bottom: 1rem;
`;

export const RoleCardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: ${({ theme }) => theme?.colors?.Gray || '#d1d5db'};
  margin-bottom: 2.5rem;
  min-height: 60px;
`;

export const RoleCardLink = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme?.colors?.ACCENT_1 || '#c4b5fd'};
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme?.colors?.ACCENT_2 || '#ddd6fe'};
  }
`;

export const RoleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const RoleGrid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
