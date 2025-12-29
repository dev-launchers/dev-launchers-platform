// components/CollapsibleContainer.tsx
import { useRouter } from 'next/router';
import React from 'react';
import CaseStudy from '../../../../../images/icons/Case-Study.png';
import DesignServices from '../../../../../images/icons/Design-services.png';
import DeveloperMode from '../../../../../images/icons/Developer-mode.png';
import FloorPlan from '../../../../../images/icons/Floor-Plan.png';
import PopularMan from '../../../../../images/icons/Popular-Man.png';
import SourceCode from '../../../../../images/icons/Source-Code.png';
import {
  RoleCardCount,
  RoleCardDescription,
  RoleCardLink,
  RoleCardTitle,
  RoleGrid,
  RoleGrid2,
  SectionSubtitle,
  SectionTitle,
} from './styles';

interface CollapsibleContainerProps {
  openPositions: {
    [key: string]: any;
  };
}

interface RoleCategoryCardProps {
  icon: any;
  title: string;
  count: number;
  description: string;
  onClick: () => void;
}

const RoleCategoryCard: React.FC<RoleCategoryCardProps> = ({
  icon,
  title,
  count,
  description,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray-900 rounded-xl p-8 cursor-pointer transition-all duration-300 border border-gray-800 hover:bg-gray-800 hover:border-purple-600 hover:-translate-y-1"
    >
      <img
        src={icon}
        alt={title}
        className="w-12 h-12 mb-8 brightness-0 invert"
      />
      <RoleCardTitle>{title}</RoleCardTitle>
      <RoleCardCount>{count} roles open</RoleCardCount>
      <RoleCardDescription>{description}</RoleCardDescription>
      <RoleCardLink>Find available roles →</RoleCardLink>
    </div>
  );
};

const CollapsibleContainer: React.FC<CollapsibleContainerProps> = ({
  openPositions,
}) => {
  const router = useRouter();

  function handleRoleClick(roleCategory: string) {
    sessionStorage.setItem('roleCategory', roleCategory);
    router.push('/join/filter');
  }

  const roles = [
    {
      icon: DeveloperMode,
      title: 'Development',
      count:
        (openPositions['LeadDeveloper']?.length || 0) +
        (openPositions['FrontEndDeveloper']?.length || 0) +
        (openPositions['BackEndDeveloper']?.length || 0),
      description:
        'Join our Development team to build impactful software and tools that power our mission.',
      roleName: 'Development',
      category: 'Development',
    },
    {
      icon: DesignServices,
      title: 'Design',
      count: openPositions['UxDesigner']?.length || 0,
      description:
        'Craft inclusive, user-centered designs that bring our ideas to life and make technology accessible to all.',
      roleName: 'UxDesigner',
      category: 'Product / UX',
    },
    {
      icon: FloorPlan,
      title: 'Product',
      count: openPositions['ProductLead']?.length || 0,
      description:
        'Lead cross-functional teams and drive strategic direction as a Product Lead shaping our digital experiences.',
      roleName: 'ProductLead',
      category: 'Product / UX',
    },
    {
      icon: CaseStudy,
      title: 'Research',
      count: openPositions['UxResearcher']?.length || 0,
      description:
        "Help uncover insights that guide product decisions and ensure we're solving real human problems.",
      roleName: 'UxResearcher',
      category: 'Product / UX',
    },
    {
      icon: PopularMan,
      title: 'Marketing & Media',
      count: openPositions['SocialMediaManager']?.length || 0,
      description:
        'Tell compelling stories and grow our community through creative content and strategic outreach.',
      roleName: 'SocialMediaManager',
      category: 'Operations',
    },
    {
      icon: SourceCode,
      title: 'HR & Recruiting',
      count: openPositions['VoulunteerCordinator']?.length || 0,
      description:
        'Help us grow a mission-driven team by finding and supporting the best talent.',
      roleName: 'VoulunteerCordinator',
      category: 'Operations',
    },
    {
      icon: DeveloperMode,
      title: 'Data Science',
      count: openPositions['InformationArchitect']?.length || 0,
      description:
        'Use data to uncover patterns, inform decisions, and elevate our impact through insights.',
      roleName: 'InformationArchitect',
      category: 'Product / UX',
    },
    {
      icon: SourceCode,
      title: 'Quality Assurance',
      count:
        (openPositions['QaTester']?.length || 0) +
        (openPositions['QaLead']?.length || 0),
      description:
        'Test, refine, and ensure our products are reliable, accessible, and ready to scale.',
      roleName: 'QaTester',
      category: 'QA',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-5 py-10">
      <div className="pb-10">
        <SectionTitle>Explore our roles</SectionTitle>
        <SectionSubtitle>
          Whether you're a developer, designer, strategist, or storyteller,
          there's a place for you at Dev Launchers. Explore our role categories
          to find where your skills, passions, and potential can thrive.
        </SectionSubtitle>
      </div>

      <RoleGrid>
        {roles.slice(0, 6).map((role, index) => (
          <RoleCategoryCard
            key={index}
            icon={role.icon}
            title={role.title}
            count={role.count}
            description={role.description}
            onClick={() => handleRoleClick(role.category)}
          />
        ))}
      </RoleGrid>

      <RoleGrid2>
        <div className="hidden lg:block"></div>
        {roles.slice(6, 8).map((role, index) => (
          <RoleCategoryCard
            key={index + 6}
            icon={role.icon}
            title={role.title}
            count={role.count}
            description={role.description}
            onClick={() => handleRoleClick(role.category)}
          />
        ))}
        <div className="hidden lg:block"></div>
      </RoleGrid2>
    </div>
  );
};

export default CollapsibleContainer;
