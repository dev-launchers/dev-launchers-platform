import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';

const EditionButton = ({clickHandlerButton, sending, disabling}) => {
    const goBack = () => {
        clickHandlerButton("back");
    };

    return (
        <>
            <atoms.Button
                buttonSize='standard'
                buttonType='alternative'
                type='button'
                onClick={goBack}
            >
                CANCEL
            </atoms.Button>
            <atoms.Button
                buttonSize='standard'
                buttonType='primary'
                type='submit'
                disabled={disabling}
            >
                {' '}{sending === true ? 'Wait' : 'Save edits'}{' '}
            </atoms.Button>
        </>
    )
}

export default EditionButton;