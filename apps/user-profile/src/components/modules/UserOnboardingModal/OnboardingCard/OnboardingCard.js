import React from 'react'
import { Typography } from '@devlaunchers/components/components/atoms'
import { OnboardingCardContainer, PicWrapper, TextWrapper, CheckedWrapper, CheckedSVG, IconImg } from './StyledOnboardingCard'

/*
* @description This component renders the Onboarding Card Component.
/* passing a prop to decide show checked or unchecked 
*/
export default function OnboardingCard({
    iconImg,
    title,
    subtitle,
    completed,
}) {
    return (
        <OnboardingCardContainer completed = {completed}>
            <PicWrapper>
                    <IconImg iconImg={iconImg} />
            </PicWrapper>

            <TextWrapper>
                    <Typography type="label" color="white">{title}</Typography>
                    <Typography type="pSmall" color="white">{subtitle}</Typography>
            </TextWrapper>

            <CheckedWrapper>
                <CheckedSVG completed = {completed}/>
            </CheckedWrapper>

        </OnboardingCardContainer>
    )
}