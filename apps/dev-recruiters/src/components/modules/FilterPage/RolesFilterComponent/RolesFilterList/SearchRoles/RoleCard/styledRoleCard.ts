import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  background: #1a1a1a;
  border-radius: 12px;
  border: 1px solid #2a2a2a;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: #222222;
    border-color: #6b46c1;
  }
`;

export const CardContent = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;
  align-items: flex-start;
`;

export const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  background: #2a2a2a;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const RoleIcon = styled.img`
  width: 48px;
  height: 48px;
  filter: brightness(0) invert(1);
`;

export const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #ffffff;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  color: #ffffff;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin: 0;
`;

export const MetadataContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 0.5rem 0;
`;

export const MetadataItem = styled.span`
  font-size: 0.875rem;
  color: #d1d5db;
`;

export const RoleCountBadge = styled.span`
  font-size: 0.875rem;
  color: #9ca3af;
`;

export const AboutDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #b0b0b0;
  margin: 0.75rem 0 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background-color: ${(props) =>
    props.variant === 'primary' ? 'transparent' : '#7c3aed'};
  color: #ffffff;
  border: ${(props) =>
    props.variant === 'primary' ? '1px solid #4b5563' : 'none'};
  border-radius: 8px;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) =>
      props.variant === 'primary' ? '#1f2937' : '#6d28d9'};
  }
`;

export const modalStyle = {
  content: {
    position: 'absolute',
    width: '70%',
    height: '98%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1001,
    padding: '24px 32px 32px 32px',
    borderRadius: '16px',
  },
  // set background color to black
  overlay: { zIndex: 1000, backgroundColor: 'rgba(0,0,0,1)' },
};
