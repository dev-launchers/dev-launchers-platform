import React from 'react';
import TermsConditionContent from './TermsConditionContent';
import TermsTable from './TermsTable';
import BackButton from '../../common/BackButton/BackButton';
import { atoms } from '@devlaunchers/components/components';

const TermsConditionLayout = () => {
  return (
    <>
      <div className="max-w-8xl px-[20px] sm:px-[24px] md:px-[32px] lg:px-[48px] py-10">
        {/* <BackButton buttonType="confirm"/> */}
        <div className="flex flex-col gap-[10px] mb-8">
          <atoms.Typography
            as="h2"
            variant="primary"
            size="xl4"
            textWeight="light"
          >
            {TermsConditionContent.introduction.heading}
          </atoms.Typography>
          <div>
            {TermsConditionContent.introduction.paragraphs.map(
              (para, index) => (
                <atoms.Typography
                  key={index}
                  as="p"
                  variant="secondary"
                  size="body_base"
                >
                  {para}
                </atoms.Typography>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col gap-[6px] mb-8">
          <atoms.Typography
            as="h3"
            variant="primary"
            size="xl2"
            textWeight="light"
          >
            {TermsConditionContent.definitions.heading}
          </atoms.Typography>
          <ul className="ml-3 list-disc pl-5">
            {TermsConditionContent.definitions.paragraphs.map((para, index) => (
              <li key={index}>
                <atoms.Typography
                  as="span"
                  variant="secondary"
                  size="body_base"
                >
                  {para.map((part, i) =>
                    part.bold ? (
                      <span className="font-medium" key={i}>
                        {part.text}
                      </span>
                    ) : (
                      <span key={i}>{part.text}</span>
                    )
                  )}
                </atoms.Typography>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-[6px] mb-8">
          <atoms.Typography
            as="h3"
            variant="primary"
            size="xl2"
            textWeight="light"
          >
            Summary
          </atoms.Typography>
          <atoms.Typography as="p" variant="secondary" size="body_base">
            You understand and agree to be bound to the following terms and
            conditions when you submit your idea, use and collaborate in Dev
            Launchers website.
          </atoms.Typography>
        </div>

        <TermsTable />

        <div className="flex flex-col gap-[10px] mb-8">
          <atoms.Typography
            as="h2"
            variant="primary"
            size="xl4"
            textWeight="light"
            id="age-eligibility"
          >
            {TermsConditionContent.ageEligibility.heading}
          </atoms.Typography>
          <div className="flex flex-col">
            {TermsConditionContent.ageEligibility.paragraphs.map(
              (para, index) => (
                <atoms.Typography
                  key={index}
                  as="p"
                  variant="secondary"
                  size="body_base"
                >
                  {para}
                </atoms.Typography>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col gap-[10px] mb-8">
          <atoms.Typography
            as="h2"
            variant="primary"
            size="xl4"
            textWeight="light"
            id="non-confidentiality"
          >
            {TermsConditionContent.nonCondidentiality.heading}
          </atoms.Typography>
          <div className="flex flex-col">
            {TermsConditionContent.nonCondidentiality.paragraphs.map(
              (para, index) => (
                <atoms.Typography
                  key={index}
                  as="p"
                  variant="secondary"
                  size="body_base"
                >
                  {para}
                </atoms.Typography>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col gap-[10px] mb-8">
          <atoms.Typography
            as="h2"
            variant="primary"
            size="xl4"
            textWeight="light"
            id="user-generated"
          >
            {TermsConditionContent.userGenerated.heading}
          </atoms.Typography>

          <div className="flex flex-col gap-[10px]">
            {Object.entries(TermsConditionContent.userGenerated).map(
              ([key, section], index) =>
                key !== 'heading' && (
                  <div key={index} className={key}>
                    <atoms.Typography
                      as="h3"
                      variant="primary"
                      size="xl2"
                      textWeight="light"
                      className="mb-[6px]"
                    >
                      {section.heading}
                    </atoms.Typography>
                    <ul className="ml-3 list-disc pl-5">
                      {section.pointers.map((pointer, i) => (
                        <li key={i}>
                          <atoms.Typography
                            as="span"
                            variant="secondary"
                            size="body_base"
                          >
                            {pointer}
                          </atoms.Typography>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </div>
        </div>

        <div className="flex flex-col gap-[10px] mb-8">
          <atoms.Typography
            as="h2"
            variant="primary"
            size="xl4"
            textWeight="light"
            id="i-property-rights"
          >
            {TermsConditionContent.intellectualPropertyRights.heading}
          </atoms.Typography>
          <div className="flex flex-col">
            {TermsConditionContent.intellectualPropertyRights.paragraphs.map(
              (para, index) => (
                <atoms.Typography
                  key={index}
                  as="p"
                  variant="secondary"
                  size="body_base"
                >
                  {para}
                </atoms.Typography>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <atoms.Typography
            as="h2"
            variant="primary"
            size="xl4"
            textWeight="light"
            id="idea-evaluation"
            className="mb-[10px]"
          >
            {TermsConditionContent.ideaEvaluation.heading}
          </atoms.Typography>
          <ul className="mb-[10px]">
            {TermsConditionContent.ideaEvaluation.paragraphs.map(
              (para, index) => (
                <li key={index} className="ml-8 list-disc">
                  <atoms.Typography
                    as="span"
                    variant="secondary"
                    size="body_base"
                  >
                    {para}
                  </atoms.Typography>
                </li>
              )
            )}
          </ul>
          <div className="selectionProcess mb-[10px]">
            <atoms.Typography
              as="h3"
              variant="primary"
              size="xl2"
              textWeight="light"
              className="mb-[6px]"
            >
              Selection Process:
            </atoms.Typography>
            <atoms.Typography as="p" variant="secondary" size="body_base">
              {TermsConditionContent.ideaEvaluation.selectionProcess}
            </atoms.Typography>
          </div>

          <div className="Examples">
            <atoms.Typography
              as="h3"
              variant="primary"
              size="xl2"
              textWeight="light"
              className="mb-[6px]"
            >
              Examples of Ideas and suggestions that Dev Launchers will not be
              considered are:
            </atoms.Typography>
            <ul className="ml-3 list-disc pl-5">
              {TermsConditionContent.ideaEvaluation.subPointers.map(
                (pointer, index) => (
                  <li key={index}>
                    <atoms.Typography
                      as="span"
                      variant="secondary"
                      size="body_base"
                    >
                      {pointer}
                    </atoms.Typography>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] mb-8">
          <atoms.Typography
            as="h2"
            variant="primary"
            size="xl4"
            textWeight="light"
            id="consulting"
          >
            {TermsConditionContent.consulting.heading}
          </atoms.Typography>
          {TermsConditionContent.consulting.paragraphs.map((para, index) => (
            <atoms.Typography
              key={index}
              as="p"
              variant="secondary"
              size="body_base"
            >
              {para}
            </atoms.Typography>
          ))}
        </div>

        <div className="flex flex-col gap-[10px] mb-8">
          <atoms.Typography
            as="h2"
            variant="primary"
            size="xl4"
            textWeight="light"
            id="indemnity"
          >
            {TermsConditionContent.indemnity.heading}
          </atoms.Typography>
          <div>
            {TermsConditionContent.indemnity.paragraphs.map((para, index) => (
              <atoms.Typography
                key={index}
                as="p"
                variant="secondary"
                size="body_base"
              >
                {para}
              </atoms.Typography>
            ))}
            <ul className="ml-3 list-disc pl-5">
              {TermsConditionContent.indemnity.subPointers.map(
                (pointer, index) => (
                  <li key={index}>
                    <atoms.Typography
                      as="span"
                      variant="secondary"
                      size="body_base"
                    >
                      {pointer}
                    </atoms.Typography>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] mb-[140px]">
          <atoms.Typography
            as="h2"
            variant="primary"
            size="xl4"
            textWeight="light"
            id="changeToTerms"
          >
            {TermsConditionContent.changeToTerms.heading}
          </atoms.Typography>
          <div className="flex flex-col gap-1">
            {TermsConditionContent.changeToTerms.paragraphs.map(
              (para, index) => (
                <atoms.Typography
                  key={index}
                  as="p"
                  variant="secondary"
                  size="body_base"
                >
                  {para}
                </atoms.Typography>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditionLayout;
