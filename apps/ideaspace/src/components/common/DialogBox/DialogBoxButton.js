import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';

const DialogBoxButton = ({ handleConfirmButton, handleCancelButton, buttonDetail }) => {
if (buttonDetail[0] == 'alternative primary') {
    return (
    <>
        <atoms.Button
        buttonSize='standard'
        buttonType='alternative'
        onClick={handleCancelButton}
        >
        {buttonDetail[1]}
        </atoms.Button>
        <atoms.Button
        buttonSize='standard'
        buttonType='primary'
        onClick={handleConfirmButton}
        >
        {buttonDetail[2]}
        </atoms.Button>
    </>
    )
} else if (buttonDetail[0] == 'primary alternative') {
    return (
    <>
        <atoms.Button
        buttonSize='standard'
        buttonType='primary'
        onClick={handleConfirmButton}
        >
        {buttonDetail[1]}
        </atoms.Button>
        <atoms.Button
        buttonSize='standard'
        buttonType='alternative'
        onClick={handleCancelButton}
        >
        {buttonDetail[2]}
        </atoms.Button>
    </>
    )
} else if (buttonDetail[0] == 'primary') {
    return (
    <>
        <atoms.Button
        buttonSize='standard'
        buttonType='primary'
        onClick={handleCancelButton}
        >
        {buttonDetail[1]}
        </atoms.Button>
    </>
    )
} 
}

export default DialogBoxButton;