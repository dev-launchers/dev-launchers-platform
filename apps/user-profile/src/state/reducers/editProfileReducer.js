import { editProfileActions } from './../actions';

const editProfileInitialState = {
  showEditProfileModal: false,
  showModalFooter: false,
  pages: {
    showPhoto: false,
    showBio: true,
    showDetails: false,
    showSkills: false,
    showInterests: false,
    showProfileHeader: false,
  },
  changes: {
    photoChanged: false,
    bioChanged: false,
    detailsChanged: false,
    skillsChanged: false,
    interestsChanged: false,
  },
  photo: null,
  bio: null,
  skills: null,
  saveInProgress: false,
};

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
