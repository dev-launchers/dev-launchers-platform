import React from 'react'
import Link from 'next/link';
import { atoms, organisms } from '@devlaunchers/components/src/components';
import {
  ImgButton,
  IdeaInfo,
  IdeaName,
  StatuBox,
} from './StyledIdeaCard';

function IdeaCard({ cards }) {
  return (
    <atoms.Box flexDirection='column'>

      <Link href={`/ideaspace/workshop/${cards.id}`}>
        <ImgButton>
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
        </ImgButton>
      </Link>

      <IdeaInfo>
        <IdeaName>{cards.ideaName}</IdeaName>
        {/* 
        <Link href={`/ideaspace/workshop/${cards.id}`}>
          <atoms.Button
              buttonSize='standard'
              buttonType='primary'
            >
              EDIT DATA
            </atoms.Button>
        </Link>
        */}
      </IdeaInfo>

      {cards.comments.length > 0 ? (
        <atoms.Typography type='h4' style={{fontSize: '18px', textAlign: 'left', margin: '0'}}>
          Comments:&nbsp;{cards.comments.length}
        </atoms.Typography>
      ) : ('')}

    </atoms.Box>
  )
}

export default IdeaCard
