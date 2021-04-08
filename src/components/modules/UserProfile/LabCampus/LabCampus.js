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
  const [currentTime, setCurrentTime] = useState(DateTime.now());
  const handleProgression = eventInterval => {
    let remainingLabMintues =
      Interval.fromDateTimes(currentTime, eventInterval.end).count("minute") -
      1;
    setInterval(() => {
      setCurrentTime(DateTime.now());
      remainingLabMintues =
        Interval.fromDateTimes(currentTime, eventInterval.end).count("minute") -
        1;
    }, 60000);
    return (
      <Progress
        max="100"
        value={
          -1 *
          Math.ceil(
            remainingLabMintues / (eventInterval.count("minute") - 1) / 0.01 -
              100
          )
        }
      />
    );
  };

  return (
    <Wrapper>
      <strong>all times are based off {currentTime.zoneName}</strong>
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
                    !eventInterval.isAfter(currentTime) &&
                    !eventInterval.isBefore(currentTime);
                  // console.log(isLabActive);
                  // console.log(eventStart);
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
