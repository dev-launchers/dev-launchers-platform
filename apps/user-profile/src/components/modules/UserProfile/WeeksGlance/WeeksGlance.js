import React from "react";
import { DateTime } from "luxon";
import { Wrapper } from "../../../common/Calendar/StyledCalendar";
import Calendar from "../../../common/Calendar/Calendar";

const makeDateCompatible = (isoDate) => {
  const arrStr = isoDate.split(".");
  return `${arrStr[0]}${arrStr[1].replace("+", "-").substr(3)}`;
};

export default function WeeksGlance() {
  const current = DateTime.now().plus({ hours: 1 });
  const max = current.plus({ days: 7 });

  const calendarDataURL = `https://www.googleapis.com/calendar/v3/calendars/c_pu1dj74902v1ablvm1i0s22hi4%40group.calendar.google.com/events?timeMax=${makeDateCompatible(
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
