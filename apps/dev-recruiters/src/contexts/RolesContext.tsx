import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch projects and opportunities
        const [projectsResponse, userResponse] = await Promise.all([
          axios.get(
            'https://apiv4.devlaunchers.org/api/projects?populate=opportunities'
          ),
          axios.get(
            'https://apiv4.devlaunchers.org/api/user/me/?populate=projects'
          ),
        ]);

        // Extract projects and opportunities from the API response => update here.
        const projects = userResponse.data.data.map((project: any) => ({
          id: project.id,
          ...project.attributes,
        }));

        const opportunities = projectsResponse.data.data.flatMap(
          (project: any) =>
            project.attributes.opportunities.data.map((opportunity: any) => ({
              id: opportunity.id,
              ...opportunity.attributes,
            }))
        );

        setProjects(projects);
        setOpportunities(opportunities);
      } catch (err: any) {
        console.log(err.message || 'Failed to fetch data');
      }
    };

    fetchData();
  }, []);

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
