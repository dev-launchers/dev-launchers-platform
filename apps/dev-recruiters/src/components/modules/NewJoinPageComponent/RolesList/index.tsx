import { ProjectLite } from '@devlaunchers/models/project';
import { useEffect, useState } from 'react';
import { List } from '../../../../components/modules/OpportunitiesAggregator/filtering/ProjectsList/StyledProjectsList';

import { Opportunity } from '@devlaunchers/models/opportunity';
import CollapsibleContainer from '../SelectRole/CollapsibleContainer';

export function separateRoles(arr: Opportunity[]) {
  const separatedGroups: { [key: string]: Opportunity[] } = {
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
  };

  arr.forEach((role) => {
    if (role?.attributes?.roleType === 'Product Lead') {
      separatedGroups['ProductLead'].push(role);
    } else if (role?.attributes?.roleType === 'UX Designer') {
      separatedGroups['UxDesigner'].push(role);
    } else if (role?.attributes?.roleType === 'UX Researcher') {
      separatedGroups['UxResearcher'].push(role);
    } else if (role?.attributes?.roleType === 'Lead Developer') {
      separatedGroups['LeadDeveloper'].push(role);
    } else if (role?.attributes?.roleType === 'Back-End Developer') {
      separatedGroups['BackEndDeveloper'].push(role);
    } else if (role?.attributes?.roleType === 'Front-End Developer') {
      separatedGroups['FrontEndDeveloper'].push(role);
    } else if (role?.attributes?.roleType === 'QA Tester') {
      separatedGroups['QaTester'].push(role);
    } else if (role?.attributes?.roleType === 'QA Lead') {
      separatedGroups['QaLead'].push(role);
    } else if (role?.attributes?.roleType === 'Information Architect') {
      separatedGroups['InformationArchitect'].push(role);
    } else if (role?.attributes?.roleType === 'Voulunteer Cordinator') {
      separatedGroups['VoulunteerCordinator'].push(role);
    } else if (role?.attributes?.roleType === 'Social Media Manager') {
      separatedGroups['SocialMediaManager'].push(role);
    }
  });

  return separatedGroups;
}

interface Props {
  projects?: ProjectLite[];
  projectsLoaded: boolean;
  opportunities: Opportunity[];
}

export default function RolesList({
  projects,
  projectsLoaded,
  opportunities,
}: Props) {
  if (!projectsLoaded) return <div>loading please wait</div>;

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
  // Extract all opportunities from the projects and flatten them into a single array
  /*const allOpportunities = projects.flatMap(
    (project) => project.attributes.opportunities
  );
  */
  const allOpportunities = opportunities.flatMap((opp) => opp);
  // console.log(allOpportunities);
  /*function separateRoles(arr: Opportunity[]) {
    const separatedGroups: { [key: string]: Opportunity[] } = {
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
    };
    arr.forEach((role) => {
      if (parseInt(role?.id) === 8 || parseInt(role?.id) === 4) {
        separatedGroups['ProductLead'].push(role);
      } else if (parseInt(role?.id) === 6) {
        separatedGroups['UxDesigner'].push(role);
      } else if (parseInt(role?.id) === 7 || parseInt(role?.id) === 5) {
        separatedGroups['UxResearcher'].push(role);
      } else if (parseInt(role?.id) === 15) {
        separatedGroups['LeadDeveloper'].push(role);
      } else if (parseInt(role?.id) === 2) {
        separatedGroups['BackEndDeveloper'].push(role);
      } else if (
        parseInt(role?.id) === 1 ||
        parseInt(role?.id) === 10 ||
        parseInt(role?.id) === 16
      ) {
        separatedGroups['FrontEndDeveloper'].push(role);
      } else if (parseInt(role?.id) === 3) {
        separatedGroups['QaTester'].push(role);
      }
    });

    return separatedGroups;
  }*/

  useEffect(() => {
    setOpenPositions(separateRoles(allOpportunities));
  }, [projects]);
  return (
    <List>
      <CollapsibleContainer openPositions={openPositions} />
    </List>
  );
}
