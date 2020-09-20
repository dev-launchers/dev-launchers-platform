import React from "react";
import Button from "../../../common/Button";

import MemberProfilesSlideshow from "./MemberProfilesSlideshow";

import style from "./IntroArea.module.css";

export default function IntroArea(props) {
  return (
    <div style={{ width: "100%" }}>
      <div className={style.headerDark}>
        <h1 id="title">Development Labs</h1>
        <div className={style.pageDescription}>
          Dev Launchers members become an integral part of our community full of
          developers and creators. Our programs, which provide content and
          experience on par with programs and classes that could otherwise cost{" "}
          <u>hundreds to thousands of dollars</u>, are offered for <b>FREE</b>{" "}
          by leveraging the expertise of our members!
          <br />
          <br />
          We're here help you reach your goals.
          <br />
          <Button
            onClick={props.scrollToFormFunc}
            style={{
              fontSize: "2.5rem",
              marginTop: "2%",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem"
            }}
          >
            APPLY NOW!
          </Button>
          <br />
        </div>
      </div>
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

        <h3>A Space For Everyone</h3>
        <b>Check below to see where you fit in at Dev Launchers!</b>
        <MemberProfilesSlideshow />

        <hr />
      </div>
    </div>
  );
}
