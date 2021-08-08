import React, { useState } from "react";
import { DateTime } from "luxon";
import { Wrapper } from "./StyledLabCampus";
import TimeLine from "./TimeLine";
import Labs from "./Labs";

const events = require("../../../../content/collections/timeline.json");

const LabCampus = () => {
  const [currentTime, setCurrentTime] = useState(DateTime.now());

  return (
    <Wrapper>
      <div style={{ marginTop: ".5rem", textAlign: "right", fontSize: "1rem" }}>
        All times are based off {currentTime.zoneName}*
      </div>
      <TimeLine events={events} currentTime={currentTime} />
      <Labs
        events={events}
        currentTime={currentTime}
        currentTimeSetter={setCurrentTime}
      />
    </Wrapper>
  );
};

export default LabCampus;
