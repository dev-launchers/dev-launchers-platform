import axios from "axios";
import React from "react";
import { withTheme } from "styled-components";
import Section from "../Section";
import PercentageBar from "./components/PercentageBar";

import { FlexBoxVerticalWrapper, Descript } from "./StyledSessions";

// import { env } from "../../../../../utils/EnvironmentVariables";
const Sessions = ({ calendarId }) => {
  React.useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/users/me/calendarList/${calendarId}?key=[YOUR_API_KEY]`
      )
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <>
      <Section
        bgColor="#3C3B3C"
        Title="Sessions"
        Content={
          <>
            <Descript>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              quis eleifend nunc, non accumsan lorem. Nulla at rutrum odio, quis
              laoreet sem. Aliquam venenatis, ipsum eu consequat ultrices, dui
              dui posuere urna.
            </Descript>

            <FlexBoxVerticalWrapper>
              <PercentageBar percentage="75" />
              <PercentageBar percentage="75" />
              <PercentageBar percentage="100" />
              <PercentageBar percentage="100" />
            </FlexBoxVerticalWrapper>
          </>
        }
      />
    </>
  );
};

export default withTheme(Sessions);
