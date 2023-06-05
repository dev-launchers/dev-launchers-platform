import React, {useState} from 'react'
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
    const [isActive, setIsActive] = useState(false);
    const detectHover = event => {
        setIsActive(current => !current);
      };
    return (
        <OnboardingCardContainer completed = {completed} className={isActive ? 'hovered' : ''} onMouseEnter={detectHover} onMouseLeave={detectHover}>
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