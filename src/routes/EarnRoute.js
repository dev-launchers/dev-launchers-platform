import React from "react";
import ReactDOM from "react-dom";

//import style from "./LandingRoute.module.css";

import Header from "/src/components/modules/Header";
import PageBody from "/src/components/common/PageBody";
import Footer from "/src/components/modules/Footer";

export default class EarnRoute extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <PageBody>
          <br />
          <h1>Work Hard, Play Hard</h1>
          <h3>For students who join the Dev Launchers Ignition Program:</h3>
          <ul>
            <li>Create games and apps, earn rewards</li>
            <li>Help other members, receive bonus points</li>
            <li>Become a developer, get paid</li>
          </ul>
          <hr />
          <h2>Earn points</h2>
          <table
            style={{
              width: "90%",
              boxShadow:
                "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <tr style={{ fontWeight: "bold", fontFamily: "Holtwood One SC" }}>
              For Everyone
            </tr>
            <hr />
            <tr style={{ fontSize: ".9rem" }}>Perserverence</tr>
            <tr>
              <td>&#8195;Attend a lab session</td>
              <td style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}>
                +5 points
              </td>
            </tr>
            <tr>
              <td>
                &#8195;&#8195;&#8195; + Fill out session sign up form at least
                24 hours before session
              </td>
              <td style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}>
                +10 points
              </td>
            </tr>
            <tr>
              <td>&#8195;Attend 3 sessions in a row</td>
              <td style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}>
                +20 points
              </td>
            </tr>
            <hr />
            <tr style={{ fontSize: ".9rem" }}>Communication</tr>
            <tr>
              <td>
                &#8195;Send a (meaningful) message on Slack at least once during
                the week
              </td>
              <td style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}>
                +1 points
              </td>
            </tr>
            <tr>
              <td>
                &#8195;Send at least 10 (meaningful) Slack messages during the
                week
              </td>
              <td style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}>
                +15 points
              </td>
            </tr>
            <tr>
              <td>
                &#8195;Help another member during a lab session(record this on
                Slack!)
              </td>
              <td style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}>
                +2 points
              </td>
            </tr>
            <hr />
            <tr style={{ fontSize: ".9rem" }}>Goal Oriented</tr>
            <tr>
              <td>&#8195;Create a project board</td>
              <td style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}>
                +10 points
              </td>
            </tr>
            <tr>
              <td>&#8195;Finish your MVP</td>
              <td style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}>
                +100 points
              </td>
            </tr>
            <hr />
            <tr style={{ fontWeight: "bold", fontFamily: "Holtwood One SC" }}>
              For Coders
            </tr>
            <hr />
            <tr style={{ fontWeight: "bold", fontFamily: "Holtwood One SC" }}>
              For Digital Designers
            </tr>
            <tr />
            <tr
              style={{
                textAlign: "left",
                color: "red",
                fontSize: "1rem",
                fontWeight: "bold"
              }}
            >
              <td>* Points are calculated on Saturdays before lab sessions</td>
            </tr>
          </table>
          <div
            style={{
              textAlign: "left",
              color: "red",
              fontSize: "1rem",
              fontWeight: "bold"
            }}
          />
          <hr />
          <h2>Spend points</h2>
          Tell me, <b>what do you want?</b>
          <br />
          <br />
          Points == $?
          <br />
          <br />
          <br />
        </PageBody>
        <Footer />
      </div>
    );
  }
}
