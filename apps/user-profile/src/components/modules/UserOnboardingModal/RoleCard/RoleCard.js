import React, { useState } from 'react'
import { RoleCardContainer, RadioCardContainer, IconWrapper, TextWrapper, IconImg } from './StyledRoleCard'
import { Typography } from '@devlaunchers/components/components/atoms'


/**
 * @description  This component renders the RoleCard Component.
 * You can change the color of title by passing an theme name from "theme1", "theme2" and "theme3".
 * "theme1" is navy, "theme2" is light blue and "theme3" is orange.
 * @returns 
 */
export default function RoleCard({
    iconImg,
    title,
    subtitle,
    theme,
    groupName = 'role',
    value = 'radioValue',
    checked,
    onChange
}) {
    return (
        <RoleCardContainer>
            <label>
                <input type='radio' checked={checked ? 'checked' : ''} onChange={onChange} name={groupName} value={value} />
                <RadioCardContainer className='custom-radio-btn'>
                    <IconWrapper>
                        <IconImg iconImg={iconImg} />
                    </IconWrapper>

                    <TextWrapper>
                        <Typography type="p"><span className={`title ${theme}`}>{title.toUpperCase()}</span></Typography>
                        <Typography type="pSmall" className="card-subtitle"> {subtitle}</Typography>
                    </TextWrapper>

                </RadioCardContainer>
            </label>
        </RoleCardContainer>
    )
}

//className={isSelected ? 'selected' : ''} 