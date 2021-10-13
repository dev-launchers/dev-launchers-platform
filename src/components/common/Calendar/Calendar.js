import React, { useState } from "react";
import axios from "axios";
import { DateTime } from "luxon";
import { Wrapper, Event, Day, WeekdayTitle } from "./StyledCalendar";

const Calendar = ({ URL }) => {                                 //URL prop passed in from WeeksGlance component
  const [eventList, setEventList] = useState([]);

  const current = DateTime.now();
  const max = current.plus({ days: 7 });                      //max is 7 days from today

  /* sends a get request to Google Calendar API and parses the returned JSON to populate a new array with only the properties we need to display*/

  const makeRequest = () => {
    axios
      .get(URL)                                           
      .then((response) => {
        const tempEventList = [];
        response.data.items.forEach((entry) => {                          //get the name, time, and weekday of each event and push them in to an array of Event objects.
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

  /* first stores the dates of the previous weekdays in the Array, followed by today, followed by the remaining days in this week */
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
      {weekdays.map((day, i) => {                     //map through each day in the weekday array, and for each day, map through that day's list of events
        const date = dateslist[i];
        return (
          <Day key={i}>
            <WeekdayTitle>
              <div style={{ fontSize: "1rem", textAlign: "center" }}>{day}</div>

              <div style={{ fontSize: "1.3rem", textAlign: "center" }}>
                {date}
              </div>
            </WeekdayTitle>
            {eventList.map(({ name, time, weekday }) => {                 //destructuring each object in eventList to render just the name and time of the event
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
            {eventList.filter(({ weekday }) => weekday === i + 1).length ===               //if there are no events on that day, display "No events"
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
