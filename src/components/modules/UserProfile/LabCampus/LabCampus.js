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
      <strong>All times are based off {currentTime.zoneName}</strong>
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
