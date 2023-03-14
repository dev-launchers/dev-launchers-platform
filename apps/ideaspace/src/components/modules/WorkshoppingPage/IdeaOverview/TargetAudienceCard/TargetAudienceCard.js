import {
  TargetAudienceList,
  Cardheading,
  StyledCard
} from './StyledComponents';

export const TargetAudieneCard = ({ targetAudience }) => {
  return (
    <StyledCard>
      <Cardheading>
        <h3>Target Audience</h3>
      </Cardheading>
      <TargetAudienceList>
        <h6>{targetAudience}</h6>
      </TargetAudienceList>
    </StyledCard>
  );
};
