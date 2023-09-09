import React, { createContext, useState, useContext, ReactNode } from 'react';

interface OpportunitiesContextType {
  selectedRole: string;
  setSelectedRole: (role: string) => void;
  opportunities: any[]; // Adjust this type as needed
  setOpportunities: (opportunities: any[]) => void; // Adjust this type as needed
  commitmentRange: any;
  setCommitmentRange: any;
}

const OpportunitiesContext = createContext<
  OpportunitiesContextType | undefined
>(undefined);

export function useOpportunitiesContext() {
  const context = useContext(OpportunitiesContext);
  if (!context) {
    throw new Error(
      'useOpportunitiesContext must be used within an OpportunitiesProvider'
    );
  }
  return context;
}

interface OpportunitiesProviderProps {
  children: ReactNode;
}

export function OpportunitiesProvider({
  children,
}: OpportunitiesProviderProps) {
  const [selectedRole, setSelectedRole] = useState('Olá');
  const [opportunities, setOpportunities] = useState<any[]>([]);
  const [commitmentRange, setCommitmentRange] = useState(null);

  const contextValue: OpportunitiesContextType = {
    selectedRole,
    setSelectedRole,
    opportunities,
    setOpportunities,
    commitmentRange,
    setCommitmentRange,
  };

  return (
    <OpportunitiesContext.Provider value={contextValue}>
      {children}
    </OpportunitiesContext.Provider>
  );
}
