import { atoms } from '@devlaunchers/components/src/components';
import { IdeaCard } from './IdeaCard/IdeaCard';
import { IdeaOwnerCard } from './IdeaOwnerCard/IdeaOwnerCard';
import { TagsCard } from './TagsCard/TagsCard';
import IdeaContentCard from './IdeaContentCard/IdeaContentCard';
import IdeaSettingsCard from './IdeaSettingsCard/IdeaSettingsCard';
import {
  Wrapper,
  TopView,
  RightWrapper,
  LeftWrapper,
  LeftSubWrapper,
} from './StyledComponents';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const IdeaOverview = ({ selectedCard }) => {
  const [ideaData, setIdeaData] = useState(selectedCard);

  useEffect(() => {
    setIdeaData(selectedCard);
  }, [selectedCard]);

  const authorName =
    selectedCard.ideaOwner?.username !== undefined
      ? selectedCard.ideaOwner?.username
      : selectedCard.ideaOwner?.email;

  const [profilePictureUrl, setProfilePictureUrl] = useState(null);
  const [ownerDisplayName, setOwnerDisplayName] = useState('');
  const [ownerUserName, setOwnerUserName] = useState('');

  useEffect(() => {
    const fetchOwnerImage = async () => {
      try {
        const ideaOwnerId = selectedCard.ideaOwner?.id;
        if (!ideaOwnerId) return;
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${ideaOwnerId}?` +
            new URLSearchParams({
              'populate[profile]': 'profilePictureUrl',
            }).toString(),
          { withCredentials: true }
        );
        setProfilePictureUrl(data.profile?.profilePictureUrl);
        setOwnerDisplayName(data.profile.displayName);
        setOwnerUserName('@' + data.username);
      } catch (error) {
        console.error('Error fetching owner image:', error);
      }
    };
    fetchOwnerImage();
  }, [selectedCard.ideaOwner?.id]);

  // This callback updates the idea data from an edit.
  const handleIdeaUpdate = (updatedIdea) => {
    setIdeaData((prev) => ({
      ...prev,
      ...updatedIdea,
      ideaTagLine: updatedIdea.tagline || prev.ideaTagLine,
      description: updatedIdea.description || prev.description,
      features: updatedIdea.features || prev.features,
      targetAudience: updatedIdea.targetAudience || prev.targetAudience,
    }));
  };

  // Now, after all hooks have been called, conditionally render if there's no idea name.
  if (!ideaData.ideaName) return null;

  return (
    <div className="flex flex-col gap-6 w-full mb-10">
      <div className=" flex flex-col gap-7 sm:gap-11">
        <IdeaOwnerCard
          IdeaOwnerName={ownerDisplayName}
          IdeaOwnerEmail={ownerUserName}
          profilePictureUrl={profilePictureUrl}
        />
        <IdeaCard
          ideaImage={ideaData.ideaImage}
          ideaId={ideaData.id}
          ideaName={ideaData.ideaName}
          ideaTagLine={ideaData.ideaTagLine}
          fullIdea={ideaData}
          onEditSuccess={handleIdeaUpdate}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div
            className="text-black sm:text-[22.28px] text-[20px] font-bold font-['Helvetica']"
            style={{ lineHeight: '160%' }}
          >
            Idea Description
          </div>

          <div
            className="text-[#1c1c1c] sm:text-[17px] text-[15.5px] font-normal font-['Nunito Sans'] text-left"
            style={{ lineHeight: '160%' }}
          >
            {ideaData.description}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div
            className="text-black sm:text-[22.28px] text-[20px] font-bold font-['Helvetica']"
            style={{ lineHeight: '160%' }}
          >
            Features
          </div>
          <div
            className="text-[#1c1c1c] sm:text-[17px] text-[15.5px] font-normal font-['Nunito Sans'] text-left"
            style={{ lineHeight: '160%' }}
          >
            {ideaData.features}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div
            className="text-black sm:text-[22.28px] text-[20px] font-bold font-['Helvetica']"
            style={{ lineHeight: '160%' }}
          >
            Target Audience
          </div>
          <div
            className="text-[#1c1c1c] sm:text-[17px] text-[15.5px] font-normal font-['Nunito Sans'] text-left"
            style={{ lineHeight: '160%' }}
          >
            {ideaData.targetAudience}
          </div>
        </div>
      </div>
    </div>
  );
};
