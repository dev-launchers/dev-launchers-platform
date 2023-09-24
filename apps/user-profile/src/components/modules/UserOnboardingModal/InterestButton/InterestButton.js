import React, {useState} from 'react'
import { ButtonContainer, TextWrapper} from './StyledInterestButton'
import { Typography } from '@devlaunchers/components/components/atoms'


export default function InterestButton({
    title,
    theme,
}) {
    const [isSelected, setIsSelected] = useState(false);
    const handleClick = event => {
        setIsSelected(current => !current);
      };
      

    return (
        <ButtonContainer className={isSelected ? 'selected' : ''} onClick={handleClick}>
            
            <TextWrapper>
                <Typography type="pLarge" style={{color: "black"}}><span className={`title ${theme}`}>{title}</span></Typography>
            </TextWrapper>
                    
        </ButtonContainer>
    )
}