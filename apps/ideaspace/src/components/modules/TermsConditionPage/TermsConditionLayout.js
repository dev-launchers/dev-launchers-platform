import React from 'react';
import TermsConditionContent from './TermsConditionContent';
import TermsTable from './TermsTable';
import BackButton from '../../common/BackButton/BackButton';

const TermsConditionLayout = () => {
  return (
    <>
      <div className="max-w-8xl px-[20px] sm:px-[24px] md:px-[32px] lg:px-[48px] py-10">
        {/* <BackButton buttonType="confirm"/> */}
        <div className="flex flex-col gap-[10px] mb-8">
          <h2 className="text-[32px] font-light leading-[48px]">
            {TermsConditionContent.introduction.heading}
          </h2>
          <div>
            {TermsConditionContent.introduction.paragraphs.map(
              (para, index) => (
                <p key={index} className="text-[16px] leading-[24px]  ">
                  {para}
                </p>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col gap-[6px] mb-8">
          <h2 className="text-[20px] leading-[28px] font-light">
            {TermsConditionContent.definitions.heading}
          </h2>
          <ul className="ml-3 list-disc pl-5">
            {TermsConditionContent.definitions.paragraphs.map((para, index) => (
              <li key={index} className="text-[16px] leading-[24px]">
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

        <div className="flex flex-col gap-[6px] mb-8">
          <h2 className="text-[20px] leading=[28px] font-light">Summary</h2>
          <p className="text-[16px] leading=[24px] font-normal">
            You understand and agree to be bound to the following terms and
            conditions when you submit your idea, use and collaborate in Dev
            Launchers website.
          </p>
        </div>

        <TermsTable></TermsTable>

        <div className="flex flex-col gap-[10px] mb-8">
          <h2
            id="age-eligibility"
            className="text-[32px] leading-[48px] font-light"
          >
            {TermsConditionContent.ageEligibility.heading}
          </h2>
          <div className="flex flex-col">
            {TermsConditionContent.ageEligibility.paragraphs.map(
              (para, index) => (
                <p key={index} className="text-[16px] leading-[24px]">
                  {para}
                </p>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col gap-[10px] mb-8">
          <h2
            id="non-confidentiality"
            className="text-[32px] leading-[48px] font-light"
          >
            {TermsConditionContent.nonCondidentiality.heading}
          </h2>
          <div className="flex flex-col">
            {TermsConditionContent.nonCondidentiality.paragraphs.map(
              (para, index) => (
                <p key={index} className="text-[16px] leading-[24px]">
                  {para}
                </p>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col gap-[10px] mb-8">
          <h2
            id="user-generated"
            className="text-[32px] leading-[48px] font-light"
          >
            {TermsConditionContent.userGenerated.heading}
          </h2>

          <div className="flex flex-col gap-[10px]">
            {Object.entries(TermsConditionContent.userGenerated).map(
              ([key, section], index) =>
                key !== 'heading' && (
                  <div key={index} className={key}>
                    <div className="text-[20px] leading-[28px] font-light mb-[6px]">
                      {section.heading}
                    </div>
                    <ul className="ml-3 list-disc pl-5">
                      {section.pointers.map((pointer, i) => (
                        <li
                          key={i}
                          className="text-[16px] leading-[24px] font-normal"
                        >
                          {pointer}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </div>
        </div>

        <div className="flex flex-col gap-[10px] mb-8">
          <h2
            id="i-property-rights"
            className="text-[32px] leading-[48px] font-light"
          >
            {TermsConditionContent.intellectualPropertyRights.heading}
          </h2>
          <div className="flex flex-col">
            {TermsConditionContent.intellectualPropertyRights.paragraphs.map(
              (para, index) => (
                <p
                  key={index}
                  className="text-[16px] leading-[24px] font-normal"
                >
                  {para}
                </p>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <h2
            id="idea-evaluation"
            className="text-[32px] leading-[48px] font-light mb-[10px]"
          >
            {TermsConditionContent.ideaEvaluation.heading}
          </h2>
          <ul className="mb-[10px]">
            {TermsConditionContent.ideaEvaluation.paragraphs.map(
              (para, index) => (
                <li
                  key={index}
                  className="ml-8 list-disc text-[16px] leading-[24px] font-normal"
                >
                  {para}
                </li>
              )
            )}
          </ul>
          <div className="selectionProcess mb-[10px]">
            <div className="text-[20px] leading-[28px] font-light mb-[6px]">
              Selection Process:
            </div>
            <div className="text-[16px] leading-[24px] font-normal">
              {TermsConditionContent.ideaEvaluation.selectionProcess}
            </div>
          </div>

          <div className="Examples">
            <div className="text-[20px] leading-[28px] font-light mb-[6px]">
              {' '}
              Examples of Ideas and suggestions that Dev Launchers will not be
              considered are:
            </div>
            <ul className="ml-3 list-disc pl-5">
              {TermsConditionContent.ideaEvaluation.subPointers.map(
                (pointer, index) => (
                  <li
                    key={index}
                    className="text-[16px] leading-[24px] font-normal"
                  >
                    {pointer}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] mb-8">
          <h2 id="consulting" className="text-[32px] leading-[48px] font-light">
            {TermsConditionContent.consulting.heading}
          </h2>
          {TermsConditionContent.consulting.paragraphs.map((para, index) => (
            <p key={index} className="text-[16px] leading-[24px] font-normal">
              {para}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-[10px] mb-8">
          <h2 id="indemnity" className="text-[32px] leading-[48px] font-light">
            {TermsConditionContent.indemnity.heading}
          </h2>
          <div>
            {TermsConditionContent.indemnity.paragraphs.map((para, index) => (
              <p key={index} className="text-[16px] leading-[24px] font-normal">
                {para}
              </p>
            ))}
            <ul className="ml-3 list-disc pl-5">
              {TermsConditionContent.indemnity.subPointers.map(
                (pointer, index) => (
                  <li
                    key={index}
                    className="text-[16px] leading-[24px] font-normal"
                  >
                    {pointer}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] mb-[140px]">
          <h2
            id="changeToTerms"
            className="text-[32px] leading-[48px] font-light"
          >
            {TermsConditionContent.changeToTerms.heading}
          </h2>
          <div className="flex flex-col gap-1">
            {TermsConditionContent.changeToTerms.paragraphs.map(
              (para, index) => (
                <p
                  key={index}
                  className="text-[16px] leading-[24px] font-normal"
                >
                  {para}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditionLayout;
