import React, { useState } from "react";
import { Wrapper, Event, Day, WeekdayTitle } from "./StyledWeeksGlance";
import axios from "axios";
import { DateTime } from "luxon";

let makeDateCompatible = (isoDate) => {
  let arrStr = isoDate.split(".");
  return `${arrStr[0]}${arrStr[1].replace("+", "-").substr(3)}`;
};

export default function WeeksGlance() {
  const [eventList, setEventList] = useState([]);

  let current = DateTime.now();
  let max = current.plus({ days: 7 });

  let calendarDataURL = "https://www.googleapis.com/calendar/v3/calendars/c_pu1dj74902v1ablvm1i0s22hi4%40group.calendar.google.com/events?timeMax=  
  makeDateCompatible(max.toISO())&timeMin=makeDateCompatible(current.toISO())
  &singleEvents=true&key=AIzaSyCgXZRjXOwT6DilHJyjj5B3svz6cETj_MI";

  URL = {calendarDataURL};

  return (
    <Wrapper>
      {weekdays.map((day, i) => {
        let date = dateslist[i];
        return (
          <Day key={i}>
            <WeekdayTitle>
              {day}
              <br />
              <div style={{ fontSize: "1.3rem" }}>{date}</div>
            </WeekdayTitle>
            {eventList.map(({ name, time, weekday }) => {
              if (weekday == i + 1) {
                return (
                  <Event key={`${name}_${time}`}>
                    {name}
                    <br />
                    {time}
                  </Event>
                );
              }
            })}
            {eventList.filter(({ name, time, weekday }) => {
              return weekday == i + 1;
            }).length == 0 ? (
              <div style={{ fontSize: "1rem", textAlign: "center" }}>
                No events
              </div>
            ) : (
              ""
            )}
          </Day>
        );
      })}
    </Wrapper>
  );
}
