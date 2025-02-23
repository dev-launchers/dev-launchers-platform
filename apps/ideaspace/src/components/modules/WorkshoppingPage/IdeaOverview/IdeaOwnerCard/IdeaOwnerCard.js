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
  return (
    <>
      <div className="w-full max-w-[682px] h-[92px] p-5 bg-[linear-gradient(90deg,rgba(144,205,244,0.40)_0%,rgba(212,188,249,0.40)_97.96%)] rounded-[20px] border justify-center items-start gap-3 flex">
        <div className="w-[52px] h-[52px] flex-col justify-center items-start gap-1 inline-flex">
          <div className="w-[52px] h-[52px] justify-start items-center gap-3 inline-flex">
            <img
              className="w-[52px] h-[52px] rounded-full"
              src={profilePictureUrl}
            />
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
          <div className="self-stretch justify-between sm:justify-start gap-3 inline-flex">
            <div
              className="text-[#1c1c1c] text-lg font-bold font-['Nunito Sans']"
              style={{ lineHeight: '160%' }}
            >
              {IdeaOwnerName}
            </div>
            <div className="px-[6px] py-[2px] my-[2px] bg-white rounded-xl justify-center items-center gap-2.5 flex">
              <div className="text-[#494949] text-xs font-normal font-['Nunito Sans'] leading-[15px]">
                Idea Owner
              </div>
            </div>
          </div>
          <div className="self-stretch text-[#494949] text-base font-normal font-['Nunito Sans'] leading-relaxed">
            {IdeaOwnerEmail}
          </div>
        </div>
      </div>
    </>
  );
};
