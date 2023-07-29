import React, { createContext, useContext, useState } from 'react';

// Create a new context
const GroupsContext = createContext();

// Create a custom hook to access the context
export function useGroups() {
  return useContext(GroupsContext);
}

// Create a context provider component
export function GroupsProvider({ children }) {
  const [groups, setGroups] = useState({
    Desenvolvedor: [],
    Lider: [],
    Design: [],
  });

  return (
    <GroupsContext.Provider value={{ groups, setGroups }}>
      {children}
    </GroupsContext.Provider>
  );
}
