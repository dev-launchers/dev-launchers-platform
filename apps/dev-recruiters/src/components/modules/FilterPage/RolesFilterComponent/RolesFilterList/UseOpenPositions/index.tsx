// useOpenPositions.ts

import { useEffect, useState } from 'react';
import { Opportunity } from '@devlaunchers/models/opportunity';
import { separateRoles } from './opportunityUtils';
import { ProjectLite } from '@devlaunchers/models/project';

interface Props {
  projects?: ProjectLite[];
  projectsLoaded: boolean;
}

export function useOpenPositions(projects: ProjectLite[] | undefined) {
  const allOpportunities =
    projects?.flatMap((project) => project.opportunities) || [];

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
