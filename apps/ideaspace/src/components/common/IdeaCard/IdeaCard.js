import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { atoms } from '@devlaunchers/components/src/components';
import {
  ImgButton,
  StatuBox,
} from './StyledIdeaCard';
import IdeaCardImg from './IdeaCardImg';
import IdeaCardTag from './IdeaCardTag';
import IdeaCardComment from './IdeaCardComment';
import IdeaCardUpdated from './IdeaCardUpdated';
import useConfirm from '../DialogBox/DialogBox';

function IdeaCard({ cards, cardType }) {
  const [tagContent, setTagContent] = useState(cards.status);
  const [buttonContent, setButtonContent] = useState('');
  const [urlPath, setUrlPath] = useState('');

  const [UpdateFailure, confirmFailure] = useConfirm(
    ['Unable to reactivate your idea', '', ''],
    'Please try again.',
    ['primary', 'close'],
  );

  React.useEffect(() => {
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

  const reactivateIdea = async() => {
    cards["status"] = "workshopping";
    setButtonContent(`WAIT`);

    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${cards.id}`,
        cards
      );

      if (res.status === 200) {
        setTagContent("workshopping");
      }
    } catch (error) {
      confirmFailure();
      setButtonContent(`REACTIVATE THIS IDEA`);
    }
  }

  return (
    <atoms.Box flexDirection='column'
      style={{ border: "0.05rem solid rgba(240, 237, 238, 1)", borderRadius: "1rem" }}
    >

      <IdeaCardImg
        cardId={cards.id}
      />

      <atoms.Box flexDirection='column' alignItems='flex-start' justifyContent='space-between'
        margin='-1.5rem 2rem 1.5rem' style={{ maxWidth: '18.5rem' }}>

        <IdeaCardTag
          status={tagContent}
        />

        <atoms.Typography type='h3' style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          {cards.ideaName}
        </atoms.Typography>

        <IdeaCardComment
          commentLength={cards.comments.length}
        />

        <IdeaCardUpdated
          updatedAt={cards.updated_at}
        />

        {tagContent == "archived" ? (
          <atoms.Button
            buttonSize='standard'
            buttonType='alternative'
            style={{ width: "100%", marginTop: "2rem" }}
            onClick={reactivateIdea}
          >
            {buttonContent}
          </atoms.Button>
        ) : (
          <Link href={{ pathname: urlPath }}>
            <atoms.Button
              buttonSize='standard'
              buttonType='alternative'
              style={{ width: "100%", marginTop: "2rem" }}
            >
              {buttonContent}
            </atoms.Button>
          </Link>
        )}
        <UpdateFailure />

      </atoms.Box>

    </atoms.Box>
  )
}

export default IdeaCard
