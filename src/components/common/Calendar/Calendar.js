import React, { useState } from "react";
import {
  Wrapper,
  Event,
  WeekCalendar,
  Day,
  WeekdayTitle
} from "./StyledCalendar";
import axios from "axios";
import { DateTime } from "luxon";

const Calendar = ({ URL, numWeeks }) => {
  const [eventList, setEventList] = useState([]);

  let componentDidMount = () => {
    axios
      .get({ URL })
      .then(response => {
        console.log(response);
        let tempEventList = [];
        response.data.items.forEach(function(entry) {
          console.log(entry.summary);
          let time = DateTime.fromISO(entry.start.dateTime, {
            zone: entry.start.timeZone
          }).setZone();
          tempEventList.push({
            name: entry.summary,
            time: time.toFormat("t"),
            weekday: time.weekday
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
};

export default Calendar;
