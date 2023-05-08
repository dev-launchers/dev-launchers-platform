import React from 'react'
import { useState, useEffect } from "react";
import ProgressBarStyle from './StyledOnboardingProgressBar';


const ProgressBar = ({ percentage, className }) => {

    return (
        <>
            <ProgressBarStyle className={className} width={percentage}></ProgressBarStyle>
        </>
    )
}

export default ProgressBar