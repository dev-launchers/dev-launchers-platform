// This file is used for managing the state related to user profile actions, such as handling the click status for navigation bar links.

import { editProfileActions, userProfileActions } from './../actions';

// Initial state for the user profile reducer
const userProfileInitialState = {};

/**
 * Reducer function to manage user profile state.
 * Handles actions such as showing or hiding modals for user profile editing.
 *
 * @param {Object} state - The current state of the user profile.
 * @param {Object} action - The action dispatched with a type and optional payload.
 * @returns {Object} - The updated state based on the action type.
 */
const userProfileReducer = (state, action) => {
  switch (action.type) {
    // Action to show the edit profile modal
    case userProfileActions.SHOW_EDIT_MODAL: {
      return {
        ...state, // Keep the existing state properties
        showEditProfileModal: true, // Set the edit profile modal visibility to true
      };
    }

    // Default case returns the current state if the action type is not recognized
    default: {
      return state;
    }
  }
};

// Export the reducer and the initial state for use in other parts of the application
export { userProfileReducer, userProfileInitialState };
