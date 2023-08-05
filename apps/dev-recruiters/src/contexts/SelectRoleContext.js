// Create a new context
import { createContext, useState, useContext } from 'react';

const OpportunitiesContext = createContext();

export function useOpportunitiesContext() {
  return useContext(OpportunitiesContext);
}

export function OpportunitiesProvider({ children }) {
  const [selectedRole, setSelectedRole] = useState('');
  const [opportunities, setOpportunities] = useState([]);

  return (
    <OpportunitiesContext.Provider
      value={{ selectedRole, setSelectedRole, opportunities, setOpportunities }}
    >
      {children}
    </OpportunitiesContext.Provider>
  );
}
