import PhotoSetting from './Photo';
import BioSetting from './Bio';
import DetailsSetting from './Details';
import SkillsSetting from './Skills';
import InterestsSetting from './Interests';
import Loader from './../../../../common/Loader';
import agent from '@devlaunchers/utility/agent';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { editProfileDataContext } from '../../../../../context/EditProfileDataContext';
import { editProfileActions } from './../../../../../state/actions';
import { useState } from 'react';
import { atoms } from '@devlaunchers/components/components';

function SettingPage({ onClose }) {
  const { editProfileState, editProfileDispatch } = editProfileDataContext();
  const [discardChanges, SetDiscardChanges] = useState(0);

  const { userData, updateUserData } = useUserDataContext();

  const disableSave =
    !editProfileState.changes.bioChanged &&
    !editProfileState.changes.interestsChanged &&
    !editProfileState.changes.skillsChanged &&
    !editProfileState.changes.detailsChanged;

  const showSetting = () => {
    if (editProfileState.pages.showPhoto) {
      return <PhotoSetting />;
    } else if (editProfileState.pages.showBio) {
      return <BioSetting discardChanges={discardChanges} />;
    } else if (editProfileState.pages.showDetails) {
      return <DetailsSetting discardChanges={discardChanges} />;
    } else if (editProfileState.pages.showSkills) {
      return <SkillsSetting discardChanges={discardChanges} />;
    } else if (editProfileState.pages.showInterests) {
      return <InterestsSetting discardChanges={discardChanges} />;
    } else {
      return null;
    }
  };

  const onCancel = () => {
    onClose();
  };

  const onSave = async () => {
    const profileId = userData?.profile?.id;
    if (!profileId) return;

    const requestBody = { data: {} };

    // BIO
    if (editProfileState.changes.bioChanged) {
      requestBody.data.bio = editProfileState.bio;
    }

    //  PROFILE IMAGE
    if (editProfileState.profilePictureId !== undefined) {
      requestBody.data.profilePicture =
        editProfileState.profilePictureId ?? null;

      requestBody.data.profilePictureUrl =
        editProfileState.profilePictureUrl ?? '';
    }

    //  DETAILS
    if (editProfileState.changes.detailsChanged) {
      const userId = userData?.id;

      const fullName =
        `${editProfileState.firstName} ${editProfileState.lastName}`.trim();

      const socialMediaLinks = [
        { platform: 'instagram', url: editProfileState.instagram ?? '' },
        { platform: 'github', url: editProfileState.github ?? '' },
        { platform: 'linkedin', url: editProfileState.linkedin ?? '' },
      ].filter((x) => x.url && x.url.trim() !== '');

      await agent.User.put(userId, {
        name: fullName,
        socialMediaLinks,
      });
    }

    if (!editProfileState.saveInProgress) {
      editProfileDispatch({ type: editProfileActions.SAVE_CHANGES });

      agent.Profiles.put(profileId, requestBody)
        .then(async () => {
          // interests
          if (editProfileState.changes.interestsChanged) {
            const userId = userData?.id;
            const interestIds = (editProfileState.interests || []).map(
              (i) => i.id
            );

            await agent.User.put(userId, {
              interests: interestIds,
            });
          }

          // skills
          if (editProfileState.changes.skillsChanged) {
            const userId = userData?.id;
            const skillIds = (editProfileState.skills || []).map((s) => s.id);

            await agent.User.put(userId, {
              skills: skillIds,
            });
          }

          // update UI with saved image
          const cacheBustedImage = editProfileState.profilePictureUrl
            ? `${editProfileState.profilePictureUrl}${
                editProfileState.profilePictureUrl.includes('?') ? '&' : '?'
              }t=${Date.now()}`
            : '';

          updateUserData((prev) => ({
            ...prev,
            bio: editProfileState.bio,
            name: editProfileState.changes.detailsChanged
              ? `${editProfileState.firstName} ${editProfileState.lastName}`.trim()
              : prev.name,

            socialMediaLinks: editProfileState.changes.detailsChanged
              ? [
                  {
                    platform: 'instagram',
                    url: editProfileState.instagram ?? '',
                  },
                  {
                    platform: 'github',
                    url: editProfileState.github ?? '',
                  },
                  {
                    platform: 'linkedin',
                    url: editProfileState.linkedin ?? '',
                  },
                ].filter((x) => x.url && x.url.trim() !== '')
              : prev.socialMediaLinks,

            interests: editProfileState.changes.interestsChanged
              ? editProfileState.interests
              : prev.interests,

            skills: editProfileState.changes.skillsChanged
              ? editProfileState.skills
              : prev.skills,

            profile: {
              ...prev.profile,
              profilePicture:
                editProfileState.profilePicture != null
                  ? {
                      ...editProfileState.profilePicture,
                      url: cacheBustedImage,
                    }
                  : null,
              profilePictureUrl: cacheBustedImage,
            },
          }));

          editProfileDispatch({
            type: editProfileActions.SAVE_CHANGES_SUCCESS,
          });

          onClose();
        })
        .catch((error) => {
          editProfileDispatch({
            type: editProfileActions.SAVE_CHANGES_FAILED,
          });
          console.log('[Profile Update Error] — ', error);
        });
    }
  };

  return (
    <div className="flex flex-col w-full h-[652px]">
      <div className="w-full px-16 py-7 h-full">{showSetting()}</div>
      {editProfileState.showModalFooter ? (
        <div className="flex py-4 pr-14 gap-10 w-full justify-end items-center h-20 border-t-2 border-grayscale-200 bg-[#FCFCFC]">
          <div>
            <atoms.Button
              type="secondary"
              size="medium"
              color="cosmic"
              onClick={() => SetDiscardChanges((v) => v + 1)}
            >
              Discard Changes
            </atoms.Button>
          </div>
          <div>
            <atoms.Button
              type="primary"
              size="medium"
              color="neptune"
              onClick={onSave}
              disabled={disableSave}
            >
              {editProfileState.saveInProgress ? (
                <p className="flex items-center gap-3">
                  <span>Saving</span> <Loader borderColorClass="border-white" />{' '}
                </p>
              ) : (
                'Save Profile'
              )}
            </atoms.Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SettingPage;
