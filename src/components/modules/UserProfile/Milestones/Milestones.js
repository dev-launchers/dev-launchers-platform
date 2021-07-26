import React, { useState } from "react";
import axios from "axios";
import { DateTime } from "luxon";
import { Wrapper, TaskGroup, Title, Task } from "./StyledMilestones";

export default function Milestones() {
  const [eventList, setEventList] = useState([]);

  const componentDidMount = () => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/c_pu1dj74902v1ablvm1i0s22hi4@group.calendar.google.com/events?key=AIzaSyCgXZRjXOwT6DilHJyjj5B3svz6cETj_MI`
      )
      .then((response) => {
        const tempEventList = [];
        response.data.items.forEach((entry) => {
          const time = DateTime.fromISO(entry.start.dateTime, {
            zone: entry.start.timeZone,
          }).setZone();
          tempEventList.push({
            name: entry.summary,
            time: time.toFormat("t"),
            weekday: time.weekday,
          });
        });
        setEventList(tempEventList);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  React.useEffect(componentDidMount, []);

  const today = ["TODAY"];
  return (
    <div>
      <Wrapper>
        <h3
          style={{
            paddingRight: "1rem",
            paddingLeft: "1rem",
            paddingTop: "0rem",
            paddingBottom: "1rem",
          }}
        >
          Milestones
        </h3>
        <TaskGroup>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Title>
              Taskgroup Title
              <p
                style={{
                  marginTop: ".9rem",
                  fontSize: "1.5rem",
                  marginLeft: "-0.8rem",
                }}
              >
                Lorum ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Title>
            <Task>
              Task number 1 will go here!
              <p
                style={{
                  marginTop: ".9rem",
                  marginLeft: "-1rem",
                }}
              >
                Hit by: *date here*
              </p>
            </Task>
            <Task>
              Task number 2 will go here!
              <p
                style={{
                  marginTop: ".9rem",
                  marginLeft: "-1rem",
                }}
              >
                Start by: *date here*
              </p>
            </Task>
            <Task>
              Task number 3 will go here!
              <p
                style={{
                  marginTop: ".9rem",
                  marginLeft: "-1rem",
                }}
              >
                Start by: *date here*
              </p>
            </Task>
          </div>
        </TaskGroup>

        <TaskGroup>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Title>
              Taskgroup Title
              <p
                style={{
                  marginTop: ".9rem",
                  fontSize: "1.5rem",
                  marginLeft: "-0.8rem",
                }}
              >
                Lorum ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Title>
            <Task>
              Task number 1 will go here!
              <p
                style={{
                  marginTop: ".9rem",
                  marginLeft: "-1rem",
                }}
              >
                Hit by: *date here*
              </p>
            </Task>
            <Task>
              Task number 2 will go here!
              <p
                style={{
                  marginTop: ".9rem",
                  marginLeft: "-1rem",
                }}
              >
                Start by: *date here*
              </p>
            </Task>
            <Task>
              Task number 3 will go here!
              <p
                style={{
                  marginTop: ".9rem",
                  marginLeft: "-1rem",
                }}
              >
                Start by: *date here*
              </p>
            </Task>
          </div>
        </TaskGroup>

        <TaskGroup>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Title>
              Taskgroup Title
              <p
                style={{
                  marginTop: ".9rem",
                  fontSize: "1.5rem",
                  marginLeft: "-0.8rem",
                }}
              >
                Lorum ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Title>
            <Task>
              Task number 1 will go here!
              <p
                style={{
                  marginTop: ".9rem",
                  marginLeft: "-1rem",
                }}
              >
                Hit by: *date here*
              </p>
            </Task>
            <Task>
              Task number 2 will go here!
              <p
                style={{
                  marginTop: ".9rem",
                  marginLeft: "-1rem",
                }}
              >
                Start by: *date here*
              </p>
            </Task>
            <Task>
              Task number 3 will go here!
              <p
                style={{
                  marginTop: ".9rem",
                  marginLeft: "-1rem",
                }}
              >
                Start by: *date here*
              </p>
            </Task>
          </div>
        </TaskGroup>
      </Wrapper>
    </div>
  );
}

/* 
{today.map((day, i) => (
        <Day key={i}>
          <WeekdayTitle>{day}</WeekdayTitle>
          {eventList.map(
            ({ name, time, weekday }) =>
              weekday === i + 1 && (
                <Event key={`${name}_${time}`}>
                  {name}
                  <br />
                  {time}
                </Event>
              )
          )}
          {eventList.filter(({ weekday }) => weekday === i + 1).length === 0 ? (
            <div style={{ fontSize: "1rem" }}>No events</div>
          ) : (
            ""
          )}
        </Day>
      ))}

*/
