import React from "react";
import style from "./JoinProgramButton.module.css";

export default function JoinProgramButton(props) {
  return (
    <div className={style.joinProgramButton}>
      <div
        style={{ width: "100%", height: "100%" }}
        onClick={() => {
          window.location = "/members";
        }}
      >
        ❤️ Join Our Program!
      </div>
    </div>
  );
}
