import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Opportunity } from '@devlaunchers/models';
import { agent } from '@devlaunchers/utility';
import { useUserDataContext } from '@devlaunchers/components/src/context/UserDataContext';
import {
  PageWrapper,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  BadgesContainer,
  Badge,
  ActionButtonsTop,
  SaveButton,
  ContentWrapper,
  MainContent,
  SidebarCard,
  SidebarTitle,
  SidebarContent,
  SkillTag,
  SkillsGrid,
  ContentSection,
  SectionTitle,
  SectionContent,
  TwoColumnGrid,
  RelatedSection,
  RelatedTitle,
  RelatedGrid,
  RelatedCard,
  RelatedCardIcon,
  RelatedCardTitle,
  RelatedCardSubtitle,
  RelatedCardMeta,
  RelatedCardDescription,
  RelatedCardButtons,
  customStyles,
} from './styles';
import LoginPage from '../../LoginPage/loginPage';
import Modal from '../../DetailedPage/PositionPopupModal/Modal';

import { Button } from '@devlaunchers/components/src/components/atoms';
import ApplyRoleComponent from '../ApplyRoleComponent/ApplyRoleComponent';

const RolePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [role, setRole] = useState<Opportunity | null>(null);
  const [suggestedRoles, setSuggestedRoles] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(false);
  const [isApplyMode, setIsApplyMode] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { isAuthenticated } = useUserDataContext();

  useEffect(() => {
    console.log(id);
    if (!id) return;
    setLoading(true);

    const loadRoleData = async () => {
      try {
        // Try to get from sessionStorage first
        const cachedData = sessionStorage.getItem(`role_${id}`);
        if (cachedData) {
          const parsed = JSON.parse(cachedData);
          // Check if the cached role ID matches
          if (parsed.role && parsed.role.id === id) {
            setRole(parsed.role);
            return;
          }
        }

        // Fallback: fetch from API
        const fetchedRole = await agent.Opportunities.get(id as string);
        setRole(fetchedRole);
      } catch (error) {
        console.error('Error loading role:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRoleData();

    const apply = sessionStorage.getItem(`role_${id}_apply`);
    if (apply && apply === 'true') {
      setIsApplyMode(true);
      sessionStorage.removeItem(`role_${id}_apply`);
    }
  }, [id]);

  const handleOpenApplyMode = () => {
    setIsApplyMode(true);
  };

  const handleCloseApplyMode = () => {
    setIsApplyMode(false);
  };

  const handleApplicationSuccess = () => {
    setIsApplyMode(false);
    setShowSuccessModal(true);
  };

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleRelatedRoleClick = (relatedRole: Opportunity) => {
    // Store the new role in sessionStorage
    sessionStorage.setItem(
      `role_${relatedRole.id}`,
      JSON.stringify({
        role: relatedRole,
        suggestedRoleIds: suggestedRoles.map((r) => r.id),
      })
    );
    router.push(`/join/roles/${relatedRole.id}`);
  };

  if (loading) {
    return (
      <PageWrapper>
        <div style={{ color: 'white', textAlign: 'center', padding: '4rem' }}>
          Loading...
        </div>
      </PageWrapper>
    );
  }

  if (!role) {
    return (
      <PageWrapper>
        <div style={{ color: 'white', textAlign: 'center', padding: '4rem' }}>
          Role not found
        </div>
      </PageWrapper>
    );
  }

  const {
    title,
    commitmentHoursPerWeek,
    level,
    description,
    roleCategory,
    whyJoin,
    interests: { data: skillsData },
  } = role.attributes;

  const projectId = role?.id;
  const projectSlug = role?.attributes?.title;
  const expectationList = role?.attributes?.expectations || [];
  return (
    <PageWrapper>
      {/* Hero Section - Always visible */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>{title}</HeroTitle>
          <HeroSubtitle>Platform Team | {roleCategory}</HeroSubtitle>
          <BadgesContainer>
            <Badge>{level}</Badge>
            <Badge>{commitmentHoursPerWeek} Hours Per Week</Badge>
          </BadgesContainer>

          {/* Only show action buttons when not in apply mode */}
          {!isApplyMode && (
            <ActionButtonsTop>
              <SaveButton>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Save For Later
              </SaveButton>
              {isAuthenticated ? (
                <Button onClick={handleOpenApplyMode}>Apply</Button>
              ) : (
                <Button onClick={handleOpenLoginModal}>Sign In To Apply</Button>
              )}
            </ActionButtonsTop>
          )}
        </HeroContent>
      </HeroSection>

      {/* Conditional rendering: Apply form OR Role details */}
      {isApplyMode ? (
        <ApplyRoleComponent
          position={role}
          projectId={projectId}
          projectSlug={projectSlug}
          onCancel={handleCloseApplyMode}
          onSuccess={handleApplicationSuccess}
        />
      ) : (
        <>
          {/* Main Content */}
          <ContentWrapper>
            <MainContent>
              {/* About the Role */}
              <TwoColumnGrid>
                <SidebarCard>
                  <SidebarTitle>Skills Required</SidebarTitle>
                  <SidebarContent>
                    <SkillsGrid>
                      {skillsData?.map((skill, index) => {
                        const { interest } = skill?.attributes;
                        return (
                          <SkillTag key={index} as={'span'}>
                            {interest}
                          </SkillTag>
                        );
                      })}
                    </SkillsGrid>
                  </SidebarContent>
                </SidebarCard>
                <ContentSection>
                  <SectionTitle>About the Role</SectionTitle>
                  <SectionContent>{description}</SectionContent>
                </ContentSection>
              </TwoColumnGrid>

              {/* Responsibilities & Why Join */}
              <TwoColumnGrid>
                <ContentSection>
                  <SectionTitle>Responsibilities</SectionTitle>
                  {expectationList.length === 0 ? (
                    <p>No specific responsibilities listed.</p>
                  ) : (
                    <ul className="list-none">
                      {expectationList.map((item) => (
                        <li
                          key={item.id}
                          className="relative text-gray-300 text-sm mb-3 before:absolute before:left-0 before:text-purple-600 before:text-lg before:font-bold"
                        >
                          {item.expectation}
                        </li>
                      ))}
                    </ul>
                  )}
                </ContentSection>
                <ContentSection>
                  <SectionTitle>Why Should You Join?</SectionTitle>
                  <SectionContent>{whyJoin}</SectionContent>
                </ContentSection>
              </TwoColumnGrid>

              {/* About the Team */}
              <TwoColumnGrid>
                <ContentSection>
                  <SectionTitle>About the Team</SectionTitle>
                  <SectionContent>
                    The Platform Team builds and maintains shared components,
                    internal tools, and core systems that power the Dev
                    Launchers ecosystem. We focus on scalable, reusable
                    solutions that support other project teams and enable them
                    to work efficiently.
                  </SectionContent>
                  <a
                    href="#"
                    style={{
                      color: '#7c3aed',
                      fontSize: '0.875rem',
                      marginTop: '8px',
                      display: 'inline-block',
                    }}
                  >
                    Learn about the Platform Team →
                  </a>
                </ContentSection>
                {/* About Dev Launchers */}
                <ContentSection>
                  <SectionTitle>About Dev Launchers</SectionTitle>
                  <SectionContent>
                    Dev Launchers is a 501(c)(3) nonprofit creating real-world
                    tech opportunities for learners of all backgrounds. Through
                    hands-on projects and a supportive community, we help
                    volunteers gain professional experience, grow their skills,
                    and launch meaningful careers in tech.
                  </SectionContent>
                </ContentSection>
              </TwoColumnGrid>
            </MainContent>
          </ContentWrapper>

          {/* Related Positions */}
          {suggestedRoles && suggestedRoles.length > 0 && (
            <RelatedSection>
              <RelatedTitle>Related Positions</RelatedTitle>
              <RelatedGrid>
                {suggestedRoles.slice(0, 3).map((suggestedRole, index) => (
                  <RelatedCard
                    key={index}
                    as={'div'}
                    onClick={() => handleRelatedRoleClick(suggestedRole)}
                  >
                    <RelatedCardIcon>
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M12 2L2 7l10 5 10-5-10-5z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 17l10 5 10-5M2 12l10 5 10-5"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </RelatedCardIcon>
                    <RelatedCardTitle>
                      {suggestedRole?.attributes?.title}
                    </RelatedCardTitle>
                    <RelatedCardSubtitle>
                      Platform Team | {suggestedRole?.attributes?.roleCategory}
                    </RelatedCardSubtitle>
                    <RelatedCardMeta>
                      <span>{suggestedRole?.attributes?.level}</span>
                      <span>
                        {suggestedRole?.attributes?.commitmentHoursPerWeek}{' '}
                        Hours Per Week
                      </span>
                      <span>1 Roles Open</span>
                    </RelatedCardMeta>
                    <RelatedCardDescription>
                      {suggestedRole?.attributes?.description}
                    </RelatedCardDescription>
                    <RelatedCardButtons>
                      <Button>Role Details</Button>
                      <Button onClick={handleOpenApplyMode}>Apply</Button>
                    </RelatedCardButtons>
                  </RelatedCard>
                ))}
              </RelatedGrid>
            </RelatedSection>
          )}
        </>
      )}

      {/* Modals */}
      <Modal
        modalIsOpen={showLoginModal}
        handleOpenModal={handleOpenLoginModal}
        customModalStyles={customStyles}
        modalContent={<LoginPage closeModal={handleCloseLoginModal} />}
      />

      <Modal
        modalIsOpen={showSuccessModal}
        handleOpenModal={() => setShowSuccessModal(true)}
        closeModal={() => setShowSuccessModal(false)}
        customModalStyles={customStyles}
        modalContent={
          <div className="p-8 text-center text-white">
            <h2 className="text-xl mb-4">Application Submitted!</h2>

            <p className="text-gray-400 mb-8">
              Thank you for applying. We'll review your application and get back
              to you soon.
            </p>

            <div className="flex justify-center">
              <Button onClick={() => setShowSuccessModal(false)}>Close</Button>
            </div>
          </div>
        }
      />
    </PageWrapper>
  );
};

export default RolePage;
