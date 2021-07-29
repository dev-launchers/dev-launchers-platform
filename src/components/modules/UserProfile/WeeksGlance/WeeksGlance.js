import React, { useState } from "react";
import axios from "axios";
import { DateTime } from "luxon";
import { Wrapper, Event, Day, WeekdayTitle } from "./StyledWeeksGlance";

export default function WeeksGlance() {
  const [eventList, setEventList] = useState([]);

  const componentDidMount = () => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/c_pu1dj74902v1ablvm1i0s22hi4@group.calendar.google.com/events?key=AIzaSyCgXZRjXOwT6DilHJyjj5B3svz6cETj_MI`
      )
      .then((response) => {
        const tempEventList = [];
        response.data.items.forEach((entry) => {
          const time = DateTime.fromISO(entry.start.dateTime, {
            zone: entry.start.timeZone,
          }).setZone();
          tempEventList.push({
            name: entry.summary,
            time: time.toFormat("t"),
            weekday: time.weekday,
          });
        });
        setEventList(tempEventList);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  React.useEffect(componentDidMount, []);

  const weekdays = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];
  return (
    <Wrapper>
      {weekdays.map((day, i) => (
        <Day key={i}>
          <WeekdayTitle>{day}</WeekdayTitle>
          {eventList.map(
            ({ name, time, weekday }) =>
              weekday === i + 1 && (
                <Event key={`${name}_${time}`}>
                  {name}
                  <br />
                  {time}
                </Event>
              )
          )}
          {eventList.filter(({ weekday }) => weekday === i + 1).length === 0 ? (
            <div style={{ fontSize: "1rem" }}>No events</div>
          ) : (
            ""
          )}
        </Day>
      ))}
    </Wrapper>
  );
}
