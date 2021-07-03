import React, { useState } from "react";
import {
  Wrapper,
  Day,
  Event,
  WeekdayTitle
} from "../../../common/Calendar/StyledCalendar";
import { DateTime } from "luxon";
import Calendar from "../../../common/Calendar/Calendar";

let makeDateCompatible = isoDate => {
  let arrStr = isoDate.split(".");
  return `${arrStr[0]}${arrStr[1].replace("+", "-").substr(3)}`;
};

export default function WeeksGlance(props) {
  const [eventList, setEventList] = useState([]);

  let current = DateTime.now().plus({ hours: 1 });
  let max = current.plus({ days: 7 });

  let calendarDataURL = `https://www.googleapis.com/calendar/v3/calendars/c_pu1dj74902v1ablvm1i0s22hi4%40group.calendar.google.com/events?timeMax=${makeDateCompatible(
    max.toISO()
  )}&timeMin=${makeDateCompatible(
    current.toISO()
  )}&singleEvents=true&key=AIzaSyCgXZRjXOwT6DilHJyjj5B3svz6cETj_MI`;

  return (
    <Wrapper>
      <Calendar URL={calendarDataURL}></Calendar>
    </Wrapper>
  );
}
