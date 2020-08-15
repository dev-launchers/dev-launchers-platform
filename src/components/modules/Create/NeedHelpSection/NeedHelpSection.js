import React from "react";
import style from "./NeedHelpSection.module.css";

import IdeaGeneratorButton from "./IdeaGeneratorButton";
import JoinProgramButton from "./JoinProgramButton";

export default function NeedHelpSection(props) {
  return (
    <div style={{ margin: "2%" }}>
      <div
        style={{
          width: "100%",
          backgroundColor: "transparent",
          textAlign: "left",
          //padding: "1%"
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <b>Need some help?</b>
        <IdeaGeneratorButton />
        <JoinProgramButton />
      </div>
    </div>
  );
}
