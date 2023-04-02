import { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";

const OnboardingContext = createContext()

export const OnboardingProvider = ({ children }) => {
    const [route, setRoute] = useState()
    const router = useRouter()

    return (
        <OnboardingContext.Provider value={{ router }}>
            {children}
        </OnboardingContext.Provider>
    )
}

export const useOnboarding = () => useContext(OnboardingContext)