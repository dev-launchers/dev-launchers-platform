import { editProfileActions } from './../actions';

const editProfileInitialState = {
  showEditProfileModal: true,
  pages: {
    showPhoto: false,
    showBio: true,
    showDetails: false,
    showSkills: false,
    showInterests: false,
  },
  photo: null,
  bio: null,
  skills: null,
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

    case editProfileActions.SHOW_PHOTO_SETTING: {
      return {
        ...state,
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
