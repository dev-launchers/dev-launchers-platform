import { atoms } from '@devlaunchers/components/components';
import InputField from '../../../../../common/Forms/Input/InputField';
import ProfileImage from '../../../../../common/ProfileImage';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { editProfileActions } from '../../../.././../../state/actions';
import { editProfileDataContext } from '../../../../../../context/EditProfileDataContext';
import trashCan from '../../../../../../../src/images/icons/trash-can.svg';
import pencil from '../../../../../../../src/images/icons/pencil.svg';
import { useState, useEffect } from 'react';

function Details({ discardChanges }) {
  const { userData } = useUserDataContext();
  const { editProfileDispatch } = editProfileDataContext();

  const originalFirstName = userData?.profile?.firstName ?? '';
  const originalLastName = userData?.profile?.lastName ?? '';
  const originalInstagram = userData?.profile?.instagram ?? '';
  const originalGithub = userData?.profile?.github ?? '';
  const originalLinkedIn = userData?.profile?.linkedin ?? '';

  const [firstName, setFirstName] = useState(originalFirstName);
  const [lastName, setLastName] = useState(originalLastName);
  const [instagram, setInstagram] = useState(originalInstagram);
  const [github, setGithub] = useState(originalGithub);
  const [linkedIn, setLinkedin] = useState(originalLinkedIn);

  // initialize when userData loads/changes
  useEffect(() => {
    setFirstName(originalFirstName);
    setLastName(originalLastName);
    setInstagram(originalInstagram);
    setGithub(originalGithub);
    setLinkedin(originalLinkedIn);
  }, [
    originalFirstName,
    originalLastName,
    originalInstagram,
    originalGithub,
    originalLinkedIn,
  ]);

  // discard changes
  useEffect(() => {
    if (!discardChanges) return;

    setFirstName('');
    setLastName('');
    setInstagram('');
    setGithub('');
    setLinkedin('');

    editProfileDispatch({
      type: editProfileActions.UPDATE_DETAILS,
      payload: {
        firstName: '',
        lastName: '',
        instagram: '',
        github: '',
        linkedin: '',
      },
    });
  }, [discardChanges, editProfileDispatch]);

  const onFieldChange = (key, setter) => (e) => {
    const value = e.target.value;
    setter(value);

    editProfileDispatch({
      type: editProfileActions.UPDATE_DETAILS,
      payload: { [key]: value },
    });
  };

  return (
    <div className="h-full flex flex-col gap-5 overflow-hidden flex-1 bg-white p-6 rounded-xl shadow-sm border border-grayscale-200">
      <div className="shrink-0">
        <atoms.Typography as="h2" textWeight="bold">
          Details
        </atoms.Typography>
        <atoms.Typography as="h3" className="text-grayscale-600">
          Update your profile details below.
        </atoms.Typography>
      </div>

      <div className="flex flex-1 min-h-0 gap-10">
        <div className="flex flex-col items-start gap-8 shrink-0">
          <div className="w-28 h-30 rounded-full border-4 border-white shadow overflow-hidden">
            <ProfileImage imgSrc={userData?.profilePictureUrl} />
          </div>

          <div className="flex gap-4">
            <button className="w-12 h-12 flex items-center justify-center bg-white border border-grayscale-200 rounded-lg shadow hover:bg-grayscale-50 transition-all">
              <img src={trashCan} alt="Trash Icon" className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-white border border-grayscale-200 rounded-lg shadow hover:bg-grayscale-50 transition-all">
              <img src={pencil} alt="Pencil Icon" className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative flex-1 min-h-0">
          <div className="absolute inset-0 overflow-y-auto pr-4 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <atoms.Typography size="body_sm" textWeight="bold">
                First Name <span className="text-error-500">*</span>
              </atoms.Typography>
              <InputField
                field="FirstName"
                placeholder="John"
                className="w-full"
                value={firstName}
                onChange={onFieldChange('firstName', setFirstName)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <atoms.Typography size="body_sm" textWeight="bold">
                Last Name <span className="text-error-500">*</span>
              </atoms.Typography>
              <InputField
                field="LastName"
                placeholder="Doe"
                className="w-full"
                value={lastName}
                onChange={onFieldChange('lastName', setLastName)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <atoms.Typography size="body_sm" textWeight="bold">
                Instagram
              </atoms.Typography>
              <InputField
                field="Instagram"
                placeholder="@username"
                className="w-full"
                value={instagram}
                onChange={onFieldChange('instagram', setInstagram)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <atoms.Typography size="body_sm" textWeight="bold">
                GitHub
              </atoms.Typography>
              <InputField
                field="Github"
                placeholder="github.com/username"
                className="w-full"
                value={github}
                onChange={onFieldChange('github', setGithub)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <atoms.Typography size="body_sm" textWeight="bold">
                LinkedIn
              </atoms.Typography>
              <InputField
                field="Linkedin"
                placeholder="linkedin.com/in/username"
                className="w-full"
                value={linkedIn}
                onChange={onFieldChange('linkedin', setLinkedin)}
              />
            </div>

            <div className="min-h-[40px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
