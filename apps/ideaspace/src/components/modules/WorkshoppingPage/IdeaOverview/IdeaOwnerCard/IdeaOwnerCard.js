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
  const defaultEmail = 'Email is Missing';
  console.log(IdeaOwnerName);
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
          <StyledName length={IdeaOwnerName.length}>{IdeaOwnerName}</StyledName>
          <StyledEmail>
            {IdeaOwnerEmail ? IdeaOwnerEmail : defaultEmail}
          </StyledEmail>
        </div>
      </div>
    </>
  );
};
