import React from 'react'
import PageBody from '../../../common/PageBody'

const OnboardingForm = ({ children }) => {
    return (
        <section>
            <PageBody width='40%'>
                <p>Let's Get to know each other</p>
                {children}
            </PageBody>
        </section>

    )
}

export default OnboardingForm