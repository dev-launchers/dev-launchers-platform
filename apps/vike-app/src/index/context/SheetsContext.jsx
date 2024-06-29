import React, { createContext, useState, useEffect, useContext } from 'react';

import createData from '../content/collections/createData.json';
import learnData from '../content/collections/learnData.json';

// Built from this article: https://www.sitepoint.com/replace-redux-react-hooks-context-api/

// Step 1: Create a custom context
const SheetsContext = createContext({
  learnPageData: {},
  createPageData: {},
});

// Step 2: Create a Provider component with state and logic
const SheetsProvider = ({ children }) => {
  const [learnPageData, setLearnPageData] = useState({});
  const [createPageData, setCreatePageData] = useState({});

  // sheetsDataToPageJSON() converts data from our google sheets format to our expected JSON format
  //  - when data is returned, store it in this context's state
  const sheetsDataToPageJSON = (sheetsElements) => {
    /*
     *  Converts data from a row based spreadsheet into a nested JSON object representing our page structure
     *  JSON Format:
     *    {
     *      tabName: {
     *        sectionName: {
     *          groupName: [
     *            entryObject1,
     *            entryObject2,
     *            ...
     *          ]
     *        },
     *        ...
     *      },
     *      ...
     *    }
     */
    const pageData = {};
    sheetsElements.forEach((element) => {
      if (element.isActive === 'TRUE') {
        const { tab } = element;
        const { section } = element;
        const { group } = element;
        const entryData = {
          id: element.id,
          title: element.title,
          description: element.description,
          href: element.url,
          imageSrc: element.imageSrc,
          attachments: element.attachments,
        };

        // if tab doesn't exist yet, create it
        if (!(tab in pageData)) pageData[tab] = {};
        // if section in this tab doesn't exist yet, create it
        if (!(section in pageData[tab])) pageData[tab][section] = {};
        // if group in this section doesn't exist yet, create it
        if (!(group in pageData[tab][section]))
          pageData[tab][section][group] = [];

        pageData[tab][section][group].push(entryData);
      }
    });
    return pageData;
  };

  // Fetch sheets data on component mount
  useEffect(() => {
    setLearnPageData(sheetsDataToPageJSON(learnData));
    setCreatePageData(sheetsDataToPageJSON(createData));
  }, []);

  return (
    <SheetsContext.Provider value={{ learnPageData, createPageData }}>
      {children}
    </SheetsContext.Provider>
  );
};

// Step 3: Create a hook to access context values
const useSheetsContext = () => {
  const context = useContext(SheetsContext);
  if (context === undefined) {
    throw new Error('useSheetsContext must be used within SheetsProvider');
  }
  return context;
};

export { SheetsProvider, useSheetsContext };
