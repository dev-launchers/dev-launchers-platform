import React from 'react'
import Link from 'next/link';
import { atoms } from '@devlaunchers/components/src/components';
import {
  ImgButton,
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


      <atoms.Box justifyContent='space-between' alignItems='center' margin='0.5rem 0 0'>
        <atoms.Typography type='h5' style={{ fontSize: '1.3rem', textAlign: 'left', width: '15rem' }}>
          {cards.ideaName}
        </atoms.Typography>
{/* 
        <Link href={`/ideaspace/edit/${cards.id}`}>
          <atoms.Button
            buttonSize='standard'
            buttonType='primary'
            style={{ width: '7.2rem' }}
          >
            EDIT&nbsp;DATA
          </atoms.Button>
        </Link>*/}
      </atoms.Box>

      {cards.comments.length > 0 ? (
        <atoms.Typography type='h4' style={{ fontSize: '1.2rem', textAlign: 'left', marginTop: '-1rem' }}>
          Comments:&nbsp;{cards.comments.length}
        </atoms.Typography>
      ) : (
        <br/>
      )}

    </atoms.Box>
  )
}

export default IdeaCard
