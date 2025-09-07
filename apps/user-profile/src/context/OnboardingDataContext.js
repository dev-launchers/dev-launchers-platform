import { useEffect, useReducer } from 'react';
import constate from 'constate';
import { onboardingReducer, initialOnboardingState } from './../state/reducers';
import { onboardingActions } from './../state/actions';
import axios from 'axios';

/**
 * UseOnboardingData Hook
 *
 * Manages the onboarding state using a reducer and fetches the list of interest categories from an API.
 * This hook provides the onboarding state and a dispatch function for updating it.
 *
 * Props:
 * - `children` (ReactNode): Not directly used here but passed as part of the provider pattern.
 *
 * @return {Object} An object containing:
 * - `onboardingData`: The current state managed by the reducer.
 * - `dispatch`: The dispatch function for updating the onboarding state.
 */
export const UseOnboardingData = ({ children }) => {
  const [onboardingData, dispatch] = useReducer(
    onboardingReducer.onboardingReducer, // Reducer function to manage onboarding state
    onboardingReducer.initialOnboardingState // Initial state for onboarding
  );

  /**
   * Fetches the list of interests from the API on component mount and updates the onboarding state.
   */
  useEffect(() => {
    axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/interests`, {
      withCredentials: true, // Include credentials in the request
    })
      .then(({ data: response }) => {
        const interestList = response?.data?.map((interest) => ({
          id: interest.id,
          name: interest.attributes.interest,
          selected: false, // Initialize all interests as unselected
        }));

        // Update the onboarding state with the fetched interests
        dispatch({
          type: onboardingActions.SET_USERS_INTEREST,
          data: interestList,
        });
      })
      .catch(() => {
        // TODO: Handle errors appropriately, such as showing a notification or retrying
        console.error('Failed to fetch interests.');
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  /**
   * Fetches the list of skills from the API on component mount and updates the onboarding state.
   */
  useEffect(() => {
    axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/skills`, {
      withCredentials: true, // Include credentials in the request
    })
      .then(({ data: response }) => {
        const skillList = response?.data?.map((skill) => ({
          id: skill.id,
          name: skill.attributes.interest,
          selected: false, // Initialize all skills as unselected
        }));

        // Update the onboarding state with the fetched skills
        dispatch({
          type: onboardingActions.SET_USERS_SKILL,
          data: skillList,
        });
      })
      .catch(() => {
        // TODO: Handle errors appropriately, such as showing a notification or retrying
        console.error('Failed to fetch skills.');
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return { onboardingData, dispatch }; // Provide state and dispatch
};

// Create a provider and context using `constate`
const [OnboardingDataProvider, useOnboardingDataContext] =
  constate(UseOnboardingData);

export { OnboardingDataProvider, useOnboardingDataContext };
