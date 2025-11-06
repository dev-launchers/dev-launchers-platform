import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ImgButton } from './StyledIdeaCard';

const IdeaCardImg = ({ cardId, ideaImage }) => {
  return (
    <Link href={`/ideaspace/workshop/${cardId}`}>
      <ImgButton
        style={{
          backgroundColor: '#FFFFFF',
          height: '176px',
          position: 'relative',
          margin: '0rem 0rem 1rem',
        }}
      >
        <Image
          alt="idea_image"
          src={
            ideaImage ||
            `https://picsum.photos/seed/${cardId}/402/176?random=${cardId}`
          }
          layout="fill"
          style={{
            borderRadius: '0.875rem',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
          }}
        />
      </ImgButton>
    </Link>
  );
};

export default IdeaCardImg;
