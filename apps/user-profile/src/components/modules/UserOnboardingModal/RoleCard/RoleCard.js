import React from 'react'
import { RoleCardContainer, PicWrapper, TextContents, IconImg} from './StyledRoleCard'

// @description This component renders the RoleCard Component.
// @description You can change the color of title by passing an theme name from "theme1", "theme2" and "theme3".
// @description "theme1" is navy, "theme2" is light blue and "theme3" is orange.

export default function RoleCard({
    iconImg,
    title,
    subtitle,
    theme,
}) {
    return (
        <RoleCardContainer>

            <PicWrapper>
                    <IconImg iconImg={iconImg} />
            </PicWrapper>

            <TextContents theme={theme} title={title} subtitle={subtitle}/>
                    
        </RoleCardContainer>
    )
}