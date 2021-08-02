import React from "react";
import {
  Wrapper,
  TaskGroup,
  Title,
  Task,
  Description,
} from "./StyledMilestones";

export default function Milestones() {
  return (
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
            <Description>
              Lorum ipsum dolor sit amet, consectetur adipiscing elit.
            </Description>
          </Title>
          <Task primary>
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
            <Description>
              Lorum ipsum dolor sit amet, consectetur adipiscing elit.
            </Description>
          </Title>
          <Task primary>
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
            <Description>
              Lorum ipsum dolor sit amet, consectetur adipiscing elit.
            </Description>
          </Title>
          <Task primary>
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
