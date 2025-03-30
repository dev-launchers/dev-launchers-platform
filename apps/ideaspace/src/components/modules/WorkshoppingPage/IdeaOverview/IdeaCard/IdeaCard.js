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
import EditComponent from '../../../../../components/common/IdeaForm/EditComponent';
import EditIdea from '../../../../../components/modules/EditIdea/EditIdea';
import EditSuccessAlert from '../../../../../components/common/SubmissionAlert/EditSuccessAlert';
import EditErrorAlert from '../../../../../components/common/SubmissionAlert/EditErrorAlert';

export const IdeaCard = ({
  ideaImage,
  ideaId,
  ideaName,
  ideaTagLine,
  fullIdea,
  onEditSuccess,
}) => {
  const [ideaData, setIdeaData] = useState(fullIdea);
  const [upvoted, setUpvoted] = useState(false);
  const [count, setCount] = useState(0); // number of likes on this idea
  const [showVoteButton, setShowVoteButton] = useState(false);
  const { userData, isLoading, isAuthenticated } = useUserDataContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEditSuccess, setShowEditSuccess] = useState(false);
  const [showEditError, setShowEditError] = useState(false);

  const isOwner =
    userData &&
    ideaData &&
    ideaData.ideaOwner &&
    Number(userData.id) === Number(ideaData.ideaOwner.id);

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
          upvoted ? (
            <>
              <span className="hidden sm:inline">Upvoted |</span>
              <span className="sm:hidden">|</span> {count.toString()}
            </>
          ) : (
            <>
              <span className="hidden sm:inline">Upvote |</span>
              <span className="sm:hidden">|</span> {count.toString()}
            </>
          )
        }
      />
    ) : (
      <UpvoteButton
        show={showVoteButton}
        disabled={true}
        selected={upvoted}
        text={
          upvoted ? (
            <>
              <span className="hidden sm:inline">Upvoted |</span>
              <span className="sm:hidden">|</span> {count.toString()}
            </>
          ) : (
            <>
              <span className="hidden sm:inline">Upvote |</span>
              <span className="sm:hidden">|</span> {count.toString()}
            </>
          )
        }
      />
    );

  // Update both local state and notify parent
  const handleEditSuccess = (updatedIdea) => {
    const newIdeaData = {
      ...ideaData,
      ...updatedIdea,
      ideaOwner: ideaData.ideaOwner,
      ideaTagLine: updatedIdea.tagline || ideaData.ideaTagLine,
      description: updatedIdea.description || ideaData.description,
      features: updatedIdea.features || ideaData.features,
      targetAudience: updatedIdea.targetAudience || ideaData.targetAudience,
    };

    setIdeaData(newIdeaData);
    if (onEditSuccess) {
      onEditSuccess(newIdeaData);
    }
    setIsModalOpen(false);
    setShowEditSuccess(true);
    setTimeout(() => {
      setShowEditSuccess(false);
    }, 4000);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <>
      <div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <div
                className="text-[24px] sm:text-[40px] font-bold tracking-tighter"
                style={{ lineHeight: '110%', fontFamily: 'Helvetica' }}
              >
                {ideaData.ideaName}
              </div>
              <div
                className="text-[16px] font-[400] sm:text-lg sm:font-normal"
                style={{ lineHeight: '28px' }}
              >
                {ideaData.tagline}
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div>{upvoteButton}</div>
              <div>
                {isOwner && (
                  <>
                    <button
                      className="h-12 bg-[#494949]/5 rounded-md px-[18px] py-3"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Edit Idea
                    </button>
                    <EditComponent
                      open={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                      // initialIdea={fullIdea}
                      initialIdea={ideaData}
                      onEditSuccess={handleEditSuccess}
                      onEditError={() => {
                        setIsModalOpen(false);
                        setShowEditError(true);
                        setTimeout(() => {
                          setShowEditError(false);
                        }, 4000);
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="w-full h-[256px] rounded-[20px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://placehold.co/680x304"
              alt="Idea Image"
            />
          </div>
        </div>
        {showEditSuccess && (
          <EditSuccessAlert onClose={() => setShowEditSuccess(false)} />
        )}
        {showEditError && (
          <EditErrorAlert onClose={() => setShowEditError(false)} />
        )}
      </div>
    </>
  );
};
