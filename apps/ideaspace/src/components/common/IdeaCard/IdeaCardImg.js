import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ImgButton } from './StyledIdeaCard';

const IdeaCardImg = ({ cardId, ideaImage }) => {
  return (
    <Link href={`/ideaspace/workshop/${cardId}`}>
      <ImgButton style={{ backgroundColor: '#FFFFFF', width: '100%' }}>
        <Image
          alt="idea_image"
          src={
            ideaImage ||
            `https://picsum.photos/seed/${cardId}/350/270?random=${cardId}`
          }
          width={353}
          height={176}
          style={{
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
