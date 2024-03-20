import React from 'react'
import PageBody from '../../../common/PageBody'
import OnboardingFormSection, { StepperContainer } from './StyledOnboardingForm'
import { Typography } from '@devlaunchers/components/components/atoms'
import Breadcrumb from '../../../../images/Onboarding/breadcrumb-frame.png'

const OnboardingForm = ({ children }) => {
    return (
			<>
				<StepperContainer>
					<img src={Breadcrumb}/>
				</StepperContainer>
				<OnboardingFormSection>
					<PageBody width='40%' style={{backgroundColor: 'inherit'}}>
						<div className='form-title-mb'>
								<Typography type='h1'>First Let's Set Up Your Profile</Typography>
								<Typography type='h2'>A complete profile will help to match you with the perfect opportunity</Typography>
						</div>
						{children}
					</PageBody>
				</OnboardingFormSection>			
			</>
    )
}

export default OnboardingForm