// opportunityUtils.tsx

import { Opportunity } from '@devlaunchers/models/opportunity';

export default function separateRoles(arr: Opportunity[]) {
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
