import React from 'react';
import { HeadWapper, Headline } from '../../common/CommonStyles';
import { atoms } from '@devlaunchers/components/src/components';
import { Link } from '@devlaunchers/components/src/components/atoms';
import { StyledRainbow } from './StyledTermsConditionPage';
import TermsConditionContent from './TermsConditionContent';
import TermsTable from './TermsTable';

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
      <div className="max-w-8xl px-16  py-10">
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            {TermsConditionContent.introduction.heading}
          </h2>
          {TermsConditionContent.introduction.paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            {TermsConditionContent.definitions.heading}
          </h2>
          <ul className="list-disc pl-5">
            {TermsConditionContent.definitions.paragraphs.map((para, index) => (
              <li key={index}>{para}</li>
            ))}
          </ul>
        </div>

        <TermsTable></TermsTable>

        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            {TermsConditionContent.ageEligibility.heading}
          </h2>
          {TermsConditionContent.ageEligibility.paragraphs.map(
            (para, index) => (
              <p key={index}>{para}</p>
            )
          )}
        </div>

        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            {TermsConditionContent.nonCondidentiality.heading}
          </h2>
          {TermsConditionContent.nonCondidentiality.paragraphs.map(
            (para, index) => (
              <p key={index}>{para}</p>
            )
          )}
        </div>

        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            {TermsConditionContent.intellectualPropertyRights.heading}
          </h2>
          {TermsConditionContent.intellectualPropertyRights.paragraphs.map(
            (para, index) => (
              <p key={index}>{para}</p>
            )
          )}
        </div>

        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            {TermsConditionContent.ideaEvaluation.heading}
          </h2>
          {TermsConditionContent.ideaEvaluation.paragraphs.map(
            (para, index) => (
              <p key={index}>{para}</p>
            )
          )}
        </div>

        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            {TermsConditionContent.consulting.heading}
          </h2>
          {TermsConditionContent.consulting.paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            {TermsConditionContent.indemnity.heading}
          </h2>
          {TermsConditionContent.indemnity.paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            {TermsConditionContent.changeToTerms.heading}
          </h2>
          {TermsConditionContent.changeToTerms.paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default TermsConditionPage;
