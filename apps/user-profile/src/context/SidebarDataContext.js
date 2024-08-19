import { useReducer } from 'react';
import constate from 'constate';
import { sidebarReducer } from './../state/reducers';

const useSidebarData = () => {
  const [sidebarState, sidebarDispatch] = useReducer(
    sidebarReducer.sidebarReducer,
    sidebarReducer.sidebarInitialState
  );
  return {
    sidebarState,
    sidebarDispatch,
  };
};

const [SidebarDataProvider, useSidebarDataContext] = constate(useSidebarData);

export { SidebarDataProvider, useSidebarDataContext };
