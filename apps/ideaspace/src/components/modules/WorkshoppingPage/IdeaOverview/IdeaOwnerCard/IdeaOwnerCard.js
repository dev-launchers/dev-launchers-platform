import {
  StyledCard,
  LeftView,
  StyledName,
  RightView,
  StyledImage,
} from './StyledComponent';

export const IdeaOwnerCard = ({ IdeaOwnerName, profilePictureUrl }) => {
  return (
    <StyledCard>
      <LeftView>
        <StyledName>{IdeaOwnerName}</StyledName>
        <h6>IDEA OWNER</h6>
      </LeftView>
      <RightView>
        <StyledImage alt="user_image" src={profilePictureUrl} />
      </RightView>
    </StyledCard>
  );
};
