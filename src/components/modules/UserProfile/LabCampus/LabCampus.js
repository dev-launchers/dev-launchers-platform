import React, { useState } from "react";
import { Wrapper } from "./StyledLabCampus";
let events = require("../../../../content/collections/timeline");
import { DateTime } from "luxon";
import TimeLine from "./TimeLine";
import Labs from "./Labs";

const LabCampus = props => {
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
