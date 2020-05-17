import React from "react";
import ReactDom from "react-dom";

import style from "./MentorSignup.module.css";
import buttonStyle from "../../../../components/common/Button/Button.module.css";

import PageBody from "../../../../components/common/PageBody";
import Button from "../../../../components/common/Button";

export default function MentorSignup() {
  return (
    <div>
      <PageBody>
        <br />
        <h1 id="title">BECOME A MENTOR</h1>
        <div className="page-description">
          <p>
            We love what we do. You should too! Your time is valuable, do
            something you love. Dev Launchers is built for people just like you,
            take a look around and join us!
          </p>
        </div>
        <div className={style.contentArea}>
          <div className={style.ctaWrapper}>
            <div className={style.ctaForm}>
              <form action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdO4dFZwe-WXm88v4yzVusFeY6m1OkVN9lpcVs4p-nt2Z9zLA/formResponse">
                <label className="name">
                  Your name (First and Last)
                  <input
                    className={style.nameInput}
                    name="entry.740968070"
                    type="text"
                    required
                  />
                </label>

                <label>
                  What is your email?
                  <input
                    className={style.emailInput}
                    name="entry.888140061"
                    type="email"
                    required
                  />
                </label>

                <label for="mentorForm">
                  Briefly describe your experience.
                </label>
                <textarea
                  id="mentorForm"
                  rows="5"
                  className={style.experienceText}
                  name="entry.1084968775"
                  required
                />
                <br />
                <input className={style.submit} type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </PageBody>
    </div>
  );
}
