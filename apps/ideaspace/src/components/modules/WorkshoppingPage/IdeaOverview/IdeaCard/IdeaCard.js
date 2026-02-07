import { MoreHorizontal, Trash } from 'lucide-react';
import UpvoteButton from '../../../../../components/common/Upvote/UpvoteButton';
import { useState, useEffect } from 'react';
import { useUserDataContext } from '@devlaunchers/components/src/context/UserDataContext.js';
import { agent } from '@devlaunchers/utility';
import { cleanDataList } from '../../../../../utils/StrapiHelper';
import EditComponent from '../../../../../components/common/IdeaForm/EditComponent';
import Alert from '../../../../../components/common/SubmissionAlert/Alert';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@devlaunchers/components/src/components/atoms/Popover/index';
import DeleteConfirmationDialogBox from '../../../../../components/common/DialogBox/DeleteConfirmationDialogBox.js';
import { ImageBanner } from './ImageBanner';
import { ImagePreviewSVG } from '../../../../common/SVG/ImagePreview';
import { atoms } from '@devlaunchers/components/src/components';

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
  const [shouldShowDeleteDialog, setShouldShowDeleteDialog] = useState(false);
  const [showEditError, setShowEditError] = useState(false);
  const isOwner =
    userData &&
    ideaData &&
    ideaData.ideaOwner &&
    Number(userData.id) === Number(ideaData.ideaOwner.id);
  const [bannerImage] = useState(ideaImage || null);

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
  };

  const handleEditError = (error) => {
    console.error('Edit failed:', error);
    setIsModalOpen(false);
    setShowEditError(true);
  };

  //== Delete Idea
  const handleDeleteIdea = () => {
    // set sessionStorage to use in the dashboard page
    sessionStorage.setItem('showDeleteAlertSuccess', 'true');
    setShouldShowDeleteDialog(false);
    window.onbeforeunload = null; // Clear the beforeunload event
    window.location.href = '/users/me';
  };

  //== Update Idea Image
  const handleUpdateIdeaImage = async (imageId) => {
    // if the image id is the same as the current image id, don't update
    if (imageId === ideaImage?.id) {
      return;
    }
    const payload = {
      data: {
        ...ideaData,
        ideaImage: imageId,
      },
    };
    try {
      const response = await agent.Ideas.put(ideaId, payload);
    } catch (error) {
      console.error('Failed to update idea image:', error);
      setShowEditError(true);
    }
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
              <atoms.Typography
                as="h1"
                textWeight="bold"
                leading="tight"
                textAlign="left"
                size="xl4"
                style={{ color: 'var(--content-00, #FFF)' }}
              >
                {ideaData.ideaName}
              </atoms.Typography>
              <atoms.Typography
                as="p"
                size="body_base"
                leading="normal"
                style={{ color: 'var(--content-04, #DAD8D9)' }}
              >
                {ideaData.tagline}
              </atoms.Typography>
            </div>
            <div className="flex flex-row justify-between">
              <div>{upvoteButton}</div>
              <div>
                {isOwner && (
                  <div className="flex flex-row gap-2">
                    <button
                      className="h-12 bg-[#494949]/5 border-2 border-[#B9B9B9] rounded-md px-[18px] text-lg"
                      style={{ color: 'var(--priority-content, #DAD8D9)' }}
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
                      onEditError={handleEditError}
                    />

                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          className="h-12 bg-[#494949]/5 rounded-md px-[18px] p-3 "
                          style={{
                            color: 'var(--priority-content, #DAD8D9)',
                            border: '2px solid var(--border-01, #B9B9B9)',
                          }}
                        >
                          <MoreHorizontal />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent
                        hasCloseBtn={false}
                        side="bottom"
                        align="end"
                        className="border-0 bg-transparent m-0 p-2"
                        // className="rounded-md w-[224px] h-[60px] p-0"
                      >
                        {/* <button
                          color="error"
                          className="flex flex-row gap-2 items-center justify-start h-full w-full pl-6"
                          style={{
                            color: 'var(--priority-content, #EBC4C4)',
                            backgroundColor: 'var(--priority-surface, #1F0A0A)',
                          }}
                          onClick={() => setShouldShowDeleteDialog(true)}
                        > */}
                        {/* </button> */}
                        <atoms.Button
                          size="medium"
                          type="primary"
                          mode="dark"
                          color="error"
                          onClick={() => setShouldShowDeleteDialog(true)}
                          className="text-[#EBC4C4]"
                        >
                          <Trash size={18} className="text-[#EBC4C4]" />
                          Delete Idea
                        </atoms.Button>
                      </PopoverContent>
                    </Popover>

                    {shouldShowDeleteDialog && (
                      <DeleteConfirmationDialogBox
                        card={fullIdea}
                        onClose={setShouldShowDeleteDialog}
                        onDelete={handleDeleteIdea}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          {isOwner ? (
            <ImageBanner
              bannerImage={bannerImage}
              updateIdeaImage={handleUpdateIdeaImage}
              ideaId={ideaId}
            />
          ) : (
            <div
              style={{ backgroundColor: '#292929' }}
              className={`w-full h-[304px] rounded-2xl flex items-center justify-center bg-cover bg-center bg-no-repeat 
              }`}
              {...(bannerImage && {
                style: { backgroundImage: `url(${bannerImage.original_url})` },
              })}
            >
              {!bannerImage && <ImagePreviewSVG />}
            </div>
          )}
        </div>
        {showEditSuccess && (
          <Alert
            type="success"
            variant="edit"
            onClose={() => setShowEditSuccess(false)}
          />
        )}
        {showEditError && (
          <Alert
            type="error"
            variant="edit"
            onClose={() => setShowEditError(false)}
          />
        )}
      </div>
    </>
  );
};
