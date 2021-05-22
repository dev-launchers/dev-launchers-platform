import React from "react";
import FlexPageSection from "../../../../components/common/FlexPageSection";

import {
  ContentArea,
  CtaWrapper,
  EmailInput,
  ExperienceText,
  NameInput,
  Submit
} from "./StyledMentorSignup";

export default function MentorSignup() {
  return (
    <FlexPageSection>
      <br />
      <h1 id="title">BECOME A MENTOR</h1>
      <div className="page-description">
        <p>
          We love what we do. You should too! Your time is valuable, do
          something you love. Dev Launchers is built for people just like you,
          take a look around and join us!
        </p>
      </div>
      <ContentArea>
        <CtaWrapper>
          <div>
            <form action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdO4dFZwe-WXm88v4yzVusFeY6m1OkVN9lpcVs4p-nt2Z9zLA/formResponse">
              <label className="name">
                Your name (First and Last)
                <NameInput name="entry.740968070" type="text" required />
              </label>

              <label>
                What is your email?
                <EmailInput name="entry.888140061" type="email" required />
              </label>

              <label for="mentorForm">Briefly describe your experience.</label>
              <ExperienceText
                id="mentorForm"
                rows="5"
                name="entry.1084968775"
                required
              />
              <br />
              <Submit />
            </form>
          </div>
        </CtaWrapper>
      </ContentArea>
    </FlexPageSection>
  );
}
