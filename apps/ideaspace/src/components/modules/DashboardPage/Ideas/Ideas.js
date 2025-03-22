import React from 'react';
import Link from 'next/link';
import { atoms } from '@devlaunchers/components/src/components';
import IdeaCard from '../../../common/IdeaCard/IdeaCard';
import submitImage from '../../../../images/submitButton.svg';

import { IdeaCardWrapper, SubmitButton } from './StyledIdeas';

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

      <IdeaCardWrapper>
        {totalCard.map((item) => {
          return <IdeaCard cards={item} key={item.id} cardType="mine" />;
        })}

        <Link href="/ideaspace/submit">
          <SubmitButton style={{ cursor: 'pointer' }}>
            <img
              alt="submit_image"
              src={submitImage}
              style={{ width: '100%' }}
            />
          </SubmitButton>
        </Link>
      </IdeaCardWrapper>
    </atoms.Box>
  );
};

export default Ideas;
