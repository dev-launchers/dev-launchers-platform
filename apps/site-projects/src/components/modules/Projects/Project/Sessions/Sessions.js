import axios from 'axios';
import { DateTime } from 'luxon';
import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import Section from '../Section';
import PercentageBar from './components/PercentageBar';

import { Descript, FlexBoxVerticalWrapper } from './StyledSessions';

function ISODateString(d) {
  function pad(n){return n<10 ? '0'+n : n}
  return d.getUTCFullYear()+'-'
       + pad(d.getUTCMonth()+1)+'-'
       + pad(d.getUTCDate())+'T'
       + pad(d.getUTCHours())+':'
       + pad(d.getUTCMinutes())+':'
       + pad(d.getUTCSeconds())+'Z'
}

/*
https://github.com/dev-launchers/app/blob/master/src/components/modules/UserProfile/WeeksGlance/WeeksGlance.js
*/

// import { env } from "../../../../../utils/EnvironmentVariables";
const Sessions = ({ calendarId }) => {
  const [events, setEvents] = useState([]);
  const key = 'AIzaSyCgXZRjXOwT6DilHJyjj5B3svz6cETj_MI';
  React.useEffect(() => {
    
    const minStartTime = ISODateString(new Date(DateTime.now().minus({ days: 7 })));
    const maxStartTime = ISODateString(new Date(DateTime.now().plus({ days: 7 })));
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?&orderby=starttime&sortorder=descending&singleEvents=true&timeMin=${minStartTime}&timeMax=${maxStartTime}&max-results=100&showDeleted=false&key=${key}`
      )
      .then((res) => {
        console.log(res);
        const items = [...res.data.items];
        const notCancelled = items.filter((item) => item.end !== undefined);
        const now = DateTime.now().minus({ days: 6 });
        const currentEvents = notCancelled.filter(
          (item) => DateTime.fromISO(item.start.dateTime) > now
        );
        setEvents([...currentEvents]);
      });
  }, []);

  return (
    <>
      {events.length ? 
        <Section
          bgColor="#3C3B3C"
          Title="Upcoming Meetings"
          Content={
            <>
              <Descript>
                Join in on meetings going on right now, or see what's coming up!
              </Descript>

              <FlexBoxVerticalWrapper>
                {events.length > 0 &&
                  events.map((event, index) => {
                    const startTime = DateTime.fromISO(
                      event.start.dateTime
                    ).toLocaleString(DateTime.TIME_SIMPLE);
                    const endTime = DateTime.fromISO(
                      event.end.dateTime
                    ).toLocaleString(DateTime.TIME_SIMPLE);
                    const date = DateTime.fromISO(
                      event.start.dateTime
                    ).toLocaleString();
                    const timeZone = DateTime.fromISO(
                      event.start.dateTime
                    ).zoneName;
                    const time = `${startTime}-${endTime} (${timeZone} Time)`;
                    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

                    return (
                      <PercentageBar
                        key={`${event.summary}${index} ${date}`}
                        weekday={days[new Date(event.start.dateTime).getDay()]}
                        apointmentTime={time}
                        title={event.summary}
                        link={event.hangoutLink}
                        date={date}
                      />
                    );
                  })}
                {events.length === 0 && (
                  <h4>There are no meetings scheduled currently</h4>
                )}
              </FlexBoxVerticalWrapper>
            </>
          }
        />
        : ""
      }
    </>
  );
};

export default withTheme(Sessions);
