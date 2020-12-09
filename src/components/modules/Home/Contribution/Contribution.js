import React from "react";
import { Link } from "react-router-dom";

import style from "./Contribution.module.css";

import Button from "../../../common/Button";

export default function Contribution() {
  return (
    <div className={style.Contribution}>
      <h1 style={{ textAlign: "center" }}>CONTRIBUTE TO OUR PROJECTS</h1>
      <div className={style.CtaSection}>
        <div className={style.CtaSection_Content}>
          <div className={style.CtaSection_Description}>
            Everything, from our platform to our curriculum to the projects we
            develop, is released to the open source community. We rely on
            contributors to grow our platform and continue serving our students!
          </div>
          <div className={style.CtaSection_ButtonArea}>
            <Button
              className={style.CtaSection_Button}
              style={{ fontSize: "2rem" }}
              href="https://github.com/dev-launchers"
            >
              Find us on GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
