import React, { useState } from "react";
import { Wrapper, CalendarContainer, WeekCalendar } from "./StyledWeeksGlance";
import axios from "axios";
import { DateTime } from "luxon";

export default function WeeksGlance(props) {
  console.log(props);
  const [eventList, setEventList] = useState([]);
  const [eventTimes, setEventTimes] = useState([]);

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
        let tempEventTimes = [];
        response.data.collection.forEach(function(entry) {
          tempEventList.push(entry.name);
        });
        setEventList(tempEventList);
        response.data.collection.forEach(function(entry) {
          tempEventTimes.push(entry.start_time);
        });
        setEventTimes(tempEventTimes);
      })
      .catch(err => {
        console.error(err);
      });
  };
  React.useEffect(componentDidMount, []);

  return (
    <Wrapper>
    for each object in the event objects array
    {
      {eventList.map((entry, index) => {
        return entry;
      })}
      {eventTimes.map((entry, index) => {
        return (
          " " +
          `Day ${DateTime.fromJSDate(new Date(entry)).toFormat(
            "cccc"
          )} ${DateTime.fromJSDate(new Date(entry)).toFormat("t")}` +
          ", "
        );
      })}
    </Wrapper>
  );
}
