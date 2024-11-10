import { atoms } from '@devlaunchers/components/src/components';
import { IdeaCard } from './IdeaCard/IdeaCard';
import { IdeaOwnerCard } from './IdeaOwnerCard/IdeaOwnerCard';
import { TagsCard } from './TagsCard/TagsCard';
import IdeaContentCard from './IdeaContentCard/IdeaContentCard';
import IdeaSettingsCard from './IdeaSettingsCard/IdeaSettingsCard';
useState;
useEffect;
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
  if (selectedCard.ideaName === '') return null;

  const authorName =
    selectedCard.ideaOwner?.username !== undefined
      ? selectedCard.ideaOwner?.username
      : selectedCard.ideaOwner?.email;

  const [profilePictureUrl, setProfilePictureUrl] = useState(null);
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
        console.log(data.profile.profilePictureUrl);
        setProfilePictureUrl(data.profile?.profilePictureUrl);
      } catch (error) {
        console.error('Error fetching owner image:', error);
      }
    };
    fetchOwnerImage();
  }, [selectedCard.ideaOwner?.id]);
  return (
    <Wrapper>
      <LeftWrapper>
        <TopView>
          <IdeaCard
            ideaId={selectedCard.id}
            ideaName={selectedCard.ideaName}
            ideaTagLine={selectedCard.tagline}
          />
        </TopView>
        <IdeaContentCard
          title={'Description'}
          content={selectedCard.description}
        />
        <div className="flex flex-row gap-2">
          <div style={{ width: '100%', height: '100%' }}>
            <IdeaContentCard
              title={'Idea features'}
              content={selectedCard.features}
            />
          </div>
          <div style={{ width: '100%', height: '100%', minHeight: '100px' }}>
            <IdeaContentCard
              title={'Idea target Audience'}
              content={selectedCard.targetAudience}
            />
          </div>
        </div>
      </LeftWrapper>

      <RightWrapper>
        <TopView>
          <IdeaOwnerCard
            IdeaOwnerName={authorName}
            profilePictureUrl={profilePictureUrl}
            IdeaOwnerEmail={selectedCard.ideaOwner.email}
          />
        </TopView>

        {/* <IdeaSettingsCard card={selectedCard} /> */}
      </RightWrapper>
    </Wrapper>
  );
};
