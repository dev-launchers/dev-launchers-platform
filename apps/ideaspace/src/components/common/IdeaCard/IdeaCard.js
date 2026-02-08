import { useState, useEffect } from 'react';
import Link from 'next/link';
import { atoms } from '@devlaunchers/components/src/components';
import IdeaCardImg from './IdeaCardImg';
import IdeaCardTag from './IdeaCardTag';
import IdeaCardComment from './IdeaCardComment';
import IdeaCardUpdated from './IdeaCardUpdated';
import useConfirm from '../DialogBox/DialogBox';
import { LikeButton } from '@devlaunchers/components/src/components/molecules';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { agent } from '@devlaunchers/utility';
import { cleanDataList } from '../../../utils/StrapiHelper';
import { AuthorProfilePicture } from './StyledIdeaCard';
import { ImagePreviewSVG } from '../SVG/ImagePreview';

function IdeaCard({ cards, cardType }) {
  const [tagContent, setTagContent] = useState(cards.status);
  const [buttonContent, setButtonContent] = useState('');
  const [urlPath, setUrlPath] = useState('');
  const [liked, setLiked] = useState(false);
  const { isAuthenticated, isLoading, userData } = useUserDataContext();
  const [votes, setVotes] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isLoading) loadDataOnlyOnce(); // query database
  }, [isLoading]);

  const [UpdateFailure, confirmFailure] = useConfirm(
    ['Unable to reactivate your idea', '', ''],
    'Please try again.',
    ['primary', 'close']
  );

  useEffect(() => {
    if (cardType == 'mine') {
      if (tagContent !== 'archived') {
        setButtonContent(`Edit This Idea`);
      } else {
        setButtonContent(`REACTIVATE THIS IDEA`);
      }
      setUrlPath(`/ideaspace/workshop/${cards.id}`);
    } else {
      setButtonContent(`HELP THIS IDEA`);
      setUrlPath(`/ideaspace/workshop/${cards.id}`);
    }
  }, [tagContent]);

  const reactivateIdea = async () => {
    cards['status'] = 'workshopping';
    setButtonContent(`WAIT`);

    try {
      const res = await agent.Ideas.getIdea(
        cards.id,
        new URLSearchParams(`populate=*`)
      );

      if (res.status === 200) {
        setTagContent('workshopping');
      }
    } catch (error) {
      confirmFailure();
      setButtonContent(`REACTIVATE THIS IDEA`);
    }
  };

  const loadDataOnlyOnce = async () => {
    // use get likes from agent
    const params =
      '?populate=deep&filters[objectId][$eq]=' + cards.id.toString();
    const data = cleanDataList(
      await agent.Likes.get(new URLSearchParams(params))
    );
    setVotes(data.length);
  };

  const daysAgo = () => {
    const update = new Date(cards.updatedAt);
    const now = new Date();
    const diffInDays = Math.floor((now - update) / (1000 * 60 * 60 * 24));
    if (diffInDays >= 1825) {
      return 'long time';
    } else if (diffInDays >= 730) {
      return Math.floor(diffInDays / 365) + ' years';
    } else if (diffInDays >= 365) {
      return '1 year';
    } else if (diffInDays >= 60) {
      return Math.floor(diffInDays / 30) + ' months';
    } else if (diffInDays >= 30) {
      return '1 month';
    } else if (diffInDays >= 14) {
      return Math.floor(diffInDays / 7) + ' weeks';
    } else if (diffInDays >= 7) {
      return '1 week';
    } else if (diffInDays > 1) {
      return Math.floor(diffInDays) + ' days';
    } else {
      return '1 day';
    }
  };

  return (
    <Link href={{ pathname: urlPath }}>
      <atoms.Box
        flexDirection="column"
        style={{
          border:
            'var(--global-05-px-0031-rem, 0.5px) solid var(--base-03, #1C1C1C)',
          borderRadius: 'var(--global-12-px-075-rem, 12px)',
          cursor: 'pointer',
          backgroundColor: isHovered
            ? 'var(--surface-02, #141414)'
            : 'var(--surface-01, #000)',

          height: '440px',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          {cards.ideaImage?.data?.attributes?.medium_url ? (
            <IdeaCardImg
              key={cards.id}
              cardId={cards.id}
              ideaImage={cards.ideaImage?.data?.attributes?.medium_url}
            />
          ) : (
            <div
              key={cards.id}
              className="w-full h-[228px] rounded-t-2xl flex items-center justify-center mb-4"
              style={{ backgroundColor: 'var(--base-03, #292929)' }}
            >
              <ImagePreviewSVG />
            </div>
          )}

          <atoms.Box
            flexDirection="row"
            display="flex"
            alignItems="center"
            padding="0rem 0.75rem"
            margin="1rem 0 0.875rem 0"
            gap="6px"
          >
            <AuthorProfilePicture
              alt={`image of author ${cards.author?.data?.attributes.username}`}
              src={
                cards.author?.data?.attributes.profile?.data?.attributes
                  .profilePictureUrl
              }
            />
            <atoms.Typography
              type="p"
              style={{
                fontSize: 'var(--text-size-sm, 14px)',
                color: 'var(--content-02, #979797)',
                weight: '400',
                padding: '0rem 0.375rem',
              }}
            >
              {cards.author?.data?.attributes?.profile?.data?.attributes
                .displayName ?? cards.author?.data?.attributes?.username}
            </atoms.Typography>
          </atoms.Box>

          <atoms.Box
            flexDirection="column"
            alignItems="flex-start"
            padding="0rem 0.75rem"
          >
            <atoms.Typography
              as="h6"
              leading="normal"
              size="body_xl"
              textAlign="left"
              textCase="normal"
              textDecoration="noUnderline"
              textStyle="normal"
              textWeight="semibold"
              variant="secondary"
              style={{ color: 'var(--content-00, #FFF)' }}
            >
              {cards.ideaName}
            </atoms.Typography>

            {/* <atoms.Box alignItems="center">
              <atoms.Typography
                type="p"
                style={{ fontSize: '1rem', textAlign: 'left' }}
              />
              <IdeaCardComment commentLength={cards.comments?.length} />
            </atoms.Box>
            {votes}
            <IdeaCardUpdated updatedAt={cards.mostRecentCommentTime} /> */}

            <atoms.Typography
              as="p"
              leading="normal"
              size="micro_xs"
              textAlign="left"
              textCase="normal"
              textDecoration="noUnderline"
              textStyle="normal"
              textWeight="light"
              variant="secondary"
              style={{ color: 'var(--content-04, #DAD8D9)' }}
            >
              {cards.description}
            </atoms.Typography>
            <div className="flex flex-row  justify-between w-full mt-9">
              <atoms.Typography
                type="p"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--content-04, #DAD8D9)',
                  weight: '300',
                  marginTop: '25px',
                }}
              >
                {daysAgo()} ago
              </atoms.Typography>
              <atoms.Typography
                type="p"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--content-04, #DAD8D9)',
                  weight: '300',
                  marginTop: '25px',
                }}
              >
                {cards.comments?.length} comments ∙ {votes} upvotes
              </atoms.Typography>
            </div>
          </atoms.Box>
        </div>

        {/* {tagContent == 'archived' ? (
          <atoms.Button
            buttonSize="standard"
            buttonType="alternative"
            style={{ margin: '0rem 2rem 1.5rem' }}
            onClick={reactivateIdea}
          >
            {buttonContent}
          </atoms.Button>
        ) : (
          <Link href={{ pathname: urlPath }}>
            <atoms.Button
              buttonSize="standard"
              buttonType="alternative"
              style={{ margin: '0rem 2rem 1.5rem' }}
            >
              {buttonContent}
            </atoms.Button>
          </Link>
        )} */}
        <UpdateFailure />
      </atoms.Box>
    </Link>
  );
}

export default IdeaCard;
