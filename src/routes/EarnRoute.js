import React from "react";
import ReactDOM from "react-dom";

//import style from "./LandingRoute.module.css";

import Header from "../components/modules/Header";
import PageBody from "../components/common/PageBody";
import Footer from "../components/modules/Footer";

// Get content data
let rewards = require('../content/collections/rewards.json').data;

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
          <h3>For students who join the Dev Launchers <b>Ignition Program</b>:</h3>
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
          Progress through our Ignition Program and earn points you can put toward prizes
          <br />
          <ul>
            {rewards.prizes.map((entry, i) => {
              return (<li><b>{entry.cost} Points:</b> {entry.description}</li>)
            })}
          </ul>
          <br />
          <hr />
          <h2>Earn points</h2>
          {/*
          <table
            style={{
              width: "90%",
              boxShadow:
                "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
              marginLeft: "auto",
              marginRight: "auto",
              borderCollapse: "collapse"
            }}
          >
            <tbody>
              <tr style={{ fontWeight: "bold", fontFamily: "Holtwood One SC" }}>
                <td>For Everyone</td>
              </tr>
              {
                // Group items into categories based on their 'category' attribute
                //let categories = rewards.tasks.reduce((categoryMemo, entry) => {
                  //let category = entry.category;
                  //if (!categoryMemo[category]) categoryMemo[category] = [];
                  //categoryMemo[category].push({description, value});
                  //return categoryMemo;
                //}, {});
                rewards.tasks.reduce((memo, val) => {});
                console.log('cats', categories)



                rewards.tasks.map((entry, i) => {
                return (
                  <tr style={{ borderTop: "1px solid lightgrey"}}>
                    <td>{entry.description}</td>
                    <td style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}>+{entry.value} Points</td>
                  </tr>)
                })

              }

            </tbody>

          </table>
          */}


          {
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
                <td>&#8195;Complete a task from your project board</td>
                <td
                  style={{ fontFamily: "Holtwood One SC", fontSize: ".8rem" }}
                >
                  +1, 2, 4, 8, 16, etc. (based on story points)
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
          }
        <br />
        <br />
        </PageBody>
        <Footer />
      </div>
    );
  }
}
