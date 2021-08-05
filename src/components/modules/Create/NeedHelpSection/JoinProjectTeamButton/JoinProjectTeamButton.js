import React from "react";
import { Wrapper } from "./StyledJoinProjectTeamButton";

export default function JoinProjectTeamButton() {
  return (
    <Wrapper>
      <div
        style={{ width: "100%", height: "100%" }}
        onClick={() => {
          window.location = "/projects";
        }}
      >
        ❤️ Join A Project Team!
      </div>
    </Wrapper>
  );
}
