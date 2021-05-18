import React, { useState } from "react";
import { Wrapper, Day, WeekCalendar, Week } from "./StyledWeeksGlance";
import axios from "axios";
import { DateTime } from "luxon";

export default function WeeksGlance() {
  const [eventList, setEventList] = useState([]);

  const todaysDate = DateTime.now().setZone("UTC-5");
  const oneWeekFromNow = todaysDate.plus({ days: 7 });

  let componentDidMount = () => {
    axios
      .get(
        `https://api.calendly.com/scheduled_events?user=https%3A%2F%2Fapi.calendly.com%2Fusers%2FHFHGJK4NNLTU5PXT&status=active&sort=start_time%3Aasc&min_start_time=${todaysDate.toISO()}&max_start_time=${oneWeekFromNow.toISO()}`,
        {
          headers: {
            authorization: `Bearer RD_DszQ_ThsIrK2JD6pCKkl0KcoKBbdrwTYM8iYxN3c`
          }
        }
      )
      .then(response => {
        console.log(response);
        let tempEventList = [];
        response.data.collection.forEach(function(entry) {
          tempEventList.push({
            name: entry.name
              .split("]")
              .pop()
              .split(" -"),
            time: DateTime.fromJSDate(new Date(entry.start_time)).toFormat("t"),
            weekday: DateTime.fromJSDate(new Date(entry.start_time)).weekday
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
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  console.log(eventList);
  return (
    <Wrapper>
      {weekdays.map((day, i) => {
        return (
          <Week key={i}>
            {day}
            {eventList.map(({ name, time, weekday }) => {
              if (weekday == i + 1) {
                return (
                  <Day key={`${name}_${time}`}>
                    {name} - <br />
                    {time}
                  </Day>
                );
              }
            })}
          </Week>
        );
      })}
    </Wrapper>
  );
}
