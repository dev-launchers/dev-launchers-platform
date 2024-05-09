import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import CameraIcon from '../../../../src/images/camera-icon.svg';
import { Link } from '@devlaunchers/components/components/atoms';
import Button from '@devlaunchers/components/components/atoms/Button';
import Typography from '@devlaunchers/components/components/atoms/Typography';
import InputField from './../../common/Forms/Input';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import CheckboxField from './../../common/Forms/Checkbox';
import UploadProfilePicture from './../../common/UploadProfilePicture';
import Breadcrumb from '../../../images/Onboarding/breadcrumb-frame.png';
import {
  ButtonContainer,
  OnboardingContainer,
  FormContainer,
  PageContainer,
  BannerContainer,
  FormFields,
  FormFooter,
  ProfileContainer,
  UploadButton,
  ProfileHeader,
  ProfilePicture,
  UploadedProfilePicture,
} from './StyledOnboardingLandingPage';

const initialFormValue = {
  firstName: '',
  firstNameTouched: false,
  lastName: '',
  lastNameTouched: false,
  location: '',
  role: '',
  headline: '',
  termsAndConditions: false,
  emailMarketing: false,
};

const initialFormValidation = {
  isFirstNameValid: /^[a-z ,.'-]+$/i.test(initialFormValue.firstName),
  isLastNameValid: /^[a-z ,.'-]+$/i.test(initialFormValue.lastName),
};

export default function OnboardingLandingPage() {
  const { userData } = useUserDataContext();
  const [person, setPerson] = useState({
    ...initialFormValue,
  });
  const [formValidation, setFormValidation] = useState(
    validate(initialFormValue)
  );
  const [profilePicture, setProfilePicture] = useState(
    userData?.profile?.profilePictureUrl
  );
  const [uploadedProfilePicture, setUploadedProfilePicture] = useState(null);

  const router = useRouter();
  let isFormValid = false;
  useEffect(() => {
    setFormValidation(validate(person));
  }, [person]);

  function validate(formValue) {
    return {
      isFirstNameValid:
        formValue.firstNameTouched &&
        /^[a-z ,.'-]+$/i.test(formValue.firstName),
      isLastNameValid:
        formValue.lastNameTouched && /^[a-z ,.'-]+$/i.test(formValue.lastName),
      isFormValid: function () {
        return (
          formValue.termsAndConditions &&
          this.isFirstNameValid &&
          this.isLastNameValid
        );
      },
    };
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      if (file.type === 'image/png' || file.type === 'image/jpeg') {
        if (file.size <= 200 * 1024 * 1024) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setUploadedProfilePicture(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
          alert('The file size must be less than 200MB.');
        }
      } else {
        alert('Please select a valid image file (PNG or JPEG).');
      }
    }
  }

  function onFirstNameChange(e) {
    console.log(person);
    setPerson({ ...person, firstName: e.target.value, firstNameTouched: true });
    console.log('VALIDATION: ', formValidation);
  }

  function onLastNameChange(e) {
    console.log(person);
    setPerson({ ...person, lastName: e.target.value, lastNameTouched: true });
    console.log('VALIDATION: ', formValidation);
  }

  function onLocationChange(e) {
    console.log(person);
    setPerson({ ...person, location: e.target.value });
  }

  function onRoleChange(e) {
    setPerson({ ...person, role: e.target.value });
    console.log(person);
  }

  function onHeadLineChange(e) {
    setPerson({ ...person, role: e.target.value });
    console.log(person);
  }

  function onTermsAndConditionChange(e) {
    console.log(person);
    setPerson({ ...person, termsAndConditions: !person.termsAndConditions });
  }
  function onJoinNewsLetterChange() {
    console.log('Join News');
  }

  const onContinueClick = (e) => {
    const profileId = userData?.profile?.id;

    const requestBody = {
      data: {
        displayName: `${person.firstName} ${person.lastName}`,
        profilePictureUrl: uploadedProfilePicture || profilePicture,
      },
    };
    profileId &&
      axios
        .put(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/profiles/${profileId}/`,
          requestBody,
          { withCredentials: true }
        )
        .then(() => {
          console.log('Profile picture updated successfully');
          router.push(
            {
              pathname: '/users/me',
              query: { onboarding: true },
            },
            '/users/me'
          );
        })
        .catch((error) => {
          console.error('Error updating profile picture:', error);
        });
    e.preventDefault();
  };

  const onCancelClick = (e) => {
    router.push(
      {
        pathname: '/',
      },
      '/'
    );
    e.preventDefault();
  };

  return (
    <>
      <PageContainer>
        <BannerContainer>
          <img src={Breadcrumb} />
        </BannerContainer>
        <OnboardingContainer>
          <ProfileContainer>
            <ProfileHeader>
              <Typography type="p">PROFILE</Typography>
              <Typography type="h2">Let's Create Your Profile</Typography>
            </ProfileHeader>
            <Typography>
              A completed profile will help us match you with opportunities
            </Typography>

            {uploadedProfilePicture || userData?.profile?.profilePictureUrl ? (
              <UploadedProfilePicture
                src={
                  uploadedProfilePicture || userData?.profile?.profilePictureUrl
                }
              />
            ) : (
              <UploadProfilePicture width={120} height={120} />
            )}
            <UploadButton>
              <label htmlFor="file-upload" className="cursor-pointer">
                <img src={CameraIcon} className="Camera Icon" />
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </UploadButton>
          </ProfileContainer>
          <FormContainer>
            <Typography>* Indicates a required field</Typography>
            <FormFields name="myForm">
              <InputField
                error="Please fill in your First Name"
                label="First Name"
                name="First Name"
                onChange={onFirstNameChange}
                placeholder="John"
                touched={
                  person.firstNameTouched
                    ? !formValidation.isFirstNameValid
                    : false
                }
                required
              />
              <InputField
                error="Please fill in your Last Name"
                label="Last Name"
                name="Last Name"
                onChange={onLastNameChange}
                placeholder="Doe"
                touched={
                  person.lastNameTouched
                    ? !formValidation.isLastNameValid
                    : false
                }
                required
              />

              <InputField
                error=""
                label="Location (optional)"
                onChange={onLocationChange}
                placeholder="Lose Angels, CA"
              />

              <InputField
                error=""
                label="Role (optional)"
                onChange={onRoleChange}
                placeholder="CSS Developer"
              />

              <InputField
                error=""
                label="Headline (optional)"
                onChange={onHeadLineChange}
                placeholder="I'm an experienced CSS developer"
              />
            </FormFields>
            <FormFooter>
              <CheckboxField
                customLabel={
                  <Typography type="pSmall">
                    I have read and agree to the <a>Terms and Conditions</a>
                  </Typography>
                }
                onChange={onTermsAndConditionChange}
                checked={person.termsAndConditions}
                required={true}
              />
              {/* <CheckboxField
                                customLabel={<Typography type="pSmall">Join our weekly Newsletter </Typography>}
                                onChange={onJoinNewsLetterChange}
                                required={true}
                            /> */}
              <ButtonContainer>
                <Button
                  buttonType="alternative"
                  buttonSize="xl"
                  onClick={onCancelClick}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  buttonType="secondary"
                  buttonSize="xl"
                  onClick={onContinueClick}
                  disabled={!formValidation.isFormValid()}
                >
                  Save and Continue
                </Button>
              </ButtonContainer>
            </FormFooter>
          </FormContainer>
        </OnboardingContainer>
      </PageContainer>
    </>
  );

  // return (
  //     <OnboardingForm>
  //         <form>
  //             <FormFieldMargin>
  //                 <FormField
  //                     error=""
  //                     label="FIRST NAME"
  //                     value={person.firstName}
  //                     onChange={handleFirstNameChange}
  //                     placeholder="Placeholder"
  //                 />
  //             </FormFieldMargin>

  //             <FormFieldMargin>
  //                 <FormField
  //                     error=""
  //                     name=''
  //                     label="LAST NAME"
  //                     value={person.lastName}
  //                     onChange={handleLastNameChange}
  //                     placeholder="Placeholder"
  //                 />
  //             </FormFieldMargin>

  //             <FormFieldMargin mb>
  //                 <OpenResponse
  //                     cols={50}
  //                     error=""
  //                     label="BIO"
  //                     value={person.bio}
  //                     onChange={handleBioChange}
  //                     placeholder="Placeholder"
  //                     rows={5}
  //                 />
  //             </FormFieldMargin>

  //             <FormFieldMargin>
  //                 <ConfirmationSection>

  //                     <CheckboxSpacing>
  //                         <Checkbox
  //                             required
  //                             onChange={function noRefCheck() { }}
  //                         />
  //                     </CheckboxSpacing>

  //                     <div>
  //                         <>I have read and agree to the</>
  //                         <br />
  //                         <Link
  //                             href="https://devlaunchers.org/page/terms-and-conditions"
  //                             text="Terms of Service"
  //                         />
  //                         &nbsp;<b>&</b>&nbsp;
  //                         <Link
  //                             href="https://devlaunchers.org/page/privacy-policy"
  //                             text="Privacy Policy"
  //                         />
  //                         . <b className='red'>*</b>
  //                     </div>
  //                 </ConfirmationSection>
  //             </FormFieldMargin>

  //             <div className='separator'></div>

  //             <Button
  // 								buttonSize="standard"
  // 								buttonType="primary"
  // 								className="continue-btn"
  // 								onClick={handleContinueClick}
  //             >
  //               Save and Continue
  //             </Button>

  // 							<div className='separator'></div>
  //         </form>
  //     </OnboardingForm>
  // )
}
