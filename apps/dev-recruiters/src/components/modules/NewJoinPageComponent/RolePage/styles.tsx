import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000000;
`;

export const HeroSection = styled.div`
  background: linear-gradient(180deg, #1a2332 0%, #0a0f1a 100%);
  padding: 80px 20px 40px;
  border-bottom: 1px solid #2a2a2a;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 12px 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1rem;
  color: #9ca3af;
  margin: 0 0 24px 0;
`;

export const BadgesContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;

export const Badge = styled.span`
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  color: #d1d5db;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const ActionButtonsTop = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const SaveButton = styled.button`
  background: transparent;
  color: #7c3aed;
  border: 2px solid #7c3aed;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: rgba(124, 58, 237, 0.1);
  }
`;

export const ApplyButtonTop = styled.button`
  background: #7c3aed;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #6d28d9;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 20px;
  display: flex;
  gap: 48px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 48px;
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1024px) {
    order: -1;
  }
`;

export const SidebarCard = styled.div`
  background: #0f0f0f;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 24px;
`;

export const SidebarTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 16px 0;
`;

export const SidebarContent = styled.div``;

export const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SkillTag = styled.span`
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  color: #d1d5db;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const ContentSection = styled.section``;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 16px 0;
`;

export const SectionContent = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: #d1d5db;
  margin: 0;
`;

export const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const BulletListItem = styled.li`
  font-size: 0.95rem;
  line-height: 1.7;
  color: #d1d5db;
  padding-left: 24px;
  position: relative;
  margin-bottom: 12px;

  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #7c3aed;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const InfoCard = styled.div`
  background: #0f0f0f;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  padding: 16px;
`;

export const RelatedSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 20px 80px;
  border-top: 1px solid #2a2a2a;
`;

export const RelatedTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 32px 0;
`;

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const RelatedCard = styled.div`
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: #222222;
    border-color: #7c3aed;
    transform: translateY(-4px);
  }
`;

export const RelatedCardIcon = styled.div`
  width: 64px;
  height: 64px;
  background: #2a2a2a;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  svg {
    color: #ffffff;
  }
`;

export const RelatedCardTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 8px 0;
`;

export const RelatedCardSubtitle = styled.p`
  font-size: 0.75rem;
  color: #9ca3af;
  margin: 0 0 12px 0;
`;

export const RelatedCardMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 0.75rem;
  color: #d1d5db;

  span {
    &:not(:last-child)::after {
      content: '•';
      margin-left: 12px;
      color: #6b7280;
    }
  }
`;

export const RelatedCardDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  color: #b0b0b0;
  margin: 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const RelatedCardButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

export const RelatedCardButton = styled.button<{
  variant?: 'primary' | 'secondary';
}>`
  background: ${(props) =>
    props.variant === 'primary' ? 'transparent' : '#7c3aed'};
  color: #ffffff;
  border: ${(props) =>
    props.variant === 'primary' ? '1px solid #4b5563' : 'none'};
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${(props) =>
      props.variant === 'primary' ? '#1f2937' : '#6d28d9'};
  }
`;

export const customStyles = {
  content: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    width: '70%',
    height: '80%',
    border: '1px solid rgba(0, 0, 0, 1)',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1001,
  },
  overlay: { zIndex: 1000, backgroundColor: 'rgba(0,0,0,1)' },
};
