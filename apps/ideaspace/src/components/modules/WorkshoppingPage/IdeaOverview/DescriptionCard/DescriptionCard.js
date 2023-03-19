import {
  DescriptionList,
  Cardheading,
  StyledCard,
} from './StyledComponents';

export const DescriptionCard = ({ description }) => {
  return (
    <StyledCard>
      <Cardheading>
        Description
      </Cardheading>
      <DescriptionList>
        <h6>{description}</h6>
      </DescriptionList>
    </StyledCard>
  );
};
