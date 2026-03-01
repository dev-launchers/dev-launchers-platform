import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const IdeaCardImg = ({ cardId, ideaImage }) => {
  return (
    <Link href={`/ideaspace/workshop/${cardId}`}>
      <div
        className="w-full h-[228px] relative"
        style={{ marginBottom: '1.12rem' }}
      >
        <Image
          alt="idea_image"
          src={ideaImage}
          layout="fill"
          style={{
            borderRadius: '1rem 1rem 0rem 0rem',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
          }}
        />
      </div>
    </Link>
  );
};

export default IdeaCardImg;
