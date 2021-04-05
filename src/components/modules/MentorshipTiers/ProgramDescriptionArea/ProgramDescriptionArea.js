import React from "react";

import style from "./ProgramDescriptionArea.module.css";

export default function ProgramDescriptionArea(props) {
  return (
    <div style={{ width: "100%" }}>
      <div className={style.headerLight}>
        <div className={style.descriptionArea}>
          <h3>How It Works</h3>
          <b>Our Labs happen on Saturdays</b>, and give participants access to
          valuable help from members with more development experience. This is{" "}
          <b>100% FREE</b>, and all we ask is that you spend time helping others
          through Dev Launchers.
          <div className={style.descriptionTimeslotArea}>
            <div className={style.descriptionTimeslotBox}>
              <b>Beginner Lab</b>
              <br />
              <i>Saturdays, 1:30-3:00pm CDT</i>
              <br />
              <br />
              If you're <b>learning coding fundamentals</b>, have recently
              started your first project, or are looking to help those who are,
              this is for you!
            </div>
            <div className={style.descriptionTimeslotBox}>
              <b>Advanced Lab</b>
              <br />
              <i>Saturdays, 12:00-1:30pm CDT</i>
              <br />
              <br />
              If you're working on an <b>intermediate to advanced project</b>,
              or are looking to provide guidance for one, this is for you!
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
