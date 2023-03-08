import React, { useState } from 'react';
import Link from 'next/link';
import { atoms } from '@devlaunchers/components/src/components';
import {
  ImgButton,
  StatuBox,
} from './StyledIdeaCard';
import commentSvg from '../../../images/comment.svg';
import timeSvg from '../../../images/time.svg';

function IdeaCard({ cards, cardType }) {
  const [tag, setTag] = useState('');
  const [tagColor, setTagColor] = useState('');
  const [updated, setUpdated] = useState('');
  React.useEffect(() => {
    if (cards.statu == "submitted"){
      setTag("submitted");
      setTagColor("#A7D5E3");
    } else if (cards.statu == "applying"){
      setTag("applying");
      setTagColor("#FFC44C");
    } else if (cards.statu == "approved"){
      setTag("approved");
      setTagColor("#8CC882");
    } else if (cards.statu == "archived"){
      setTag("archived");
      setTagColor("#75A3C0");
    } else {
      setTag("workshopping");
      setTagColor("#FFA556");
    }

    const difftime = (new Date() - new Date(cards.updated_at)) / 1000;

    if (difftime > (86400 * 30 * 12)) {
      const years = parseInt(difftime / (86400 * 30 * 12));
      if (years > 1) {
        setUpdated(years + ' years ago');
      } else {
        setUpdated(years + ' year ago');
      }
    } else if (difftime > (86400 * 30)) {
      const months = parseInt(difftime / (86400 * 30));
      if (months > 1) {
        setUpdated(months + ' months ago');
      } else {
        setUpdated(months + ' month ago');
      }
    } else if (difftime > 86400) {
      const days = parseInt(difftime / 86400);
      if (days > 1) {
        setUpdated(days + ' days ago');
      } else {
        setUpdated(days + ' day ago');
      }
    } else if (difftime > 3600) {
      const hours = parseInt(difftime / 3600);
      if (hours > 1) {
        setUpdated(hours + ' hours ago');
      } else {
        setUpdated(hours + ' hour ago');
      }
    } else {
      const minutes = parseInt(difftime % 3600 / 60);
      if (minutes > 1) {
        setUpdated(minutes + ' minutes ago');
      } else {
        setUpdated(1 + ' minute ago');
      }
    }

  }, []);

  return (
    <atoms.Box flexDirection='column'
      style={{ border: "0.05rem solid rgba(240, 237, 238, 1)", borderRadius: "1rem" }}
    >

      <Link href={`/ideaspace/workshop/${cards.id}`}>
        <ImgButton style={{ backgroundColor: "#FFFFFF", }}>
          <img
            alt="idea_image"
            src={`https://picsum.photos/seed/${cards.id}/350/270?random=${cards.id}`}
            style={{ width: "100%", height: "100%", borderRadius: "1rem", }}
          />

        </ImgButton>
      </Link>

      <atoms.Box flexDirection='column' alignItems='flex-start' justifyContent='space-between'
        margin='-1.5rem 2rem 1.5rem' style={{ maxWidth: '18.5rem' }}>

        <StatuBox style={{ background: tagColor, }}>{tag}</StatuBox>

        <atoms.Typography type='h3' style={{ fontSize: '1.5rem', textAlign: 'left' }}>
          {cards.ideaName}
        </atoms.Typography>

        {cards.comments.length > 0 ? (
          <atoms.Box alignItems='center' style={{ marginTop: '-1rem' }} >
            <img alt='commentSvg' src={commentSvg} />
            <atoms.Typography type='p' style={{ fontSize: '1rem', textAlign: 'left' }}>

              &nbsp;COMMENTS:&nbsp;{cards.comments.length}
            </atoms.Typography>
          </atoms.Box>
        ) : (
          null
        )}

        <atoms.Box alignItems='center' style={{ marginTop: '0.5rem' }} >
          <img alt='timeSvg' src={timeSvg} />
          <atoms.Typography type='p' style={{ fontSize: '1rem', textAlign: 'left' }}>
            &nbsp;UPDATED:&nbsp;{updated}
          </atoms.Typography>
        </atoms.Box>

        {cardType == "mine" ? (
          <Link href={{ pathname: `/ideaspace/edit/${cards.id}` }}>
            <atoms.Button
              buttonSize='standard'
              buttonType='alternative'
              style={{ width: "100%", marginTop: "2rem" }}
            >
              WORKSHOP&nbsp;THIS&nbsp;IDEA
            </atoms.Button>
          </Link>
        ) : (
          <Link href={{ pathname: `/ideaspace/workshop/${cards.id}` }}>
            <atoms.Button
              buttonSize='standard'
              buttonType='alternative'
              style={{ width: "100%", marginTop: "2rem" }}
            >
              HELP&nbsp;THIS&nbsp;IDEA
            </atoms.Button>
          </Link>
        )}

      </atoms.Box>

    </atoms.Box>
  )
}

export default IdeaCard
