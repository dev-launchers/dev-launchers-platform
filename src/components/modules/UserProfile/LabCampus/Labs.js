import React from "react";
import {
  LabsContainer,
  Lab,
  AlignedDropdown,
  Time,
  Title
} from "./StyledLabCampus";
import ProgressBar from "@ramonak/react-progress-bar";
import { DateTime, Interval } from "luxon";
import { ConvertCentralTime } from "../../../../utils/TimeZoneConverter";

const LABS_DATA = [
  {
    labTitle: "General Coworking",
    links: ["https://meet.google.com/itr-mnvo-uvn"]
  },
  {
    labTitle: "Beginner Dev",
    links: [
      "https://meet.google.com/onr-jgky-jgy",
      "https://hangouts.google.com/u/0/call/5jWCbQt8g7Xa1XSRwZOtACEE?no_rd",
      "https://hangouts.google.com/u/0/call/INt1cvczpj_M1JOp4S-UACEE?no_rd"
    ]
  },
  {
    labTitle: "Web / App Dev",
    links: [
      "https://meet.google.com/nth-nsji-vzs",
      "https://hangouts.google.com/u/0/call/kGulty4BgioZSHem7BpMACEE?no_rd",
      "https://hangouts.google.com/u/0/call/ClUyq03QhnyxDo85MVOlACEE?no_rd"
    ]
  },
  {
    labTitle: "Game Dev",
    links: [
      "https://meet.google.com/svu-habv-kjt",
      "https://hangouts.google.com/u/0/call/KT1Vug-uDXKTRXB0scjPACEE?no_rd",
      "https://hangouts.google.com/u/0/call/fvdGa25c1CllnmHVk_iDACEE?no_rd"
    ]
  },
  {
    labTitle: "Landing Zone",
    links: ["https://meet.google.com/xbc-qbvj-zap"]
  }
];
const Labs = ({ events, currentTime, currentTimeSetter }) => {
  const handleProgression = eventInterval => {
    let remainingLabMintues =
      Interval.fromDateTimes(currentTime, eventInterval.end).count("minute") -
      1;

    const timeUpdater = setInterval(() => {
      currentTimeSetter(DateTime.now());
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

    return (
      <div style={{ alignSelf: "end" }}>
        <ProgressBar
          completed={percentage}
          bgColor="#52FF00"
          borderRadius="0"
          baseBgColor="#000000"
          labelColor="#e809090"
        />
      </div>
    );
  };

  return (
    <LabsContainer>
      {LABS_DATA.map(({ labTitle, links }, i) => {
        const gridArea = labTitle.split(" ")[0];
        let currentEvent = events.filter(
          event =>
            event.location == labTitle &&
            ConvertCentralTime(event.startWeekDay) == currentTime.weekday
        );

        return currentEvent.length == 0 ? (
          <Lab key={i} style={{ gridArea }}>
            <Time style={{ color: "#333333" }}>No sessions today</Time>
            <Title>{labTitle}</Title>
            <AlignedDropdown
              toggleBtnText="Join"
              dropdownItems={links.map((link, i) =>
                i == 0 ? (
                  <a key={i} href={link} target="_blank">
                    Primary
                  </a>
                ) : (
                  <a key={i} href={link} target="_blank">
                    Room {i}
                  </a>
                )
              )}
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
              const hasEnded = !eventInterval.isAfter(currentTime);
              return (
                <Lab key={i} style={{ gridArea }}>
                  <Time>
                    {isLabActive
                      ? "Happening now!"
                      : hasEnded
                      ? "All sessions have ended"
                      : eventStart.toFormat("t")}
                  </Time>
                  <Title>{labTitle}</Title>
                  <AlignedDropdown
                    toggleBtnText="Join"
                    dropdownItems={links.map((link, i) =>
                      i == 0 ? (
                        <a key={i} href={link} target="_blank">
                          Primary
                        </a>
                      ) : (
                        <a key={i} href={link} target="_blank">
                          Room {i}
                        </a>
                      )
                    )}
                  />
                  {isLabActive && handleProgression(eventInterval)}
                </Lab>
              );
            }
          )
        );
      })}
    </LabsContainer>
  );
};

export default Labs;
