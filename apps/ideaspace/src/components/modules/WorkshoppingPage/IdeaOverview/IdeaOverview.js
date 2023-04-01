import { IdeaCard } from "./IdeaCard/IdeaCard";
import { DescriptionCard } from "./DescriptionCard/DescriptionCard";
import { IdeaOwnerCard } from "./IdeaOwnerCard/IdeaOwnerCard";
import { TagsCard } from "./TagsCard/TagsCard";
import { IdeaFeaturesCard } from "./IdeaFeaturesCard/IdeaFeaturesCard";
import { TargetAudieneCard } from "./TargetAudienceCard/TargetAudienceCard";
import IdeaSettingsCard from "./IdeaSettingsCard/IdeaSettingsCard";
import {
  Wrapper,
  TopView,
  BottomView,
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
        <BottomView>
          <DescriptionCard description={selectedCard.description}/>
        </BottomView> 
      </LeftWrapper> 

      <RightWrapper>
        <TopView>
          <IdeaOwnerCard IdeaOwnerName={selectedCard.author.username} ideaOwnerImage={selectedCard.id}/>
          <TagsCard />
        </TopView>
        <BottomView>
          <IdeaFeaturesCard ideaFeature={selectedCard.features}/>
          <TargetAudieneCard targetAudience={selectedCard.targetAudience}/>
        </BottomView>
        <IdeaSettingsCard card={selectedCard} />
      </RightWrapper>
    </Wrapper>
  );
};
