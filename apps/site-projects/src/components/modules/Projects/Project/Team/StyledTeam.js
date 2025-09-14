import styled, { keyframes } from "styled-components";

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

// Main Team Section
export const TeamSection = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 20px;
  margin: 2rem 0;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const TeamHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #a0a0a0;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TeamStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const TeamContentBlock = styled.div`
  width: 100%;

  .team-section {
    margin-bottom: 3rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .section-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #667eea;

    .title-icon {
      font-size: 1.8rem;
    }
  }
`;

export const MembersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

// Member Card Components
export const MemberCard = styled.div`
  background: linear-gradient(145deg, #2a2a2a 0%, #1e1e1e 100%);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid #333;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: ${slideIn} 0.6s ease-out;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
    border-color: #667eea;

    .member-overlay {
      opacity: 1;
    }

    .member-image-container img {
      transform: scale(1.1);
    }
  }

  &.hovered {
    animation: ${pulse} 0.6s ease-in-out;
  }

  ${props => props.isLeader && `
    border: 2px solid #ffd700;
    background: linear-gradient(145deg, #2a2a2a 0%, #1e1e1e 100%);
    
    &:hover {
      box-shadow: 0 20px 40px rgba(255, 215, 0, 0.3);
    }
  `}
`;

export const MemberImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #667eea;
  transition: all 0.3s ease;
  margin-bottom: 1rem;

  &.modal-image {
    width: 120px;
    height: 120px;
    border: 4px solid #667eea;
  }
`;

export const MemberInfo = styled.div`
  text-align: center;
`;

export const MemberName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;

  &.modal-name {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
`;

export const MemberRole = styled.p`
  font-size: 1rem;
  color: #667eea;
  font-weight: 500;
  margin-bottom: 1rem;

  &.modal-role {
    font-size: 1.2rem;
    color: #a0a0a0;
  }
`;

export const MemberBio = styled.p`
  font-size: 0.9rem;
  color: #a0a0a0;
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: left;
`;

export const MemberSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const SkillTag = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const MemberStats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #333;

  &.modal-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    border-top: none;
    padding-top: 0;
  }
`;

export const StatItem = styled.div`
  text-align: center;

  .stat-number {
    display: block;
    font-size: 1.2rem;
    font-weight: 700;
    color: #667eea;
  }

  .stat-label {
    display: block;
    font-size: 0.8rem;
    color: #a0a0a0;
    margin-top: 0.2rem;
  }
`;

// Modal Components
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const ModalContent = styled.div`
  background: linear-gradient(145deg, #2a2a2a 0%, #1e1e1e 100%);
  border-radius: 20px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  border: 1px solid #333;
  position: relative;
  animation: ${slideIn} 0.3s ease-out;

  .modal-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #333;
  }

  .modal-header-info {
    flex: 1;
  }

  .modal-body {
    .modal-section {
      margin-bottom: 2rem;

      &:last-child {
        margin-bottom: 0;
      }

      h4 {
        font-size: 1.2rem;
        font-weight: 600;
        color: #667eea;
        margin-bottom: 1rem;
      }

      p {
        color: #a0a0a0;
        line-height: 1.6;
      }
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #a0a0a0;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

export const MemberLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  }

  &.email-link {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
    
    &:hover {
      box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
    }
  }
`;

// Empty State
export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #a0a0a0;
`;

export const EmptyStateIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const EmptyStateText = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

export const EmptyStateSubtext = styled.p`
  font-size: 1rem;
  color: #a0a0a0;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.5;
`;

// Additional styled components for enhanced functionality
export const MemberModal = styled.div`
  /* Additional modal styling if needed */
`;

// Image container with overlay effects
export const MemberImageContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;

  .member-image-container {
    position: relative;
    display: inline-block;

    .leader-badge {
      position: absolute;
      top: -5px;
      right: -5px;
      background: #ffd700;
      color: #000;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      border: 2px solid #fff;
    }

    .member-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(102, 126, 234, 0.8);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;

      span {
        color: white;
        font-weight: 600;
        font-size: 0.9rem;
      }
    }
  }
`;
