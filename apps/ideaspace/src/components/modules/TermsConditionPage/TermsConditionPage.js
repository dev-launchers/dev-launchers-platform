import React from 'react';
import { HeadWapper, Headline } from '../../common/CommonStyles';
import { atoms } from '@devlaunchers/components/src/components';
import { StyledRainbow } from './StyledTermsConditionPage';
import TermsConditionLayout from './TermsConditionLayout';
import BackButton from '../../common/BackButton/BackButton';

function TermsConditionPage() {
  return (
    <>
      <HeadWapper>
        <Headline>IdeaSpace</Headline>
        <BackButton buttonType="confirm" clickHandler={() => window.close()} />
        <atoms.Typography type="h4">
          Idea Submission Terms & Conditions
        </atoms.Typography>

        <StyledRainbow>
          <atoms.Layer hasRainbowBottom />
        </StyledRainbow>

        <div className="HeadingSub flex flex-col gap-3">
          <atoms.Typography type="pLarge">
            Last updated: April 26, 2023
          </atoms.Typography>
        </div>
      </HeadWapper>
      <TermsConditionLayout />
    </>
  );
}

export default TermsConditionPage;
