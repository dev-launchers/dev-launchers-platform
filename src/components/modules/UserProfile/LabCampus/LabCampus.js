import React, { useEffect, useState } from "react";
import {
  Wrapper,
  TimeLineContainer,
  TimeStamp,
  LabsContainer,
  Lab,
  AlignedDropdown,
  Time,
  Title,
  Progress
} from "./StyledLabCampus";
let events = require("../../../../content/collections/timeline");
import { ConvertCentralTime } from "../../../../utils/TimeZoneConverter";
import { DateTime, Interval } from "luxon";
const LabCampus = props => {
  const handleProgression = eventInterval => {
    let currentTime = DateTime.now().minute;
    setInterval(() => {
      console.log(
        "updating mintues to ",
        currentTime,
        eventInterval.count("minute")
      );
      currentTime = DateTime.now().minute;
    }, 10000);
    return (
      <Progress
        max="100"
        value={currentTime / (eventInterval.count("minute") - 1) / 100}
      />
    );
  };

  return (
    <Wrapper>
      <strong>all times are based off {DateTime.now().zoneName}</strong>
      <TimeLineContainer>
        {events.map(
          (
            {
              title,
              startWeekDay,
              startHour,
              startMinute,
              endWeekDay,
              endHour,
              endMinute,
              location
            },
            i
          ) => {
            const eventStart = ConvertCentralTime(
              startWeekDay,
              startHour,
              startMinute
            );
            const eventEnd = ConvertCentralTime(endWeekDay, endHour, endMinute);
            return (
              <TimeStamp key={i}>
                {title} <br />
                {eventStart.toFormat("t")}
                {" - "}
                {eventEnd.toFormat("t")} <br />
                {location} Room
              </TimeStamp>
            );
          }
        )}
      </TimeLineContainer>

      <LabsContainer>
        {[
          "General Coworking",
          "In-House Projects",
          "Web / App Dev",
          "Game Dev",
          "Landing Zone"
        ].map((labTitle, i) => {
          const gridArea = labTitle.split(" ")[0];

          return (
            <Lab key={i} style={{ gridArea }}>
              {events
                .filter(event => event.location == labTitle)
                .map((filteredEvent, i) => {
                  const {
                    startWeekDay,
                    startHour,
                    startMinute,
                    endWeekDay,
                    endHour,
                    endMinute
                  } = filteredEvent;
                  const eventStart = ConvertCentralTime(
                    startWeekDay,
                    startHour,
                    startMinute
                  );
                  const eventEnd = ConvertCentralTime(
                    endWeekDay,
                    endHour,
                    endMinute
                  );
                  const eventInterval = Interval.fromDateTimes(
                    eventStart,
                    eventEnd
                  );
                  const isLabActive =
                    !eventInterval.isAfter(DateTime.now().setZone("local")) &&
                    !eventInterval.isBefore(DateTime.now().setZone("local"));
                  console.log("does run", labTitle);
                  console.log(DateTime.now());
                  return (
                    <React.Fragment key={i}>
                      <Time>{eventStart.toFormat("t")}</Time>
                      <Title>{labTitle}</Title>
                      <AlignedDropdown
                        toggleBtnText="Join"
                        dropdownItems={
                          <>
                            <a href="#">Primary</a>
                            <a href="#">Room 1</a>
                            <a href="#">Room 2</a>
                          </>
                        }
                      />
                      {isLabActive && handleProgression(eventInterval)}
                    </React.Fragment>
                  );
                })}
            </Lab>
          );
        })}
      </LabsContainer>
    </Wrapper>
  );
};

export default LabCampus;
