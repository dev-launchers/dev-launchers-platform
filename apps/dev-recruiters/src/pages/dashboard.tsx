import { useState, useEffect } from 'react';
import { PlusCircle, Edit, Archive } from 'lucide-react';
import Button from '@devlaunchers/components/src/components/atoms/Button/';
import PageHeader from '@devlaunchers/components/src/components/molecules/PageHeader';
import ActiveRole from '@devlaunchers/components/src/components/organisms/cards/RolesCard/ActiveRole';
import ArchivedRole from '@devlaunchers/components/src/components/organisms/cards/RolesCard/ArchivedRole';
import { useUserDataContext } from '@devlaunchers/components/src/context/UserDataContext';
import SearchBar from '../components/common/SearchBar/searchbar';
import { Opportunity } from '@devlaunchers/models/opportunity';
import { useRouter } from 'next/router';

interface Project {
  readonly id: number;
  title?: string;
  openPositions?: unknown;
  opportunities?: Opportunity[];
}

interface UserData {
  readonly id: number;
  name?: string;
  projects?: Project[];
}

const Dashboard: React.FC = () => {
  const { userData, isAuthenticated, isLoading } = useUserDataContext();
  const [teamNames, setTeamNames] = useState<string[]>([]);
  const [activeRoles, setActiveRoles] = useState<Opportunity[]>([]);
  const [archivedRoles, setArchivedRoles] = useState<Opportunity[]>([]);
  const router = useRouter();
  // roleCategory is the department.

  // restrict /dashboard page for project leaders only.
  //some(...).some(...) — checks if any project has a team where the current user (userData.id) is a leader.

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (isAuthenticated && userData) {
      const isLeader = userData.projects?.some((project: any) =>
        project.team?.leaders?.some((leader: any) => leader.id === userData.id)
      );

      // if (!isLeader) {
      //   router.replace('/');
      // }
    } else {
      router.replace('/');
    }
  }, [isAuthenticated, userData]);

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

      const allPositions = userProjects.flatMap(
        (project) => project.openPositions || []
      );

      setActiveRoles(allPositions.filter((pos) => pos.active));
      setArchivedRoles(allPositions.filter((pos) => !pos.active));
    } else {
      setTeamNames([]);
      setActiveRoles([]);
      setArchivedRoles([]);
    }
  }, [isAuthenticated, userData]);

  // handles filtering roles by level and searchTerm.
  function handleSearch(
    searchTerm = '',
    department = '',
    experienceLevel = ''
  ) {
    const projects = userData?.projects || [];

    let formattedSearchTerm = '';
    let formattedExperienceLevel = '';

    try {
      const parsed = JSON.parse(searchTerm);
      formattedSearchTerm = parsed.searchTerm?.trim().toLowerCase() || '';
      formattedExperienceLevel =
        parsed.experienceLevel?.trim().toLowerCase() || '';
    } catch (error) {
      console.error('Invalid searchTerm JSON:', error);
      setActiveRoles([]);
      setArchivedRoles([]);
      return;
    }

    const allPositions = projects.flatMap(
      (project) => project.openPositions || []
    );

    const filterFn = (pos: any) => {
      const title = pos.title?.toLowerCase() || '';
      const level = pos.level?.toLowerCase() || '';

      const matchesSearchTerm = formattedSearchTerm
        ? title.includes(formattedSearchTerm)
        : true;
      const matchesExperienceLevel = formattedExperienceLevel
        ? level === formattedExperienceLevel
        : true;

      return matchesSearchTerm && matchesExperienceLevel;
    };

    setActiveRoles(allPositions.filter((pos) => pos.active && filterFn(pos)));
    setArchivedRoles(
      allPositions.filter((pos) => !pos.active && filterFn(pos))
    );
  }

  const handleEdit = (position: any) => {
    // navigate to create-role with edit query param
    router.push(`/dev-recruiters/create-role?edit=${position.id}`);
  };

  const handleReviewApplicants = (position: any) => {
    // navigate to review-applicants page with role id param
    router.push(`/dev-recruiters/applicants?role=${position.id}`);
  };

  const handleArchive = (position: any) => {
    // move from activeRoles -> archivedRoles (local state only)
    setActiveRoles((prev) => prev.filter((p) => p.id !== position.id));
    setArchivedRoles((prev) => [{ ...position, active: false }, ...prev]);
    // TODO: call backend API to persist archive change
    console.log('Archived role', position.id);
  };

  const handleRepost = (position: any) => {
    // move from archivedRoles -> activeRoles (local state only)
    setArchivedRoles((prev) => prev.filter((p) => p.id !== position.id));
    setActiveRoles((prev) => [{ ...position, active: true }, ...prev]);
    // TODO: call backend API to persist repost change
    console.log('Reposted role', position.id);
  };

  return (
    <div className="bg-black text-white w-full flex flex-col gap-4 sm:gap-6 sm:p-8 md:gap-6 lg:gap-8">
      {/* Page Header */}
      <div className="w-full px-4 md:px-16">
        <PageHeader
          title={`Hello, ${userData?.name || 'User'}`}
          subtitle={
            teamNames.length > 0 ? `Your Team: ${teamNames.join(', ')}` : null
          }
        />
      </div>

      {/* Role Actions + Review Applicants + Search */}
      <section className="w-full px-4 md:px-16 flex flex-col gap-6">
        {/* Actions */}
        <div className="bg-[#30184840] p-6 md:p-8 rounded-lg flex flex-col lg:flex-row gap-6 w-full">
          <div className="bg-[#30184840] pt-10 px-6 pb-10 rounded-lg w-full lg:w-1/2">
            <h2 className="text-lg font-semibold mb-4">Role Actions</h2>
            <div className="space-y-4">
              <Button
                onClick={() => {
                  router.push('/dev-recruiters/create-role');
                }}
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                Post New Role
              </Button>
            </div>
          </div>

          <div className="bg-[#30184840] pt-10 px-6 pb-10 rounded-lg w-full lg:w-1/2">
            <h2 className="text-lg font-semibold mb-4">Review Applicants</h2>
            <div className="space-y-4">
              <Button>By Team</Button>
              <Button>By Department</Button>
              <Button onClick={handleReviewApplicants}>By Role</Button>
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
            {activeRoles.map((position, index) => (
              <div className="flex flex-col" key={String(position.id ?? index)}>
                <ActiveRole
                  key={String(position.id ?? index)}
                  role={position.attributes.title || 'Unknown Role'}
                  department={
                    teamNames.length > 0
                      ? `Your Team: ${teamNames.join(', ')}`
                      : 'Unknown Department'
                  }
                  date={new Date().toLocaleDateString()}
                  onEdit={() => console.log('Edit:', position)}
                  onView={() => console.log('View:', position)}
                />
                <div className="mt-3 flex gap-2">
                  <Button onClick={() => handleEdit(position)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                  <Button onClick={() => handleArchive(position)}>
                    <Archive className="w-4 h-4 mr-2" />
                    Archive
                  </Button>
                </div>
              </div>
            ))}
            {activeRoles && archivedRoles.length === 0 && (
              <div className="col-span-full">
                <p>No active roles available.</p>
              </div>
            )}
          </div>

          {activeRoles.length === 0 && (
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
            {archivedRoles.map((position, index) => (
              <div className="flex flex-col" key={String(position.id ?? index)}>
                <ArchivedRole
                  key={String(position.id ?? index)}
                  role={position.attributes.title || 'Unknown Role'}
                  department={
                    teamNames.length > 0
                      ? `Your Team: ${teamNames.join(', ')}`
                      : 'Unknown Department'
                  }
                  date={
                    typeof position.attributes.published_at === 'string'
                      ? position.attributes.published_at
                      : position.attributes.published_at
                      ? position.attributes.published_at.toISOString()
                      : 'N/A'
                  }
                  onView={() => console.log('View Archived:', position)}
                  onRepost={function (value: string): void {
                    throw new Error('Function not implemented.');
                  }}
                />
                <div className="mt-3 flex gap-2">
                  <Button onClick={() => handleEdit(position)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                  <Button onClick={() => handleRepost(position)}>
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Repost
                  </Button>
                </div>
              </div>
            ))}
            {archivedRoles && archivedRoles.length === 0 && (
              <div className="col-span-full">
                <p>No archived roles available.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
