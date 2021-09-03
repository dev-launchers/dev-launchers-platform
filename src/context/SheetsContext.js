import React from "react";
import constate from "constate"; // State Context Object Creator

import createData from "../content/collections/createData.json";
import learnData from "../content/collections/learnData.json";

// Built from this article: https://www.sitepoint.com/replace-redux-react-hooks-context-api/

// Step 1: Create a custom hook that contains your state and actions
function useSheets() {
  const [learnPageData, setLearnPageData] = React.useState({});
  const [createPageData, setCreatePageData] = React.useState({});

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
      if (element.isActive === "TRUE") {
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
  // Fetch sheets data using Tabletop when hook is initialized
  React.useEffect(() => {
    /*
    Tabletop.init({
      key: "1QV419fM2DHZM59mFK6eYYbYiq6bs4sBUpTwVZ_dZJNg",
      callback: (googleData) => {
        setLearnPageData(sheetsDataToPageJSON(googleData.learnPage.elements));
        setCreatePageData(sheetsDataToPageJSON(googleData.createPage.elements));
      },
      simpleSheet: false,
    });
    */

    setLearnPageData(sheetsDataToPageJSON(learnData));
    setCreatePageData(sheetsDataToPageJSON(createData));
  }, []);

  return { learnPageData, createPageData };
}

// Step 2: Declare your context state object to share the state with other components
const [SheetsProvider, useSheetsContext] = constate(useSheets);
export { SheetsProvider, useSheetsContext };
