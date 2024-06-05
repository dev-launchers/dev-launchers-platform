import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import agent from '@devlaunchers/utility/agent';
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
  const [person, setPerson] = useState({ ...initialFormValue });
  const [formValidation, setFormValidation] = useState(
    validate(initialFormValue)
  );

  const [profilePicture, setProfilePicture] = useState(
    userData?.profile?.profilePictureUrl
  );

  const [uploadedProfilePicture, setUploadedProfilePicture] = useState(null);

  const router = useRouter();

  useEffect(() => {
    setFormValidation(validate(person));
  }, [person]);

function validate(formValue) {
  var errors = {};
  if (!formValue.firstNameTouched) {
    errors.isFirstNameValid = false;
    errors.firstNameError = 'First name is required';
  } else if (!/^[a-z ,.'-]+$/i.test(formValue.firstName)) {
    errors.isFirstNameValid = false;
    errors.firstNameError = 'First name is not valid';
  } else {
    errors.isFirstNameValid = true;
  }

  if (!formValue.lastNameTouched) {
    errors.isLastNameValid = false;
    errors.lastNameError = 'Last name is required';
  } else if (!/^[a-z ,.'-]+$/i.test(formValue.lastName)) {
    errors.isLastNameValid = false;
    errors.lastNameError = 'Last name is not valid';
  } else {
    errors.isLastNameValid = true;
  }

  errors.isFormValid = () => formValue.termsAndConditions && errors.isFirstNameValid && errors.isLastNameValid;

  return errors;
}


  async function handleFileChange(event) {
    const file = event.target.files[0];
    if (file.type === 'image/png' || file.type === 'image/jpeg') {
      if (file.size <= 200 * 1024 * 1024) {
        const formData = new FormData();
        formData.append('files', file);
        formData.append('ref', 'api::profile.profile');
        formData.append('refId', userData?.profile?.id);
        formData.append('field', 'profilePicture');

        try {
          const response = await agent.requests.postForm('upload', formData);
          if (response) {
            setUploadedProfilePicture(response[0].url);
          } else {
            alert('Failed to upload image.');
          }
        } catch (error) {
          alert('Error uploading image.');
        }
      } else {
        alert('The file size must be less than 200MB.');
      }
    } else {
      alert('Please select a valid image file (PNG or JPEG).');
    }
  }

  function onFirstNameChange(e) {
    setPerson({ ...person, firstName: e.target.value, firstNameTouched: true });
  }

  function onLastNameChange(e) {
    setPerson({ ...person, lastName: e.target.value, lastNameTouched: true });
  }

  function onLocationChange(e) {
    setPerson({ ...person, location: e.target.value });
  }

  function onRoleChange(e) {
    setPerson({ ...person, role: e.target.value });
  }

  function onHeadLineChange(e) {
    setPerson({ ...person, headline: e.target.value });
  }

  function onTermsAndConditionChange(e) {
    setPerson({ ...person, termsAndConditions: !person.termsAndConditions });
  }

  function onJoinNewsLetterChange() {}

  const onContinueClick = async (e) => {
    e.preventDefault();
    const profileId = userData?.profile?.id;

    if (profileId) {
      const requestBody = {
        data: {
          displayName: `${person.firstName} ${person.lastName}`,
          profilePictureUrl: uploadedProfilePicture || profilePicture,
        },
      };

      try {
        await agent.Profiles.put(profileId, requestBody);
        router.push({
          pathname: '/users/me',
          query: { onboarding: true },
        });
      } catch (error) {}
    }
  };

  const onCancelClick = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
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
              error={formValidation.firstNameError}
              label="First Name"
              name="First Name"
              onChange={onFirstNameChange}
              placeholder="John"
              touched={person.firstNameTouched && !formValidation.isFirstNameValid}
              required
            />
            <InputField
              error={formValidation.lastNameError}
              label="Last Name"
              name="Last Name"
              onChange={onLastNameChange}
              placeholder="Doe"
              touched={person.lastNameTouched && !formValidation.isLastNameValid}
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
  );
}
