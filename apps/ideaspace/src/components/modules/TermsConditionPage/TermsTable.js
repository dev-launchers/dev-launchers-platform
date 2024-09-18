import React from 'react';

const TermsTable = () => {
  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-xl mb-16 ">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white border-t ">
            Summary
            <p class="mt-1 text-sm font-normal text-gray-800 ">
              You understand and agree to be bound to the following terms and
              conditions when you submit your idea, use and collaborate in Dev
              Launchers website.
            </p>
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-[#F0EDEE]">
            <tr>
              <th scope="col" class="px-6 py-3">
                Section
              </th>
              <th scope="col" class="px-6 py-3">
                What can you find there?
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Age Eligibility
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
                Non-confidentiality
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
                User-Generated Content
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
                Intellectual Property Rights
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
                Idea evaluation and approval
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
                Indemnity
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
                Changes to Terms
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
