import styled from 'styled-components';

export const RoleDetailsModalWrapper = styled.div`
  background: #0a0a0a;
  color: #ffffff;
  max-width: 900px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`;

export const CloseColorBoxContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 16px 24px;
  background: #1a1a1a;
`;

export const ColorBox = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    to right,
    #ff7f0e 25%,
    #ffab00 25% 50%,
    #81c3d7 50% 75%,
    #3a7ca5 75% 100%
  );
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`;

export const ModalTopSection = styled.div`
  padding: 32px 48px;
  background: #1a1a1a;
  border-bottom: 1px solid #2a2a2a;
`;

export const ModalHeader = styled.div`
  margin-bottom: 24px;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0 0 8px 0;
    color: #ffffff;
  }

  p {
    font-size: 0.875rem;
    color: #9ca3af;
    margin: 0;
  }
`;

export const BadgesContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const Badge = styled.span`
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  color: #d1d5db;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const MetadataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const MetadataItem = styled.div`
  h5 {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #9ca3af;
    margin: 0 0 8px 0;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 0.875rem;
    color: #ffffff;
    margin: 0;
  }
`;

export const ModalDescriptionSection = styled.div<{ Mobile?: boolean }>`
  display: ${(props) => (props.Mobile ? 'none' : 'block')};

  h5 {
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 12px 0;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.6;
    color: #d1d5db;
    margin: 0;
  }

  @media (max-width: 760px) {
    display: ${(props) => (props.Mobile ? 'block' : 'none')};
  }
`;

export const ModalSkillRequiredSection = styled.div`
  background: #0f0f0f;
  padding: 24px;
  border-radius: 8px;
  margin-top: 24px;

  h5 {
    font-size: 0.875rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 16px 0;
  }
`;

export const TagsSection = styled.div`
  margin-top: 12px;
`;

export const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TagsListItem = styled.span<{ color?: string }>`
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  color: #d1d5db;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const ModalBottomSection = styled.div`
  padding: 32px 48px;
  background: #0a0a0a;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const ContentSection = styled.div`
  h5 {
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 16px 0;
  }
`;

export const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const BulletListItem = styled.li`
  font-size: 0.875rem;
  line-height: 1.6;
  color: #d1d5db;
  padding-left: 20px;
  position: relative;
  margin-bottom: 12px;

  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #7c3aed;
    font-weight: bold;
  }
`;

export const ButtonsSection = styled.div<{ Mobile?: boolean }>`
  display: ${(props) => (props.Mobile ? 'none' : 'flex')};
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
  margin-top: 32px;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const SaveForLaterButton = styled.button<{ color?: string }>`
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

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ApplyButton = styled.button<{ color?: string }>`
  background: #7c3aed;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #6d28d9;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const ModalProjectSection = styled.div``;

export const RelatedPositionsSection = styled.div`
  padding: 48px;
  background: #0a0a0a;
  border-top: 1px solid #2a2a2a;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 32px 0;
  }
`;

export const RelatedPositionsGrid = styled.div`
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

export const RelatedPositionCard = styled.div`
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: #222222;
    border-color: #7c3aed;
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

  img {
    width: 36px;
    height: 36px;
    filter: brightness(0) invert(1);
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
