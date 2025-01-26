import { onboardingActions } from './../actions';

// Initial state for the onboarding process
export const initialOnboardingState = {
  showIntroductionModal: true, // Determines if the introduction modal is shown
  showPlatformOnboardingModal: false, // Determines if the platform onboarding modal is shown
  showCloseModal: false, // Determines if the close modal is shown
  user: {
    selectedRole: null, // Stores the user's selected role
    selectedExperience: null, // Stores the user's selected experience level
    interest: [
      // List of interests, each with an ID, name, and a selected status
      { id: 1, name: 'Blockchain', selected: false },
      { id: 2, name: 'Javascript', selected: false },
      { id: 3, name: 'Web Design', selected: false },
      { id: 4, name: 'UI/UX', selected: false },
      { id: 5, name: 'React', selected: false },
      { id: 6, name: 'QA', selected: false },
      { id: 7, name: 'Web Development', selected: false },
      { id: 8, name: 'C/C++/C#', selected: false },
      { id: 9, name: 'Discord', selected: false },
      { id: 10, name: 'Node.js', selected: false },
      { id: 11, name: 'Strapi', selected: false },
      { id: 12, name: 'Agile Development', selected: false },
      { id: 13, name: 'HTML', selected: false },
      { id: 14, name: 'Git', selected: false },
      { id: 15, name: 'Frontend Development', selected: false },
      { id: 16, name: 'Python', selected: false },
      { id: 17, name: 'Data Structures', selected: false },
      { id: 18, name: 'Prototyping', selected: false },
      { id: 19, name: 'Project Management', selected: false },
    ],
  },
};

/**
 * Reducer function to manage the onboarding state.
 * Handles actions related to modals, user role, experience, and interests.
 *
 * @param {Object} state - Current onboarding state.
 * @param {Object} action - Action dispatched with a type and optional data payload.
 * @returns {Object} - Updated state based on the action type.
 */
export const onboardingReducer = (state, action) => {
  switch (action.type) {
    // Update user's interests
    case onboardingActions.SET_USERS_INTEREST: {
      return {
        ...state,
        user: {
          ...state.user,
          interest: action.data, // Replace current interests with new data
        },
      };
    }

    // Update user's experience level
    case onboardingActions.SET_USERS_EXPERIENCE: {
      return {
        ...state,
        user: {
          ...state.user,
          selectedExperience: action.data, // Set the selected experience
        },
      };
    }

    // Update user's role
    case onboardingActions.SET_USERS_ROLE: {
      return {
        ...state,
        user: {
          ...state.user,
          selectedRole: action.data, // Set the selected role
        },
      };
    }

    // Show the platform onboarding modal and hide the introduction modal
    case onboardingActions.SHOW_PLATFORM_ONBOARDING_MODAL: {
      return {
        ...state,
        showIntroductionModal: false,
        showPlatformOnboardingModal: true,
      };
    }

    // Show the introduction modal and hide the platform onboarding modal
    case onboardingActions.SHOW_INTRODUCTION_MODAL: {
      return {
        ...state,
        showPlatformOnboardingModal: false,
        showIntroductionModal: true,
      };
    }

    // Hide the platform onboarding modal
    case onboardingActions.HIDE_PLATFORM_ONBOARDING_MODAL: {
      return {
        ...state,
        showPlatformOnboardingModal: false,
      };
    }

    // Hide the introduction modal
    case onboardingActions.HIDE_INTRODUCTION_MODAL: {
      return {
        ...state,
        showIntroductionModal: false,
      };
    }

    // Hide all onboarding modals
    case onboardingActions.HIDE_ALL_ONBOARDING_MODALS: {
      return {
        ...state,
        showIntroductionModal: false,
        showPlatformOnboardingModal: false,
        showCloseModal: false,
      };
    }

    // Hide the closing modal
    case onboardingActions.HIDE_CLOSING_MODAL: {
      return {
        ...state,
        showCloseModal: false,
      };
    }

    // Show the closing modal
    case onboardingActions.SHOW_CLOSING_MODAL: {
      return {
        ...state,
        showCloseModal: true,
      };
    }

    // Default case: return the current state if the action type is unrecognized
    default: {
      return state;
    }
  }
};
