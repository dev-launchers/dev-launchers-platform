import React from "react";
import ReactDOM from "react-dom";

import style from "./HomePartners.module.css";

export default class HomePartners extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return (
      <div className={style.HomePartners}>
        <h1>Our Partners</h1>
        We partner with organizations doing outreach to bring in a diverse range
        of students, and for-profit partners so Dev Launchers can grow and
        continue to do what we love!
        <div className={style.PartnerList}>
          <div className={style.PartnerEntry}>Austin Public Library</div>
          <div className={style.PartnerEntry}>CodeSandbox</div>
          <div className={style.PartnerEntry}>Phaser 3</div>
        </div>
        <div />
        <div />
      </div>
    );
  }
}
