import React from 'react';

const TermsTable = () => {
  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-16 ">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Our products
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Browse a list of Flowbite products designed to help you work and
              play, stay organized, get answers, keep in touch, grow your
              business, and more.
            </p>
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Age Eligibility
              </th>
              <td class="px-6 py-4">
                How old do you have to be to use our platform?
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Non-confidentiality
              </th>
              <td class="px-6 py-4">
                This section warns you about not submitting confidential
                information.
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                User-Generated Content
              </th>
              <td class="px-6 py-4">
                You own the content you submit on Dev Launchers. However, you
                have some responsibilities regarding it, and we reserve some
                rights about it.
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Intellectual Property Rights
              </th>
              <td class="px-6 py-4">
                Talks about your understanding that you must seek appropriate
                legal protection for your IP Rights.
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Idea evaluation and approval
              </th>
              <td class="px-6 py-4">
                Talks about how Dev launchers IdeaSpace reviews, evaluates and
                selects ideas and what we aren’t obligated to provide to idea
                owners.
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Indemnity
              </th>
              <td class="px-6 py-4">
                You will defend (at our request), indemnify and hold harmless us
                from and against any claim by a third party related to your use
                of the terms and conditions or your violation of any law or
                rights of any third party, or © 
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Changes to Terms
              </th>
              <td class="px-6 py-4">
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
