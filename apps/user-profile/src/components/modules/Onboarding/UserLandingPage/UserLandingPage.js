import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import agent from '@devlaunchers/utility/agent';
import CameraIcon from './../../../../../src/images/camera-icon.svg';
import Button from '@devlaunchers/components/components/atoms/Button';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import UploadProfilePicture from './../../../common/Images/UploadProfilePicture';
import Breadcrumb from './../../../../images/Onboarding/breadcrumb-frame.png';
import Loader from './../../../common/Loader';
import { DropdownMenu } from './../../../../../../../packages/UI/src/components/DropdownMenu';
import countryData from './../../../../content/countryData.json';

const initialFormValue = {
  firstName: '',
  firstNameTouched: false,
  lastName: '',
  lastNameTouched: false,
  displayNameTouched: false,
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

    if (!formValue.displayNameTouched) {
      errors.displayNameError = 'Display name is required';
      errors.isDisplayNameValid = false;
    } else {
      errors.isDisplayNameValid = true;
    }

    errors.isFormValid = () =>
      formValue.termsAndConditions &&
      errors.isFirstNameValid &&
      errors.isLastNameValid &&
      errors.isDisplayNameValid;

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

  function onDisplayNameChange(e) {
    setPerson({
      ...person,
      displayName: e.target.value,
      displayNameTouched: true,
    });
  }

  function onCountryChange(e) {
    setPerson({ ...person, country: e });
  }

  function onRoleChange(e) {
    setPerson({ ...person, role: e.target.value });
  }

  function onTermsAndConditionChange(e) {
    setPerson({ ...person, termsAndConditions: !person.termsAndConditions });
  }

  function onJoinNewsLetterChange() {}

  const onContinueClick = (e) => {
    const userId = userData?.id;

    if (userId) {
      const profileRequestBody = {
        data: {
          user: userData?.id,
          displayName: `${person.displayName}`,
          profilePictureUrl: uploadedProfilePicture || profilePicture,
          hasAcceptedTermsOfService: true,
        },
      };
      setSaveInProgress(true);

      agent.Profiles.post(profileRequestBody)
        .then(() => {
          setSaveInProgress(false);

          router.push({
            pathname: '/users/me',
          });
        })
        .catch((error) => {
          console.log('Error Updating Profile Data: ', error);
          setSaveInProgress(false);
        });
    } else {
      console.log('Error Userid: ', userId);
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
              <img
                src={
                  uploadedProfilePicture || userData?.profile?.profilePictureUrl
                }
                className="h-30 w-30"
              />
            ) : (
              <UploadProfilePicture width={120} height={120} />
            )}
            <div className="relative right-[-10] bottom-5">
              <label id="file-upload" className="cursor-pointer">
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
              Indicates a required field
            </p>
          </div>
          <div name="myForm">
            {/* <div className="flex flex-row">
              <label
                class="text-grayscale-900 text-base font-bold"
                id="firstNameLabel"
              >
                First Name
              </label>
              <p
                aria-label="Required field"
                className="text-grayscale-900 text-base font-bold text-red-500"
              >
                *
              </p>
            </div>
            <input
              class="flex border border-black rounded-lg w-full py-3 px-3 text-grayscale-500 text-sm font-light justify-center items-center"
              id="firstName"
              type="text"
              placeholder="John"
              error={formValidation.firstNameError}
              onChange={onFirstNameChange}
              touched={
                person.firstNameTouched && !formValidation.isFirstNameValid
              }
              required
            ></input>
            <div className="flex flex-row">
              <label
                class="text-grayscale-900 text-base font-bold"
                id="lastNameLabel"
              >
                Last Name
              </label>
              <p
                aria-label="Required field"
                className="text-grayscale-900 text-base font-bold text-red-500"
              >
                *
              </p>
            </div>
            <input
              class="flex border border-black rounded-lg w-full py-3 px-3 text-grayscale-500 text-sm font-light justify-center items-center"
              id="lastName"
              type="text"
              placeholder="Doe"
              error={formValidation.lastNameError}
              onChange={onLastNameChange}
              touched={
                person.lastNameTouched && !formValidation.isLastNameValid
              }
              required
            ></input> */}

            <div className="flex flex-row">
              <label
                class="text-grayscale-900 text-base font-bold"
                id="displayNameLabel"
              >
                Display Name
              </label>
              <p
                aria-label="Required field"
                className="text-grayscale-900 text-base font-bold text-red-500"
              >
                *
              </p>
            </div>
            <input
              class="flex border border-black rounded-lg w-full py-3 px-3 text-grayscale-500 text-sm font-light justify-center items-center"
              id="lastName"
              type="text"
              placeholder="Doe"
              error={formValidation.displayNameError}
              onChange={onDisplayNameChange}
              touched={person.displayNameTouched}
              required
            ></input>

            <DropdownMenu
              menuItems={countryData}
              menu={person.country}
              onChange={onCountryChange}
            />

            {/* <label class="text-grayscale-900 text-base font-bold" id="Role">
              Role (optional)
            </label>
            <input
              class="flex border border-black rounded-lg w-full py-3 px-3 text-grayscale-500 text-sm font-light justify-center items-center"
              id="Role"
              type="text"
              placeholder="CSS Developer"
              onChange="onRoleChange()"
            ></input> */}
          </div>
          <div className="flex flex-col margin gap-32">
            <div className="flex flex-row">
              <div className="flex items-center">
                <input
                  id="agree-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-purple-700 accent-purple-700 bg-white border-purple-700 rounded"
                ></input>
                <label id="agree-checkbox" className="text-sm text-black">
                  I have read and agree to the{' '}
                  <a href="https://staging.devlaunchers.org/page/terms-and-conditions">
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <p className="text-base text-red-500"> *</p>
            </div>
            <div className="flex pb-16 gap-134 h-full">
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
                disabled={!formValidation.isFormValid() || saveInProgress}
              >
                {saveInProgress ? (
                  <p className="flex items-center gap-3">
                    <span> Saving </span>
                    <Loader borderColorClass="border-white" />
                  </p>
                ) : (
                  'Save and Continue'
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
