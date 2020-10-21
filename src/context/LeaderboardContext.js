import React from "react";
import Tabletop from "tabletop";
import createUseContext from "constate"; // State Context Object Creator

// Built from this article: https://www.sitepoint.com/replace-redux-react-hooks-context-api/

// Step 1: Create a custom hook that contains your state and actions
function useLeaderboard() {
  const [leaderboard, setLeaderboard] = React.useState({});

  React.useEffect(() => {
    Tabletop.init({
      // https://docs.google.com/spreadsheets/d/e/2PACX-1vQfJccD-2qd8eVQ6BPIc3EbbBUcTcxIUAxNub31QrWalpfExtTccMBYORQoFqPcxt_HRDuWLT9KXwN0/pubhtml
      // https://docs.google.com/spreadsheets/d/1ukOl5lCKF8eXiVgjLgFqDzmdudjik5H_rnws8jPFyJ0/edit?usp=sharing
      key: "1ukOl5lCKF8eXiVgjLgFqDzmdudjik5H_rnws8jPFyJ0",
      callback: googleData => {
        setLeaderboard(googleData.students.elements);
      },
      simpleSheet: false
    });
  }, []);

  return { leaderboard };
}

// Step 2: Declare your context state object to share the state with other components
export const useLeaderboardContext = createUseContext(useLeaderboard);
