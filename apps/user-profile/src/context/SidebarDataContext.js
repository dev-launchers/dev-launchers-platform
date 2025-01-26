import { useReducer } from 'react';
import constate from 'constate';
import { sidebarReducer } from './../state/reducers';

/**
 * useSidebarData Hook
 *
 * Manages the sidebar state using a reducer. Provides the current sidebar state
 * and a dispatch function for updating it.
 *
 * @return {Object} An object containing:
 * - `sidebarState`: The current state managed by the sidebar reducer.
 * - `sidebarDispatch`: The dispatch function for updating the sidebar state.
 */
const useSidebarData = () => {
  const [sidebarState, sidebarDispatch] = useReducer(
    sidebarReducer.sidebarReducer, // Reducer function to manage sidebar state
    sidebarReducer.sidebarInitialState // Initial state for the sidebar
  );

  return {
    sidebarState, // The current state of the sidebar
    sidebarDispatch, // Dispatch function to update the state
  };
};

// Create a provider and context using `constate`
const [SidebarDataProvider, useSidebarDataContext] = constate(useSidebarData);

export { SidebarDataProvider, useSidebarDataContext };
