import axios from 'axios';
import { useState, useEffect, useReducer } from "react";
import constate from 'constate';
import { useUserDataContext } from './UserDataContext';
import { onboardingReducer } from './../state/reducers'

export const UseOnboardingData = ({ children }) => {
    const [onboardingData, dispatch] = useReducer(onboardingReducer.onboardingReducer, onboardingReducer.initialOnboardingState);
    const { userData } = useUserDataContext();

    useEffect(() => {
        // setOnboardingData to show modal;
    }, [])

    return { onboardingData, dispatch };
}

const [OnboardingDataProvider, useOnboardingDataContext] = constate(UseOnboardingData);
export { OnboardingDataProvider, useOnboardingDataContext };