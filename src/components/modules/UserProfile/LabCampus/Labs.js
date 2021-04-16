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
      "https://meet.google.com/dok-kztw-nno",
      "https://meet.google.com/rnf-rqxi-ozn"
    ]
  },
  {
    labTitle: "Web / App Dev",
    links: [
      "https://meet.google.com/nth-nsji-vzs",
      "https://meet.google.com/bbb-uesh-yjd",
      "https://meet.google.com/bay-ejjy-zwt"
    ]
  },
  {
    labTitle: "Game Dev",
    links: [
      "https://meet.google.com/svu-habv-kjt",
      "https://meet.google.com/iow-dxjc-fmn",
      "https://meet.google.com/tyr-ztzh-jkd"
    ]
  },
  {
    labTitle: "Landing Zone",
    links: [
      "https://meet.google.com/xbc-qbvj-zap",
      "https://meet.google.com/bdp-bpvu-zbf",
      "https://meet.google.com/soy-ghft-yoc"
    ]
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
            event.startWeekDay == currentTime.setZone("UTC-5").weekday
        );

        return currentEvent.length == 0 ? (
          <Lab key={i} style={{ gridArea }}>
            <Time>No sessions today</Time>
            <Title>{labTitle}</Title>
            <AlignedDropdown
              toggleBtnText="Join"
              dropdownItems={links.map((link, i) =>
                i == 0 ? (
                  <a key={i} href={link}>
                    Primary
                  </a>
                ) : (
                  <a key={i} href={link}>
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
                        <a key={i} href={link}>
                          Primary
                        </a>
                      ) : (
                        <a key={i} href={link}>
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
