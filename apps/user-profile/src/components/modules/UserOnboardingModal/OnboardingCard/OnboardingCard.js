import React from 'react'
import { Typography } from '@devlaunchers/components/components/atoms'
import { OnboardingCardContainer, PicWrapper, TextWrapper, CheckedWrapper, CheckedSVG, IconImg } from './StyledOnboardingCard'
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
                    <Typography type="p" color="white">{title}</Typography>
                    <Typography type="p" color="white">{subtitle}</Typography>
            </TextWrapper>

            <CheckedWrapper>
                <CheckedSVG completed = {completed}/>
            </CheckedWrapper>

        </OnboardingCardContainer>
    )
}