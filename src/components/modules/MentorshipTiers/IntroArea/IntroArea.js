import React from "react";
import Button from "../../../common/Button";

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
          <Button onClick={props.scrollToFormFunc} as="button" intro>
            APPLY NOW!
          </Button>
          <br />
        </div>
      </div>
    </div>
  );
}
