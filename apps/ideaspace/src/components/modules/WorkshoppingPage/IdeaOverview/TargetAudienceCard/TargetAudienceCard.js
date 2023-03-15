import {
  TargetAudienceList,
  Cardheading,
  StyledCard
} from './StyledComponents';

export const TargetAudieneCard = ({ targetAudience }) => {
  return (
    <StyledCard>
      <Cardheading>
        Target Audience
      </Cardheading>
      <TargetAudienceList>
        <h6>{targetAudience}</h6>
      </TargetAudienceList>
    </StyledCard>
  );
};
