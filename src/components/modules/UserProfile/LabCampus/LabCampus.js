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

    const timeUpdater = setInterval(() => {
      setCurrentTime(DateTime.now());
      remainingLabMintues =
        Interval.fromDateTimes(currentTime, eventInterval.end).count("minute") -
        1;
    }, 60000);

    const percentage =
      -1 *
      Math.ceil(
        remainingLabMintues / (eventInterval.count("minute") - 1) / 0.01 - 100
      );

    if (percentage == 100) clearInterval(timeUpdater);

    return <Progress max="100" value={percentage} />;
  };

  return (
    <Wrapper>
      <strong>all times are based off {currentTime.zoneName}</strong>
      <TimeLineContainer>
        {events
          .filter(
            events =>
              events.startWeekDay == currentTime.setZone("UTC-5").weekday
          )
          .map(
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
              const eventEnd = ConvertCentralTime(
                endWeekDay,
                endHour,
                endMinute
              );
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
          let currentEvent = events.filter(
            event =>
              event.location == labTitle &&
              event.startWeekDay == currentTime.setZone("UTC-5").weekday
          );

          return currentEvent.length == 0 ? (
            <Lab key={i} style={{ gridArea }}>
              <Time>nothing for today!</Time>
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
            </Lab>
          ) : (
            currentEvent.map(
              ({
                startWeekDay,
                startHour,
                startMinute,
                endWeekDay,
                endHour,
                endMinute
              }) => {
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
                return (
                  <Lab key={i} style={{ gridArea }}>
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
                  </Lab>
                );
              }
            )
          );
        })}
      </LabsContainer>
    </Wrapper>
  );
};

export default LabCampus;
