import React, { useState } from "react";
import { withTheme } from "styled-components";
import {
  TeamContentBlock,
  MembersContainer,
  MemberImage,
  MemberCard,
  MemberInfo,
  MemberName,
  MemberRole,
  MemberBio,
  MemberSkills,
  MemberLinks,
  MemberStats,
  TeamSection,
  TeamHeader,
  TeamStats,
  MemberModal,
  ModalOverlay,
  ModalContent,
  CloseButton,
  SkillTag,
  LinkButton,
  StatItem,
  EmptyState,
  EmptyStateIcon,
  EmptyStateText,
  EmptyStateSubtext,
} from "./StyledTeam";
import Section from "../Section";

// Enhanced Member Card Component
const MemberCardComponent = ({ member, isLeader = false, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MemberCard
      isLeader={isLeader}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={isHovered ? 'hovered' : ''}
    >
      <div className="member-image-container">
        <MemberImage
          src={member.profile?.profilePictureUrl || '/images/default-avatar.png'}
          alt={`${member.profile?.displayName || 'Team member'}'s profile picture`}
        />
        {isLeader && <div className="leader-badge">👑</div>}
        <div className="member-overlay">
          <span>View Profile</span>
        </div>
      </div>
      
      <MemberInfo>
        <MemberName>{member.profile?.displayName || 'Anonymous'}</MemberName>
        <MemberRole>{member.role || 'Team Member'}</MemberRole>
        
        {member.profile?.bio && (
          <MemberBio>{member.profile.bio.substring(0, 100)}...</MemberBio>
        )}
        
        {member.profile?.skills && member.profile.skills.length > 0 && (
          <MemberSkills>
            {member.profile.skills.slice(0, 3).map((skill, index) => (
              <SkillTag key={index}>{skill}</SkillTag>
            ))}
            {member.profile.skills.length > 3 && (
              <SkillTag>+{member.profile.skills.length - 3}</SkillTag>
            )}
          </MemberSkills>
        )}
        
        <MemberStats>
          <StatItem>
            <span className="stat-number">{member.profile?.contributions || 0}</span>
            <span className="stat-label">Contributions</span>
          </StatItem>
          <StatItem>
            <span className="stat-number">{member.profile?.projects || 0}</span>
            <span className="stat-label">Projects</span>
          </StatItem>
        </MemberStats>
      </MemberInfo>
    </MemberCard>
  );
};

// Enhanced Member Modal Component
const MemberModalComponent = ({ member, isOpen, onClose }) => {
  if (!isOpen || !member) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        
        <div className="modal-header">
          <MemberImage
            src={member.profile?.profilePictureUrl || '/images/default-avatar.png'}
            alt={`${member.profile?.displayName || 'Team member'}'s profile picture`}
            className="modal-image"
          />
          <div className="modal-header-info">
            <MemberName className="modal-name">{member.profile?.displayName || 'Anonymous'}</MemberName>
            <MemberRole className="modal-role">{member.role || 'Team Member'}</MemberRole>
            {member.email && (
              <LinkButton href={`mailto:${member.email}`} className="email-link">
                📧 Send Email
              </LinkButton>
            )}
          </div>
        </div>

        <div className="modal-body">
          {member.profile?.bio && (
            <div className="modal-section">
              <h4>About</h4>
              <p>{member.profile.bio}</p>
            </div>
          )}

          {member.profile?.skills && member.profile.skills.length > 0 && (
            <div className="modal-section">
              <h4>Skills & Expertise</h4>
              <MemberSkills>
                {member.profile.skills.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </MemberSkills>
            </div>
          )}

          <div className="modal-section">
            <h4>Project Statistics</h4>
            <MemberStats className="modal-stats">
              <StatItem>
                <span className="stat-number">{member.profile?.contributions || 0}</span>
                <span className="stat-label">Total Contributions</span>
              </StatItem>
              <StatItem>
                <span className="stat-number">{member.profile?.projects || 0}</span>
                <span className="stat-label">Projects Involved</span>
              </StatItem>
              <StatItem>
                <span className="stat-number">{member.profile?.commits || 0}</span>
                <span className="stat-label">Code Commits</span>
              </StatItem>
              <StatItem>
                <span className="stat-number">{member.profile?.reviews || 0}</span>
                <span className="stat-label">Code Reviews</span>
              </StatItem>
            </MemberStats>
          </div>

          {member.profile?.links && (
            <div className="modal-section">
              <h4>Connect</h4>
              <MemberLinks>
                {member.profile.links.github && (
                  <LinkButton href={member.profile.links.github} target="_blank" rel="noopener noreferrer">
                    🐙 GitHub
                  </LinkButton>
                )}
                {member.profile.links.linkedin && (
                  <LinkButton href={member.profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                    💼 LinkedIn
                  </LinkButton>
                )}
                {member.profile.links.portfolio && (
                  <LinkButton href={member.profile.links.portfolio} target="_blank" rel="noopener noreferrer">
                    🌐 Portfolio
                  </LinkButton>
                )}
              </MemberLinks>
            </div>
          )}
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

const Team = ({ data }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const hasTeamMembers = data?.leaders?.length > 0 || data?.members?.length > 0;
  const totalMembers = (data?.leaders?.length || 0) + (data?.members?.length || 0);

  return (
    <Section
      bgColor="#1a1a1a"
      Title=""
      Content={
        hasTeamMembers ? (
          <TeamSection>
            <TeamHeader>
              <h2>Meet Our Amazing Team</h2>
              <p>Talented individuals working together to build something extraordinary</p>
              <TeamStats>
                <StatItem>
                  <span className="stat-number">{totalMembers}</span>
                  <span className="stat-label">Total Members</span>
                </StatItem>
                <StatItem>
                  <span className="stat-number">{data?.leaders?.length || 0}</span>
                  <span className="stat-label">Team Leaders</span>
                </StatItem>
                <StatItem>
                  <span className="stat-number">{data?.members?.length || 0}</span>
                  <span className="stat-label">Contributors</span>
                </StatItem>
              </TeamStats>
            </TeamHeader>

            <TeamContentBlock>
              {data?.leaders?.length > 0 && (
                <div className="team-section">
                  <h3 className="section-title">
                    <span className="title-icon">👑</span>
                    Team Leaders
                  </h3>
                  <MembersContainer>
                    {data.leaders.map((leader) => (
                      <MemberCardComponent
                        key={leader.id}
                        member={leader}
                        isLeader={true}
                        onClick={() => handleMemberClick(leader)}
                      />
                    ))}
                  </MembersContainer>
                </div>
              )}

              {data?.members?.length > 0 && (
                <div className="team-section">
                  <h3 className="section-title">
                    <span className="title-icon">🚀</span>
                    Team Members
                  </h3>
                  <MembersContainer>
                    {data.members.map((member) => (
                      <MemberCardComponent
                        key={member.id}
                        member={member}
                        isLeader={false}
                        onClick={() => handleMemberClick(member)}
                      />
                    ))}
                  </MembersContainer>
                </div>
              )}
            </TeamContentBlock>

            <MemberModalComponent
              member={selectedMember}
              isOpen={isModalOpen}
              onClose={handleCloseModal}
            />
          </TeamSection>
        ) : (
          <EmptyState>
            <EmptyStateIcon>👥</EmptyStateIcon>
            <EmptyStateText>No Team Members Yet</EmptyStateText>
            <EmptyStateSubtext>
              This project is looking for passionate contributors to join the team. 
              Be the first to make a difference!
            </EmptyStateSubtext>
          </EmptyState>
        )
      }
    />
  );
};

export default withTheme(Team);
