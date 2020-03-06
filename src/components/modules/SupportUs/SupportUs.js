import React from "react";
import "react-tabs/style/react-tabs.css"; // import react-tabs styles

import style from "./SupportUs.module.css";

import PageBody from "../../../components/common/PageBody";
import Button from "../../../components/common/Button";
import Section from "../../../components/common/Section/Section";

import studentPhoto from "../../../images/support-us/people-inside-room-3184468.jpg";

export default function SupportUs() {
  return (
    <div>
      <PageBody>
        <br />
        <h1>
          SUPPORT US<span style={{ fontSize: "1rem" }}> (we love you)</span>
        </h1>
        <div className={style.contentArea}>
          <div className={style.studentImageWrapper}>
            <img className={style.studentImage} src={studentPhoto} />
          </div>
          <div className={style.ctaWrapper}>
            <div className={style.ctaText}>
              Dev Launchers is a nonprofit intent on empowering diverse young
              creatives, innovators, and leaders. We're working on touching as
              many lives as we possibly can, and need your help to make that
              happen. Any amount helps!
            </div>
            <div className={style.ctaButtonWrapper}>
              <Button
                style={{ borderRadius: "20px" }}
                href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=E6TSNXLFG3UTY&source=url"
              >
                Donate with PayPal!
              </Button>
            </div>
          </div>
        </div>
      </PageBody>
    </div>
  );
}
