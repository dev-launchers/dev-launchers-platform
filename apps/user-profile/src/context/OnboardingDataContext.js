import { useEffect, useReducer } from "react";
import constate from 'constate';
import { useUserDataContext } from './UserDataContext';
import { onboardingReducer, initialOnboardingState } from './../state/reducers'


export const UseOnboardingData = ({ children }) => {
    const [onboardingData, dispatch] = useReducer(onboardingReducer.onboardingReducer, onboardingReducer.initialOnboardingState);
    const { userData } = useUserDataContext();
 
    useEffect(() => {
       
    }, []); 

    return { onboardingData, dispatch };
}

const [OnboardingDataProvider, useOnboardingDataContext] = constate(UseOnboardingData);
export { OnboardingDataProvider, useOnboardingDataContext };
