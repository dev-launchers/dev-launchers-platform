import { useState, useEffect } from 'react';
import { PlusCircle, Edit, Archive } from 'lucide-react';
import Button from '@devlaunchers/components/src/components/atoms/Button/';
import PageHeader from '@devlaunchers/components/src/components/molecules/PageHeader';
import ActiveRole from '@devlaunchers/components/src/components/organisms/cards/RolesCard/ActiveRole';
import ArchivedRole from '@devlaunchers/components/src/components/organisms/cards/RolesCard/ArchivedRole';
import { useUserDataContext } from '@devlaunchers/components/src/context/UserDataContext';
import SearchBar from '../components/common/SearchBar/searchbar';

interface Project {
  id: number;
  title?: string;
  openPositions?: any[]; // Explicitly type openPositions
  opportunities?: any[];
}

interface UserData {
  id: number;
  name?: string;
  projects?: Project[];
}

export default function Dashboard() {
  const { userData, isAuthenticated } = useUserDataContext();
  const [teamNames, setTeamNames] = useState<string[]>([]);
  const [combinedResults, setCombinedResults] = useState([]);

  useEffect(() => {
    if (isAuthenticated && userData) {
      const userProjects = userData?.projects || [];

      const capitalizeFirstLetter = (str: string) => {
        return str
          .split(' ')
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(' ');
      };

      const formattedTeamNames: string[] = userProjects.map((project) =>
        capitalizeFirstLetter(project.title || 'Unknown Project')
      );
      setTeamNames(formattedTeamNames);

      // Extract and tag active positions
      const extractedActivePositions = userProjects
        .flatMap((project) => project.openPositions || [])
        .map((position) => ({ ...position, source: 'activePositions' }));

      // Extract and tag archived roles (opportunities)
      const extractedOpportunities = userProjects
        .flatMap((project) => project.opportunities || [])
        .map((op) => ({ ...op, source: 'opportunities' }));

      // Combine and set them
      setCombinedResults([
        ...extractedOpportunities,
        ...extractedActivePositions,
      ]);
    } else {
      setTeamNames([]);
      setCombinedResults([]);
    }
  }, [isAuthenticated, userData]);

  // search term + select options
  //based on search term filter opportunities, and open positions for roles.
  // based on options selected filter userData.projects.openPositions, and opportunities.

  // handles filtering roles by level and searchTerm.
  function handleSearch(
    searchTerm = '',
    department = '',
    experienceLevel = ''
  ) {
    // If everything is empty, reset to show all roles
    const isCleared = !searchTerm && !department && !experienceLevel;

    const projects = userData?.projects || [];

    if (isCleared) {
      const allOpportunities = projects
        ?.flatMap((project) => project.opportunities || [])
        .map((op) => ({ ...op, source: 'opportunities' }));

      const allActive = projects
        ?.flatMap((project) => project.openPositions || [])
        .map((position) => ({ ...position, source: 'activePositions' }));

      setCombinedResults([...allOpportunities, ...allActive]);
      return;
    }

    // Normal filtering logic continues here...
    let formattedSearchTerm = '';
    let formattedExperienceLevel = '';

    try {
      const parsed = JSON.parse(searchTerm);
      formattedSearchTerm = parsed.searchTerm?.trim().toLowerCase() || '';
      formattedExperienceLevel =
        parsed.experienceLevel?.trim().toLowerCase() || '';
    } catch (error) {
      console.error('Invalid searchTerm JSON:', error);
      setCombinedResults([]); // Clear results on error
      return;
    }

    const filteredOpportunities = projects
      ?.flatMap((project) => project.opportunities || [])
      .filter((op) => {
        const title = op.title?.toLowerCase() || '';
        const level = op.level?.toLowerCase() || '';

        const matchesSearchTerm = formattedSearchTerm
          ? title.includes(formattedSearchTerm)
          : true;

        const matchesExperienceLevel = formattedExperienceLevel
          ? level === formattedExperienceLevel
          : true;

        return matchesSearchTerm && matchesExperienceLevel;
      })
      .map((op) => ({ ...op, source: 'opportunities' }));

    const filteredOpenPositions = projects
      ?.flatMap((project) => project.openPositions || [])
      .filter((position) => {
        const title = position.title?.toLowerCase() || '';
        const matchesSearchTerm = formattedSearchTerm
          ? title.includes(formattedSearchTerm)
          : true;
        return matchesSearchTerm;
      })
      .map((position) => ({ ...position, source: 'activePositions' }));

    const combined = [...filteredOpportunities, ...filteredOpenPositions];
    setCombinedResults(combined);
  }

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title={`Hello, ${userData?.name || 'User'}`}
        subtitle={
          teamNames.length > 0 ? `Your Team: ${teamNames.join(', ')}` : null
        }
      />
      <div className="bg-black text-white w-full flex flex-col gap-4 sm:gap-6 sm:p-8 md:gap-6 lg:gap-8">
        {/* Role Actions + Review Applicants + Search */}
        <section className="w-full px-4 md:px-16 flex flex-col gap-6">
          {/* Actions */}
          <div className="bg-[#30184840] p-6 md:p-8 rounded-lg flex flex-col lg:flex-row gap-6 w-full">
            <div className="bg-[#30184840] pt-10 px-6 pb-10 rounded-lg w-full lg:w-1/2">
              <h2 className="text-lg font-semibold mb-4">Role Actions</h2>
              <div className="space-y-4">
                <Button>
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Post New Role
                </Button>
                <Button>
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Role
                </Button>
                <Button>
                  <Archive className="w-4 h-4 mr-2" />
                  Archive Role
                </Button>
              </div>
            </div>

            <div className="bg-[#30184840] pt-10 px-6 pb-10 rounded-lg w-full lg:w-1/2">
              <h2 className="text-lg font-semibold mb-4">Review Applicants</h2>
              <div className="space-y-4">
                <Button>By Team</Button>
                <Button>By Department</Button>
                <Button>By Role</Button>
              </div>
            </div>
          </div>

          {/* Search Bar under Role Actions & Review Applicants */}
          <SearchBar onSearch={handleSearch} />
        </section>

        {/* Roles Section */}
        <section className="w-full px-4 md:px-16 pb-24 gap-12">
          {/* All Roles Header */}
          <div>
            <h1 className="text-3xl font-semibold mb-3">All Roles</h1>
            <hr />
          </div>

          {/* Active Roles */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold mb-3">Active Roles</h2>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {combinedResults
                ?.filter((result) => result.source === 'activePositions')
                .map((position, index) => (
                  <ActiveRole
                    key={position.id || index}
                    role={position.title || 'Unknown Role'}
                    department={
                      teamNames.length > 0
                        ? `Your Team: ${teamNames.join(', ')}`
                        : 'Unknown Department'
                    }
                    date={new Date().toLocaleDateString()}
                    onEdit={() => console.log('Edit:', position)}
                    onView={() => console.log('View:', position)}
                  />
                ))}
              {combinedResults &&
                combinedResults.filter(
                  (result) => result.source === 'activePositions'
                ).length === 0 && (
                  <div className="col-span-full">
                    <p>No active roles available.</p>
                  </div>
                )}
            </div>

            {combinedResults.length === 0 && (
              <div className="col-span-full">
                <p>No roles match your search criteria.</p>
              </div>
            )}
          </div>

          {/* Archived Roles */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold mb-3">Archived Roles</h2>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {combinedResults
                ?.filter((result) => result.source === 'opportunities')
                .map((position, index) => (
                  <ArchivedRole
                    key={position.id || index}
                    role={position.title || 'Unknown Role'}
                    department={
                      teamNames.length > 0
                        ? `Your Team: ${teamNames.join(', ')}`
                        : 'Unknown Department'
                    }
                    date={position.postedDate || 'N/A'}
                    onView={() => console.log('View Archived:', position)}
                    onRepost={function (value: string): void {
                      throw new Error('Function not implemented.');
                    }}
                  />
                ))}
              {combinedResults &&
                combinedResults.filter(
                  (result) => result.source === 'opportunities'
                ).length === 0 && (
                  <div className="col-span-full">
                    <p>No archived roles available.</p>
                  </div>
                )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
