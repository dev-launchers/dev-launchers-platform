import React from "react";
import { ConvertCentralTime } from "../../../../utils/TimeZoneConverter";
import { TimeLineContainer, TimeStamp } from "./StyledLabCampus";
const TimeLine = ({ events, currentTime }) => {
  return (
    <TimeLineContainer>
      {events
        .filter(
          events => ConvertCentralTime(events.startWeekDay) == currentTime.weekday
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
                {title} <br />
                {eventStart.toFormat("t")}
                {" - "}
                {eventEnd.toFormat("t")} <br />
                {location} Room
              </TimeStamp>
            );
          }
        )}
    </TimeLineContainer>
  );
};

export default TimeLine;
