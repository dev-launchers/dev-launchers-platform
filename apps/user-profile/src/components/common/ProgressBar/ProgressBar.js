import React from 'react'
import { useState, useEffect } from "react";


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
            <div style={{ backgroundColor: bgColor, width: bgWidth, height: height, borderRadius: borderRadius }} className={className}>
                <div style={{ background: barColor, borderRadius: borderRadius, width: barWidth, height: height }}></div>
            </div>
        </>
    )
}

export default ProgressBar