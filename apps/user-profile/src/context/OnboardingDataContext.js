import axios from 'axios';
import { useState, useEffect, useReducer } from "react";
import constate from 'constate';
import { useUserDataContext } from './UserDataContext';
import { onboardingReducer, initialOnboardingState } from './../state/reducers'
import { onboardingActions } from './../state/actions/onboardingActions';


// export const UseOnboardingData = ({ children }) => {
//     const [onboardingData, dispatch] = useReducer(onboardingReducer.onboardingReducer, onboardingReducer.initialOnboardingState);
//     const { userData } = useUserDataContext();
 
//     useEffect(() => {
//         // setOnboardingData to show modal;



//     }, [])
//     return { onboardingData, dispatch };


// }

// const [OnboardingDataProvider, useOnboardingDataContext] = constate(UseOnboardingData);
// export { OnboardingDataProvider, useOnboardingDataContext };
export const UseOnboardingData = ({ children }) => {
    const [onboardingData, dispatch] = useReducer(onboardingReducer.onboardingReducer, onboardingReducer.initialOnboardingState);
    const { userData } = useUserDataContext();
 
    useEffect(() => {
        console.log('onboardingred', onboardingReducer.initialOnboardingState)
        console.log('onboardingdat', onboardingData)
        // const fetchOnboardingData = async () => {
        //     try {
        //         const response = await axios.get('/api/onboarding-data');
        //         dispatch({
        //             type: onboardingActions.SET_ONBOARDING_DATA,
        //             payload: response.data
        //         });
        //     } catch (error) {
        //     }
        // };

        // fetchOnboardingData();
    }, []); 

    return { onboardingData, dispatch };
}

const [OnboardingDataProvider, useOnboardingDataContext] = constate(UseOnboardingData);
export { OnboardingDataProvider, useOnboardingDataContext };
