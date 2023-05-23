import React from 'react'
import { RoleCardContainer, IconWrapper, TextWrapper, IconImg} from './StyledRoleCard'
import { Typography } from '@devlaunchers/components/components/atoms'

// @description 
// - This component renders the RoleCard Component.
// - You can change the color of title by passing an theme name from "theme1", "theme2" and "theme3".
// - "theme1" is navy, "theme2" is light blue and "theme3" is orange.

export default function RoleCard({
    iconImg,
    title,
    subtitle,
    titletheme,
}) {
    return (
        <RoleCardContainer>
            <IconWrapper>
                    <IconImg iconImg={iconImg} />
            </IconWrapper>

            <TextWrapper>
                <Typography type="pLarge"><span className={`theme ${titletheme}`}>{title}</span></Typography>
                <Typography type="pSmall">{subtitle}</Typography>
            </TextWrapper>
                    
        </RoleCardContainer>
    )
}