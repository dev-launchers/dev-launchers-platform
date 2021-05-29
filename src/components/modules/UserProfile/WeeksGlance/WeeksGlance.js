import React, { useState } from "react";
import {
  Wrapper,
  Event,
  WeekCalendar,
  Day,
  WeekdayTitle
} from "./StyledWeeksGlance";
import axios from "axios";
import { DateTime } from "luxon";

export default function WeeksGlance() {
  const [eventList, setEventList] = useState([]);

  const todaysDate = DateTime.now().setZone("UTC-5");
  const oneWeekFromNow = todaysDate.plus({ days: 7 });

  let componentDidMount = () => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/c_pu1dj74902v1ablvm1i0s22hi4@group.calendar.google.com/events?key=AIzaSyCgXZRjXOwT6DilHJyjj5B3svz6cETj_MI`
      )
      .then(response => {
        console.log(response);
        let tempEventList = [];
        response.data.items.forEach(function(entry) {
          console.log(entry.summary);

          tempEventList.push({
            name: entry.summary,
            time: DateTime.fromISO(entry.start.dateTime, {
              zone: entry.start.timeZone
            }).toFormat("t"),
            weekday: DateTime.fromJSDate(new Date(entry.start.dateTime)).weekday
          });
        });
        console.log(tempEventList);
        setEventList(tempEventList);
      })
      .catch(err => {
        console.error(err);
      });
  };
  React.useEffect(componentDidMount, []);

  let weekdays = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY"
  ];
  console.log(eventList);
  return (
    <Wrapper>
      {weekdays.map((day, i) => {
        return (
          <Day key={i}>
            <WeekdayTitle>{day}</WeekdayTitle>
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
              <div style={{ fontSize: "1rem" }}>No events</div>
            ) : (
              ""
            )}
          </Day>
        );
      })}
    </Wrapper>
  );
}
