
import { onboardingActions } from './../actions';
import { featureFlags } from './../../utils/featureFlags';
export const initialOnboardingState = {
    showIntroductionModal: featureFlags.inDevelopment ? false : true,
    showPlatformOnboardingModal: featureFlags.inDevelopment ? true : false,
}

export const onboardingReducer = (state, action) => {
    switch (action.type) {
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
        default: {
            return state;
        }
    }
}