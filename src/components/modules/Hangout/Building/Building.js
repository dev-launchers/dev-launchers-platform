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
      url:
        "https://hangouts.google.com/u/0/call/b9pYkOzJs0Oe6QXSld2rAEEE?no_rd",
      color: "yellow",
      isActive: false
    },
    room2: {
      name: "Room 2",
      url:
        "https://hangouts.google.com/u/0/call/2tpdbynE1MiwDbbZyb3tAEEE?no_rd",
      color: "pink",
      isActive: false
    },
    room3: {
      name: "Room 3",
      url:
        "https://hangouts.google.com/u/0/call/AkYvoAvy-jqdrcnvH264AEEE?no_rd",
      color: "green",
      isActive: false
    },
    room4: {
      name: "Room 4",
      url:
        "https://hangouts.google.com/u/0/call/tL3MMp5PweV6o1NAPupeAEEE?no_rd",
      color: "red",
      isActive: false
    },
    room5: {
      name: "Room 5",
      url:
        "https://hangouts.google.com/u/0/call/CscVhFU_KUyuIF9pD1ozAEEE?no_rd",
      color: "grey",
      isActive: false
    },
    room6: {
      name: "Room 6",
      url:
        "https://hangouts.google.com/u/0/call/pU2BN1zpASm-cjODGLzUAEEE?no_rd",
      color: "orange",
      isActive: false
    },
    room7: {
      name: "Room 7",
      url:
        "https://hangouts.google.com/u/0/call/p1wD4UVgNLuwDn6PT9HQAEEE?no_rd",
      color: "purple",
      isActive: false
    },
    room8: {
      name: "Room 8",
      url:
        "https://hangouts.google.com/u/0/call/1fY-jRQoz6nnchju63OFAEEE?no_rd",
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
