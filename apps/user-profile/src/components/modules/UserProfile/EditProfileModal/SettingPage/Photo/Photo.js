import { useState } from 'react';
import agent from '@devlaunchers/utility/agent';
import { useUserDataContext } from '../../../../../../../../../packages/UI/src/context/UserDataContext';
import Button from '../../../../../../../../../packages/UI/src/components/atoms/Button';
import trashCan from '../../../../../../../src/images/icons/trash-can.svg';
import pencil from '../../../../../../../src/images/icons/pencil.svg';
import paper from '../../../../../../../src/images/icons/paper.svg';
import uparrow from '../../../../../../../src/images/icons/uparrow.svg';
import bottomlefttriangle from '../../../../../../../src/images/icons/bottomlefttriangle.svg';
import profilePictureImage from '../../../../../../images/profile-picture-upload.png';
import rectangle from '../../../../../../../src/images/icons/rect.svg';
import rectangleSmall from '../../../../../../../src/images/icons/rectSmall.svg';

export default function Photo() {
  const { userData, setUserData } = useUserDataContext();
  const [profilePicture, setProfilePicture] = useState(
    userData?.profile?.profilePictureUrl
  );
  const [uploadedProfilePicture, setUploadedProfilePicture] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setIsFileSelected(true);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      if (
        selectedFile.type === 'image/png' ||
        selectedFile.type === 'image/jpeg'
      ) {
        if (selectedFile.size <= 200 * 1024 * 1024) {
          setIsLoading(true);
          setIsChanging(true);
          const formData = new FormData();
          formData.append('files', selectedFile);
          formData.append('ref', 'api::profile.profile');
          formData.append('refId', userData?.profile?.id);
          formData.append('field', 'profilePicture');

          try {
            const response = await agent.requests.postForm('upload', formData);
            if (response && response.length > 0) {
              const newProfilePictureUrl = response[0].url;
              setUploadedProfilePicture(newProfilePictureUrl);

              const profileId = userData?.profile?.id;
              if (profileId) {
                const requestBody = {
                  data: {
                    profilePictureUrl: newProfilePictureUrl,
                  },
                };

                await agent.Profiles.put(profileId, requestBody);
                setUserData((prevData) => ({
                  ...prevData,
                  profile: {
                    ...prevData.profile,
                    profilePictureUrl: newProfilePictureUrl,
                  },
                }));
              }
            } else {
              alert('Failed to upload image.');
            }
          } catch (error) {
            console.error('Error uploading image:', error);
            alert('Error uploading image.');
          } finally {
            setIsLoading(false);
            setIsChanging(false);
            setIsFileSelected(true);
          }
        } else {
          alert('The file size must be less than 200MB.');
        }
      } else {
        alert('Please select a valid image file (PNG or JPEG).');
      }
    } else {
      alert('Please select a file to upload.');
    }
  };

  const handleRemove = async () => {
    const profileId = userData?.profile?.id;

    if (profileId) {
      const requestBody = {
        data: {
          profilePictureUrl: '',
          profilePicture: null,
        },
      };

      setIsLoading(true);
      setIsRemoving(true);

      try {
        await agent.Profiles.put(profileId, requestBody);
        setUserData((prevData) => ({
          ...prevData,
          profile: {
            ...prevData.profile,
            profilePictureUrl: '',
            profilePicture: null,
          },
        }));
        setProfilePicture('');
        setUploadedProfilePicture(null);
      } catch (error) {
        console.error('Error removing profile picture:', error);
      } finally {
        setIsLoading(false);
        setIsRemoving(false);
        setIsFileSelected(false);
      }
    }
  };

  const handleChangeClick = () => {
    setShowDropdown(true);
  };

  const handleCancelClick = () => {
    setShowDropdown(false);
    setIsFileSelected(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      setIsFileSelected(true);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <>
      {showDropdown ? (
        <div
          className="w-[636px] h-[719px] bg-gray-50 flex-col justify-start items-start gap-10 inline-flex"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="self-stretch flex-col justify-start items-start gap-4 inline-flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="text-center text-black text-2xl font-semibold font-['Nunito Sans']">
                Upload Photo
              </div>
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
            <div className="text-center text-black text-base font-normal font-['Nunito Sans'] capitalize leading-normal tracking-wide">
              PHOTO UPLOADER
            </div>
            <div
              className={`pl-32 pr-32 pt-16 pb-20 rounded-lg border-4 border-spacing-8 border-dashed justify-center items-center inline-flex ${
                isFileSelected ? 'bg-gray-800' : 'bg-gray-200'
              }`}
            >
              <div className="self-stretch justify-start items-end gap-10 inline-flex">
                <div className="flex-col justify-start items-start gap-9 inline-flex">
                  <div className="w-52 text-gray-500 text-base font-normal font-['Nunito Sans'] leading-normal">
                    Drop your files here or select them using the button below
                  </div>
                  <Button
                    className="w-40 h-10 px-4 py-2 bg-white rounded-lg shadow justify-center items-center gap-2.5 inline-flex"
                    onClick={() =>
                      document.getElementById('file-input').click()
                    }
                  >
                    <div className="text-center text-black text-sm font-normal font-['Nunito Sans'] uppercase leading-normal tracking-wide">
                      choose files
                    </div>
                  </Button>
                  <input
                    id="file-input"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
                <div className="w-20 h-36 relative">
                  <img
                    src={bottomlefttriangle}
                    alt="Bottom Left Triangle"
                    className="absolute top-2 right-2 w-5 h-5 text-gray-700 stroke-1.352"
                  />
                  <div className="opacity-20 mix-blend-hard-light w-20 h-28 left-0 top-0 absolute">
                    <img
                      src={paper}
                      alt="Paper"
                      className="w-21 h-28 flex-shrink-0 text-gray-200 stroke-current text-gray-700 stroke-1.352"
                    />
                    <div className="w-20 h-8 left-0 top-11 absolute flex-col justify-center items-center gap-1 inline-flex">
                      <img src={rectangle} />
                      <img src={rectangle} />
                      <img src={rectangleSmall} />
                    </div>
                  </div>
                  <div className="w-14 h-14 left-3 top-21 absolute">
                    <img
                      src={uparrow}
                      alt="Up Arrow"
                      className="w-full h-full flex-shrink-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute top-[743px] w-64 flex justify-end items-center gap-6 h-20 border-t-2 border-gray-200 bg-gray-100 px-4"
            style={{
              left: '567px',
              borderTopLeftRadius: '0px',
              borderBottomLeftRadius: '0px',
              borderTopRightRadius: '0px',
              borderBottomRightRadius: '16px',
            }}
          >
            <Button
              onClick={handleCancelClick}
              buttonType="alternative"
              buttonSize="standard"
            >
              Cancel
            </Button>
            <Button
              onClick={async () => {
                await handleUpload();
                setShowDropdown(false);
              }}
              buttonType="primary"
              buttonSize="standard"
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-[636px] h-[719px] relative">
          <div className="absolute left-36 top-44 flex flex-col justify-start items-center gap-6">
            <div className="flex justify-start items-start gap-4">
              <img
                className="w-52 h-52 rounded-full"
                src={
                  uploadedProfilePicture ||
                  profilePicture ||
                  profilePictureImage
                }
                alt="Profile"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-20">
              <div className="flex justify-start items-start gap-4">
                <button
                  onClick={handleRemove}
                  className="w-32 px-4 py-2 bg-white rounded-lg shadow flex justify-center items-center gap-2"
                  disabled={isLoading}
                >
                  <img src={trashCan} alt="Trash can" className="w-6 h-6" />
                  <div className="text-black text-base font-normal font-['Nunito Sans'] capitalize leading-normal tracking-wide">
                    {isLoading && isRemoving ? 'Removing...' : 'Remove'}
                  </div>
                </button>
                <button
                  onClick={handleChangeClick}
                  className="w-32 px-4 py-2 bg-gray-100 rounded-lg shadow flex justify-center items-center gap-2"
                  disabled={isLoading}
                >
                  <img src={pencil} alt="Pencil" className="w-6 h-6" />
                  <div className="text-gray-900 text-base font-normal font-['Nunito Sans'] capitalize leading-normal tracking-wide">
                    {isLoading && isChanging ? 'Changing...' : 'Change'}
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-1.5 top-2.5 flex flex-col justify-start items-start gap-6">
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="text-center text-black text-2xl font-semibold font-['Nunito Sans']">
                Change your profile picture
              </div>
            </div>
            <div className="w-[577px] text-black text-sm font-normal font-['Nunito Sans'] leading-tight">
              Personalize your account with a photo. Your profile photo will
              appear on the Dev Launchers website.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
