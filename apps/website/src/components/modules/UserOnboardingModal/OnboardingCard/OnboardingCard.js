import React from 'react'
import { Typography } from '@devlaunchers/components/components/atoms'
import { TextWrapper, PicWrapper, CheckedWrapper, OnboardingCardLayer, CheckedSVG, IconImg } from './StyledOnboardingCard'
export default function OnboardingCard({
    iconImg,
    title,
    subtitle,
    checked,
}) {
    console.log({ iconImg });
    console.log({ title });
    console.log({ checked });
    return (
        <OnboardingCardLayer checked = {checked}>
            {/* <img src={iconImg} alt="icon" /> */}
            <PicWrapper>
            <TextWrapper>
                <IconImg iconImg={iconImg} />
            </TextWrapper>
                <TextWrapper>
                    <Typography variant="h4" color="white">{title}</Typography>
                    <Typography variant="h6" color="white">{subtitle}</Typography>
                </TextWrapper>
            </PicWrapper>



            <CheckedWrapper >
                <CheckedSVG checked = {checked}/>
            </CheckedWrapper>


        </OnboardingCardLayer>
    )
}