import React from 'react'
import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";


const OnboardingProgressBar = () => {
    const [devLaunchersLoginProgress, setDevLaunchersLoginProgress] = useState({ complete: true })
    const [platformOnboardingProgress, setPlatformOnboardingProgress] = useState({ complete: false })
    const [signUpOnRelatedPlatformsProgress, setSignUpOnRelatedPlatformsProgress] = useState({ complete: false })
    const [progress, setProgress] = useState([{}])

    useEffect(() => {
        // {Axios} backend call will be made to get the correct status
        let devLaunchersLoginStatus;
        let platformOnboardingStatus;
        let signUpOnRelatedPlatformsStatus;

        setDevLaunchersLoginProgress({
            ...devLaunchersLoginProgress,
            complete: devLaunchersLoginStatus
        });
        setPlatformOnboardingProgress({
            ...platformOnboardingProgress,
            complete: platformOnboardingStatus
        });
        setSignUpOnRelatedPlatformsProgress({
            ...signUpOnRelatedPlatformsProgress,
            complete: signUpOnRelatedPlatformsStatus
        });
        setProgress([
            devLaunchersLoginProgress,
            platformOnboardingProgress,
            signUpOnRelatedPlatformsProgress
        ])

    }, [])

    let progressComplete = progress.filter(p => p.complete == true)
    let barLength = (progressComplete.length / progress.length) * 100
    console.log(barLength);

    // useEffect(() => {
    //     console.log(progress);
    //     console.log('progresses', progressComplete);
    // }, [progress, progressComplete])


    return (
        <>
            <ProgressBar
                completed={barLength}
                customLabel=" "
                bgColor="linear-gradient(90deg, #234C73 0%, rgba(192, 225, 235, 0.72) 135.29%)"
            />
        </>
    )
}

export default OnboardingProgressBar