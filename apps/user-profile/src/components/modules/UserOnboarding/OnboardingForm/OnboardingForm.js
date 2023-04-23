import React from 'react'
import PageBody from '../../../common/PageBody'
import OnboardingFormSection from './StyledOnboardingForm'
import { Typography } from '@devlaunchers/components/components/atoms'

const OnboardingForm = ({ children }) => {
    return (
        <OnboardingFormSection>
            <PageBody width='40%'>
                <div className='form-title-mb'>
                    <Typography type='h2'>Let's Get to know each other</Typography>
                </div>
                {children}
            </PageBody>
        </OnboardingFormSection>

    )
}

export default OnboardingForm