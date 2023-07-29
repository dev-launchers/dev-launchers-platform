import { ProjectLite } from '@devlaunchers/models/project';
import { List } from '../../../../components/modules/OpportunitiesAggregator/filtering/ProjectsList/StyledProjectsList';
import { useEffect, useState } from 'react';

import CollapsibleContainer from '../SelectRole/CollapsibleContainer';

interface Props {
  projects?: ProjectLite[];
  projectsLoaded: boolean;
}

interface Role {
  title: string;
  id: number;
  quantidade: number;
}

export default function RolesList({ projects, projectsLoaded }: Props) {
  if (!projectsLoaded) return <div>loading please wait</div>;

  const [openPositions, setOpenPositions] = useState<{ [key: string]: number }>(
    {
      ProductLead: 0,
      UxDesigner: 0,
      UxResearcher: 0,
      InformationArchitect: 0,
      LeadDeveloper: 0,
      BackEndDeveloper: 0,
      FrontEndDeveloper: 0,
      QaLead: 0,
      QaTester: 0,
      VoulunteerCordinator: 0,
      SocialMediaManager: 0,
    }
  );

  // Extract all opportunities from the projects and flatten them into a single array
  const allOpportunities = projects.flatMap((project) => project.opportunities);

  // Separate the groups and count open positions
  const separatedGroups = separateRolesById(
    countRoleOccurrences(allOpportunities)
  );

  // Calculate the number of open positions for each role
  const openPositionsCount = {
    ProductLead: separatedGroups['ProductLead'].reduce(
      (total, role) => total + role.quantidade,
      0
    ),
    UxDesigner: separatedGroups['UxDesigner'].reduce(
      (total, role) => total + role.quantidade,
      0
    ),
    UxResearcher: separatedGroups['UxResearcher'].reduce(
      (total, role) => total + role.quantidade,
      0
    ),
    InformationArchitect: separatedGroups['InformationArchitect'].reduce(
      (total, role) => total + role.quantidade,
      0
    ),
    LeadDeveloper: separatedGroups['LeadDeveloper'].reduce(
      (total, role) => total + role.quantidade,
      0
    ),
    BackEndDeveloper: separatedGroups['BackEndDeveloper'].reduce(
      (total, role) => total + role.quantidade,
      0
    ),
    FrontEndDeveloper: separatedGroups['FrontEndDeveloper'].reduce(
      (total, role) => total + role.quantidade,
      0
    ),
    QaLead: separatedGroups['QaLead'].reduce(
      (total, role) => total + role.quantidade,
      0
    ),
    QaTester: separatedGroups['QaTester'].reduce(
      (total, role) => total + role.quantidade,
      0
    ),
    VoulunteerCordinator: separatedGroups['VoulunteerCordinator'].reduce(
      (total, role) => total + role.quantidade,
      0
    ),
    SocialMediaManager: separatedGroups['SocialMediaManager'].reduce(
      (total, role) => total + role.quantidade,
      0
    ),
  };

  useEffect(() => {
    setOpenPositions(openPositionsCount);
  }, [projects]);

  function countRoleOccurrences(arr) {
    const contagemElementos = {};

    arr.forEach((elemento) => {
      const title = elemento.title;
      const id = elemento.id;

      if (contagemElementos[title]) {
        contagemElementos[title].quantidade += 1;
      } else {
        contagemElementos[title] = { id, quantidade: 1 };
      }
    });

    const arrayDeObjetos = [];

    for (const title in contagemElementos) {
      if (contagemElementos.hasOwnProperty(title)) {
        const elemento = contagemElementos[title];
        const objeto = { title, ...elemento };
        arrayDeObjetos.push(objeto);
      }
    }
    return arrayDeObjetos;
  }

  function separateRolesById(arr: Role[]) {
    const separatedGroups: { [key: string]: Role[] } = {
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
      if (role.id === 8 || role.id === 4) {
        separatedGroups['ProductLead'].push(role);
      } else if (role.id === 6) {
        separatedGroups['UxDesigner'].push(role);
      } else if (role.id === 7 || role.id === 5) {
        separatedGroups['UxResearcher'].push(role);
      } else if (role.id === 15) {
        separatedGroups['LeadDeveloper'].push(role);
      } else if (role.id === 2) {
        separatedGroups['BackEndDeveloper'].push(role);
      } else if (role.id === 1 || role.id === 10 || role.id === 16) {
        separatedGroups['FrontEndDeveloper'].push(role);
      } else if (role.id === 3) {
        separatedGroups['QaTester'].push(role);
      }
    });

    return separatedGroups;
  }

  return (
    <List>
      <CollapsibleContainer openPositions={openPositions} />
    </List>
  );
}
