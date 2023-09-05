import React from 'react';
import { atoms, molecules } from '@devlaunchers/components/src/components';
import SaveButton, { SaveButtonProps } from '@devlaunchers/components/src/components/molecules/InteractionButtons/SaveButton';
import { StyledSaveIdea } from './StyledSaveIdea';


const SaveIdea = ({savedCards, setSavedCards, id}) =>{
    
    return(
        <StyledSaveIdea>
            <SaveButton
            // style = {{
            //     fontWeight: 400,
            //     display: 'flex',
            //     flexDirection: 'row',
            //     justifyContent: 'center',
            //     zIndex: 1,
            //     position: 'relative',
            //     left: '5rem',
            //     top: '1rem',
            //     // padding: '0.2rem 0.5rem'
            // }}
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