import { editProfileActions } from './../actions';

const editProfileInitialState = {
  showEditProfileModal: false,
};

const editProfileReducer = (state, action) => {
  switch (action.type) {
    case editProfileActions.SHOW_EDIT_PROFILE_MODAL: {
      return {
        showEditProfileModal: true,
      };
    }
    case editProfileActions.HIDE_EDIT_PROFILE_MODAL: {
      return {
        showEditProfileModal: false,
      };
    }
    default: {
      return state;
    }
  }
};

export { editProfileReducer, editProfileInitialState };
