import React from "react";
import ReactDOM from "react-dom";

//import style from "./LandingRoute.module.css";

import Header from "../components/modules/Header";
import PageBody from "../components/common/PageBody";
import Footer from "../components/modules/Footer";

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
          <span style={{color:"red", fontWeight:"bold", fontSize:".9rem"}}>
            * This page is under construction, and the point values and rewards listed are NOT final!
            Point to reward ratios will be adjusted, and new ways to earn points are being added
          </span>

          <hr />
          <h2>Spend points</h2>
          Tell me, <b>what do you want?</b>
          <br />
          <ul>
            <li><b>50 Points</b>: A custom domain of your choosing linked to your own web app or portfolio</li>
            <li><b>200 Points</b>: $100 Giftcard From:</li>
            <ul>
              <li>Best Buy</li>
              <li>Apple Store</li>
              <li>Google Play</li>
              <li>PlayStation Network</li>
              <li>Xbox</li>
            </ul>
          </ul>
          <br />
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
            <tbody>
              <tr style={{ fontWeight: "bold", fontFamily: "Holtwood One SC" }}>
                <td>For Everyone</td>
              </tr>
              <tr style={{ fontSize: ".9rem" }}>
                <td>Perserverence</td>
              </tr>
              <tr>
                <td>&#8195;Attend a lab session</td>
                <td
                  style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}
                >
                  +5 points
                </td>
              </tr>
              <tr>
                <td>
                  &#8195;&#8195;&#8195; + Fill out session sign up form at least
                  24 hours before session
                </td>
                <td
                  style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}
                >
                  +10 points
                </td>
              </tr>
              <tr>
                <td>&#8195;Attend 3 sessions in a row</td>
                <td
                  style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}
                >
                  +20 points
                </td>
              </tr>

              <tr style={{ fontSize: ".9rem" }}>
                <td>Communication</td>
              </tr>
              <tr>
                <td>
                  &#8195;Send a (meaningful) message on Slack at least once
                  during the week
                </td>
                <td
                  style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}
                >
                  +1 points
                </td>
              </tr>
              <tr>
                <td>
                  &#8195;Send at least 10 (meaningful) Slack messages during the
                  week
                </td>
                <td
                  style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}
                >
                  +15 points
                </td>
              </tr>
              <tr>
                <td>
                  &#8195;Help another member during a lab session(record this on
                  Slack!)
                </td>
                <td
                  style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}
                >
                  +2 points
                </td>
              </tr>

              <tr style={{ fontSize: ".9rem" }}>
                <td>Goal Oriented</td>
              </tr>
              <tr>
                <td>&#8195;Create a project board</td>
                <td
                  style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}
                >
                  +10 points
                </td>
              </tr>
              <tr>
                <td>&#8195;Finish your MVP</td>
                <td
                  style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}
                >
                  +100 points
                </td>
              </tr>

              <tr style={{ fontSize: ".9rem" }}>
                <td>Marketing</td>
              </tr>
              <tr>
                <td>&#8195;Create a social media post about your project, and tag Dev Launchers!</td>
                <td
                  style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}
                >
                  +10 points
                </td>
              </tr>
              <tr>
                <td>&#8195;Refer someone to the Ignition Program!</td>
                <td
                  style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}
                >
                  +50 points
                </td>
              </tr>

              <tr style={{ fontWeight: "bold", fontFamily: "Holtwood One SC" }}>
                For Coders
              </tr>
              <tr style={{ fontWeight: "bold", fontFamily: "Holtwood One SC" }}>
                <td>For Digital Designers</td>
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
                <td>
                  * Points are calculated on Saturdays before lab sessions
                </td>
              </tr>
            </tbody>
          </table>
          <div
            style={{
              textAlign: "left",
              color: "red",
              fontSize: "1rem",
              fontWeight: "bold"
            }}
          />
        <br />
        <br />
        </PageBody>
        <Footer />
      </div>
    );
  }
}
