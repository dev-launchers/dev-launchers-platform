import { useState } from 'react';
import agent from '@devlaunchers/utility/agent';
import { useUserDataContext } from '../../../../../../../../../packages/UI/src/context/UserDataContext';
import { editProfileDataContext } from '../../../../../../context/EditProfileDataContext';
import { editProfileActions } from '../../../../../../state/actions';
import Button from '../../../../../../../../../packages/UI/src/components/atoms/Button';

import trashCan from '../../../../../../../src/images/icons/trash-can.svg';
import pencil from '../../../../../../../src/images/icons/pencil.svg';
import profilePictureImage from '../../../../../../images/profile-picture-upload.png';

// NOTE: This component is not used in the active profile flow.

export default function Photo() {
  const { userData } = useUserDataContext();
  const { editProfileDispatch } = editProfileDataContext();

  const [selectedFile, setSelectedFile] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const profilePictureUrl = userData?.profile?.profilePicture?.url || '';

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

    if (!['image/png', 'image/jpeg', 'image/jpg'].includes(selectedFile.type)) {
      alert('Only PNG/JPEG allowed');
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      alert('File must be less than 5MB');
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
        : response?.data?.[0] ?? null;

      if (!uploadedItem?.id) {
        throw new Error('Upload failed');
      }

      const rawUrl = uploadedItem?.url || uploadedItem?.attributes?.url || '';

      editProfileDispatch({
        type: editProfileActions.UPDATE_PHOTO,
        payload: {
          profilePicture: uploadedItem,
          profilePictureId: uploadedItem.id,
          profilePictureUrl: rawUrl,
        },
      });
      setSelectedFile(null);
      setShowDropdown(false);
    } catch (error) {
      console.error(error);
      alert(error?.message || 'Upload failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemove = () => {
    editProfileDispatch({
      type: editProfileActions.UPDATE_PHOTO,
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
            src={profilePictureUrl || profilePictureImage}
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
