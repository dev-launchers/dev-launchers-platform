import {
  StyledCard,
  LeftView,
  StyledName,
  RightView,
  StyledImage,
  IdeaOwnerTag,
  StyledEmail,
} from './StyledComponent';

export const IdeaOwnerCard = ({
  IdeaOwnerName,
  profilePictureUrl,
  IdeaOwnerEmail,
}) => {
  return (
    <>
      <div
        className="flex flex-col border-2 border-[#F0EDEE] rounded-xl "
        style={{
          gap: '14px',
          padding: '20px',
          width: '272px',
          background: '#FFF',
        }}
      >
        <div className="self-start">
          <StyledImage alt="user_image" src={profilePictureUrl} />
        </div>
        <div>
          <IdeaOwnerTag>Idea owner</IdeaOwnerTag>
          <StyledName>{IdeaOwnerName}</StyledName>
          <StyledEmail>{IdeaOwnerEmail}</StyledEmail>
        </div>
      </div>
    </>
  );
};
