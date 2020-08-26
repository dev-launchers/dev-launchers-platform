import React from "react";
import Button from "../../../common/Button";

import MemberProfilesSlideshow from "./MemberProfilesSlideshow";

import style from "./IntroArea.module.css";

export default function IntroArea(props) {
  return (
    <div style={{ width: "100%" }}>
      <div className={style.headerDark}>
        <h1 id="title">The Community</h1>
        <div className={style.pageDescription}>
          Dev Launchers members become an integral part of our community full of
          developers and creators. Our programs, which provide content and
          experience on par with programs and classes that could otherwise cost{" "}
          <u>hundreds to thousands of dollars</u>, are <u>offered for free</u>{" "}
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
        <h3>A Space For Everyone</h3>
        <b>Check below to see where you fit in at Dev Launchers!</b>
        <MemberProfilesSlideshow />
      </div>
    </div>
  );
}
