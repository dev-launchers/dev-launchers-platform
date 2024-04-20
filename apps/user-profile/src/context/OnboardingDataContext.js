import { useEffect, useReducer } from 'react';
import constate from 'constate';
import { onboardingReducer, initialOnboardingState } from './../state/reducers';
import { onboardingActions } from './../state/actions';
import axios from 'axios';

export const UseOnboardingData = ({ children }) => {
  const [onboardingData, dispatch] = useReducer(
    onboardingReducer.onboardingReducer,
    onboardingReducer.initialOnboardingState
  );

  useEffect(() => {
    // get all interests categories
    axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/interests`, {
      withCredentials: true,
    })
      .then(({ data: response }) => {
        const interestList = response?.data?.map((interest) => {
          return {
            id: interest.id,
            name: interest.attributes.interest,
            selected: false,
          };
        });
        dispatch({
          type: onboardingActions.SET_USERS_INTEREST,
          data: interestList,
        });
      })
      .catch(() => {
        // TODO handle errors
      });
  }, []);

  return { onboardingData, dispatch };
};

const [OnboardingDataProvider, useOnboardingDataContext] =
  constate(UseOnboardingData);
export { OnboardingDataProvider, useOnboardingDataContext };
