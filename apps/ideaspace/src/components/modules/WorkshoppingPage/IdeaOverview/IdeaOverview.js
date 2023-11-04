import { atoms } from '@devlaunchers/components/src/components';
import { IdeaCard } from "./IdeaCard/IdeaCard";
import { IdeaOwnerCard } from "./IdeaOwnerCard/IdeaOwnerCard";
import { TagsCard } from "./TagsCard/TagsCard";
import IdeaContentCard from "./IdeaContentCard/IdeaContentCard";
import IdeaSettingsCard from "./IdeaSettingsCard/IdeaSettingsCard";
import {
  Wrapper,
  TopView,
  RightWrapper,
  LeftWrapper,
} from './StyledComponents';

export const IdeaOverview = ({ selectedCard }) => {

  if (selectedCard.ideaName === "") return null;
  
  return (
    <Wrapper>
      <LeftWrapper>
        <TopView>
          <IdeaCard ideaName={selectedCard.ideaName} ideaTagLine={selectedCard.tagline} />
        </TopView>
        <IdeaContentCard title={"Description"} content={selectedCard.description}/>
      </LeftWrapper> 

      <RightWrapper>
        <TopView>
          <IdeaOwnerCard IdeaOwnerName={selectedCard.author?.username} ideaOwnerImage={selectedCard.id}/>
          <TagsCard status={selectedCard.difficultyLevel} />
        </TopView>
        <IdeaContentCard title={"Idea features"} content={selectedCard.features}/>
        <IdeaContentCard title={"Idea target Audience"} content={selectedCard.targetAudience}/>
        <IdeaSettingsCard card={selectedCard} />
      </RightWrapper>
    </Wrapper>
  );
};
