import React from 'react'
import Link from 'next/link';
import {
  CardWapper,
  Button,
  IdeaInfo,
  IdeaName,
  EditButton,
  IdeaComments,
  StatuBox,
} from './StyledIdeaCard';

function IdeaCard({ cards }) {
  return (
    <CardWapper>

      <Link href={`/ideaspace/workshop/${cards.id}`}>
        <Button>
          <img
            alt="idea_image"
            src={`https://picsum.photos/seed/${cards.id}/360/270?random=${cards.id}`}
            style={{ width: "100%", height: "100%" }}
          />
          
          {/*cards.statu == "published" ? (
            <StatuBox style={{background: "#C0E1EB",}}>published</StatuBox>
          ) : (
            <StatuBox style={{background: "#FFD580",}}>pending</StatuBox>
          )*/}
        </Button>
      </Link>

      <IdeaInfo>
        <IdeaName>{cards.ideaName}</IdeaName>
        {/*<Link href={`/ideas/workshop/${cards.id}`}><EditButton>EDIT IDEA</EditButton></Link>*/}
      </IdeaInfo>
      {cards.comments.length > 0 ? (
        <IdeaComments>Comments:&nbsp;{cards.comments.length}</IdeaComments>
      ) : ('')}

    </CardWapper>
  )
}

export default IdeaCard
