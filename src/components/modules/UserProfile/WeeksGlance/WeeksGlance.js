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
import { Calendar } from "../../../common/Calendar/Calendar";

function parseGoogleDate(d) {
  let googleDate = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})([+-]\d{2}):(\d{2})$/;
  let m = googleDate.exec(d);
  let year = +m[1];
  let month = +m[2];
  let day = +m[3];
  let hour = +m[4];
  let minute = +m[5];
  let second = +m[6];
  let msec = +m[7];
  let tzHour = +m[8];
  let tzMin = +m[9];
  let tzOffset = tzHour * 60 + tzMin;

  return Date.UTC(year, month - 1, day, hour, minute - tzOffset, second, msec);
}

export default function WeeksGlance() {
  const [eventList, setEventList] = useState([]);
  let current = DateTime.now().minus({ days: 1 });
  let max = DateTime.now().plus({ days: 1 });
  console.log(
    `https://www.googleapis.com/calendar/v3/calendars/c_pu1dj74902v1ablvm1i0s22hi4%40group.calendar.google.com/events?singleEvents=true&timeMax=2021-08-1T10:00:00-07:00&timeMin=${current.toISO(
      { format: "basic", includeOffset: false }
    )}&key=AIzaSyCgXZRjXOwT6DilHJyjj5B3svz6cETj_MI`
  );
  console.log(current.toISO());

  let componentDidMount = () => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/c_pu1dj74902v1ablvm1i0s22hi4%40group.calendar.google.com/events?timeMax=2021-08-1T10:00:00-07:00&timeMin=2021-06-26T10:00:00-07:00&key=AIzaSyCgXZRjXOwT6DilHJyjj5B3svz6cETj_MI`
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
