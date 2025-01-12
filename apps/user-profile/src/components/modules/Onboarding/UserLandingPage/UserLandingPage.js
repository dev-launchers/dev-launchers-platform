import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import agent from '@devlaunchers/utility/agent';
import CameraIcon from './../../../../../src/images/camera-icon.svg';
import Button from '@devlaunchers/components/components/atoms/Button';
import Typography from '@devlaunchers/components/components/atoms/Typography';
// import InputField from './../../../common/Forms/Input';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import CheckboxField from './../../../common/Forms/Checkbox';
import UploadProfilePicture from './../../../common/UploadProfilePicture';
import Breadcrumb from './../../../../images/Onboarding/breadcrumb-frame.png';
import Loader from './../../../common/Loader';
import DropDownMenu from './../../../common/Dropdown/Dropdown';
import countryData from './../../../../content/countryData.json';

import {
  ButtonContainer,
  // OnboardingContainer,
  // FormContainer,
  // PageContainer,
  // BannerContainer,
  // FormFields,
  FormFooter,
  // ProfileContainer,
  // UploadButton,
  // ProfileHeader,
  // ProfilePicture,
  UploadedProfilePicture,
} from './StyledUserLandingPage';
// import DropdownMenu from './../../../common/Dropdown/Dropdown';

const initialFormValue = {
  firstName: '',
  firstNameTouched: false,
  lastName: '',
  lastNameTouched: false,
  country: '',
  role: '',
  linkedInPortfolio: '',
  websitePortfolio: '',
  termsAndConditions: false,
  emailMarketing: false,
};

const initialFormValidation = {
  isFirstNameValid: /^[a-z ,.'-]+$/i.test(initialFormValue.firstName),
  isLastNameValid: /^[a-z ,.'-]+$/i.test(initialFormValue.lastName),
};

export default function UserLandingPage() {
  const { userData } = useUserDataContext();
  const [person, setPerson] = useState({ ...initialFormValue });
  const [saveInProgress, setSaveInProgress] = useState(false);
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

    errors.isFormValid = () =>
      formValue.termsAndConditions &&
      errors.isFirstNameValid &&
      errors.isLastNameValid;

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
            alert(
              'Failed to upload image. Please proceed with the rest of the form if issue continouse'
            );
          }
        } catch (error) {
          alert(
            'Error uploading image. Please proceed with the rest of the form if issue continouse'
          );
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

  function onCountryChange(e) {
    setPerson({ ...person, country: e });
  }

  function onRoleChange(e) {
    setPerson({ ...person, role: e.target.value });
  }

  // function onLinkedInPortfolioChange(e) {
  //   setPerson({ ...person, linkedInPortfolio: e.target.value });
  // }

  // function onWebsitePortfolioChange(e) {
  //   setPerson({ ...person, websitePortfolio: e.target.value });
  // }

  function onTermsAndConditionChange(e) {
    setPerson({ ...person, termsAndConditions: !person.termsAndConditions });
  }

  function onJoinNewsLetterChange() {}

  const onContinueClick = (e) => {
    const profileId = userData?.profile?.id;
    const userId = userData?.profile?.user?.id;

    if (profileId && userId) {
      const profileRequestBody = {
        data: {
          displayName: `${person.firstName} ${person.lastName}`,
          profilePictureUrl: uploadedProfilePicture || profilePicture,
        },
      };
      setSaveInProgress(true);

      agent.Profiles.put(profileId, profileRequestBody)
        .then(() => {
          const userRequestBody = {
            hasAcceptedTermsOfService: true,
          };

          axios
            .put(
              `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${userId}/`,
              userRequestBody,
              { withCredentials: true }
            )
            .then(() => {
              router
                .push({
                  pathname: '/users/me',
                })
                .then(() => {
                  setSaveInProgress(false);
                });
            })
            .catch((error) => {
              setSaveInProgress(false);
              console.log('Error Updating User Data: ', error);
            });
        })
        .catch((error) => {
          console.log('Error Updating Profile Data: ', error);
          setSaveInProgress(false);
        });
    } else {
      console.log('Error profileId: ', profileId, ' Userid: ', userId);
    }
  };

  const onCancelClick = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="flex flex-col justify-center gap-8 bg-white">
      <div className="flex h-40 bg-grayscale-100 flex-shrink-0 items-center justify-center">
        <img src={Breadcrumb} />
      </div>
      <div className="flex flex-col justify-center gap-6 items-center">
        <div className="flex flex-col justify-center gap-8 items-center">
          <div className="flex flex-col justify-center gap-6 items-center">
            <p className="text-base text-black">PROFILE</p>
            <p className="text-3xl text-black">Let's Create Your Profile</p>
          </div>
          <p className="text-base text-grayscale-900">
            A completed profile will help us match you with opportunities
          </p>
          <div>
            {uploadedProfilePicture || userData?.profile?.profilePictureUrl ? (
              // <UploadedProfilePicture
              <img
                className="w-32 h-32 rounded-full"
                src={
                  uploadedProfilePicture || userData?.profile?.profilePictureUrl
                }
              />
            ) : (
              <img className="w-32 h-32 rounded-full" />
            )}
            <div className="relative right-[-10] bottom-5">
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
            </div>
          </div>
        </div>
        <form className="flex flex-col">
          <div className="flex flex-row">
            <p className="text-sm font-bold text-red-500">*</p>
            <p className="text-sm font-normal text-black">
              {' '}
              Indicates a required field
            </p>
          </div>
          <div name="myForm">
            <div className="flex flex-row">
              <label
                class="text-grayscale-900 text-base font-bold"
                for="First Name"
              >
                First Name
              </label>
              <p className="text-grayscale-900 text-base font-bold text-red-500">
                {' '}
                *
              </p>
            </div>
            <input
              class="flex border border-black rounded-lg w-full py-3 px-3 text-grayscale-500 text-sm font-light justify-center items-center"
              id="First Name"
              type="text"
              placeholder="John"
              error={formValidation.firstNameError}
              onChange="onFirstNameChange()"
              touched={
                person.firstNameTouched && !formValidation.isFirstNameValid
              }
              required
            ></input>
            <div className="flex flex-row">
              <label
                class="text-grayscale-900 text-base font-bold"
                for="Last Name"
              >
                Last Name
              </label>
              <p className="text-grayscale-900 text-base font-bold text-red-500">
                {' '}
                *
              </p>
            </div>
            <input
              class="flex border border-black rounded-lg w-full py-3 px-3 text-grayscale-500 text-sm font-light justify-center items-center"
              id="Last Name"
              type="text"
              placeholder="Doe"
              error={formValidation.lastNameError}
              onChange="onLastNameChange()"
              touched={
                person.lastNameTouched && !formValidation.isLastNameValid
              }
              required
            ></input>

            <DropDownMenu
              menuItems={countryData}
              menu={person.country}
              onChange={onCountryChange}
            />

            <label class="text-grayscale-900 text-base font-bold" for="Role">
              Role (optional)
            </label>
            <input
              class="flex border border-black rounded-lg w-full py-3 px-3 text-grayscale-500 text-sm font-light justify-center items-center"
              id="Role"
              type="text"
              placeholder="CSS Developer"
              onChange="onRoleChange()"
            ></input>

            {/* <InputField
              error=""
              label="linkedInPortfolio (optional)"
              onChange={onLinkedInPortfolioChange}
              placeholder="www.linkedin.com"
            />
            <InputField
              error=""
              label="websitePortfolio (optional)"
              onChange={onWebsitePortfolioChange}
              placeholder="www.portfolio.com"
            /> */}
          </div>
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
            <ButtonContainer className="flex pb-16">
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
                {saveInProgress ? (
                  <p className="flex items-center gap-3">
                    {' '}
                    <span> Saving </span>{' '}
                    <Loader borderColorClass="border-white" />{' '}
                  </p>
                ) : (
                  'Save and Continue'
                )}
              </Button>
            </ButtonContainer>
          </FormFooter>
        </form>
      </div>
    </div>
  );
}
