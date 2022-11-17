import React from 'react'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Link from 'next/link';
import {
  StyledLink,
  Button,
  IdeaInfo,
} from './StyledIdeaCard';
import { start } from '@banana-dev/banana-dev';

function IdeaCard({ cards }) {
  return (
    <ImageListItem key={cards.id} style={{
      display: "flex",
      flexDirection: "column"
    }}>

      <Link href={`/ideas/workshop/${cards.id}`}>
        <Button>
          <img
            alt="idea_image"
            src={`https://picsum.photos/seed/${cards.id}/320/240?random=${cards.id}`}
            style={{width:"100%", height:"100%"}}
          />
        </Button>
      </Link>

      <ImageListItemBar
        title={<IdeaInfo><div>{cards.ideaName}</div>
              {cards.comments.length > 0 ? (
                <div>Comments:&nbsp;{cards.comments.length}</div>
              ) : ('')}</IdeaInfo>}
        position="below"
      />
      
    </ImageListItem>
  )
}

export default IdeaCard
