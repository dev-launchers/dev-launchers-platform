import React from 'react';
import { HeadWapper } from '../../common/CommonStyles';
import { Typography } from '@devlaunchers/components/components/atoms/Typography';
import { StyledRainbow } from './StyledTermsConditionPage';
import TermsConditionLayout from './TermsConditionLayout';
import BackButton from '../../common/BackButton/BackButton';

function TermsConditionPage() {
  return (
    <>
      <HeadWapper>
        <Typography as="h1" variant="primary" size="xl5" textWeight="bold">
          IdeaSpace
        </Typography>
        <div className="hidden sm:block">
          <BackButton
            buttonType="confirm"
            clickHandler={() => window.close()}
          />
        </div>
        <Typography as="h2" variant="primary" size="xl4" textWeight="bold">
          Idea Submission Terms & Conditions
        </Typography>

        <StyledRainbow>
          <div className="h-1 w-full bg-gradient-to-r from-[#FF0000] via-[#00FF00] to-[#0000FF]" />
        </StyledRainbow>

        <div className="HeadingSub flex flex-col gap-3">
          <Typography variant="secondary" size="body_base">
            Last updated: April 26, 2023
          </Typography>
        </div>
      </HeadWapper>
      <TermsConditionLayout />
    </>
  );
}

export default TermsConditionPage;
