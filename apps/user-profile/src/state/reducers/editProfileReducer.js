import { editProfileActions } from './../actions';

const editProfileInitialState = {
  showEditProfileModal: false, // Controls visibility of the edit profile modal
  showModalFooter: false, // Controls visibility of the modal footer
  pages: {
    showPhoto: false, // Determines if the photo section is shown
    showBio: true, // Determines if the bio section is shown
    showDetails: false, // Determines if the details section is shown
    showSkills: false, // Determines if the skills section is shown
    showInterests: false, // Determines if the interests section is shown
  },
  changes: {
    photoChanged: false, // Tracks if the photo has been changed
    bioChanged: false, // Tracks if the bio has been changed
    detailsChanged: false, // Tracks if the details have been changed
    skillsChanged: false, // Tracks if the skills have been changed
    interestsChanged: false, // Tracks if the interests have been changed
  },
  photo: null, // Stores the user's photo
  bio: null, // Stores the user's bio
  skills: null, // Stores the user's skills
  saveInProgress: false, // Indicates if saving changes is in progress
};

/**
 * Reducer function to manage the edit profile state.
 * Handles actions such as showing/hiding sections, updating data, and saving changes.
 *
 * @param {Object} state - The current state of the edit profile.
 * @param {Object} action - The action dispatched, containing a type and optional payload.
 * @returns {Object} - The updated state based on the action type.
 */
const editProfileReducer = (state, action) => {
  switch (action.type) {
    case editProfileActions.UPDATE_BIO: {
      return {
        ...state,
        changes: {
          ...state.changes,
          bioChanged: action.payload.changed,
        },
        bio: action.payload.newBio,
      };
    }
    case editProfileActions.SAVE_CHANGES: {
      return {
        ...state,
        saveInProgress: true,
      };
    }
    case editProfileActions.SAVE_CHANGES_SUCCESS: {
      return {
        ...state,
        changes: {
          ...state.changes,
          bioChanged: false,
        },
        saveInProgress: false,
      };
    }
    case editProfileActions.SAVE_CHANGES_FAILED: {
      return {
        ...state,
        saveInProgress: false,
      };
    }
    case editProfileActions.SHOW_EDIT_PROFILE_MODAL: {
      return {
        ...state,
        showEditProfileModal: true,
      };
    }
    case editProfileActions.HIDE_EDIT_PROFILE_MODAL: {
      return editProfileInitialState;
    }

    case editProfileActions.SHOW_PHOTO_SETTING: {
      return {
        ...state,
        showEditProfileModal: true,
        showModalFooter: false,
        pages: {
          ...state.pages,
          showPhoto: true,
          showBio: false,
          showDetails: false,
          showSkills: false,
          showInterests: false,
        },
      };
    }
    case editProfileActions.HIDE_PHOTO_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showPhoto: false,
        },
      };
    }
    case editProfileActions.SHOW_BIO_SETTING: {
      return {
        ...state,
        showEditProfileModal: true,
        showModalFooter: true,
        pages: {
          ...state.pages,
          showPhoto: false,
          showBio: true,
          showDetails: false,
          showSkills: false,
          showInterests: false,
        },
      };
    }
    case editProfileActions.HIDE_BIO_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showBio: false,
        },
      };
    }
    case editProfileActions.SHOW_DETAILS_SETTING: {
      return {
        ...state,
        showEditProfileModal: true,
        showModalFooter: true,
        pages: {
          ...state.pages,
          showPhoto: false,
          showBio: false,
          showDetails: true,
          showSkills: false,
          showInterests: false,
        },
      };
    }
    case editProfileActions.HIDE_DETAILS_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showDetails: false,
        },
      };
    }
    case editProfileActions.SHOW_SKILLS_SETTING: {
      return {
        ...state,
        showEditProfileModal: true,
        showModalFooter: true,
        pages: {
          ...state.pages,
          showPhoto: false,
          showBio: false,
          showDetails: false,
          showSkills: true,
          showInterests: false,
        },
      };
    }
    case editProfileActions.HIDE_SKILLS_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showSkills: false,
        },
      };
    }
    case editProfileActions.SHOW_INTERESTS_SETTING: {
      return {
        ...state,
        showEditProfileModal: true,
        showModalFooter: true,
        pages: {
          ...state.pages,
          showPhoto: false,
          showBio: false,
          showDetails: false,
          showSkills: false,
          showInterests: true,
        },
      };
    }
    case editProfileActions.HIDE_INTERESTS_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showInterests: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export { editProfileReducer, editProfileInitialState };
