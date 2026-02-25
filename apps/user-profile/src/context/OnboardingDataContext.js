import { useEffect, useReducer } from 'react';
import constate from 'constate';
import { onboardingReducer, initialOnboardingState } from './../state/reducers';
import { onboardingActions } from './../state/actions';
import { agent } from '@devlaunchers/utility';

export const UseOnboardingData = ({ children }) => {
  const [onboardingData, dispatch] = useReducer(
    onboardingReducer.onboardingReducer,
    onboardingReducer.initialOnboardingState
  );

  useEffect(() => {
    // get all interests categories
    agent.Interests.get()
      .then((response) => {
        const interestList = (response ?? []).map((item) => ({
          id: item.id,
          name: item.attributes?.interest,
          selected: false,
        }));

        dispatch({
          type: onboardingActions.SET_USERS_INTEREST,
          data: interestList,
        });
      })
      .catch(() => {
        // TODO handle errors
      });

    // get all skills categories
    agent.Skills.get()
      .then((response) => {
        const skillList = (response ?? []).map((x) => ({
          id: x.id,
          name: x.attributes?.interest,
          selected: false,
        }));

        dispatch({
          type: onboardingActions.SET_USERS_SKIll,
          data: skillList,
        });
      })
      .catch(() => {});
  }, []);

  return { onboardingData, dispatch };
};

const [OnboardingDataProvider, useOnboardingDataContext] =
  constate(UseOnboardingData);
export { OnboardingDataProvider, useOnboardingDataContext };
