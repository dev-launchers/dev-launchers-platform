import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';

const SubmissionButton = ({sending}) => {

    return (
        <atoms.Button
			buttonSize='standard'
			buttonType='primary'
			type='submit'
		>
			{' '}{sending === true ? 'Wait' : 'Submit'}{' '}
		</atoms.Button>
    )
}

export default SubmissionButton;