import React, { useState } from "react";
import { Wrapper, CalendarContainer, WeekCalendar } from "./StyledWeeksGlance";
import axios from "axios";

export default function WeeksGlance() {
  const [eventList, setEventList] = useState([]);
  const [entryTimes, setEntryTimes] = useState([]);
  let componentDidMount = () => {
    axios
      .get(
        "https://api.calendly.com/scheduled_events?user=https%3A%2F%2Fapi.calendly.com%2Fusers%2FHFHGJK4NNLTU5PXT&min_start_time=2021-04-20T01%3A09%3A05.678Z",
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
        setEntryTimes(tempEventTimes);
      })
      .catch(err => {
        console.error(err);
      });
  };
  React.useEffect(componentDidMount, []);
  let monday = ["Monday"];
  let tuesday = ["Tuesday"];
  let wednesday = ["Wednesday"];
  let thursday = ["Thursday"];
  let friday = ["Friday"];
  let saturday = ["Saturday"];
  let sunday = ["Sunday"];

  let weekday = [];
  weekday[0] = sunday;
  weekday[1] = monday;
  weekday[2] = tuesday;
  weekday[3] = wednesday;
  weekday[4] = thursday;
  weekday[5] = friday;
  weekday[6] = saturday;
  return (
    <Wrapper>
      {eventList.map((entry, index) => {
        return entry;
      })}
      {entryTimes.map((entry, index) => {
        var n = weekday[new Date(entry).getUTCDay()];
        n.append(entry);
        return entry;
      })}
      ;<CalendarContainer></CalendarContainer>
      <CalendarContainer></CalendarContainer>
      <CalendarContainer></CalendarContainer>
      <CalendarContainer></CalendarContainer>
      <CalendarContainer></CalendarContainer>
      <CalendarContainer></CalendarContainer>
      <CalendarContainer></CalendarContainer>
    </Wrapper>
  );
}
