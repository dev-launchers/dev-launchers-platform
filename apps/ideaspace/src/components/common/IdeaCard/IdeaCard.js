import { useState, useEffect } from 'react';
import Link from 'next/link';
import { atoms } from '@devlaunchers/components/src/components';
import IdeaCardImg from './IdeaCardImg';
import IdeaCardTag from './IdeaCardTag';
import IdeaCardComment from './IdeaCardComment';
import IdeaCardUpdated from './IdeaCardUpdated';
import useConfirm from '../DialogBox/DialogBox';
import { LikeButton } from '@devlaunchers/components/src/components/molecules';
import {
  useUserDataContext,
} from '@devlaunchers/components/src/context/UserDataContext';
import { agent } from '@devlaunchers/utility';

function IdeaCard({ cards, cardType }) {
  const [tagContent, setTagContent] = useState(cards.status);
  const [buttonContent, setButtonContent] = useState('');
  const [urlPath, setUrlPath] = useState('');
  const [isFilled, setIsFilled] = useState(false);
  const [liked, setLiked] = useState(false);
  const { userData, isAuthenticated } = useUserDataContext();

  const [UpdateFailure, confirmFailure] = useConfirm(
    ['Unable to reactivate your idea', '', ''],
    'Please try again.',
    ['primary', 'close']
  );

  useEffect(() => {
    if (cardType == "mine") {
      if (tagContent !== "archived") {
        setButtonContent(`WORKSHOP THIS IDEA`);
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
      const res = await agent.Ideas.getIdea(cards.id, new URLSearchParams(`populate=*`));

      if (res.status === 200) {
        setTagContent('workshopping');
      }
    } catch (error) {
      confirmFailure();
      setButtonContent(`REACTIVATE THIS IDEA`);
    }
  };

  return (
    <atoms.Box
      flexDirection="column"
      style={{
        border: '0.05rem solid rgba(240, 237, 238, 1)',
        borderRadius: '1rem',
      }}
    >
      <atoms.Box>
        <IdeaCardTag status={tagContent} />
      </atoms.Box>

      <IdeaCardImg cardId={cards.id} cardImg={cards.imgSrc} />

      <Link href={{ pathname: urlPath }}>
        <atoms.Box
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="space-between"
          padding="0rem 2rem 2rem"
          style={{ maxWidth: '18.5rem' }}
        >
          <atoms.Typography
            type="h3"
            style={{ fontSize: '1.5rem', marginBottom: '2rem' }}
          >
            {cards.ideaName}
          </atoms.Typography>

          <IdeaCardComment commentLength={cards.comments.length} />

          <IdeaCardUpdated updatedAt={cards.updated_at} />
        </atoms.Box>
      </Link>

      <atoms.Box padding="0rem 2rem 2rem">
        <LikeButton
          onClick={() => setLiked((prev) => !prev)}
          filled={liked}
          text={liked ? 1 : ''}
          disabled={isAuthenticated ? false : true}
        ></LikeButton>
      </atoms.Box>

      {tagContent == 'archived' ? (
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
      )}
      <UpdateFailure />
    </atoms.Box>
  );
}

export default IdeaCard;
