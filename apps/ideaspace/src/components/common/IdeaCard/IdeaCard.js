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
import { ActivityDetails } from './StyledIdeaCard';

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
      setUrlPath(`/ideaspace/edit/${cards.id}`);
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
        padding="0.5rem 0.5rem 1.5rem 0.5rem"
        style={{
          border: '0.125rem solid rgba(71, 71, 71, 0.10)',
          borderRadius: '1rem',
          cursor: 'pointer',
          boxShadow: isHovered
            ? '0px 3px 9px 0px rgba(212, 194, 229, 0.80)'
            : 'none',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <atoms.Box>
        <IdeaCardTag status={tagContent} />
      </atoms.Box> */}
        <div>
          <IdeaCardImg cardId={cards.id} cardImg={cards.imgSrc} />

          <atoms.Box
            flexDirection="column"
            alignItems="flex-start"
            padding="0rem 0.75rem"
          >
            <atoms.Typography
              type="h4"
              style={{
                fontSize: '20px',
                lineHeight: '1.75rem',
                fontFamily: 'Helvetica',
                fontWeight: '700',
                margin: '0rem 0rem 0.5rem',
              }}
            >
              {cards.ideaName.length > 20
                ? `${cards.ideaName.substring(0, 20)}`
                : cards.ideaName}
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
              type="p"
              style={{
                fontSize: '0.875rem',
                height: '43px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {cards.description}
            </atoms.Typography>
            <ActivityDetails>
              <atoms.Typography
                type="label"
                style={{ fontSize: '0.75rem', color: '#494949', weight: '300' }}
              >
                Updated: {daysAgo()} ago
              </atoms.Typography>
              <atoms.Typography
                type="label"
                style={{ fontSize: '0.75rem', color: '#7339AC', weight: '300' }}
              >
                {cards.comments?.length} comments ∙ {votes} upvotes
              </atoms.Typography>
            </ActivityDetails>
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
