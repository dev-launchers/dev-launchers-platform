import React from 'react'
import { useState, useEffect } from "react";
import ProgressBarStyle from './StyledOnboardingProgressBar';


const ProgressBar = ({
    bgColor,
    className,
    bgWidth,
    barWidth,
    borderRadius,
    height,
    barColor,
}) => {

    return (
        <>
            {/* style={{ background: barColor, borderRadius: borderRadius, width: barWidth, height: height }} */}
            <ProgressBarStyle backgroundColor={bgColor} width={bgWidth} height={height} borderRadius={borderRadius} className={className}>
                <ProgressBarStyle backgroundColor={barColor} width={barWidth} borderRadius={borderRadius} height={height}></ProgressBarStyle>
            </ProgressBarStyle>
        </>
    )
}

export default ProgressBar