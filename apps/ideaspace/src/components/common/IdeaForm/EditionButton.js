import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';

const EditionButton = ({clickHandlerButton, sending}) => {
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
                style={{ marginLeft: '1rem' }}
            >
                {' '}{sending === true ? 'Wait' : 'Save edits'}{' '}
            </atoms.Button>
        </>
    )
}

export default EditionButton;