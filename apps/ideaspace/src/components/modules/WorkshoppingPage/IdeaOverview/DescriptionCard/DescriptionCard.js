import {
  DescriptionList,
  Cardheading,
  StyledCard,
} from './StyledComponents';

export const DescriptionCard = ({ description }) => {
  return (
    <StyledCard>
      <Cardheading>
        <h3>Description</h3>
      </Cardheading>
      <DescriptionList>
        {description}
      </DescriptionList>
    </StyledCard>
  );
};
