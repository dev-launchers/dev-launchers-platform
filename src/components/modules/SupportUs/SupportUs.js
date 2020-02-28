import React from "react";
import "react-tabs/style/react-tabs.css"; // import react-tabs styles

import PageBody from "../../../components/common/PageBody";
import Button from "../../../components/common/Button";
import Section from "../../../components/common/Section/Section";

export default function SupportUs() {
  return (
    <div>
      <PageBody>
        <br />
        <h1>
          SUPPORT US<span style={{ fontSize: "1rem" }}> (please!)</span>
        </h1>
        Dev Launchers is a nonprofit intent on empowering young creatives,
        innovators, and leaders. We're working on touching as many lives as we
        possibly can, and need your help to make that happen. Any amount helps!
        <br />
        <br />
        <hr />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              borderRadius: "20px"
            }}
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=E6TSNXLFG3UTY&source=url"
          >
            Donate with PayPal!
          </Button>
        </div>
        <br />
        <br />
      </PageBody>
    </div>
  );
}
