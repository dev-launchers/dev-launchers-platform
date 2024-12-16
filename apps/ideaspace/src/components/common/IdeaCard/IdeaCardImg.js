import React from 'react';
import Link from 'next/link';
import { ImgButton } from './StyledIdeaCard';

const IdeaCardImg = ({ cardId }) => {
  return (
    <Link href={`/ideaspace/workshop/${cardId}`}>
      <ImgButton style={{ backgroundColor: '#FFFFFF' }}>
        <img
          alt="idea_image"
          src={`https://picsum.photos/seed/${cardId}/350/270?random=${cardId}`}
          style={{
            width: '100%',
            // height: '100%',
            height: '176px',
            borderRadius: '0.875rem',
            // objectFit: "fit", // not working with height 100%, need investigation
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
          }}
        />
      </ImgButton>
    </Link>
  );
};

export default IdeaCardImg;
