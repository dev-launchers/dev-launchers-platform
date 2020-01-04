import React from "react";
import ReactDOM from "react-dom";

import style from "./LandingPartners.module.css";

export default class LandingPartners extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return (
      <div className={style.landingBody}>
        <h1>Our Partners</h1>
        We partner with organizations doing outreach to bring in a diverse range
        of students, and for-profit partners so Dev Launchers can grow and
        continue to do what we love!
        <div className={style.partnerList}>
          <div className={style.partnerEntry}>Austin Public Library</div>
          <div className={style.partnerEntry}>CodeSandbox</div>
          <div className={style.partnerEntry}>Phaser 3</div>
        </div>
        <div />
        <div />
      </div>
    );
  }
}
