import React from 'react';
import { Wrapper, Wrap } from './StyledTalcommunityPage';
import BoxContainer from '../../common/BoxContainer';

import { HeaderTalPage } from './HeaderTalPage';

const TalcommunityPage = () => {
  return (
    <Wrapper>
      <BoxContainer paddingVertical={40}>
        <HeaderTalPage />
      </BoxContainer>
    </Wrapper>
  );
};

export default TalcommunityPage;
