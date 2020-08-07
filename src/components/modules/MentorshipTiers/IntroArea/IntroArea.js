import React from "react";
import Button from "../../../common/Button";

import style from "./IntroArea.module.css";

export default function IntroArea() {
  return (
    <div style={{ width: "100%" }}>
      <div
        className="headerDark"
        style={{
          backgroundColor: "#333333",
          color: "white",
          marginTop: "0%",
          padding: "5%"
        }}
      >
        <h1 id="title">The Community</h1>
        <div className="page-description">
          Dev Launchers members become an integral part of our community full of
          developers and creators. Our programs, which provide content and
          experience{" "}
          <u>
            on par with programs and classes that could otherwise cost hundreds
            to thousands of dollars
          </u>
          , are <b>offered for free</b> by leveraging the expertise of our
          members!
          <br />
          <br />
          We're here help you reach your goals.
          <Button style={{ fontSize: ".75rem" }}>JOIN NOW</Button>
          <br />
        </div>
      </div>
      <div
        className="headerLight"
        style={{
          padding: "5%",
          paddingTop: "1%",
          textAlign: "center"
        }}
      >
        <h3>A Space For Everyone</h3>
        <br />
        Check below to see where you fit in at Dev Launchers!
      </div>
    </div>
  );
}
