import React from "react";
import ReactDOM from "react-dom";

import style from "./Partners.module.css";

export default function Partners() {
  return (
    <div className={style.Partners}>
      <h1>Extended Family</h1>
      We partner with organizations doing outreach to bring in a diverse range
      of students, and for-profit partners so Dev Launchers can grow and
      continue to do what we love!
      <h3>Partners</h3>
      <div className={style.PartnerList}>
        <div className={style.PartnerEntry}>Austin Public Library</div>
      </div>
      <h3>Sponsors</h3>
      <div className={style.PartnerList}>
        <div className={style.PartnerEntry}>Aesprite</div>
        <div className={style.PartnerEntry}>Krafties</div>
      </div>
      <h3>Products and Tools</h3>
      <div className={style.PartnerList}>
        <div className={style.PartnerEntry}>CodeSandbox</div>
        <div className={style.PartnerEntry}>PixilArt</div>
        <div className={style.PartnerEntry}>Phaser 3</div>
        <div className={style.PartnerEntry}>React</div>
      </div>
      <div />
      <div />
    </div>
  );
}
