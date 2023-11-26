
import { onboardingActions } from './../actions';
import { featureFlags } from './../../utils/featureFlags';
export const initialOnboardingState = {
    showIntroductionModal: false,
    showPlatformOnboardingModal: true,
    user: {
        selectedRole: null,
        selectedExperience: null,
    }
}

export const onboardingReducer = (state, action) => {
    switch (action.type) {
        case onboardingActions.SET_USERS_EXPERIENCE: {
            return {
                ...state,
                user: {
                    ...state.user,
                    selectedExperience: action.data,
                }
            }
        }
        case onboardingActions.SET_USERS_ROLE: {
            return {
                ...state,
                user: {
                    ...state.user,
                    selectedRole: action.data,
                }
            }
        }
        case onboardingActions.SHOW_PLATFORM_ONBOARDING_MODAL: {
            return {
                ...state,
                showIntroductionModal: false,
                showPlatformOnboardingModal: true
            }
        }
        case onboardingActions.SHOW_INTRODUCTION_MODAL: {
            return {
                ...state,
                showPlatformOnboardingModal: false,
                showIntroductionModal: true
            }
        }
        case onboardingActions.HIDE_PLATFORM_ONBOARDING_MODAL: {
            return {
                ...state,
                showPlatformOnboardingModal: false
            }
        }
        case onboardingActions.HIDE_INTRODUCTION_MODAL: {
            return {
                ...state,
                showIntroductionModal: false
            }
        }
        case onboardingActions.HIDE_ALL_MODALS: {
            return {
                ...state,
                showIntroductionModal: false,
                showPlatformOnboardingModal: false,
            }
        }
        default: {
            return state;
        }
    }
}