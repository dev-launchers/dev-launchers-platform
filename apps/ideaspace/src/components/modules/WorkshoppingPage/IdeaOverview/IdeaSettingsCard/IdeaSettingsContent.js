import React, { useState } from 'react';
import axios from "axios";
import theme from '@devlaunchers/components/styles/theme';
import { atoms } from '@devlaunchers/components/src/components';

const IdeaSettingsContent = ({
    settingLabel,
    settingText,
    buttonText,
    buttonFunction,
    disabling,
    buttonColor
}) => {
    let [over,setOver]=React.useState(false);
    let [bColor,setBColor]=React.useState(buttonColor);
    
    React.useEffect(() => {
        if (buttonColor != undefined){
            if (over) {
                setBColor(theme.colors.ERROR_700);
            } else {
                setBColor(buttonColor);
            }
        } 
    }, [over]);

    return (
        <atoms.Box justifyContent="space-between" alignItems="center">
            <atoms.Box justifyContent="space-between" flexDirection="column" alignItems="flex-start">
                <atoms.Typography type='pLarge' style={{fontWeight:"700"}} >
                    {settingLabel}
                </atoms.Typography>
                <atoms.Typography type='p' textAlign='left'>
                    {settingText}
                </atoms.Typography>
            </atoms.Box>

            <atoms.Button buttonSize='standard' buttonType="primary" 
                disabled={disabling} style={{"backgroundColor":bColor}}
                onClick={buttonFunction} onMouseOver={()=>setOver(true)} onMouseOut={()=>setOver(false)}
            >
                {buttonText}
            </atoms.Button>
        </atoms.Box>

    );
};

export default IdeaSettingsContent;