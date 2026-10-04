import React from 'react';
import { HeadWapper } from '../../common/CommonStyles';
import { atoms } from '@devlaunchers/components/components';
import { StyledRainbow } from './StyledTermsConditionPage';
import TermsConditionLayout from './TermsConditionLayout';
import BackButton from '../../common/BackButton/BackButton';

function TermsConditionPage() {
  return (
    <>
      <HeadWapper>
        <atoms.Typography
          as="h1"
          variant="primary"
          size="xl5"
          textWeight="bold"
        ></atoms.Typography>
        <div className="hidden sm:block">
          <BackButton
            buttonType="confirm"
            clickHandler={() => window.close()}
          />
        </div>
        <atoms.Typography
          as="h2"
          variant="primary"
          size="xl4"
          textWeight="bold"
          className="pl-8"
        >
          Idea Submission Terms & Conditions
        </atoms.Typography>

        <div className="HeadingSub flex flex-col gap-3">
          <atoms.Typography
            variant="secondary"
            size="body_base"
            className="pl-8"
          >
            Last updated: April 26, 2023
          </atoms.Typography>
        </div>
      </HeadWapper>
      <TermsConditionLayout />
    </>
  );
}

export default TermsConditionPage;
