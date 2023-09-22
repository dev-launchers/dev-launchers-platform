import React from 'react';
import SaveButton, { SaveButtonProps } from '@devlaunchers/components/src/components/molecules/InteractionButtons/SaveButton';
import { StyledSaveIdea } from './StyledSaveIdea';


const SaveIdea = ({savedCards, setSavedCards, id}) =>{
    const savedIdea = savedCards.includes(id)
    
    return(
        <StyledSaveIdea>
            <SaveButton
            disabled = {savedIdea}
            text = {savedIdea ? "Saved" : "Save"}
            filled = {savedIdea}
            onClick = {()=>{
                setSavedCards([...savedCards, id])
            }}
        />
        </StyledSaveIdea>
    )
}
export default SaveIdea;