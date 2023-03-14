import {
  IdeaFeatureList,
  Cardheading,
  StyledCard
} from './StyledComponents';

export const IdeaFeaturesCard = ({ ideaFeature }) => {
  return (
    <StyledCard>
      <Cardheading>
        <h3>Idea features</h3>
      </Cardheading>
      <IdeaFeatureList>
        {
          ideaFeature === '' ?  <h6>No Features mentioned yet!</h6> : <h6>{ideaFeature}</h6>
        }
      </IdeaFeatureList>
    </StyledCard>
  );
};
