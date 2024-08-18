import { onboardingActions } from './../actions';

export const initialOnboardingState = {
  showIntroductionModal: true,
  showPlatformOnboardingModal: false,
  showCloseModal: false,
  user: {
    selectedRole: null,
    selectedExperience: null,
    interest: [
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

export const onboardingReducer = (state, action) => {
  switch (action.type) {
    case onboardingActions.SET_USERS_INTEREST: {
      return {
        ...state,
        user: {
          ...state.user,
          interest: action.data,
        },
      };
    }
    case onboardingActions.SET_USERS_EXPERIENCE: {
      return {
        ...state,
        user: {
          ...state.user,
          selectedExperience: action.data,
        },
      };
    }
    case onboardingActions.SET_USERS_ROLE: {
      return {
        ...state,
        user: {
          ...state.user,
          selectedRole: action.data,
        },
      };
    }
    case onboardingActions.SHOW_PLATFORM_ONBOARDING_MODAL: {
      return {
        ...state,
        showIntroductionModal: false,
        showPlatformOnboardingModal: true,
      };
    }
    case onboardingActions.SHOW_INTRODUCTION_MODAL: {
      return {
        ...state,
        showPlatformOnboardingModal: false,
        showIntroductionModal: true,
      };
    }
    case onboardingActions.HIDE_PLATFORM_ONBOARDING_MODAL: {
      return {
        ...state,
        showPlatformOnboardingModal: false,
      };
    }
    case onboardingActions.HIDE_INTRODUCTION_MODAL: {
      return {
        ...state,
        showIntroductionModal: false,
      };
    }
    case onboardingActions.HIDE_ALL_ONBOARDING_MODALS: {
      return {
        ...state,
        showIntroductionModal: false,
        showPlatformOnboardingModal: false,
        showCloseModal: false,
      };
    }
    case onboardingActions.HIDE_CLOSING_MODAL: {
      return {
        ...state,
        showCloseModal: false,
      };
    }
    case onboardingActions.SHOW_CLOSING_MODAL: {
      return {
        ...state,
        showCloseModal: true,
      };
    }
    default: {
      return state;
    }
  }
};
