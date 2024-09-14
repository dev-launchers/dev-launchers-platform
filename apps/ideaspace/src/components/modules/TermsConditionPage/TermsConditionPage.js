import React from 'react';
import { HeadWapper, Headline } from '../../common/CommonStyles';
import { atoms } from '@devlaunchers/components/src/components';
import { Link } from '@devlaunchers/components/src/components/atoms';
import { StyledRainbow } from './StyledTermsConditionPage';

function TermsConditionPage() {
  return (
    <>
      <HeadWapper>
        <div className="Heading flex flex-col gap-4">
          <Headline>IdeaSpace</Headline>
          <atoms.Typography type="h4">
            Idea Submission Terms & Conditions
          </atoms.Typography>
        </div>

        <StyledRainbow>
          <atoms.Layer hasRainbowBottom />
        </StyledRainbow>

        <div className="HeadingSub flex flex-col gap-3">
          <atoms.Typography type="pLarge">
            Last updated: April 26, 2023
          </atoms.Typography>
          <div className="links flex flex-row justify-center items-center gap-4">
            <Link href="/" text="Archived Version"></Link>
            <Link href="/" text="Download PDF"></Link>
          </div>
        </div>
      </HeadWapper>
      <div className="max-w-6xl px-10"></div>
    </>
  );
}

export default TermsConditionPage;
