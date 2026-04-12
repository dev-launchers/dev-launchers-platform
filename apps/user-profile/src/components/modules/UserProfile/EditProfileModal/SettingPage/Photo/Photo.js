import { useState, useEffect } from 'react';
import agent from '@devlaunchers/utility/agent';
import { useUserDataContext } from '../../../../../../../../../packages/UI/src/context/UserDataContext';
import { editProfileDataContext } from '../../../../../../context/EditProfileDataContext';
import { editProfileActions } from '../../../../../../state/actions';
import Button from '../../../../../../../../../packages/UI/src/components/atoms/Button';

import trashCan from '../../../../../../../src/images/icons/trash-can.svg';
import pencil from '../../../../../../../src/images/icons/pencil.svg';
import profilePictureImage from '../../../../../../images/profile-picture-upload.png';

export default function Photo({ discardChanges }) {
  const { userData } = useUserDataContext();
  const { editProfileDispatch } = editProfileDataContext();

  const originalProfilePicture = userData?.profile?.profilePicture ?? null;
  const originalProfilePictureUrl =
    userData?.profile?.profilePicture?.url ||
    userData?.profile?.profilePictureUrl ||
    '';

  const [profilePicture, setProfilePicture] = useState(
    originalProfilePictureUrl
  );
  const [selectedFile, setSelectedFile] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setProfilePicture(originalProfilePictureUrl);
    setSelectedFile(null);
  }, [originalProfilePictureUrl]);

  useEffect(() => {
    if (!discardChanges) return;

    setProfilePicture(originalProfilePictureUrl);
    setSelectedFile(null);
    setShowDropdown(false);

    editProfileDispatch({
      type: editProfileActions.UPDATE_DETAILS,
      payload: {
        profilePicture: originalProfilePicture,
        profilePictureId: originalProfilePicture?.id ?? null,
        profilePictureUrl: originalProfilePictureUrl,
      },
    });
  }, [
    discardChanges,
    originalProfilePicture,
    originalProfilePictureUrl,
    editProfileDispatch,
  ]);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }

    if (
      selectedFile.type !== 'image/png' &&
      selectedFile.type !== 'image/jpeg' &&
      selectedFile.type !== 'image/jpg'
    ) {
      alert('Only PNG/JPEG allowed');
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      alert('The file size must be less than 5MB.');
      return;
    }

    if (!userData?.profile?.id) {
      alert('Missing profile id.');
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('files', selectedFile);
      formData.append('ref', 'api::profile.profile');
      formData.append('refId', userData.profile.id);
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

      const rawUrl = uploadedItem?.url || uploadedItem?.attributes?.url || '';

      const previewUrl = rawUrl
        ? `${rawUrl}${rawUrl.includes('?') ? '&' : '?'}t=${Date.now()}`
        : '';

      // preview only in edit page
      setProfilePicture(previewUrl);
      setSelectedFile(null);
      setShowDropdown(false);

      // store in edit state only
      editProfileDispatch({
        type: editProfileActions.UPDATE_DETAILS,
        payload: {
          profilePicture: uploadedItem,
          profilePictureId: uploadedItem.id,
          profilePictureUrl: rawUrl,
        },
      });
    } catch (error) {
      console.error(error);
      alert(error?.message || 'Upload failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemove = () => {
    setProfilePicture('');
    setSelectedFile(null);

    editProfileDispatch({
      type: editProfileActions.UPDATE_DETAILS,
      payload: {
        profilePicture: null,
        profilePictureId: null,
        profilePictureUrl: '',
      },
    });
  };

  return (
    <>
      {showDropdown ? (
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Upload Photo</h2>

          <input
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={handleFileChange}
          />

          <div className="mt-4 flex gap-3">
            <Button onClick={handleUpload} disabled={isLoading}>
              {isLoading ? 'Uploading...' : 'Upload'}
            </Button>

            <Button
              buttonType="alternative"
              onClick={() => {
                setShowDropdown(false);
                setSelectedFile(null);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">
            Change your profile picture
          </h2>

          <img
            className="w-40 h-40 rounded-full mx-auto object-cover"
            src={profilePicture || profilePictureImage}
            alt="Profile"
          />

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handleRemove}
              disabled={isLoading}
              className="px-4 py-2 bg-white shadow rounded flex items-center gap-2"
            >
              <img src={trashCan} alt="" className="w-5 h-5" />
              Remove
            </button>

            <button
              onClick={() => setShowDropdown(true)}
              className="px-4 py-2 bg-gray-200 shadow rounded flex items-center gap-2"
            >
              <img src={pencil} alt="" className="w-5 h-5" />
              Change
            </button>
          </div>
        </div>
      )}
    </>
  );
}
