import React, { useState } from "react";
import {
  Wrapper,
  Event,
  WeekCalendar,
  Day,
  WeekdayTitle,
} from "./StyledWeeksGlance";
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
  
  let componentDidMount = () => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/c_pu1dj74902v1ablvm1i0s22hi4%40group.calendar.google.com/events?timeMax=${makeDateCompatible(
          max.toISO()
        )}&timeMin=${makeDateCompatible(
          current.toISO()
        )}&singleEvents=true&key=AIzaSyCgXZRjXOwT6DilHJyjj5B3svz6cETj_MI`
      )
      .then((response) => {
        console.log(response);
        let tempEventList = [];
        response.data.items.forEach(function(entry) {
          console.log(entry.summary);
          let time = DateTime.fromISO(entry.start.dateTime, {
            zone: entry.start.timeZone,
          }).setZone();

          tempEventList.push({
            name: entry.summary,
            time: time.toFormat("t"),
            date: time.toLocaleString(),
            weekday: time.weekday,
          });
        });
        console.log(tempEventList);
        setEventList(tempEventList);
      })
      .catch((err) => {
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
    "SUNDAY",
  ];
  console.log(eventList);
  return (
    <Wrapper>
      {weekdays.map((day, i) => {
        return (
          <Day key={i}>
            <WeekdayTitle>{day}</WeekdayTitle>
            {eventList.map(({ name, time, date, weekday }) => {
              if (weekday == i + 1) {
                return (
                  <Event key={`${name}_${time}_${date}`}>
                    {name}
                    <br />
                    {time}
                    <br />
                    {date}
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
