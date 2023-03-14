import {
  StyledCard,
  LeftView,
  StyledName,
  RightView,
  StyledImage
} from "./StyledComponent";

export const IdeaOwnerCard = ({ IdeaOwnerName, id }) => {
  return (
    <StyledCard>
      <LeftView>
        <StyledName>
          {IdeaOwnerName}
        </StyledName>
        <h6>IDEA OWNER</h6>
      </LeftView>
      <RightView>
        <StyledImage alt="user_image" src={`https://picsum.photos/70?random=${id}`} />
      </RightView>
    </StyledCard>
  );
};
