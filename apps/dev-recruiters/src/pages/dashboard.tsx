import React, { useState, useEffect } from 'react';
import { PlusCircle, Edit, Archive, Search, ChevronDown } from 'lucide-react';
import Button from '@devlaunchers/components/src/components/atoms/Button/';
import PageHeader from '@devlaunchers/components/src/components/molecules/PageHeader';
import ActiveRole from '@devlaunchers/components/src/components/organisms/cards/RolesCard/ActiveRole';
import ArchivedRole from '@devlaunchers/components/src/components/organisms/cards/RolesCard/ArchivedRole';
import { useUserDataContext } from '@devlaunchers/components/src/context/UserDataContext';

interface Project {
  id: number;
  title?: string;
  openPositions?: any[]; // Adjust the type for openPositions as needed
}

interface UserData {
  id: number;
  name?: string;
  projects?: Project[];
  // ... other user data properties
}

export default function Dashboard() {
  const { userData, isAuthenticated } = useUserDataContext();
  const [teamNames, setTeamNames] = useState<string[]>([]);
  const [activePositions, setActivePositions] = useState<any[]>([]); // State for active roles

  useEffect(() => {
    if (isAuthenticated && userData) {
      console.log(userData, isAuthenticated);

      const userProjects = userData?.projects;

      const capitalizeFirstLetter = (str: string) => {
        return str
          .split(' ')
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(' ');
      };

      let formattedTeamNames: string[] = [];
      let extractedActivePositions: any[] = [];

      if (userProjects) {
        formattedTeamNames = userProjects.map((project) =>
          capitalizeFirstLetter(project.title || 'Unknown Project')
        );
        console.log('Team Names:', formattedTeamNames);
        setTeamNames(formattedTeamNames);

        // Extract active positions
        extractedActivePositions = userProjects.reduce<any[]>(
          (acc, project) => {
            if (project.openPositions && Array.isArray(project.openPositions)) {
              acc.push(...project.openPositions);
            }
            return acc;
          },
          []
        );
        setActivePositions(extractedActivePositions);
      } else {
        console.log('No user projects found or not yet loaded.');
        setTeamNames([]);
        setActivePositions([]);
      }
    } else {
      setTeamNames([]);
      setActivePositions([]);
    }
  }, [isAuthenticated, userData]);

  return (
    <div className="bg-black text-white">
      <PageHeader
        title={`Hello, ${userData?.name || 'User'}`}
        subtitle={
          teamNames.length > 0 ? `Your Team: ${teamNames.join(', ')}` : null
        }
      />
      <section className="w-full flex-row pt-24 pr-48 pb-24 pl-48 gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#30184840] pt-16 pr-8 pb-16 pl-8 gap-12 rounded-lg">
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

          <div className="bg-[#30184840] pt-16 pr-8 pb-16 pl-8 gap-12 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Review Applicants</h2>
            <div className="space-y-4">
              <Button>By Team</Button>
              <Button>By Department</Button>
              <Button>By Role</Button>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg shadow-lg space-y-4 bg-[#30184840] mt-6">
          <h2 className="text-lg font-semibold mb-4">Search Roles</h2>
          <div className="flex items-center gap-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search by role or applicant name"
                className="w-full py-2 px-4 pl-10 rounded-md"
              />
              <Search className="absolute left-3 top-2 w-4 h-4 text-black" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 text-black">
            <select className="w-full md:w-[180px] rounded-md py-2 px-4 relative">
              <option value="" disabled selected>
                Role Department
              </option>
              <option value="engineering">Engineering</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <ChevronDown className="absolute right-3 top-3 w-4 h-4 pointer-events-none" />
            </select>

            <select className="w-full md:w-[180px] rounded-md py-2 px-4 relative">
              <option value="" disabled selected>
                Experience Level
              </option>
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
              <ChevronDown className="absolute right-3 top-3 w-4 h-4 pointer-events-none" />
            </select>
          </div>
        </div>
      </section>

      <section className="w-full pr-48 pb-24 pl-48 gap-12">
        <div>
          <h1 className="text-3xl font-semibold mb-3">All Roles</h1>
          <hr />
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-3">Active Roles</h2>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {activePositions?.map((position, index) => (
              <ActiveRole
                key={position.id || index}
                role={position.title || 'Unknown Role'}
                department={
                  teamNames.length > 0
                    ? `Your Team: ${teamNames.join(', ')}`
                    : 'Unknown Department'
                }
                date={new Date().toLocaleDateString()} // Displays today's date
                onEdit={() => console.log('Edit:', position)}
                onView={() => console.log('View:', position)}
              />
            ))}
            {activePositions && activePositions.length === 0 && (
              <div className="col-span-full">
                <p>No active roles available.</p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-3">Archived Roles</h2>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* This example re-uses activePositions, which is likely incorrect for archived roles */}
            {activePositions?.map((position, index) => (
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
              />
            ))}
            {activePositions && activePositions.length === 0 && (
              <div className="col-span-full">
                <p>No archived roles available.</p>
              </div>
            )}
            <div className="col-span-full">
              <p>Archived roles will be displayed here.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
