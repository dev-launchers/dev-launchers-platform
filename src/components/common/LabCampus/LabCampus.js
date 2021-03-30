import React, { useEffect, useState } from "react";
import {
  Wrapper,
  TimeLineContainer,
  TimeStamp,
  LabsContainer,
  Lab,
  Time,
  Title,
  Room,
  Progress
} from "./StyledLabCampus";
import { ConvertCentralTime } from "../../../utils/TimeZoneConverter";
import { DateTime } from "luxon";
const LabCampus = props => {
  useEffect(() => {
    const LabTimeInterval = DateTime.now().until(
      DateTime.fromObject({
        weekday: 6,
        hour: 13,
        minute: 0,
        zone: "UTC-5"
      })
    );
    console.log(LabTimeInterval.count("day"));
  }, []);
  return (
    <Wrapper>
      <TimeLineContainer>
        <TimeStamp>
          Orientations
          <br />
          (30 mins)
        </TimeStamp>
        <TimeStamp>
          Beginner Workshop <br />
          (60 mins)
        </TimeStamp>
        <TimeStamp>
          Web/App Dev <br />
          (60 mins)
        </TimeStamp>
        <TimeStamp>
          Game Dev <br />
          (60 mins)
        </TimeStamp>
      </TimeLineContainer>

      <LabsContainer>
        <Lab style={{ gridArea: "general" }}>
          <Time>{ConvertCentralTime(12).toFormat("t")}</Time>
          <Title>
            General <br /> Coworking
          </Title>
          <Room>Join</Room>
          <Progress max="100" value="50" />
        </Lab>
        <Lab style={{ gridArea: "inHouse" }}>
          <Time>{ConvertCentralTime(12, 30).toFormat("t")}</Time>
          <Title>
            In-House <br /> Projects
          </Title>
          <Room>Join</Room>
          <Progress max="100" value="50" />
        </Lab>
        <Lab style={{ gridArea: "web" }}>
          <Time>{ConvertCentralTime(13).toFormat("t")}</Time>
          <Title>Web/App Dev</Title>
          <Room>Join</Room>
          <Progress max="100" value="50" />
        </Lab>
        <Lab style={{ gridArea: "game" }}>
          <Time>{ConvertCentralTime(13, 30).toFormat("t")}</Time>
          <Title>Game Dev</Title>
          <Room>Join</Room>
          <Progress max="100" value="50" />
        </Lab>
        <Lab style={{ gridArea: "landing" }}>
          <Time>{ConvertCentralTime(14).toFormat("t")}</Time>
          <Title>Landing Zone</Title>
          <Room>Join</Room>
          <Progress max="100" value="50" />
        </Lab>
      </LabsContainer>
    </Wrapper>
  );
};

export default LabCampus;
