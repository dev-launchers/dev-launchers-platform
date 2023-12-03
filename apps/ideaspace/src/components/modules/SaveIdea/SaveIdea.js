import React from 'react';
import SaveButton, { SaveButtonProps } from '@devlaunchers/components/src/components/molecules/InteractionButtons/SaveButton';
import { StyledSaveIdea } from './StyledSaveIdea';
import { agent } from '@devlaunchers/utility';


const SaveIdea = ({savedCards, setSavedCards, id, user}) =>{
    const savedIdea = savedCards.includes(id)

    const handleSaved = async () =>{
        const data = {
            objectId: id,
            objectType: 1,
            user: user
        }
        try {
           const request = await agent.Saves.post(data)
           console.log(request)
        } catch(error){
            console.log("error occured", error)
        }
    }
    
    return(
        <StyledSaveIdea>
            <SaveButton
            disabled = {savedIdea}
            text = {savedIdea ? "Saved" : "Save"}
            filled = {savedIdea}
            onClick = {()=>{
                setSavedCards([...savedCards, id])
                handleSaved()
            }}
        />
        </StyledSaveIdea>
    )
}
export default SaveIdea;