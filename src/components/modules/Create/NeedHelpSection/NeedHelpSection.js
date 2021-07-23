import React from "react";

import GameIdeaGeneratorButton from "./IdeaGeneratorButton/GameIdeaGeneratorButton";
import AppIdeaGeneratorButton from "./IdeaGeneratorButton/AppIdeaGeneratorButton";
import JoinProgramButton from "./JoinProgramButton";

export default function NeedHelpSection() {
  return (
    <div style={{ margin: "2%" }}>
      <div
        style={{
          width: "100%",
          backgroundColor: "transparent",
          textAlign: "left",
          // padding: "1%"
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <b>Need some help?</b>
        <GameIdeaGeneratorButton />
        <AppIdeaGeneratorButton />
        <JoinProgramButton />
      </div>
    </div>
  );
}
