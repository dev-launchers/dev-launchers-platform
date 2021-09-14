import React from "react";
import { withTheme } from "styled-components";
import Section from "../Section";
import { TaskGroup, Title, Task, Description } from "./StyledMilestones";

const Milestones = ({ data }) => (
  <Section
    bgColor="#E5E5E5"
    txtColor
    Title="Milestones"
    Content={data?.map((milestone, i) => (
      <TaskGroup key={i}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Title>
            {milestone.title}
            <Description>{milestone.description}</Description>
          </Title>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {milestone.task.map((task) => (
              <Task key={i} primary={task.isReached}>
                {task.title}
                <p
                  style={{
                    marginTop: ".9rem",
                    // marginLeft: ".2rem",
                  }}
                >
                  {task.isReached ? "reached" : "hit"} by: <br />
                  {task.completionDate}
                </p>
              </Task>
            ))}
          </div>
        </div>
      </TaskGroup>
    ))}
  />
);

export default withTheme(Milestones);
