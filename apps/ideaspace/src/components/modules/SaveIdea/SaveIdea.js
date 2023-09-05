import React from 'react';
import SaveButton, { SaveButtonProps } from '@devlaunchers/components/src/components/molecules/InteractionButtons/SaveButton';
import { StyledSaveIdea } from './StyledSaveIdea';


const SaveIdea = ({savedCards, setSavedCards, id}) =>{
    
    return(
        <StyledSaveIdea>
            <SaveButton
            disabled = {savedCards.includes(id)}
            text = {savedCards.includes(id) ? "Saved" : "Save"}
            filled = {savedCards.includes(id)}
            onClick = {()=>{
                setSavedCards([...savedCards, id])
            }}
        />
        </StyledSaveIdea>
    )
}
export default SaveIdea;