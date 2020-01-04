import React from "react";
import ReactDOM from "react-dom";

import style from "./LandingIntro.module.css";

export default class LandingIntro extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return (
      <div className={style.landingBody}>
        <h1>Create your own apps and games!</h1>
        No matter who you are, or where you are in your tech career, Dev
        Launchers will propel you to the next level!
        <ul>
          <li>
            Students new to technology learn with hands on instruction from tech
            experts
          </li>
          <li>
            Adults seeking experience are given opportunities to work alongside
            tech mentors
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
}
