import React from 'react';
import TermsConditionContent from './TermsConditionContent';
import TermsTable from './TermsTable';

const TermsConditionLayout = () => {
  return (
    <>
      <div className="max-w-8xl px-12 sm:px-20 py-10">
        <div className="flex flex-col gap-3 mb-16">
          <h2 className="text-4xl font-extralight mb-4">
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

        <TermsTable></TermsTable>

        <div className="flex flex-col gap-3 mb-16">
          <h2 id="age-eligibility" className="text-4xl font-extralight mb-4">
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
          <h2
            id="non-confidentiality"
            className="text-4xl font-extralight mb-4"
          >
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
          <h2 id="user-generated" className="text-4xl font-extralight mb-4">
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
                      <li key={i} className="text-xl mb-4">
                        {pointer}
                      </li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>

        <div className="flex flex-col gap-3 mb-16">
          <h2 id="i-property-rights" className="text-4xl font-extralight mb-4">
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
          <h2 id="idea-evaluation" className="text-4xl font-extralight mb-4">
            {TermsConditionContent.ideaEvaluation.heading}
          </h2>
          <ul>
            {TermsConditionContent.ideaEvaluation.paragraphs.map(
              (para, index) => (
                <li key={index} className="ml-10 text-xl list-disc">
                  {para}
                </li>
              )
            )}
          </ul>
          <div className="selectionProcess">
            <div className="text-xl font-bold mb-4">Selection Process:</div>
            <div className="text-xl">
              {TermsConditionContent.ideaEvaluation.selectionProcess}
            </div>
          </div>

          <div className="Examples">
            <div className="text-xl font-bold mb-4">
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
          <h2 id="consulting" className="text-4xl font-extralight mb-4">
            {TermsConditionContent.consulting.heading}
          </h2>
          {TermsConditionContent.consulting.paragraphs.map((para, index) => (
            <p key={index} className="text-xl">
              {para}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-3 mb-16">
          <h2 id="indemnity" className="text-4xl font-extralight mb-4">
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
          <h2 id="changeToTerms" className="text-4xl font-extralight mb-4">
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
};

export default TermsConditionLayout;
