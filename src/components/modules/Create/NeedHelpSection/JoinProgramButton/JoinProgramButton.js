import React from "react";
import { Wrapper } from "./StyledJoinProgramButton";

export default function JoinProgramButton(props) {
  return (
    <Wrapper>
      <div
        style={{ width: "100%", height: "100%" }}
        onClick={() => {
          window.location = "/members";
        }}
      >
        ❤️ Join Our Program!
      </div>
    </Wrapper>
  );
}
