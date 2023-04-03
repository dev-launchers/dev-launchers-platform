import { createContext, useContext, useState } from "react";

const OnboardingContext = createContext()

export const OnboardingProvider = ({ children }) => {

    return (
        <OnboardingContext.Provider value={{}}>
            {children}
        </OnboardingContext.Provider>
    )
}

export const useOnboarding = () => useContext(OnboardingContext)