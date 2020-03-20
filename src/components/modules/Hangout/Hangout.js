import React from "react";
import PageBody from "../../../components/common/PageBody";

import style from "./Hangout.module.css";

export default function Hangout() {
  const roomData = {
    messHall: {
      url:
        "https://hangouts.google.com/u/4/call/TfM6_-fimy6ymBD11ENLAEEE?no_rd",
      color: "#fff"
    },
    room1: {
      url:
        "https://hangouts.google.com/u/4/call/b9pYkOzJs0Oe6QXSld2rAEEE?no_rd",
      color: "yellow"
    },
    room2: {
      url:
        "https://hangouts.google.com/u/4/call/2tpdbynE1MiwDbbZyb3tAEEE?no_rd",
      color: "pink"
    },
    room3: {
      url:
        "https://hangouts.google.com/u/4/call/AkYvoAvy-jqdrcnvH264AEEE?no_rd",
      color: "green"
    },
    room4: {
      url:
        "https://hangouts.google.com/u/4/call/tL3MMp5PweV6o1NAPupeAEEE?no_rd",
      color: "red"
    },
    room5: {
      url:
        "https://hangouts.google.com/u/4/call/CscVhFU_KUyuIF9pD1ozAEEE?no_rd",
      color: "grey"
    },
    room6: {
      url:
        "https://hangouts.google.com/u/4/call/pU2BN1zpASm-cjODGLzUAEEE?no_rd",
      color: "orange"
    },
    room7: {
      url:
        "https://hangouts.google.com/u/4/call/p1wD4UVgNLuwDn6PT9HQAEEE?no_rd",
      color: "purple"
    },
    room8: {
      url:
        "https://hangouts.google.com/u/4/call/1fY-jRQoz6nnchju63OFAEEE?no_rd",
      color: "blue"
    }
  };

  const openHangout = url => {
    // Do open
    window.open(url, "_blank");
  };

  return (
    <PageBody>
      <br />
      <h1>Hangout With Us Virtually!</h1>
      <div>
        Clicking one of the below rooms opens up a Google Hangouts video chat!
        Our sessions begin in the Common Area, and then team and individual help
        happens in the side rooms
      </div>
      <div className={style.building}>
        <div
          className={[style.mainRoom, style.room].join(" ")}
          onClick={() => openHangout(roomData.messHall.url)}
        >
          Common Area
          <div
            className={style.colorMarker}
            style={{ backgroundColor: roomData.messHall.color }}
          />
        </div>
        <div className={style.extraRoomsHolder}>
          <div className={style.roomRow}>
            <div
              className={[style.sideRoom, style.room].join(" ")}
              onClick={() => openHangout(roomData.room1.url)}
            >
              Room 1
              <div
                className={style.colorMarker}
                style={{ backgroundColor: roomData.room1.color }}
              />
            </div>
            <div
              className={[style.sideRoom, style.room].join(" ")}
              onClick={() => openHangout(roomData.room2.url)}
            >
              Room 2
              <div
                className={style.colorMarker}
                style={{ backgroundColor: roomData.room2.color }}
              />
            </div>
            <div
              className={[style.sideRoom, style.room].join(" ")}
              onClick={() => openHangout(roomData.room3.url)}
            >
              Room 3
              <div
                className={style.colorMarker}
                style={{ backgroundColor: roomData.room3.color }}
              />
            </div>
            <div
              className={[style.sideRoom, style.room].join(" ")}
              onClick={() => openHangout(roomData.room4.url)}
            >
              Room 4
              <div
                className={style.colorMarker}
                style={{ backgroundColor: roomData.room4.color }}
              />
            </div>
          </div>
          <div className={style.roomRow}>
            <div
              className={[style.sideRoom, style.room].join(" ")}
              onClick={() => openHangout(roomData.room5.url)}
            >
              Room 5
              <div
                className={style.colorMarker}
                style={{ backgroundColor: roomData.room5.color }}
              />
            </div>
            <div
              className={[style.sideRoom, style.room].join(" ")}
              onClick={() => openHangout(roomData.room6.url)}
            >
              Room 6
              <div
                className={style.colorMarker}
                style={{ backgroundColor: roomData.room6.color }}
              />
            </div>
            <div
              className={[style.sideRoom, style.room].join(" ")}
              onClick={() => openHangout(roomData.room7.url)}
            >
              Room 7
              <div
                className={style.colorMarker}
                style={{ backgroundColor: roomData.room7.color }}
              />
            </div>
            <div
              className={[style.sideRoom, style.room].join(" ")}
              onClick={() => openHangout(roomData.room8.url)}
            >
              Room 8
              <div
                className={style.colorMarker}
                style={{ backgroundColor: roomData.room8.color }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="infoArea">
        <h3>Session Checklist</h3>
        For students participating in virtual sessions, you'll need to have a
        few different tabs open:
        <ul>
          <li>
            <b>This Page</b>
          </li>
          <li>
            One of the corresponding{" "}
            <a
              href={roomData.messHall.url}
              target="_blank"
              style={{ color: "blue" }}
            >
              <b>Google Hangout</b>
            </a>{" "}
            conference rooms
          </li>
          <li>
            <a
              href="https://devlaunchers-students.slack.com"
              target="_blank"
              style={{ color: "blue" }}
            >
              <b>Slack</b>
            </a>
          </li>
        </ul>
        And you'll probably have a few extra tabs open while working:
        <ul>
          <li>
            The Dev Launchers{" "}
            <a
              href="https://devlaunchers.com/#/create"
              target="_blank"
              style={{ color: "blue" }}
            >
              <b>Create</b>
            </a>{" "}
            or{"  "}
            <a
              href="https://devlaunchers.com/#/learn"
              target="_blank"
              style={{ color: "blue" }}
            >
              <b>Learn</b>
            </a>{" "}
            pages
          </li>
          <li>
            <a
              href="https://codesandbox.io"
              target="_blank"
              style={{ color: "blue" }}
            >
              <b>CodeSandbox</b>
            </a>{" "}
            or{" "}
            <a
              href="https://www.pixilart.com/"
              target="_blank"
              style={{ color: "blue" }}
            >
              <b>PixilArt</b>
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              style={{ color: "blue" }}
            >
              <b>GitHub</b>
            </a>
          </li>
        </ul>
      </div>
    </PageBody>
  );
}
