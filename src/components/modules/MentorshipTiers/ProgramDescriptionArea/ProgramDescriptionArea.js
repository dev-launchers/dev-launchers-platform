import React from "react";

import {
  HeaderLight,
  DescriptionArea,
  DescriptionTimeslotArea,
  DescriptionTimeslotBox
} from "./StyledProgramDescriptionArea";

export default function ProgramDescriptionArea(props) {
  return (
    <div style={{ width: "100%" }}>
      <HeaderLight>
        <DescriptionArea>
          <h3>How It Works</h3>
          <b>Our Labs happen on Saturdays</b>, and give participants access to
          valuable help from members with more development experience. This is{" "}
          <b>100% FREE</b>, and all we ask is that you spend time helping others
          through Dev Launchers.
          <DescriptionTimeslotArea>
            <DescriptionTimeslotBox>
              <b>Beginner Dev Sessions</b>
              <br />
              <i>Saturdays, 12:00-3:00pm CDT</i>
              <br />
              <br />
              If you're <b>learning coding fundamentals</b>, have recently
              started your first project, or are looking to help those who are,
              this is for you!
            </DescriptionTimeslotBox>
            <DescriptionTimeslotBox>
              <b>Web and App Dev Sessions</b>
              <br />
              <i>Saturdays, 1:00-2:00pm CDT</i>
              <br />
              <br />
              Have a <b>web or app development project</b> you're working on?
              Come give and get input, feedback, and help here!
            </DescriptionTimeslotBox>
            <DescriptionTimeslotBox>
              <b>Game Dev Sessions</b>
              <br />
              <i>Saturdays, 2:00-3:00pm CDT</i>
              <br />
              <br />
              Are you a <b>game dev</b>, or interested in becoming one? Join in
              here to work on game related projects and make games alongside
              cool people.
            </DescriptionTimeslotBox>
          </DescriptionTimeslotArea>
        </DescriptionArea>
        <hr />
      </HeaderLight>
    </div>
  );
}
