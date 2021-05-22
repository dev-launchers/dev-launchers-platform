import React from "react";
import { ConvertCentralTime } from "../../../../utils/TimeZoneConverter";
import { TimeLineContainer, TimeStamp } from "./StyledLabCampus";

import theme from "../../../../styles/theme.js";

const TimeLine = ({ events, currentTime }) => {
  return (
    <TimeLineContainer>
      {events
        .filter(
          events =>
            ConvertCentralTime(events.startWeekDay) == currentTime.weekday
        )
        .map(
          (
            {
              title,
              startWeekDay,
              startHour,
              startMinute,
              endWeekDay,
              endHour,
              endMinute,
              location
            },
            i
          ) => {
            const eventStart = ConvertCentralTime(
              startWeekDay,
              startHour,
              startMinute
            );
            const eventEnd = ConvertCentralTime(endWeekDay, endHour, endMinute);
            return (
              <TimeStamp key={i}>
                <div
                  style={{
                    fontWeight: "bold",
                    fontFamily: theme.fonts.headline,
                    borderBottom: `.2rem solid ${theme.colors.ACCENT_2}`,
                    paddingBottom: ".2rem",
                    marginBottom: ".4rem"
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontSize: "1.25rem"
                  }}
                >
                  [{eventStart.toFormat("t")}
                  {" - "}
                  {eventEnd.toFormat("t")}]
                </div>
                <div
                  style={{
                    fontSize: "1.1rem"
                  }}
                >
                  {location} Room
                </div>
              </TimeStamp>
            );
          }
        )}
    </TimeLineContainer>
  );
};

export default TimeLine;
