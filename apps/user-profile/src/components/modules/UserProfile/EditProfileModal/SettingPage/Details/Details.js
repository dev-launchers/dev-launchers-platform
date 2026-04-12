import { atoms } from '@devlaunchers/components/components';
import InputField from '../../../../../common/Forms/Input/InputField';
import ProfileImage from '../../../../../common/ProfileImage';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { editProfileActions } from '../../../.././../../state/actions';
import { editProfileDataContext } from '../../../../../../context/EditProfileDataContext';
import trashCan from '../../../../../../../src/images/icons/trash-can.svg';
import pencil from '../../../../../../../src/images/icons/pencil.svg';
import { useState, useRef, useEffect } from 'react';
import agent from '@devlaunchers/utility/agent';

function Details({ discardChanges }) {
  const { userData } = useUserDataContext();
  const { editProfileDispatch } = editProfileDataContext();
  const fileInputRef = useRef(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const fullName = userData?.name ?? '';
  const nameParts = fullName.trim().split(/\s+/).filter(Boolean);
  const originalFirstName = nameParts[0] ?? '';
  const originalLastName = nameParts.slice(1).join(' ') ?? '';

  const getSocialLink = (platform) =>
    userData?.socialMediaLinks?.find((l) => l.platform === platform)?.url ?? '';

  const originalInstagram = getSocialLink('instagram');
  const originalGithub = getSocialLink('github');
  const originalLinkedIn = getSocialLink('linkedin');

  const originalProfilePicture = userData?.profile?.profilePicture ?? null;
  const originalProfilePictureUrl =
    userData?.profile?.profilePicture?.url ||
    userData?.profile?.profilePictureUrl ||
    '';

  const [firstName, setFirstName] = useState(originalFirstName);
  const [lastName, setLastName] = useState(originalLastName);
  const [instagram, setInstagram] = useState(originalInstagram);
  const [github, setGithub] = useState(originalGithub);
  const [linkedIn, setLinkedin] = useState(originalLinkedIn);

  const [tempProfilePicture, setTempProfilePicture] = useState(
    originalProfilePicture
  );
  const [tempProfilePictureUrl, setTempProfilePictureUrl] = useState(
    originalProfilePictureUrl
  );

  useEffect(() => {
    setFirstName(originalFirstName);
    setLastName(originalLastName);
    setInstagram(originalInstagram);
    setGithub(originalGithub);
    setLinkedin(originalLinkedIn);
    setTempProfilePicture(originalProfilePicture);
    setTempProfilePictureUrl(originalProfilePictureUrl);
  }, [
    originalFirstName,
    originalLastName,
    originalInstagram,
    originalGithub,
    originalLinkedIn,
    originalProfilePicture,
    originalProfilePictureUrl,
  ]);

  useEffect(() => {
    if (!discardChanges) return;

    setFirstName(originalFirstName);
    setLastName(originalLastName);
    setInstagram(originalInstagram);
    setGithub(originalGithub);
    setLinkedin(originalLinkedIn);
    setTempProfilePicture(originalProfilePicture);
    setTempProfilePictureUrl(originalProfilePictureUrl);

    editProfileDispatch({
      type: editProfileActions.UPDATE_DETAILS,
      payload: {
        firstName: originalFirstName,
        lastName: originalLastName,
        instagram: originalInstagram,
        github: originalGithub,
        linkedin: originalLinkedIn,
        profilePicture: originalProfilePicture,
        profilePictureId: originalProfilePicture?.id ?? null,
        profilePictureUrl: originalProfilePictureUrl,
      },
    });
  }, [
    discardChanges,
    originalFirstName,
    originalLastName,
    originalInstagram,
    originalGithub,
    originalLinkedIn,
    originalProfilePicture,
    originalProfilePictureUrl,
    editProfileDispatch,
  ]);

  const onFieldChange = (key, setter) => (e) => {
    const value = e.target.value;
    setter(value);

    editProfileDispatch({
      type: editProfileActions.UPDATE_DETAILS,
      payload: { [key]: value },
    });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await handleUpload(file);
    event.target.value = '';
  };

  const handleUpload = async (file) => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
      alert('Please select a valid image file (PNG or JPEG).');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('The file size must be less than 5MB.');
      return;
    }

    const profileId = userData?.profile?.id;
    if (!profileId) {
      alert('Unable to upload profile photo. Missing profile data.');
      return;
    }

    setIsProcessing(true);

    try {
      const formData = new FormData();
      formData.append('files', file);
      formData.append('ref', 'api::profile.profile');
      formData.append('refId', profileId);
      formData.append('field', 'profilePicture');

      const response = await agent.requests.postForm('upload', formData);

      const uploadedItem = Array.isArray(response)
        ? response[0]
        : Array.isArray(response?.data)
        ? response.data[0]
        : null;

      if (!uploadedItem?.id) {
        throw new Error(
          `Upload failed: unexpected response ${JSON.stringify(response)}`
        );
      }

      const rawImageUrl =
        uploadedItem?.url || uploadedItem?.attributes?.url || '';

      const previewImageUrl = rawImageUrl
        ? `${rawImageUrl}${
            rawImageUrl.includes('?') ? '&' : '?'
          }t=${Date.now()}`
        : '';

      setTempProfilePicture({
        ...uploadedItem,
        url: previewImageUrl,
      });
      setTempProfilePictureUrl(previewImageUrl);

      editProfileDispatch({
        type: editProfileActions.UPDATE_DETAILS,
        payload: {
          profilePicture: uploadedItem,
          profilePictureId: uploadedItem.id,
          profilePictureUrl: rawImageUrl,
        },
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      alert(error?.message || 'Error uploading image.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRemove = () => {
    setTempProfilePicture(null);
    setTempProfilePictureUrl('');

    editProfileDispatch({
      type: editProfileActions.UPDATE_DETAILS,
      payload: {
        profilePicture: null,
        profilePictureId: null,
        profilePictureUrl: '',
      },
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleChangeClick = () => {
    fileInputRef.current?.click();
  };

  const profileImageUrl =
    tempProfilePicture?.url || tempProfilePictureUrl || '';

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
          <div className="w-30 h-30 rounded-full border-4 border-white shadow overflow-hidden">
            <ProfileImage imgSrc={profileImageUrl} />
          </div>

          <div className="flex gap-4">
            <button
              className="w-12 h-12 flex items-center justify-center bg-white border border-grayscale-200 rounded-lg shadow hover:bg-grayscale-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              type="button"
              onClick={handleRemove}
              disabled={isProcessing}
            >
              <img src={trashCan} alt="Trash Icon" className="w-6 h-6" />
            </button>

            <button
              className="w-12 h-12 flex items-center justify-center bg-white border border-grayscale-200 rounded-lg shadow hover:bg-grayscale-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              type="button"
              onClick={handleChangeClick}
              disabled={isProcessing}
            >
              <img src={pencil} alt="Pencil Icon" className="w-6 h-6" />
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              onChange={handleFileChange}
              className="hidden"
            />
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
