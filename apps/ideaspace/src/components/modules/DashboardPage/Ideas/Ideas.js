import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { atoms } from '@devlaunchers/components/src/components';
import IdeaCard from '../../../common/IdeaCard/IdeaCard';
import submitImage from '../../../../images/submitButton.svg';

const Ideas = ({ totalCard }) => {
  return (
    <atoms.Box flexDirection="column" style={{ marginTop: '4rem' }}>
      <atoms.Box
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <atoms.Typography type="h4" style={{ textAlign: 'left' }}>
          My Ideas
        </atoms.Typography>
      </atoms.Box>

      <div className="flex flex-wrap  mt-6 gap-5 md:gap-8 xl:gap-16">
        {totalCard.map((item) => {
          return <IdeaCard cards={item} key={item.id} cardType="mine" />;
        })}

        <Link href="/ideaspace/submit">
          <button
            type="button"
            className="flex items-center cursor-pointer w-[22.5rem] h-[22.5rem] relative"
          >
            <Image
              alt="submit_image"
              src={submitImage}
              layout="fill"
              objectFit="cover"
            />
          </button>
        </Link>
      </div>
    </atoms.Box>
  );
};

export default Ideas;
