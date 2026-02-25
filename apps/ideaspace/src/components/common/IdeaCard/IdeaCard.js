import { useState, useEffect } from 'react';
import Link from 'next/link';
import { atoms } from '@devlaunchers/components/src/components';
import IdeaCardImg from './IdeaCardImg';
import useConfirm from '../DialogBox/DialogBox';
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
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {cards.ideaImage?.data?.attributes?.medium_url ? (
            <IdeaCardImg
              key={cards.id}
              ideaImage={cards.ideaImage?.data?.attributes?.medium_url}
            />
          ) : (
            <div
              className="w-full h-[228px] rounded-t-2xl flex items-center justify-center"
              style={{
                backgroundColor: 'var(--base-03, #292929)',
                flexShrink: 0,
                marginBottom: '1.12rem'
              }}
            >
              <ImagePreviewSVG />
            </div>
          )}

          {/* NEW WRAPPER — everything below image */}
          <div
            style={{
              padding: '0 1.25rem 1.25rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
            }}
          >
            {/* AUTHOR ROW */}
            <atoms.Box
              flexDirection="row"
              display="flex"
              alignItems="center"
              padding="1rem 0 0.875rem 0"
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
                }}
              >
                {cards.author?.data?.attributes?.profile?.data?.attributes
                  .displayName ?? cards.author?.data?.attributes?.username}
              </atoms.Typography>
            </atoms.Box>

            {/* TITLE + DESCRIPTION */}
            <atoms.Box
              flexDirection="column"
              alignItems="flex-start"
              style={{ flex: 1, display: 'flex' }}
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
                style={{
                  color: 'var(--content-00, #FFF)',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  wordBreak: 'break-word',
                }}
              >
                {cards.ideaName}
              </atoms.Typography>

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
                style={{
                  color: 'var(--content-04, #DAD8D9)',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {cards.description}
              </atoms.Typography>

              {/* FOOTER */}
              <div
                className="flex flex-row justify-between w-full"
                style={{ marginTop: 'auto', paddingTop: '1rem' }}
              >
                <atoms.Typography
                  type="p"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--content-04, #DAD8D9)',
                    weight: '300',
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
                  }}
                >
                  {cards.comments?.length} comments ∙ {votes} upvotes
                </atoms.Typography>
              </div>
            </atoms.Box>
          </div>
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
