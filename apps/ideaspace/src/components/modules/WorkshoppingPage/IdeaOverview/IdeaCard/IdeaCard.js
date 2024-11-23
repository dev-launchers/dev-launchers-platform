import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import {
  StyledCard,
  TopView,
  LeftView,
  RightView,
  StyledDiv,
  IdeaName,
  IdeaTagLine,
  BottomView,
  Button,
  StyledText,
} from './StyledIdeaCard';
import UpvoteButton from '../../../../../components/common/Upvote/UpvoteButton';
import { useState, useEffect } from 'react';
import { useUserDataContext } from '@devlaunchers/components/src/context/UserDataContext.js';
import { agent } from '@devlaunchers/utility';
import { cleanDataList } from '../../../../../utils/StrapiHelper';
import wp from '../../../../../images/workshopI.jpeg';
import moreIcon from '../../../../../images/more-icon.svg';
import shareIcon from '../../../../../images/share-icon.svg';
import editIcon from '../../../../../images/pen-line.svg';
import archiveIcon from '../../../../../images/archive.svg';
import deleteIcon from '../../../../../images/trash-2.svg';

export const IdeaCard = ({ ideaImage, ideaId, ideaName, ideaTagLine }) => {
  const [upvoted, setUpvoted] = useState(false);
  const [count, setCount] = useState(0); // number of likes on this idea
  const [showVoteButton, setShowVoteButton] = useState(false);
  const { userData, isLoading, isAuthenticated } = useUserDataContext();
  const [shareOpen, setShareOpen] = useState(false);

  const toggleDropdown = () => setShareOpen(!shareOpen);

  useEffect(() => {
    if (!isLoading) loadDataOnlyOnce(); // query database
  }, [isLoading]);

  const loadDataOnlyOnce = async () => {
    // use get likes from agent
    const params = '?populate=deep&filters[objectId][$eq]=' + ideaId.toString();
    const data = cleanDataList(
      await agent.Likes.get(new URLSearchParams(params))
    );
    setCount(data.length);
    // check if user has already liked idea
    for (let i = 0; i < data.length; i++) {
      if (data[i].users_permissions_user.data?.id == userData.id) {
        setUpvoted(true);
      }
    }

    setShowVoteButton(true);
  };

  // a function to keep track of the number of upvotes and when the user clicks the upvote button for this idea
  async function handleUpvoteClick(event) {
    if (upvoted) {
      // if there's a like object corresponding to this user and idea, delete it
      const params =
        '?populate=deep&filters[objectId][$eq]=' +
        ideaId.toString() +
        '&filters[users_permissions_user][id][$eq]=' +
        userData.id.toString();
      const data = cleanDataList(
        await agent.Likes.get(new URLSearchParams(params))
      );
      try {
        await agent.Likes.delete(data[0].id);
        setUpvoted(false);
        setCount(count - 1);
      } catch (error) {
        //console.log('failed to delete vote', error);
      }

      event.preventDefault();

      try {
        props.setHandleTextChange('');
      } catch (error) {
        console.error(error);
      }
    } else {
      var likeData = {
        objectId: ideaId.toString(),
        objectType: 'IdeaCard',
        users_permissions_user: userData.id.toString(),
      };

      try {
        await agent.Likes.post(likeData);
        setUpvoted(true);
        setCount(count + 1);
      } catch (error) {
        console.error(error);
      }

      event.preventDefault();

      try {
        props.setHandleTextChange('');
      } catch (error) {
        console.error(error);
      }
    }
  }

  const upvoteButton =
    userData?.id > 0 ? (
      <UpvoteButton
        show={showVoteButton}
        disabled={!isAuthenticated}
        onclick={handleUpvoteClick}
        selected={upvoted}
        text={
          upvoted
            ? 'Upvoted | ' + count.toString()
            : 'Upvote | ' + count.toString()
        }
      />
    ) : (
      <UpvoteButton
        show={showVoteButton}
        disabled={true}
        selected={upvoted}
        text={
          upvoted
            ? 'Upvoted | ' + count.toString()
            : 'Upvote | ' + count.toString()
        }
      />
    );

  return (
    // <div>
    //   <TopView>
    //     <LeftView>
    //       {ideaImage ? <img src={ideaImage} /> : <StyledDiv></StyledDiv>}
    //     </LeftView>
    //     <RightView>
    //       <IdeaName>{ideaName}</IdeaName>
    //       <IdeaTagLine>{ideaTagLine}</IdeaTagLine>
    //     </RightView>
    //   </TopView>

    //   <BottomView>
    //     <Button>
    //       <BookmarkBorderOutlinedIcon />
    //       <StyledText>FOLLOW</StyledText>
    //     </Button>
    //     {upvoteButton}
    //     <Button onClick={handleUpvoteClick}>
    //       <StarBorderOutlinedIcon />
    //       <StyledText>UPVOTE</StyledText>
    //     </Button>
    //     <Button>
    //       <ShareOutlinedIcon />
    //       <StyledText>SHARE</StyledText>
    //     </Button>
    //   </BottomView>
    // </div>

    <>
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[36px]">
          <div className="flex flex-col gap-[6px]">
            <div className="text-[40px] font-bold tracking-[1.92px] text-black font-helvetica leading-[56px]">
              Idea Name
            </div>
            <div className="text-[20px] font-normal leading-[36px] tracking-[0px] text-black font-nunito">
              Idea Tagline
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="w-fit">{upvoteButton}</div>
            <div className="flex flex-row gap-[12px]">
              <button className="p-[12px]">
                <img src={shareIcon} alt="" />
              </button>
              <div className="relative inline-block">
                <button className="p-[12px]" onClick={toggleDropdown}>
                  <img src={moreIcon} alt="" />
                </button>

                {shareOpen && (
                  <div className="absolute z-50 bg-white border border-gray-200 shadow-lg mt-2 w-[150px] rounded-[22px] p-2 overflow-hidden">
                    {/* <button className="block w-full  text-left text-sm text-gray-700 hover:bg-gray-100">
                      <div className='flex flex-row gap-1 px-[18px] py-[12px] '>
                        <img src={editIcon} alt="" />
                        <div>Edit</div>
                      </div>
                    </button> */}
                    <button className="block w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100">
                      <div className="flex flex-row gap-1">
                        <img src={editIcon} alt="" />
                        <div className="text-[16px]">Edit</div>
                      </div>
                    </button>
                    <button className="block w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100">
                      <div className="flex flex-row gap-1">
                        <img src={archiveIcon} alt="" />
                        <div className="text-[16px]">Archive</div>
                      </div>
                    </button>
                    <button className="block w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100">
                      <div className="flex flex-row gap-1">
                        <img src={deleteIcon} alt="" />
                        <div className="text-[16px] leading-[24px]">Delete</div>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="wp-img h-[240px] bg-cover bg-center bg-no-repeat rounded-[16px]"
          style={{ backgroundImage: `url(${wp})` }}
        ></div>
      </div>
    </>
  );
};
