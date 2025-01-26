import { useReducer } from 'react';
import constate from 'constate';
import { editProfileReducer } from './../state/reducers';

/**
 * EditProfileData Hook
 *
 * Provides state and dispatch functions for managing the edit profile state using a reducer.
 * This hook wraps the `editProfileReducer` logic, allowing components to access and update
 * the state via context.
 *
 * @return {Object} An object containing:
 * - `editProfileState`: The current state managed by the reducer.
 * - `editProfileDispatch`: The dispatch function to update the state.
 */
export const EditProfileData = () => {
  const [editProfileState, editProfileDispatch] = useReducer(
    editProfileReducer.editProfileReducer, // Reducer function to manage state
    editProfileReducer.editProfileInitialState // Initial state for the reducer
  );

  return { editProfileState, editProfileDispatch }; // Expose state and dispatch
};

// Create context and provider for the EditProfileData hook
const [EditProfileDataProvider, editProfileDataContext] =
  constate(EditProfileData);

export { EditProfileDataProvider, editProfileDataContext };
