import React from "react";
import {ConvertCentralTimeString} from "../../../../utils/TimeZoneConverter.js"
import {
  HeaderLight,
  DescriptionArea,
  DescriptionTimeslotArea,
  DescriptionTimeslotBox,
} from "./StyledProgramDescriptionArea";

export default function ProgramDescriptionArea() {
  return (
    <div style={{ width: "100%" }}>
      <HeaderLight>
        <DescriptionArea>
          <h3>How It Works</h3>
          <b style={{fontWeight: 'bold'}}>Our labs are hosted every Saturday</b>. These labs give participants access to
          valuable help from members with more development experience. This is{" "}
          <b style={{fontWeight: 'bold'}}>100% FREE</b>, and all we ask is that you spend time helping others
          through Dev Launchers.
          <DescriptionTimeslotArea>
            <DescriptionTimeslotBox>
              <b style={{fontWeight: 'bold'}}>Beginner Dev Sessions</b>
              <br />
              <i>{ConvertCentralTimeString(6,12,0)}</i>
              <br />
              <br />
              If you&apos;re <b>learning coding fundamentals</b>, have recently
              started your first project, or are looking to help those who are,
              this is for you!
            </DescriptionTimeslotBox>
            <DescriptionTimeslotBox>
              <b style={{fontWeight: 'bold'}}>Web and App Dev Sessions</b>
              <br />
              <i>{ConvertCentralTimeString(6,13,0)}</i>
              <br />
              <br />
              Have a <b>web or app development project</b> you&apos;re working
              on? Come give and get input, feedback, and help here!
            </DescriptionTimeslotBox>
            <DescriptionTimeslotBox>
              <b style={{fontWeight: 'bold'}}>Game Dev Sessions</b>
              <br />
              <i>{ConvertCentralTimeString(6,14,0)}</i>
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
