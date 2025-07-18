import React from 'react';
import { atoms } from '@devlaunchers/components/components';

const TermsTable = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md rounded-xl mb-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 hidden sm:table">
          <thead className="text-gray-700 uppercase bg-[#F0EDEE]">
            <tr>
              <th scope="col" className="px-6 py-3">
                <atoms.Typography
                  as="span"
                  variant="primary"
                  size="body_base"
                  textWeight="bold"
                >
                  Section
                </atoms.Typography>
              </th>
              <th scope="col" className="px-6 py-3">
                <atoms.Typography
                  as="span"
                  variant="primary"
                  size="body_base"
                  textWeight="bold"
                >
                  What can you find there?
                </atoms.Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th scope="row" className="px-6 py-4 whitespace-nowrap">
                <a href="#age-eligibility" className="text-[#3A7CA5] underline">
                  <atoms.Typography
                    as="span"
                    variant="primary"
                    size="body_base"
                    textWeight="medium"
                  >
                    Age Eligibility
                  </atoms.Typography>
                </a>
              </th>
              <td className="px-6 py-4">
                <atoms.Typography
                  as="span"
                  variant="secondary"
                  size="body_base"
                >
                  How old do you have to be to use our platform?
                </atoms.Typography>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th scope="row" className="px-6 py-4 whitespace-nowrap">
                <a
                  href="#non-confidentiality"
                  className="text-[#3A7CA5] underline"
                >
                  <atoms.Typography
                    as="span"
                    variant="primary"
                    size="body_base"
                    textWeight="medium"
                  >
                    Non-confidentiality
                  </atoms.Typography>
                </a>
              </th>
              <td className="px-6 py-4">
                <atoms.Typography
                  as="span"
                  variant="secondary"
                  size="body_base"
                >
                  This section warns you about not submitting confidential
                  information.
                </atoms.Typography>
              </td>
            </tr>
            <tr className="bg-white">
              <th scope="row" className="px-6 py-4 whitespace-nowrap">
                <a href="#user-generated" className="text-[#3A7CA5] underline">
                  <atoms.Typography
                    as="span"
                    variant="primary"
                    size="body_base"
                    textWeight="medium"
                  >
                    User-Generated Content
                  </atoms.Typography>
                </a>
              </th>
              <td className="px-6 py-4">
                <atoms.Typography
                  as="span"
                  variant="secondary"
                  size="body_base"
                >
                  You own the content you submit on Dev Launchers. However, you
                  have some responsibilities regarding it, and we reserve some
                  rights about it.
                </atoms.Typography>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <th scope="row" className="px-6 py-4 whitespace-nowrap">
                <a
                  href="#i-property-rights"
                  className="text-[#3A7CA5] underline"
                >
                  <atoms.Typography
                    as="span"
                    variant="primary"
                    size="body_base"
                    textWeight="medium"
                  >
                    Intellectual Property Rights
                  </atoms.Typography>
                </a>
              </th>
              <td className="px-6 py-4">
                <atoms.Typography
                  as="span"
                  variant="secondary"
                  size="body_base"
                >
                  Talks about your understanding that you must seek appropriate
                  legal protection for your IP Rights.
                </atoms.Typography>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <th scope="row" className="px-6 py-4 whitespace-nowrap">
                <a href="#idea-evaluation" className="text-[#3A7CA5] underline">
                  <atoms.Typography
                    as="span"
                    variant="primary"
                    size="body_base"
                    textWeight="medium"
                  >
                    Idea evaluation and approval
                  </atoms.Typography>
                </a>
              </th>
              <td className="px-6 py-4">
                <atoms.Typography
                  as="span"
                  variant="secondary"
                  size="body_base"
                >
                  Talks about how Dev launchers IdeaSpace reviews, evaluates and
                  selects ideas and what we aren't obligated to provide to idea
                  owners.
                </atoms.Typography>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <th scope="row" className="px-6 py-4 whitespace-nowrap">
                <a href="#indemnity" className="text-[#3A7CA5] underline">
                  <atoms.Typography
                    as="span"
                    variant="primary"
                    size="body_base"
                    textWeight="medium"
                  >
                    Indemnity
                  </atoms.Typography>
                </a>
              </th>
              <td className="px-6 py-4">
                <atoms.Typography
                  as="span"
                  variant="secondary"
                  size="body_base"
                >
                  You will defend (at our request), indemnify and hold harmless
                  us from and against any claim by a third party related to your
                  use of the terms and conditions or your violation of any law
                  or rights of any third party, or ©
                </atoms.Typography>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <th scope="row" className="px-6 py-4 whitespace-nowrap">
                <a href="#changeToTerms" className="text-[#3A7CA5] underline">
                  <atoms.Typography
                    as="span"
                    variant="primary"
                    size="body_base"
                    textWeight="medium"
                  >
                    Changes to Terms
                  </atoms.Typography>
                </a>
              </th>
              <td className="px-6 py-4">
                <atoms.Typography
                  as="span"
                  variant="secondary"
                  size="body_base"
                >
                  We may modify this agreement, but we will use reasonable
                  efforts to notify you of the changes.
                </atoms.Typography>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full text-sm text-gray-500 rounded-xl text-left rtl:text-righ sm:hidden">
          <thead className="text-gray-700 uppercase bg-[#F0EDEE]">
            <tr>
              <th scope="col" className="px-6 py-3">
                <atoms.Typography
                  as="span"
                  variant="primary"
                  size="body_base"
                  textWeight="bold"
                >
                  Section
                </atoms.Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b flex flex-col">
              <th scope="row" className="px-6 py-4 whitespace-nowrap">
                <a href="#age-eligibility" className="text-[#3A7CA5] underline">
                  <atoms.Typography
                    as="span"
                    variant="primary"
                    size="body_base"
                    textWeight="medium"
                  >
                    Age Eligibility
                  </atoms.Typography>
                </a>
              </th>
              <td className="px-6 py-4">
                <atoms.Typography
                  as="span"
                  variant="secondary"
                  size="body_base"
                >
                  How old do you have to be to use our platform?
                </atoms.Typography>
              </td>
            </tr>
            <tr className="bg-white border-b flex flex-col">
              <th scope="row" className="px-6 py-4 whitespace-nowrap">
                <a
                  href="#non-confidentiality"
                  className="text-[#3A7CA5] underline"
                >
                  <atoms.Typography
                    as="span"
                    variant="primary"
                    size="body_base"
                    textWeight="medium"
                  >
                    Non-confidentiality
                  </atoms.Typography>
                </a>
              </th>
              <td className="px-6 py-4">
                <atoms.Typography
                  as="span"
                  variant="secondary"
                  size="body_base"
                >
                  This section warns you about not submitting confidential
                  information.
                </atoms.Typography>
              </td>
            </tr>
            <tr className="bg-white border-b flex flex-col">
              <th scope="row" className="px-6 py-4 whitespace-nowrap">
                <a href="#user-generated" className="text-[#3A7CA5] underline">
                  <atoms.Typography
                    as="span"
                    variant="primary"
                    size="body_base"
                    textWeight="medium"
                  >
                    User-Generated Content
                  </atoms.Typography>
                </a>
              </th>
              <td className="px-6 py-4">
                <atoms.Typography
                  as="span"
                  variant="secondary"
                  size="body_base"
                >
                  You own the content you submit on Dev Launchers. However, you
                  have some responsibilities regarding it, and we reserve some
                  rights about it.
                </atoms.Typography>
              </td>
            </tr>

            <tr className="bg-white border-b flex flex-col">
              <th scope="row" className="px-6 py-4 whitespace-nowrap">
                <a
                  href="#i-property-rights"
                  className="text-[#3A7CA5] underline"
                >
                  <atoms.Typography
                    as="span"
                    variant="primary"
                    size="body_base"
                    textWeight="medium"
                  >
                    Intellectual Property Rights
                  </atoms.Typography>
                </a>
              </th>
              <td className="px-6 py-4">
                <atoms.Typography
                  as="span"
                  variant="secondary"
                  size="body_base"
                >
                  Talks about your understanding that you must seek appropriate
                  legal protection for your IP Rights.
                </atoms.Typography>
              </td>
            </tr>

            <tr className="bg-white border-b flex flex-col">
              <th scope="row" className="px-6 py-4 whitespace-nowrap">
                <a href="#idea-evaluation" className="text-[#3A7CA5] underline">
                  <atoms.Typography
                    as="span"
                    variant="primary"
                    size="body_base"
                    textWeight="medium"
                  >
                    Idea evaluation and approval
                  </atoms.Typography>
                </a>
              </th>
              <td className="px-6 py-4">
                <atoms.Typography
                  as="span"
                  variant="secondary"
                  size="body_base"
                >
                  Talks about how Dev launchers IdeaSpace reviews, evaluates and
                  selects ideas and what we aren't obligated to provide to idea
                  owners.
                </atoms.Typography>
              </td>
            </tr>

            <tr className="bg-white border-b flex flex-col">
              <th scope="row" className="px-6 py-4 whitespace-nowrap">
                <a href="#indemnity" className="text-[#3A7CA5] underline">
                  <atoms.Typography
                    as="span"
                    variant="primary"
                    size="body_base"
                    textWeight="medium"
                  >
                    Indemnity
                  </atoms.Typography>
                </a>
              </th>
              <td className="px-6 py-4">
                <atoms.Typography
                  as="span"
                  variant="secondary"
                  size="body_base"
                >
                  You will defend (at our request), indemnify and hold harmless
                  us from and against any claim by a third party related to your
                  use of the terms and conditions or your violation of any law
                  or rights of any third party, or ©
                </atoms.Typography>
              </td>
            </tr>

            <tr className="bg-white border-b flex flex-col">
              <th scope="row" className="px-6 py-4 whitespace-nowrap">
                <a href="#changeToTerms" className="text-[#3A7CA5] underline">
                  <atoms.Typography
                    as="span"
                    variant="primary"
                    size="body_base"
                    textWeight="medium"
                  >
                    Changes to Terms
                  </atoms.Typography>
                </a>
              </th>
              <td className="px-6 py-4">
                <atoms.Typography
                  as="span"
                  variant="secondary"
                  size="body_base"
                >
                  We may modify this agreement, but we will use reasonable
                  efforts to notify you of the changes.
                </atoms.Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TermsTable;
