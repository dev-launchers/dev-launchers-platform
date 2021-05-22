import React from "react";
import PageBody from "../../../components/common/PageBody";

import style from "./Hangout.module.css";

import Building from "./Building";
//
export default function Hangout() {
  return (
    <PageBody width="90%">
      <br />
      <h1>Hangout With Us Virtually!</h1>
      <div>
        Click one of the rooms below to open up a <u>Google Meet</u> video chat
        or <u>Mozilla Hubs</u> virtual room!
      </div>
      <Building />
    </PageBody>
  );
}

function Room({ className, roomData, roomKey, setRoomActive }) {
  const openHangout = url => {
    // Do open
    setRoomActive(roomKey, true);
    window.open(url, "_blank");
  };

  return (
    <div
      className={[className, roomData.isActive ? style.activeRoom : ""].join(
        " "
      )}
      onClick={() => openHangout(roomData.url)}
    >
      {roomData.name}
      <div
        className={style.colorMarker}
        style={{ backgroundColor: roomData.color }}
      />
    </div>
  );
}
