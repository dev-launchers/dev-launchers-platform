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
} from './StyledComponents';

export const IdeaOverview = ({ selectedCard }) => {
  if (selectedCard.ideaName === '') return null;

  const authorName =
    selectedCard.ideaOwner?.username !== undefined
      ? selectedCard.ideaOwner?.username
      : selectedCard.ideaOwner?.email;

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
      </LeftWrapper>

      <RightWrapper>
        <TopView>
          <IdeaOwnerCard
            IdeaOwnerName={authorName}
            ideaOwnerImage={selectedCard.id}
          />
        </TopView>
        <IdeaContentCard
          title={'Idea features'}
          content={selectedCard.features}
        />
        <IdeaContentCard
          title={'Idea target Audience'}
          content={selectedCard.targetAudience}
        />
        {/* <IdeaSettingsCard card={selectedCard} /> */}
      </RightWrapper>
    </Wrapper>
  );
};
