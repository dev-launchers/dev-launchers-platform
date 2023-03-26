import React from 'react'
import PageBody from '../../../common/PageBody'
import OnboardingFormSection from './StyledOnboardingForm'

const OnboardingForm = ({ children }) => {
    return (
        <OnboardingFormSection>
            <PageBody width='40%'>
                <p>Let's Get to know each other</p>
                {children}
            </PageBody>
        </OnboardingFormSection>

    )
}

export default OnboardingForm