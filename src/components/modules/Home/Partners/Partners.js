import React from "react";

import style from "./Partners.module.css";

import aespriteImage from "../../../../images/home-page/aseprite.png";
import kraftiesImage from "../../../../images/home-page/krafties.png";

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
        <div className={style.PartnerEntryImage}>
          <a href="https://www.aseprite.org/">
            <img className={style.PartnerEntryImage} src={aespriteImage} />
          </a>
        </div>
        {/* Leaving a slash after a tag/component means that you don't need a corresponding closing tag*/}
        <div className={style.PartnerEntryImage}>
          <a href="http://krafties.com/">
            <img className={style.PartnerEntryImage} src={kraftiesImage} />
          </a>
        </div>
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
