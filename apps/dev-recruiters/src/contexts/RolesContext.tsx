import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUserDataContext } from '@devlaunchers/components/src/context/UserDataContext';
import agent from '@devlaunchers/utility';

// Define the context data for roles.
interface RolesContextData {
  projects: any[]; // Replace `any` with the appropriate type
  opportunities: any[];
}

// Create the context
const RolesContext = createContext<RolesContextData | undefined>(undefined);

// Provider component
export const RolesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [projects, setProjects] = useState<any[]>([]);
  const [opportunities, setOpportunities] = useState<any[]>([]);
  const { userData, isAuthenticated } = useUserDataContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isAuthenticated || !userData?.id) {
          console.log('User is not authenticated or user data is missing.');
          return;
        }

        // Use agent.userProjects.get to fetch user projects and opportunities
        const userResponse = await agent.userProjects.get(userData.id);

        // Extract projects and opportunities from the response
        const userProjects = userResponse.projects.map((project: any) => ({
          id: project.id,
          ...project.attributes,
        }));

        const allOpportunities = userProjects.flatMap((project: any) =>
          project.opportunities?.data.map((opportunity: any) => ({
            id: opportunity.id,
            ...opportunity.attributes,
          }))
        );

        setProjects(userProjects);
        setOpportunities(allOpportunities);
      } catch (err: any) {
        console.error(err.message || 'Failed to fetch data');
      }
    };

    fetchData();
  }, [isAuthenticated, userData]);

  return (
    <RolesContext.Provider value={{ projects, opportunities }}>
      {children}
    </RolesContext.Provider>
  );
};

// Custom hook to use the RolesContext
export const useRoles = () => {
  const context = useContext(RolesContext);
  if (!context) {
    throw new Error('useRoles must be used within a RolesProvider');
  }
  return context;
};
