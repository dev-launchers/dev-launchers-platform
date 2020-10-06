import React from "react";

import style from "./Building.module.css";

export default function Building() {
  const [buildingData, setBuildingData] = React.useState({
    messHall: {
      name: "Common Area",
      url: "https://meet.google.com/phz-ckei-aij",
      color: "#fff",
      isActive: false
    },
    room1: {
      name: "Room 1",
      url: "https://meet.google.com/sso-zeye-esu",
      color: "yellow",
      isActive: false
    },
    room2: {
      name: "Room 2",
      url: "https://meet.google.com/fhe-ettc-ebw",
      color: "pink",
      isActive: false
    },
    room3: {
      name: "Room 3",
      url: "https://meet.google.com/hyz-usfr-zhj",
      color: "green",
      isActive: false
    },
    room4: {
      name: "Room 4",
      url: "https://meet.google.com/pgu-ujeo-pvk",
      color: "red",
      isActive: false
    },
    room5: {
      name: "Room 5",
      url: "https://meet.google.com/djw-fhxk-zhs",
      color: "grey",
      isActive: false
    },
    room6: {
      name: "Room 6",
      url: "https://meet.google.com/rtf-dqsq-odj",
      color: "orange",
      isActive: false
    },
    room7: {
      name: "Room 7",
      url: "https://meet.google.com/fbx-cdod-udm",
      color: "purple",
      isActive: false
    },
    room8: {
      name: "Room 8",
      url: "https://meet.google.com/taf-qcnk-hwq",
      color: "blue",
      isActive: false
    },

    recRoom: {
      name: "Rec Room (SOON)",
      url: "",
      color: "black",
      isActive: false
    },

    lounge: {
      name: "Lounge",
      url: "https://hub.link/M7yXJ5T",
      color: "brown",
      isActive: false
    }
  });

  const [activeRoomKey, setActiveRoomKey] = React.useState("");
  const setRoomActive = (roomKey, isActive) => {
    setBuildingData({
      ...buildingData,
      [activeRoomKey]: { ...buildingData[activeRoomKey], isActive: false },
      [roomKey]: { ...buildingData[roomKey], isActive: isActive }
    });

    setActiveRoomKey(roomKey);
  };

  return (
    <div className={style.building}>
      <Room
        className={[style.mainRoom, style.room].join(" ")}
        buildingData={buildingData}
        roomData={buildingData.messHall}
        roomKey="messHall"
        setRoomActive={setRoomActive}
      />
      <div className={style.extraRoomsHolder}>
        <div className={style.roomRow}>
          <Room
            className={[style.sideRoom, style.room].join(" ")}
            roomData={buildingData.room1}
            roomKey="room1"
            setRoomActive={setRoomActive}
          />
          <Room
            className={[style.sideRoom, style.room].join(" ")}
            roomData={buildingData.room2}
            roomKey="room2"
            setRoomActive={setRoomActive}
          />
          <Room
            className={[style.sideRoom, style.room].join(" ")}
            roomData={buildingData.room3}
            roomKey="room3"
            setRoomActive={setRoomActive}
          />
          <Room
            className={[style.sideRoom, style.room].join(" ")}
            roomData={buildingData.room4}
            roomKey="room4"
            setRoomActive={setRoomActive}
          />
        </div>
        <div className={style.roomRow}>
          <Room
            className={[style.sideRoom, style.room].join(" ")}
            roomData={buildingData.room5}
            roomKey="room5"
            setRoomActive={setRoomActive}
          />
          <Room
            className={[style.sideRoom, style.room].join(" ")}
            roomData={buildingData.room6}
            roomKey="room6"
            setRoomActive={setRoomActive}
          />
          <Room
            className={[style.sideRoom, style.room].join(" ")}
            roomData={buildingData.room7}
            roomKey="room7"
            setRoomActive={setRoomActive}
          />
          <Room
            className={[style.sideRoom, style.room].join(" ")}
            roomData={buildingData.room8}
            roomKey="room8"
            setRoomActive={setRoomActive}
          />
        </div>{" "}
        <div className={style.roomRow}>
          <Room
            className={[style.sideRoom, style.room].join(" ")}
            roomData={buildingData.lounge}
            roomKey="lounge"
            setRoomActive={setRoomActive}
          />
          <Room
            className={[style.sideRoom, style.room].join(" ")}
            roomData={buildingData.recRoom}
            roomKey="recRoom"
            setRoomActive={setRoomActive}
          />
        </div>
      </div>
    </div>
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
