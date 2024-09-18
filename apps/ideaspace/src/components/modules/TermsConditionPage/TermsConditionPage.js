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
      <div className="max-w-8xl sm:px-20 sm:py-10 px-8 py-10">
        <div className="flex flex-col gap-3 mb-16">
          <h2 className="text-4xl font-normal mb-4">
            {TermsConditionContent.introduction.heading}
          </h2>
          {TermsConditionContent.introduction.paragraphs.map((para, index) => (
            <p key={index} className="text-xl">
              {para}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-3 mb-16">
          <h2 className="text-xl font-bold mb-1">
            {TermsConditionContent.definitions.heading}
          </h2>
          <ul className="ml-10 list-disc pl-5">
            {TermsConditionContent.definitions.paragraphs.map((para, index) => (
              <li key={index} className="text-xl">
                {para.map((part, i) =>
                  part.bold ? (
                    <span className="font-medium" key={i}>
                      {part.text}
                    </span>
                  ) : (
                    <span key={i}>{part.text}</span>
                  )
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-xl font-bold">{TermsConditionContent.summary.heading}</h2>
          {TermsConditionContent.summary.paragraphs.map((para, index)=>(
            <p key={index} className="text-lg">{para}</p>
          ))}
        </div> */}

        <TermsTable></TermsTable>

        <div className="flex flex-col gap-3 mb-16">
          <h2 className="text-4xl font-extralight mb-4">
            {TermsConditionContent.ageEligibility.heading}
          </h2>
          {TermsConditionContent.ageEligibility.paragraphs.map(
            (para, index) => (
              <p key={index} className="text-xl">
                {para}
              </p>
            )
          )}
        </div>

        <div className="flex flex-col gap-3 mb-16">
          <h2 className="text-4xl font-extralight mb-4">
            {TermsConditionContent.nonCondidentiality.heading}
          </h2>
          {TermsConditionContent.nonCondidentiality.paragraphs.map(
            (para, index) => (
              <p key={index} className="text-xl">
                {para}
              </p>
            )
          )}
        </div>

        <div className="flex flex-col gap-8 mb-16">
          <h2 className="text-4xl font-extralight mb-4">
            {TermsConditionContent.userGenerated.heading}
          </h2>

          {Object.entries(TermsConditionContent.userGenerated).map(
            ([key, section], index) =>
              key !== 'heading' && (
                <div key={index} className={key}>
                  <div className="text-xl font-bold mb-4">
                    {section.heading}
                  </div>
                  <ul className="ml-10 list-disc pl-5">
                    {section.pointers.map((pointer, i) => (
                      <li key={i} className="text-xl">
                        {pointer}
                      </li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>

        <div className="flex flex-col gap-3 mb-16">
          <h2 className="text-4xl font-extralight mb-4">
            {TermsConditionContent.intellectualPropertyRights.heading}
          </h2>
          {TermsConditionContent.intellectualPropertyRights.paragraphs.map(
            (para, index) => (
              <p key={index} className="text-xl">
                {para}
              </p>
            )
          )}
        </div>

        <div className="flex flex-col gap-6 mb-16">
          <h2 className="text-4xl font-extralight mb-4">
            {TermsConditionContent.ideaEvaluation.heading}
          </h2>
          {TermsConditionContent.ideaEvaluation.paragraphs.map(
            (para, index) => (
              <p key={index} className="text-xl">
                {para}
              </p>
            )
          )}
          <div className="selectionProcess">
            <div className="text-xl font-bold">Selection Process:</div>
            <div className="text-xl">
              {TermsConditionContent.ideaEvaluation.selectionProcess}
            </div>
          </div>

          <div className="Examples">
            <div className="text-xl font-bold">
              {' '}
              Examples of Ideas and suggestions that Dev Launchers will not be
              considered are:
            </div>
            <ul className="ml-10 list-disc pl-5">
              {TermsConditionContent.ideaEvaluation.subPointers.map(
                (pointer, index) => (
                  <li key={index} className="text-xl">
                    {pointer}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-16">
          <h2 className="text-4xl font-extralight mb-4">
            {TermsConditionContent.consulting.heading}
          </h2>
          {TermsConditionContent.consulting.paragraphs.map((para, index) => (
            <p key={index} className="text-xl">
              {para}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-3 mb-16">
          <h2 className="text-4xl font-extralight mb-4">
            {TermsConditionContent.indemnity.heading}
          </h2>
          {TermsConditionContent.indemnity.paragraphs.map((para, index) => (
            <p key={index} className="text-xl mb-4">
              {para}
            </p>
          ))}
          <ul className="ml-10 list-disc pl-5">
            {TermsConditionContent.indemnity.subPointers.map(
              (pointer, index) => (
                <li key={index} className="text-xl">
                  {pointer}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="flex flex-col gap-3 mb-16">
          <h2 className="text-4xl font-extralight mb-4">
            {TermsConditionContent.changeToTerms.heading}
          </h2>
          {TermsConditionContent.changeToTerms.paragraphs.map((para, index) => (
            <p key={index} className="text-xl">
              {para}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default TermsConditionPage;
