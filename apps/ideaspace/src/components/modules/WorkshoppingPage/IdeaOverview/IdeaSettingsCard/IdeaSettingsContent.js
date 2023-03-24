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
                disabled={disabling} style={{"backgroundColor":buttonColor}}
                onClick={buttonFunction}
            >
                {buttonText}
            </atoms.Button>
        </atoms.Box>

    );
};

export default IdeaSettingsContent;