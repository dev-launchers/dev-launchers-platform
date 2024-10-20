import React from 'react';

const TermsTable = () => {
  return (
    <>
      <div class="relative overflow-x-auto shadow-md rounded-xl mb-16">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 text-xl hidden sm:table">
          <thead class="text-xl text-gray-700 uppercase bg-[#F0EDEE]">
            <tr>
              <th scope="col" class="px-6 py-3 font-extrabold">
                Section
              </th>
              <th scope="col" class="px-6 py-3 font-extrabold">
                What can you find there?
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                <a href="#age-eligibility" className="text-[#3A7CA5] underline">
                  Age Eligibility
                </a>
              </th>
              <td class="px-6 py-4 text-gray-800">
                How old do you have to be to use our platform?
              </td>
            </tr>
            <tr class="bg-white border-b ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <a
                  href="#non-confidentiality"
                  className="text-[#3A7CA5] underline"
                >
                  Non-confidentiality
                </a>
              </th>
              <td class="px-6 py-4 text-gray-800">
                This section warns you about not submitting confidential
                information.
              </td>
            </tr>
            <tr class="bg-white">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <a href="#user-generated" className="text-[#3A7CA5] underline">
                  User-Generated Content
                </a>
              </th>
              <td class="px-6 py-4 text-gray-800">
                You own the content you submit on Dev Launchers. However, you
                have some responsibilities regarding it, and we reserve some
                rights about it.
              </td>
            </tr>

            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <a
                  href="#i-property-rights"
                  className="text-[#3A7CA5] underline"
                >
                  Intellectual Property Rights
                </a>
              </th>
              <td class="px-6 py-4 text-gray-800">
                Talks about your understanding that you must seek appropriate
                legal protection for your IP Rights.
              </td>
            </tr>

            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <a href="#idea-evaluation" className="text-[#3A7CA5] underline">
                  Idea evaluation and approval
                </a>
              </th>
              <td class="px-6 py-4 text-gray-800">
                Talks about how Dev launchers IdeaSpace reviews, evaluates and
                selects ideas and what we aren’t obligated to provide to idea
                owners.
              </td>
            </tr>

            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <a href="#indemnity" className="text-[#3A7CA5] underline">
                  Indemnity
                </a>
              </th>
              <td class="px-6 py-4 text-gray-800">
                You will defend (at our request), indemnify and hold harmless us
                from and against any claim by a third party related to your use
                of the terms and conditions or your violation of any law or
                rights of any third party, or © 
              </td>
            </tr>

            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <a href="#changeToTerms" className="text-[#3A7CA5] underline">
                  Changes to Terms
                </a>
              </th>
              <td class="px-6 py-4 text-gray-800">
                We may modify this agreement, but we will use reasonable efforts
                to notify you of the changes.
              </td>
            </tr>
          </tbody>
        </table>

        <table class="w-full text-sm text-gray-500 rounded-xl  text-left rtl:text-righ text-xl sm:hidden">
          <thead class="text-xl text-gray-700 uppercase bg-[#F0EDEE]">
            <tr>
              <th scope="col" class="px-6 py-3 font-extrabold">
                Section
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b flex flex-col">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                <a href="#age-eligibility" className="text-[#3A7CA5] underline">
                  Age Eligibility
                </a>
              </th>
              <td class="px-6 py-4 text-gray-800">
                How old do you have to be to use our platform?
              </td>
            </tr>
            <tr class="bg-white border-b flex flex-col">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <a
                  href="#non-confidentiality"
                  className="text-[#3A7CA5] underline"
                >
                  Non-confidentiality
                </a>
              </th>
              <td class="px-6 py-4 text-gray-800">
                This section warns you about not submitting confidential
                information.
              </td>
            </tr>
            <tr class="bg-white border-b flex flex-col">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <a href="#user-generated" className="text-[#3A7CA5] underline">
                  User-Generated Content
                </a>
              </th>
              <td class="px-6 py-4 text-gray-800">
                You own the content you submit on Dev Launchers. However, you
                have some responsibilities regarding it, and we reserve some
                rights about it.
              </td>
            </tr>

            <tr class="bg-white border-b flex flex-col">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <a
                  href="#i-property-rights"
                  className="text-[#3A7CA5] underline"
                >
                  Intellectual Property Rights
                </a>
              </th>
              <td class="px-6 py-4 text-gray-800">
                Talks about your understanding that you must seek appropriate
                legal protection for your IP Rights.
              </td>
            </tr>

            <tr class="bg-white border-b flex flex-col">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <a href="#idea-evaluation" className="text-[#3A7CA5] underline">
                  Idea evaluation and approval
                </a>
              </th>
              <td class="px-6 py-4 text-gray-800">
                Talks about how Dev launchers IdeaSpace reviews, evaluates and
                selects ideas and what we aren’t obligated to provide to idea
                owners.
              </td>
            </tr>

            <tr class="bg-white border-b flex flex-col">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <a href="#indemnity" className="text-[#3A7CA5] underline">
                  Indemnity
                </a>
              </th>
              <td class="px-6 py-4 text-gray-800">
                You will defend (at our request), indemnify and hold harmless us
                from and against any claim by a third party related to your use
                of the terms and conditions or your violation of any law or
                rights of any third party, or © 
              </td>
            </tr>

            <tr class="bg-white border-b flex flex-col">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <a href="#changeToTerms" className="text-[#3A7CA5] underline">
                  Changes to Terms
                </a>
              </th>
              <td class="px-6 py-4 text-gray-800">
                We may modify this agreement, but we will use reasonable efforts
                to notify you of the changes.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TermsTable;
