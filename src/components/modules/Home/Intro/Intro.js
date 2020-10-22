import React from "react";

import style from "./Intro.module.css";

export default function Intro() {
  return (
    <div className={style.Intro}>
      <h1>Create your own apps and games!</h1>
      No matter who you are, or where you are in your tech career, Dev Launchers
      will propel you to the next level!
      <ul>
        <li>
          People new to technology learn with hands on instruction from tech
          experts
        </li>
        <li>
          Tech professionals gain skills managing teams, leading projects, and
          contributing to a powerful platform built to solve a{" "}
          <b>serious problem</b>
        </li>
      </ul>
    </div>
  );
}
