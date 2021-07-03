import React, { useState } from "react";
import { Wrapper, Event, Day, WeekdayTitle } from "./StyledCalendar";
import axios from "axios";
import { DateTime } from "luxon";

const Calendar = ({ URL }) => {
  const [eventList, setEventList] = useState([]);

  let current = DateTime.now();
  let max = current.plus({ days: 7 });

  /* gets the JSON data from google calendar and makes a new array with only the properties we need */

  let makeRequest = () => {
    axios
      .get(URL)
      .then(response => {
        console.log(response);
        let tempEventList = [];
        response.data.items.forEach(function(entry) {
          console.log(entry.summary);
          let time = DateTime.fromISO(entry.start.dateTime, {
            zone: entry.start.timeZone
          }).setZone();
          console.log(URL);
          tempEventList.push({
            name: entry.summary,
            time: time.toFormat("t"),
            weekday: time.weekday
          });
        });

        setEventList(tempEventList);
      })
      .catch(err => {
        console.error(err);
      });
  };

  React.useEffect(makeRequest, []);

  let weekdays = ["MON", "TUES", "WED", "THURS", "FRI", "SAT", "SUN"];
  let dates = [];
  {
    /*stores the dates of the previous weekdays in the Array, then today, then the remaining days in this week*/
  }
  const createDate = () => {
    let todayInt = current.weekday;
    console.log(todayInt);
    for (let i = 1; i < todayInt; i++) {
      dates.push(max.minus({ days: todayInt - i }).day);
    }
    dates.push(current.day);

    for (let i = todayInt + 1; i < 8; i++) {
      dates.push(current.plus({ days: i - todayInt }).day);
    }

    return dates;
  };
  console.log(dates);
  let dateslist = createDate();

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
};

export default Calendar;
