import React, { useState } from 'react'
import FormField from '../../../../../../packages/UI/src/components/organisms/FormField'
import OpenResponse from '../../../../../../packages/UI/src/components/organisms/OpenResponse'
import { Checkbox } from '@devlaunchers/components/components/atoms'
import { Link } from '@devlaunchers/components/components/atoms'
import OnboardingForm from './OnboardingForm'
import Button from '../../../../../../packages/UI/src/components/atoms/Button'
import FormFieldMargin, { ConfirmationSection, CheckboxSpacing } from './StyledUserOnboarding'

const initialValue = {
    firstName: '',
    lastName: '',
    bio: ''
}

const UserOnboarding = () => {
    const [person, setPerson] = useState(initialValue)

    const handleFirstNameChange = (e) => {
        setPerson({
            ...person,
            firstName: e.target.value
        })
    }

    const handleLastNameChange = (e) => {
        setPerson({
            ...person,
            lastName: e.target.value
        })
    }

    const handleBioChange = (e) => {
        setPerson({
            ...person,
            bio: e.target.value
        })
    }

    return (
        <OnboardingForm>
            <form>
                <FormFieldMargin>
                    <FormField
                        error=""
                        label="FIRST NAME"
                        value={person.firstName}
                        onChange={handleFirstNameChange}
                        placeholder="Placeholder"
                    />
                </FormFieldMargin>

                <FormFieldMargin>
                    {/* LAST NAME */}
                    <FormField
                        error=""
                        name=''
                        label="LAST NAME"
                        value={person.lastName}
                        onChange={handleLastNameChange}
                        placeholder="Placeholder"
                    />
                </FormFieldMargin>

                <FormFieldMargin mb>
                    <OpenResponse
                        cols={50}
                        error=""
                        label="BIO"
                        value={person.bio}
                        onChange={handleBioChange}
                        placeholder="Placeholder"
                        rows={5}
                    />
                </FormFieldMargin>

                <FormFieldMargin>
                    <ConfirmationSection>

                        <CheckboxSpacing>
                            <Checkbox
                                required
                                onChange={function noRefCheck() { }}
                            />
                        </CheckboxSpacing>

                        <div>
                            <>I have read and agree to the</>
                            <br />
                            <Link
                                href="/anywhere"
                                text="Terms of Service"
                            />
                            &nbsp;<b>&</b>&nbsp;
                            <Link
                                href="/anywhere"
                                text="Privacy Policy"
                            />
                            . <b className='red'>*</b>
                        </div>
                    </ConfirmationSection>
                </FormFieldMargin>

                <Button
                    buttonSize="standard"
                    buttonType="primary"
                >
                    Continue
                </Button>
            </form>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                {person.bio}{' '}
            </p>
        </OnboardingForm>
    )
}

export default UserOnboarding