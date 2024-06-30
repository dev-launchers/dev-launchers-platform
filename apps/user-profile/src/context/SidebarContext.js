import React, { useReducer, useContext, createContext } from 'react';

const SidebarStateContext = createContext();
const SidebarDispatchContext = createContext();

const sidebarReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TAB':
      return { ...state, activeTab: action.payload };
    default:
      return state;
  }
};

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sidebarReducer, {
    activeTab: 'overview',
  });

  return (
    <SidebarStateContext.Provider value={state}>
      <SidebarDispatchContext.Provider value={dispatch}>
        {children}
      </SidebarDispatchContext.Provider>
    </SidebarStateContext.Provider>
  );
};

export const useSidebarState = () => useContext(SidebarStateContext);
export const useSidebarDispatch = () => useContext(SidebarDispatchContext);
