import {
  SingleComment,
  UserImage,
  SingleCommentContent,
  SingleCommentButtons,
  IdeaOwnerTag,
} from './StyledComments.js';
import { LikeButton } from '@devlaunchers/components/src/components/molecules';
import { useEffect, useState } from 'react';
import { useUserDataContext } from '@devlaunchers/components/src/context/UserDataContext.js';
import { atoms } from '@devlaunchers/components/src/components';
import { agent } from '@devlaunchers/utility';
import { MoreHorizontal, Pencil, Trash } from 'lucide-react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@devlaunchers/components/src/components/atoms/Popover/index';
import useConfirm from '../../../../components/common/DialogBox/DialogBox';
import UpvoteButton from '../../../../components/common/Upvote/UpvoteButton';
import DefaultPic from '../../../../images/profile-picture-upload.png';
// A function to show the date as X hours ago, etc.
// from: https://stackoverflow.com/a/3177838
function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    if (Math.floor(interval) == 1) {
      return '1 year ago';
    } else {
      return Math.floor(interval) + ' years ago';
    }
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    if (Math.floor(interval) == 1) {
      return '1 month ago';
    } else {
      return Math.floor(interval) + ' months ago';
    }
  }
  interval = seconds / 86400;
  if (interval > 1) {
    if (Math.floor(interval) == 1) {
      return '1 day ago';
    } else {
      return Math.floor(interval) + ' days ago';
    }
  }
  interval = seconds / 3600;
  if (interval > 1) {
    if (Math.floor(interval) == 1) {
      return '1 hour ago';
    } else {
      return Math.floor(interval) + ' hours ago';
    }
  }
  interval = seconds / 60;
  if (interval > 1) {
    if (Math.floor(interval) == 1) {
      return '1 minute ago';
    } else {
      return Math.floor(interval) + ' minutes ago';
    }
  }
  if (Math.floor(interval) == 1) {
    return '1 second ago';
  } else {
    return Math.floor(seconds) + ' seconds ago';
  }
}

function SingleCommentComponent(props) {
  const { userData, isAuthenticated, isLoading } = useUserDataContext();
  const [liked, setLiked] = useState(false);
  const [commentLikes, setCommentLikes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(props.children);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const isOwner =
    isAuthenticated &&
    userData?.id != null &&
    props.user?.id != null &&
    Number(userData.id) === Number(props.user.id);

  const [DeleteCommentDialog, confirmDelete] = useConfirm(
    ['Delete this comment?', '', ''],
    "This action can't be undone.",
    ['primary alternative', 'delete', 'cancel'],
    { variant: 'dark' }
  );

  function handleEditClick() {
    setEditText(props.children);
    setIsEditing(true);
  }

  function handleCancelEdit() {
    setEditText(props.children);
    setIsEditing(false);
  }

  async function handleSaveEdit() {
    const trimmed = editText.trim();
    if (!trimmed || trimmed === props.children) {
      setIsEditing(false);
      return;
    }
    setIsSaving(true);
    try {
      await agent.Comments.put(props.id, { data: { text: trimmed } });
      props.onCommentUpdated?.(props.id, trimmed);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDeleteClick() {
    if (await confirmDelete()) {
      setIsDeleting(true);
      try {
        await agent.Comments.delete(props.id);
        props.onCommentDeleted?.(props.id);
      } catch (error) {
        console.error(error);
        setIsDeleting(false);
      }
    }
  }

  async function fetchLikedAndUpdateState() {
    const res = await agent.Likes.get(
      new URLSearchParams(
        `filters[objectType][$eq]=Comment&filters[objectId][$eq]=${props.id}&populate=users_permissions_user`
      )
    );
    setCommentLikes(res || []);
    const alreadyLiked = res?.some(
      (like) =>
        like.attributes?.users_permissions_user?.data?.id === userData?.id
    );
    setLiked(alreadyLiked);
  }

  useEffect(() => {
    fetchLikedAndUpdateState();
  }, [props.id, userData?.id]);

  async function handleLikeClick() {
    if (!isAuthenticated) return;
    try {
      const existingLike = commentLikes.find(
        (like) =>
          like.attributes?.users_permissions_user?.data?.id === userData?.id
      );

      if (existingLike) {
        await agent.Likes.delete(existingLike.id);
      } else {
        await agent.Likes.post({
          objectId: props.id,
          objectType: 'Comment',
          users_permissions_user: { connect: [userData.id] },
        });
      }
      await fetchLikedAndUpdateState();
    } catch (error) {
      console.error(error);
    }
  }

  if (isDeleting) {
    return null;
  }

  return (
    <>
      <div className="textContent mb-12">
        <SingleComment style={{ marginBottom: '12px' }}>
          <UserImage
            alt="user_image"
            src={props.user.profile?.profilePictureUrl || DefaultPic}
          />
          <div className="textContent" style={{ width: '100%' }}>
            <SingleCommentContent style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <atoms.Typography as="h3">{props.author}</atoms.Typography>
                {props.forIdea.ideaOwner?.id == props.user?.id ? (
                  <div className="px-[6px] py-[2px] bg-[linear-gradient(90deg,rgba(144,205,244,0.40)_0%,rgba(212,188,249,0.40)_97.96%)] rounded-xl justify-center items-center">
                    <div
                      className="text-xs font-normal"
                      style={{ color: 'var(--content-04, #DAD8D9)' }}
                    >
                      Idea Owner
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {/* get the idea ID from the URL if possible and determine the idea owner (maybe do this in another file) */}
              </div>
              {isOwner && (
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      aria-label="Comment options"
                      className="bg-transparent"
                      style={{ color: 'var(--content-03, #B9B9B9)' }}
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    hasCloseBtn={false}
                    side="bottom"
                    align="end"
                    className="border-0 m-0 p-2 rounded-lg shadow-lg"
                    style={{
                      background: 'var(--surface-04, #292929)',
                      border: '1px solid var(--interactive-border, #676767)',
                    }}
                  >
                    <div className="flex flex-col gap-1 min-w-[130px]">
                      <button
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-left bg-transparent hover:bg-[var(--surface-03,#383838)]"
                        style={{ color: 'var(--content-04, #DAD8D9)' }}
                        onClick={handleEditClick}
                      >
                        <Pencil size={16} /> Edit
                      </button>
                      <button
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-left bg-transparent hover:bg-[var(--surface-03,#383838)]"
                        style={{ color: '#EBC4C4' }}
                        onClick={handleDeleteClick}
                      >
                        <Trash size={16} /> Delete
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </SingleCommentContent>
            <SingleCommentContent>
              {/* date of creation here, i.e. "2 days ago" */}
              <atoms.Typography
                as="h5"
                style={{ color: 'var(--content-03, #B9B9B9)' }}
              >
                {timeSince(new Date(props.createdAt))}
              </atoms.Typography>
            </SingleCommentContent>
          </div>
        </SingleComment>
        <SingleComment>
          <div className="textContent">
            <SingleCommentContent>
              {isEditing ? (
                <div style={{ width: '100%', marginLeft: '52px' }}>
                  <textarea
                    className="w-full rounded-lg p-2"
                    style={{
                      background: 'var(--surface-02, #1a1a1a)',
                      color: 'var(--content-04, #DAD8D9)',
                      border: '1px solid var(--border-01, #B9B9B9)',
                    }}
                    rows={3}
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    disabled={isSaving}
                  />
                  <div className="flex gap-2" style={{ marginTop: '8px' }}>
                    <atoms.Button
                      size="small"
                      type="primary"
                      mode="dark"
                      color="nebula"
                      onClick={handleSaveEdit}
                      disabled={isSaving}
                    >
                      Save
                    </atoms.Button>
                    <atoms.Button
                      size="small"
                      type="secondary"
                      mode="dark"
                      color="nebula"
                      onClick={handleCancelEdit}
                      disabled={isSaving}
                    >
                      Cancel
                    </atoms.Button>
                  </div>
                </div>
              ) : (
                <div source={props.children}>
                  <atoms.Typography
                    as="p"
                    className="text-left text-[var(--content-04, #DAD8D9)]"
                  >
                    {props.children}
                    <div style={{ marginTop: '8px' }}>
                      <UpvoteButton
                        disabled={isLoading || !isAuthenticated}
                        onclick={handleLikeClick}
                        show
                        isLikeButton={true}
                        selected={liked}
                        text={`${liked ? 'Liked' : 'Like'} | ${
                          commentLikes.length
                        }`}
                      />
                    </div>
                  </atoms.Typography>
                </div>
              )}
            </SingleCommentContent>
          </div>
        </SingleComment>
      </div>
      {isOwner && <DeleteCommentDialog />}
    </>
  );
}

export default SingleCommentComponent;
