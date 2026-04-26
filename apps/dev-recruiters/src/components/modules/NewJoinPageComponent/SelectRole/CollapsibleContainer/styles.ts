import styled from 'styled-components';

/**
 * ISSUE #2819: Global Style Alignment
 * This file has been updated to align the CollapsibleContainer UI with the Figma design.
 * Primary focus: Typography consistency, theme token integration, and spacing.
 */

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
  /* Using theme font family for consistency with Figma design */
  font-family: ${({ theme }) => theme?.fonts?.headline || 'Abel'}, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  /* Using theme token for consistent white color */
  color: ${({ theme }) => theme?.colors?.White || '#ffffff'};
  margin-bottom: 16px;
`;

export const SectionSubtitle = styled.p`
  /* Using theme font family for body text consistency */
  font-family: ${({ theme }) => theme?.fonts?.normal || 'Nunito Sans'}, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  /* Using theme token for neutral text color */
  color: ${({ theme }) => theme?.colors?.NEUTRAL_5 || '#89969f'};
  margin-bottom: 48px;
  max-width: 800px;
`;

export const RoleCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  /* Using theme token for consistent white color across cards */
  color: ${({ theme }) => theme?.colors?.White || '#ffffff'};
  margin-bottom: 0.5rem;
`;

export const RoleCardCount = styled.p`
  font-size: 0.875rem;
  /* Using theme token for consistent gray text */
  color: ${({ theme }) => theme?.colors?.NEUTRAL_5 || '#89969f'};
  margin-bottom: 1rem;
`;

export const RoleCardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  /* Using theme token for description text color */
  color: ${({ theme }) => theme?.colors?.Argent || '#c3c0c0'};
  margin-bottom: 2.5rem;
  min-height: 60px;
`;

export const RoleCardLink = styled.span`
  font-size: 0.875rem;
  /* Using theme accent color for links to match Figma design */
  color: ${({ theme }) => theme?.colors?.ACCENT_4 || '#81c3d7'};
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme?.colors?.ACCENT_3 || '#3a7ca5'};
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
