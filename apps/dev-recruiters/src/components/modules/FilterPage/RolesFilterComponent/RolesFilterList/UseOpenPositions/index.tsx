// useOpenPositions.ts

import { useEffect, useState } from 'react';
import { Opportunity } from '@devlaunchers/models/opportunity';
import separateRoles from './opportunityUtils';
import { ProjectLite } from '@devlaunchers/models/project';

interface Props {
  projects?: ProjectLite[];
  projectsLoaded?: boolean;
  opportunities?: Opportunity[];
}

export default function useOpenPositions({
  projects,
  projectsLoaded,
  opportunities,
}: Props) {
  const allOpportunities = opportunities?.flatMap((opportun) => opportun) || [];
  const [openPositions, setOpenPositions] = useState<{
    [key: string]: Opportunity[];
  }>({
    ProductLead: [],
    UxDesigner: [],
    UxResearcher: [],
    InformationArchitect: [],
    LeadDeveloper: [],
    BackEndDeveloper: [],
    FrontEndDeveloper: [],
    QaLead: [],
    QaTester: [],
    VoulunteerCordinator: [],
    SocialMediaManager: [],
  });

  useEffect(() => {
    setOpenPositions(separateRoles(allOpportunities));
  }, [projects]);

  return openPositions;
}
