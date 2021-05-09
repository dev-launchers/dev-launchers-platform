import React from "react";

import PageBody from "../../../components/common/PageBody";
import Button from "../../../components/common/Button";

import studentPhoto from "../../../images/support-us/people-inside-room-3184468.jpg";
import {
  ContentArea,
  StudentImageWrapper,
  StudentImage,
  CtaWrapper,
  CtaText,
  CtaButtonWrapper,
  StatusNote
} from "./StyledSupportUs";

export default function SupportUs() {
  return (
    <div>
      <PageBody width="85%">
        <br />
        <h1>
          SUPPORT US<span style={{ fontSize: "1rem" }}> (we love you)</span>
        </h1>
        <ContentArea>
          <StudentImageWrapper>
            <StudentImage src={studentPhoto} />
          </StudentImageWrapper>
          <CtaWrapper>
            <CtaText>
              Dev Launchers is a 501(c)(3) nonprofit intent on empowering
              diverse young creatives, innovators, and leaders. We're working on
              touching as many lives as we possibly can, and need your help to
              make that happen. Any amount helps!
            </CtaText>
            <CtaButtonWrapper>
              <Button
                borderRadius="20px"
                href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=E6TSNXLFG3UTY&source=url"
              >
                Donate with PayPal!
              </Button>
            </CtaButtonWrapper>
            <StatusNote>
              Dev Launchers is a Texas 501(c)(3) nonprofit corporation.
            </StatusNote>
          </CtaWrapper>
        </ContentArea>
      </PageBody>
    </div>
  );
}
