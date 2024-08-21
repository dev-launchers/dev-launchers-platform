// This file is going toe be used for managing click status for nav bar linksimport { editProfileActions } from './../actions';
import { userProfileActions } from './../actions';

const userProfileInitialState = {};

const userProfileReducer = (state, action) => {
  switch (action.type) {
    case userProfileActions.SHOW_EDIT_MODAL: {
      return {
        showEditProfileModal: true,
      };
    }
    default: {
      return state;
    }
  }
};

export { userProfileReducer, userProfileInitialState };
