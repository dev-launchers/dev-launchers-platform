import React, { useState } from "react";
import axios from "axios";
import { DateTime } from "luxon";
import { Wrapper, Event, Day, WeekdayTitle } from "./StyledCalendar";

const Calendar = ({ URL }) => {
  const [eventList, setEventList] = useState([]);

  const current = DateTime.now();
  const max = current.plus({ days: 7 });

  /* gets the JSON data from google calendar and makes a new array with only the properties we need */

  const makeRequest = () => {
    axios
      .get(URL)
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
      .catch(() => {});
  };

  React.useEffect(makeRequest, []);

  const weekdays = ["MON", "TUES", "WED", "THURS", "FRI", "SAT", "SUN"];
  const dates = [];

  /* stores the dates of the previous weekdays in the Array, then today, then the remaining days in this week */
  const createDate = () => {
    const todayInt = current.weekday;
    for (let i = 1; i < todayInt; i++) {
      dates.push(max.minus({ days: todayInt - i }).day);
    }
    dates.push(current.day);

    for (let i = todayInt + 1; i < 8; i++) {
      dates.push(current.plus({ days: i - todayInt }).day);
    }

    return dates;
  };
  const dateslist = createDate();

  return (
    <Wrapper>
      {weekdays.map((day, i) => {
        const date = dateslist[i];
        return (
          <Day key={i}>
            <WeekdayTitle>
              <div style={{ fontSize: "1rem", textAlign: "center" }}>{day}</div>

              <div style={{ fontSize: "1.3rem", textAlign: "center" }}>
                {date}
              </div>
            </WeekdayTitle>
            {eventList.map(({ name, time, weekday }) => {
              if (weekday === i + 1) {
                return (
                  <Event key={`${name}_${time}`}>
                    {name}
                    <br />
                    {time}
                  </Event>
                );
              }
              return null;
            })}
            {eventList.filter(({ weekday }) => weekday === i + 1).length ===
            0 ? (
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
};

export default Calendar;
