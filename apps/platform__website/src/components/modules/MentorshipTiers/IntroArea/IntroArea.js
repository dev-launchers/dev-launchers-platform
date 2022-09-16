import React from "react";
import Button from "../../../common/Button";

import { HeaderDark } from "./StyledIntroArea";

export default function IntroArea(props) {
  return (
    <div style={{ width: "100%" }}>
      <HeaderDark>
        <h1>Development Labs</h1>
        <div>
          Dev Launchers members become an integral part of our community full of
          developers and creators. Our programs, which provide content and
          experience on par with programs and classes that could otherwise cost{" "}
          <u>hundreds to thousands of dollars</u>, are offered for <b>FREE</b>{" "}
          by leveraging the expertise of our members!
          <br />
          <br />
          We&apos;re here help you reach your goals.
          <br />
          <Button onClick={props.scrollToFormFunc} as="button" intro>
            APPLY NOW!
          </Button>
          <br />
        </div>
      </HeaderDark>
    </div>
  );
}
